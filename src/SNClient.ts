import axios, { AxiosResponse } from 'axios';
import striptags from 'striptags';
import { SNC } from './common';
import { NO_NAMESPACE } from './TSGenerator';
import {
  incorrectTypesMap,
  typeConversionMap,
  nonDependencyTypes,
  disallowedParamNames,
  optionalParamExceptions,
  staticMethods,
} from './SNClientConfigObjs';
let cookie = process.env.COOKIE;
let userToken = process.env.USER_TOKEN;
let client = axios.create({
  headers: {
    Cookie: cookie,
    'X-UserToken': userToken,
  },
  baseURL: 'https://developer.servicenow.com',
});

const CLIENT_API = 'client';
const LEGACY_API = 'server_legacy';
const MS_BETWEEN_REQUESTS = 500;

async function getRootConfig(opts: SNC.HierarchyOpts) {
  const { release, api } = opts;
  try {
    let res: AxiosResponse<SNC.SNResponse<SNC.DocsBase>> = await client.get(
      '/devportal.do',
      {
        params: {
          sysparm_data: JSON.stringify({
            action: 'api.docs',
            data: {
              id: api,
              release,
            },
          }),
        },
      },
    );
    return res.data.result.data;
  } catch (e) {
    throw e;
  }
}

async function getClassInfo(classArgs: { release: string; id: string }) {
  let { release, id } = classArgs;
  try {
    let res: AxiosResponse<SNC.SNResponse<SNC.DocsObj>> = await client.get(
      '/devportal.do',
      {
        params: {
          sysparm_data: JSON.stringify({
            action: 'api.docs',
            data: {
              id,
              release,
            },
          }),
        },
      },
    );
    return res.data.result.data.class_data;
  } catch (e) {
    throw e;
  }
}

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, MS_BETWEEN_REQUESTS);
  });
}

export async function getAPIHierarchy(opts: SNC.HierarchyOpts) {
  let hierarchy: SNC.SNApiHierarchy = {};
  let root = await getRootConfig(opts);
  let { navbar } = root;
  let namespacePromises: {
    [namespace: string]: Promise<{ classes: SNC.SNClass[] }>;
  } = {};
  let navbarItems: SNC.NavbarItem[] = [];
  try {
    if (isClient(opts)) {
      let clientNavbar = navbar as SNC.ClientNavBar;
      hierarchy = await processClientNavBar({ ...opts, navbar: clientNavbar });
    } else if (isLegacy(opts)) {
      let legacyNavbar = navbar as SNC.LegacyNavBar;
      hierarchy[NO_NAMESPACE] = await processLegacyNavbar({
        ...opts,
        navbar: legacyNavbar,
      });
    } else {
      for (let namespace of navbar as SNC.NavbarItem[]) {
        namespacePromises[getNamespaceName(namespace)] = processNamespace({
          ...opts,
          namespace,
        });
        await wait();
      }
      await Promise.all(Object.values(namespacePromises));
      for (let nameSpaceName in namespacePromises) {
        hierarchy[nameSpaceName] = await namespacePromises[nameSpaceName];
      }
    }
    return hierarchy;
  } catch (e) {
    console.error(navbarItems);
    throw e;
  }
}

function isClient(opts: SNC.HierarchyOpts) {
  return opts.api === CLIENT_API;
}

function isLegacy(opts: SNC.HierarchyOpts) {
  return opts.api === LEGACY_API;
}

async function processLegacyNavbar(opts: SNC.LegacyNavBarOpts) {
  let { navbar, release } = opts;
  let classPromises: Promise<SNC.ClassData>[] = [];
  for (let _class of navbar) {
    classPromises.push(
      getClassInfo({ release, id: _class.dc_identifier || '' }),
    );
    await wait();
  }
  let classResults = await Promise.all(classPromises);
  let classes = classResults.map((_class) => {
    return processClass({
      ...opts,
      _class,
      namespace: {
        dc_identifier: '',
        items: [],
        name: NO_NAMESPACE,
        type: 'Namespace',
      },
    });
  });
  return { classes };
}

async function processClientNavBar(opts: SNC.ClientNavBarOpts) {
  let hierarchy: SNC.SNApiHierarchy = {};
  let { navbar, release } = opts;
  let clientSpace = navbar.client as SNC.ClassData[];
  let classPromises: Promise<SNC.ClassData>[] = [];
  for (let _class of clientSpace) {
    classPromises.push(
      getClassInfo({ release, id: _class.dc_identifier || '' }),
    );
    await wait();
  }
  let classResults = await Promise.all(classPromises);
  let classes = classResults.map((_class) => {
    return processClass({
      ...opts,
      _class,
      namespace: {
        dc_identifier: '',
        items: [],
        name: NO_NAMESPACE,
        type: 'Namespace',
      },
    });
  });
  hierarchy[NO_NAMESPACE] = {
    classes,
  };

  return hierarchy;
}

function getNamespaceName(namespace: SNC.NavbarItem) {
  return namespace.name.split('-')[0].trim();
}

async function processNamespace(opts: SNC.NSOpts): Promise<SNC.SNApiNamespace> {
  const { namespace, release } = opts;
  let classes: SNC.SNClass[] = [];
  let classPromises = [];
  for (let item of namespace.items) {
    classPromises.push(getClassInfo({ release, id: item.dc_identifier || '' }));
  }
  let classResults = await Promise.all(classPromises);
  classes = classResults.map((_class) => {
    return processClass({ ...opts, _class });
  });
  return { classes };
}

function processClass(opts: SNC.ProcessClassOpts) {
  let { _class } = opts;
  let methods = getMethods(opts);
  let properties = getProperties(_class);
  let dependencies = getDependencies({ ...opts, methods, _class, properties });
  let classObj: SNC.SNClass = {
    name: _class.name.split(' ')[0],
    methods,
    dependencies,
    properties,
  };
  return classObj;
}

function getMethods(opts: SNC.ProcessClassOpts) {
  let { _class } = opts;
  let methods: { [name: string]: SNC.SNClassMethod } = {};
  let statics = staticMethods[_class.name];
  if (_class.children) {
    let methodList = _class.children.filter(
      (child) => child.type === 'Method' || child.type === 'Constructor',
    );
    for (let curMethod of methodList) {
      let methodName = getMethodName(curMethod);
      if (methodName.indexOf('.') > -1) {
        continue;
      }
      let isStatic = false;
      if (statics && statics.indexOf(methodName) !== -1) {
        isStatic = true;
      }
      if (!methods.hasOwnProperty(methodName)) {
        let method: SNC.SNClassMethod = {
          description: striptags(curMethod.text) || '',
          static: isStatic,
          instances: [],
        };
        methods[methodName] = method;
      }
      methods[methodName].instances.push(
        processMethod({ ...opts, method: curMethod }),
      );
    }
  }
  return methods;
}

function getProperties(c: SNC.ClassData): SNC.Property[] {
  if (c.children) {
    return c.children
      .filter((child) => child.type === 'Property')
      .map((prop) => {
        return {
          name: prop.name,
          type: determinePropertyType(prop),
        };
      });
  }
  return [];
}

function determinePropertyType(prop: SNC.ClassChild) {
  if (prop.children) {
    return parseType(
      prop.children.filter((child) => child.type === 'Parameter')[0].text,
    );
  }
  return '';
}

function getMethodName(method: SNC.ClassChild) {
  if (method.type === 'Constructor') {
    return 'constructor';
  }
  return sanitizeMethodName(method.name);
}

function containsOptional(texts: string[]) {
  for (let text of texts) {
    if (text.toLowerCase().includes('optional')) {
      return true;
    }
  }
  return false;
}

function isOptionalParam(
  opts: SNC.ProcessMethodOpts,
  param: SNC.MethodDescriptor,
  textChecks: string[],
) {
  let { api, method, _class } = opts;
  let curExceptions = optionalParamExceptions.get(api);
  if (curExceptions) {
    let methodName = getMethodName(method);
    let query = `${_class.name}->${methodName}->${sanitizeParamName(
      param.name,
    )}`;
    if (curExceptions.has(query)) {
      return true;
    }
  }
  return containsOptional(textChecks);
}

function processMethod(opts: SNC.ProcessMethodOpts): SNC.SNMethodInstance {
  let { method } = opts;
  let params: SNC.SNMethodParam[] = [];
  let returns = undefined;
  if (method.children) {
    for (let child of method.children) {
      if (child.type === 'Parameter') {
        //some methods have child data types in their params...
        //this check removes them so we can manually update those for now
        if (child.name.includes('.')) {
          continue;
        }
        let strippedText2 = striptags(child.text2 || '');
        let optional = isOptionalParam(opts, child, [
          child.name,
          strippedText2,
        ]);
        params.push({
          name: sanitizeParamName(child.name),
          type: parseType(child.text),
          description: strippedText2,
          optional,
        });
      }
      if (child.type === 'Return') {
        let stripped = striptags(child.name, ['<String>', '<GlideHTTPHeader>']);
        returns = parseType(stripped);
      }
    }
  }
  return {
    params,
    returns,
  };
}

function getDependencies(opts: SNC.GetDependenciesOpts) {
  let { methods, _class, properties } = opts;
  let depSet = new Set<string>();
  let dependencies: SNC.SNClassDependency[] = [];
  for (let methodName in methods) {
    let method = methods[methodName];
    for (let instance of method.instances) {
      for (let p of instance.params) {
        if (validDep(p.type)) {
          depSet.add(p.type);
        }
      }
      if (instance.returns) {
        if (validDep(instance.returns)) {
          depSet.add(instance.returns);
        }
      }
    }
  }
  for (let prop of properties) {
    if (validDep(prop.type)) {
      depSet.add(prop.type);
    }
  }
  depSet.forEach((cur) => {
    dependencies.push({ name: cur });
  });
  return dependencies;
  function validDep(type: string) {
    let normalized = type.toLowerCase();
    //not using this right now, but I think we will need it later (circular dependencies)
    //let typeIsSamAsClass = normalized !== _class.name.split(" ")[0].toLowerCase();
    if (!nonDependencyTypes.has(normalized)) {
      return true;
    }
    return false;
  }
}

function parseType(inputType: string) {
  //remove HTML from some types
  let stripped = striptags(inputType);
  //take first word because sometimes there's more words. Not the best solution I know...
  let firstWord = stripped.split(' ')[0];
  let noSymbols = firstWord.replace(/,/, '');
  let normalized = getNormalizedType(noSymbols);
  return normalized;
}

function getNormalizedType(type: string) {
  for (let resType in typeConversionMap) {
    let reg = typeConversionMap[resType];
    if (reg.test(type)) {
      return resType;
    }
  }
  if (type.toLowerCase().indexOf('scoped') === 0) {
    return type.slice('scoped'.length);
  }
  if (incorrectTypesMap.has(type)) {
    return incorrectTypesMap.get(type) as string;
  }
  return type;
}

function sanitizeParamName(name: string) {
  if (disallowedParamNames.has(name)) {
    name = `_${name as string}`;
  }
  let splitName = name.split('(')[0];
  return splitName.replace(/[\s\.]/g, '_');
}

function sanitizeMethodName(name: string) {
  return name.split('(')[0];
}

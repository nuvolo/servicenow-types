import dotenv from "dotenv";
import axios, { AxiosResponse } from "axios";
import striptags from "striptags";
import {
  SNResponse,
  DocsObj,
  SNApiHierarchy,
  NavbarItem,
  SNClass,
  ClassData,
  SNClassMethod,
  ClassMethod,
  SNMethodInstance,
  SNMethodParam,
  SNClassDependency,
  SNApiNamespace,
  SNMethodMap,
  SNC
} from "./common";
dotenv.config();
let cookie = process.env.COOKIE;
let userToken = process.env.USER_TOKEN;
let client = axios.create({
  headers: {
    Cookie: cookie,
    "X-UserToken": userToken
  },
  baseURL: "https://developer.servicenow.com"
});

const CLIENT_API = "client";
const BEWTEEN_REQUESTS_MS = 300;

async function getRootConfig(opts: SNC.HierarchyOpts) {
  const { release, api } = opts;
  try {
    let res: AxiosResponse<SNResponse<SNC.DocsBase>> = await client.get("/devportal.do", {
      params: {
        sysparm_data: JSON.stringify({
          action: "api.docs",
          data: {
            id: api,
            release
          }
        })
      }
    });
    return res.data.result.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getClassInfo(classArgs: { release: string; id: string }) {
  let { release, id } = classArgs;
  let res: AxiosResponse<SNResponse<DocsObj>> = await client.get("/devportal.do", {
    params: {
      sysparm_data: JSON.stringify({
        action: "api.docs",
        data: {
          id,
          release
        }
      })
    }
  });
  return res.data.result.data.class_data;
}

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, BEWTEEN_REQUESTS_MS);
  });
}

export async function getAPIHierarchy(opts: SNC.HierarchyOpts) {
  let hierarchy: SNApiHierarchy = {};
  let root = await getRootConfig(opts);
  let { navbar } = root;
  let namespacePromises: { [namespace: string]: Promise<{ classes: SNClass[] }> } = {};
  let navbarItems: NavbarItem[] = [];
  if (isClient(opts)) {
    navbarItems = (root as SNC.ClientDocs).navbar.client;
  } else {
    navbarItems = navbar;
  }
  try {
    for (let namespace of navbarItems) {
      namespacePromises[getNamespaceName(namespace)] = processNamespace({ ...opts, namespace });
      await wait();
    }
    await Promise.all(Object.values(namespacePromises));
    for (let nameSpaceName in namespacePromises) {
      hierarchy[nameSpaceName] = await namespacePromises[nameSpaceName];
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

function getNamespaceName(namespace: NavbarItem) {
  return namespace.name.split("-")[0].trim();
}

async function processNamespace(opts: SNC.NSOpts): Promise<SNApiNamespace> {
  const { namespace, release } = opts;
  let classes: SNClass[] = [];
  let classPromises = [];
  for (let item of namespace.items) {
    classPromises.push(getClassInfo({ release, id: item.dc_identifier || "" }));
  }
  let classResults = await Promise.all(classPromises);
  for (let classRes of classResults) {
    let methods = getMethods(classRes);
    let dependencies = getDependencies(methods, classRes);
    let classObj: SNClass = {
      name: classRes.name.split(" ")[0],
      methods,
      dependencies
    };
    classes.push(classObj);
  }
  return { classes };
}

function getMethods(c: ClassData) {
  let methods: { [name: string]: SNClassMethod } = {};
  if (c.children) {
    for (let m of c.children) {
      let methodName = getMethodName(m);
      if (!methods.hasOwnProperty(methodName)) {
        let method: SNClassMethod = {
          description: m.text || "",
          instances: []
        };
        methods[methodName] = method;
      }
      methods[methodName].instances.push(processMethod(m));
    }
  }
  return methods;
}

function getMethodName(method: ClassMethod) {
  if (method.type === "Constructor") {
    return "constructor";
  }
  return method.name.split("(")[0];
}

function processMethod(m: ClassMethod): SNMethodInstance {
  let params: SNMethodParam[] = [];
  let returns = undefined;
  if (m.children) {
    for (let child of m.children) {
      if (child.type === "Parameter") {
        params.push({
          name: sanitizeParamName(child.name),
          type: parseType(child.text),
          description: child.text2 || ""
        });
      }
      if (child.type === "Return") {
        returns = parseType(child.name);
      }
    }
  }
  return {
    params,
    returns
  };
}

function getDependencies(methods: SNMethodMap, _class: ClassData) {
  //non-dependency-types
  let ndt = new Set<string>();
  ndt
    .add("string")
    .add("number")
    .add("boolean")
    .add("any")
    .add("any[]")
    .add("void");

  let depSet = new Set<string>();
  let dependencies: SNClassDependency[] = [];
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
  depSet.forEach(cur => {
    dependencies.push({ name: cur });
  });
  return dependencies;
  function validDep(type: string) {
    let normalized = type.toLowerCase();
    //not using this right now, but I think we will need it later (circular dependencies)
    //let typeIsSamAsClass = normalized !== _class.name.split(" ")[0].toLowerCase();
    if (!ndt.has(normalized)) {
      return true;
    }
    return false;
  }
}

function parseType(inputType: string) {
  //remove HTML from some types
  let stripped = striptags(inputType);
  //take first word because sometimes there's more words. Not the best solution I know...
  let firstWord = stripped.split(" ")[0];
  let normalized = getNormalizedType(firstWord);
  return normalized;
}

function getNormalizedType(type: string) {
  let incorrectTypesMap = new Map<string, string>();
  incorrectTypesMap.set("QueryCondition", "GlideQueryCondition");
  incorrectTypesMap.set("SysListControl", "GlideSysListControl");
  incorrectTypesMap.set("RESTResponse", "RESTResponseV2");
  incorrectTypesMap.set("Strings", "string");
  let typeConversionMap: { [type: string]: RegExp } = {
    string: /^string$/i,
    boolean: /^boolean$/i,
    any: /^object|map|mapstring|standardcredential|list|notifyaction|json$/i,
    number: /^number|integer|int$/i,
    "any[]": /^array|arraylist$/i
  };
  for (let resType in typeConversionMap) {
    let reg = typeConversionMap[resType];
    if (reg.test(type)) {
      return resType;
    }
  }
  if (type.toLowerCase().indexOf("scoped") === 0) {
    return type.slice("scoped".length);
  }
  if (incorrectTypesMap.has(type)) {
    return incorrectTypesMap.get(type) as string;
  }
  return type;
}

function sanitizeParamName(name: string) {
  let disallowed = new Set<string>();
  disallowed.add("function");
  if (disallowed.has(name)) {
    name = `_${name as string}`;
  }
  name = name.replace(/[\s\.]/g, "_");
  return name;
}

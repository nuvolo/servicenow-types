import ts from 'typescript';
import path from 'path';
import { promises as fs, default as fss } from 'fs';
import { comment } from './CommentGenerator';
import prettier from 'prettier';
import { SNC, TSG, Mod } from './common';
export const NO_NAMESPACE = 'No namespace qualifier';
const OUTPUT_DIR = '../';
const _ = undefined;
const printer = ts.createPrinter();

export function generateFiles(opts: TSG.Base) {
  let { hierarchy } = opts;
  let moduleMap = getModuleMap(hierarchy);
  Object.keys(hierarchy).map(namespaceName => {
    let namespace = hierarchy[namespaceName];
    return processNamespace({ ...opts, namespaceName, namespace, moduleMap });
  });
  generateIndexFile({ ...opts, moduleMap });
}

async function generateIndexFile(opts: TSG.GenIndexOpts) {
  let fileName = 'index.d.ts';
  let sourceFile = ts.createSourceFile(
    fileName,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );
  let importDecs = await createImportsForIndex(opts);
  let addonStatements = await processAddonsForIndex(opts);
  let exportDecs = await createExportsForIndex(opts);
  sourceFile.statements = ts.createNodeArray(
    importDecs.concat(addonStatements, exportDecs)
  );
  let filePath = path.join(getBasePath(opts), fileName);
  let parentDir = path.dirname(filePath);
  if (!fss.existsSync(parentDir)) {
    fss.mkdirSync(parentDir, { recursive: true });
  }
  await writePrettyFile(filePath, printer.printFile(sourceFile));
}

function getModuleMap(hierarchy: SNC.SNApiHierarchy) {
  let moduleMap = new Map<string, string>();
  for (let namespaceName in hierarchy) {
    let namespace = hierarchy[namespaceName];
    let nsName = namespaceName === NO_NAMESPACE ? '' : namespaceName;
    for (let _class of namespace.classes) {
      moduleMap.set(_class.name, nsName);
    }
  }
  return moduleMap;
}

async function processNamespace(opts: TSG.ProcessNSOpts) {
  let { namespaceName, namespace } = opts;
  for (let _class of namespace.classes) {
    await processClass({ ...opts, _class });
  }
  if (namespaceName !== NO_NAMESPACE) {
    await generateNamespaceFile(opts);
  }
}

async function generateNamespaceFile(opts: TSG.ProcessNSOpts) {
  let { namespaceName } = opts;
  let sourceFile = ts.createSourceFile(
    `${namespaceName}.d.ts`,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );
  let exportDecs = generateExportsForNamespace(opts);
  sourceFile.statements = ts.createNodeArray(exportDecs);
  let fileName = `${namespaceName}.d.ts`;
  let filePath = path.join(getBasePath(opts), fileName);
  let parentDir = path.dirname(filePath);
  if (!fss.existsSync(parentDir)) {
    fss.mkdirSync(parentDir, { recursive: true });
  }
  await writePrettyFile(filePath, printer.printFile(sourceFile));
}

async function processClass(opts: TSG.ProcessClassOpts) {
  //TODO: Make sure to only generate extended class if there is no file already!!
  await Promise.all([generateAPIClass(opts), generateExtendedClass(opts)]);
}
async function generateAPIClass(opts: TSG.ProcessClassOpts) {
  let fileName = generateFileName({ ...opts, apiClass: true });
  let sourceFile = ts.createSourceFile(
    fileName,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );

  const declareKW = ts.createModifier(ts.SyntaxKind.DeclareKeyword);
  let importDecs = getImportsFromDeps({ ...opts, apiClass: false });
  let classMembers = generateClassMembers(opts);
  let prefixedClassName = getPrefixedClassName({ ...opts, apiClass: true });
  let classDec = ts.createClassDeclaration(
    _,
    [declareKW],
    prefixedClassName,
    _,
    _,
    classMembers
  );
  let exportDec = generateExport(prefixedClassName);
  let statements = [...importDecs, classDec, exportDec];
  sourceFile.statements = ts.createNodeArray(statements);
  let filePath = generateTypeFilePath({ ...opts, fileName });
  let parentDir = path.dirname(filePath);
  ensurePathExists(parentDir);
  await writePrettyFile(filePath, printer.printFile(sourceFile));
}

async function generateExtendedClass(opts: TSG.ProcessClassOpts) {
  const declareKW = ts.createModifier(ts.SyntaxKind.DeclareKeyword);
  let fileName = generateFileName({ ...opts, apiClass: false });
  let sourceFile = ts.createSourceFile(
    fileName,
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );
  let apiClass = getPrefixedClassName({ ...opts, apiClass: true });
  let importDec = generateNamedImport(apiClass, `./${apiClass}`);
  let className = getPrefixedClassName({ ...opts, apiClass: false });
  let heritageClauses = [
    ts.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
      ts.createExpressionWithTypeArguments(_, ts.createIdentifier(apiClass))
    ])
  ];
  let classDec = ts.createClassDeclaration(
    _,
    [declareKW],
    className,
    _,
    heritageClauses,
    []
  );
  let exportDec = generateExport(className);
  let statements = [importDec, classDec, exportDec];
  sourceFile.statements = ts.createNodeArray(statements);
  let filePath = generateTypeFilePath({ ...opts, fileName });
  let parentDir = path.dirname(filePath);
  ensurePathExists(parentDir);
  if (!fss.existsSync(filePath)) {
    await writePrettyFile(filePath, printer.printFile(sourceFile));
  }
}

function getBasePath(opts: TSG.Base) {
  const { api, type } = opts;
  return path.resolve(__dirname, OUTPUT_DIR, api);
}

function generateTypeFilePath(opts: TSG.GenFilePathArgs) {
  const { fileName, namespaceName } = opts;
  if (namespaceName !== NO_NAMESPACE) {
    return path.join(getBasePath(opts), namespaceName, fileName);
  }
  return path.join(getBasePath(opts), fileName);
}

function ensurePathExists(ensurePath: string) {
  if (!fss.existsSync(ensurePath)) {
    fss.mkdirSync(ensurePath, { recursive: true });
  }
}

async function writePrettyFile(pth: string, text: string) {
  let config: prettier.Options = {
    filepath: pth
  };
  let prettierConfig = await prettier.resolveConfig(process.cwd());
  if (prettierConfig) {
    config = Object.assign(config, prettierConfig);
  }
  await fs.writeFile(pth, prettier.format(text, config));
}

function getPrefixedClassName(opts: TSG.GenClassNameOpts) {
  let { _class, namespaceName, apiClass } = opts;
  return getPrefixedName(_class.name, namespaceName, apiClass);
}

function getPrefixedName(
  className: string,
  namespaceName: string,
  apiClass: boolean
) {
  let prefix = namespaceName === NO_NAMESPACE ? '' : namespaceName + '_';
  if (apiClass) {
    return `${prefix}${getAPIClassName(className)}`;
  } else {
    return `${prefix}${className}`;
  }
}

function generateFileName(opts: TSG.GenClassNameOpts) {
  return `${getPrefixedClassName(opts)}.d.ts`;
}

function getImportsFromDeps(opts: TSG.GenClassNameOpts): ts.Statement[] {
  let { _class, namespaceName, apiClass, moduleMap } = opts;
  //TODO: Fix imports so they are namespace aware!!!
  return _class.dependencies.map(dep => {
    let prefixedName = getPrefixedName(dep.name, namespaceName, apiClass);
    if (moduleMap.has(dep.name)) {
      let resolvedModule = moduleMap.get(dep.name) as string;
      if (resolvedModule === '' && namespaceName !== NO_NAMESPACE) {
        return generateNamedImport(dep.name, `../${dep.name}`);
      } else if (resolvedModule === '' && namespaceName === NO_NAMESPACE) {
        return generateNamedImport(dep.name, `./${dep.name}`);
      } else {
        return generateNamedImport(dep.name, `../${resolvedModule}`);
      }
    }
    // if (namespaceName !== NO_NAMESPACE) {
    //   return generateImport(dep.name, `./${namespaceName}`);
    // }
    return generateNamedImport(prefixedName, `./${prefixedName}`);
  });
}

function generateNamedImport(className: string, moduleName: string) {
  let classId = ts.createIdentifier(className);
  let importSpec = ts.createImportSpecifier(_, classId);
  let namedImps = ts.createNamedImports([importSpec]);
  let impClause = ts.createImportClause(_, namedImps);
  let modSpec = ts.createStringLiteral(moduleName);
  return ts.createImportDeclaration(_, _, impClause, modSpec);
}

function generateStarImport(namespaceName: string, modulePath: string) {
  let nsIdentifier = ts.createIdentifier(namespaceName);
  let namespaceImp = ts.createNamespaceImport(nsIdentifier);
  let impClause = ts.createImportClause(_, namespaceImp);
  let modSpec = ts.createStringLiteral(modulePath);
  return ts.createImportDeclaration(_, _, impClause, modSpec);
}

function generateExport(className: string) {
  let expSpec = ts.createExportSpecifier(_, className);
  let exportClause = ts.createNamedExports([expSpec]);
  return ts.createExportDeclaration(_, _, exportClause, _);
}

function generateExportFrom(opts: TSG.GenExportArgs) {
  let { className, modulePath } = opts;
  let expSpec = ts.createExportSpecifier(_, className);
  let exportClause = ts.createNamedExports([expSpec]);
  let moduleSpecifier = ts.createStringLiteral(`./${modulePath}`);
  return ts.createExportDeclaration(_, _, exportClause, moduleSpecifier);
}

function generateExportsForNamespace(opts: TSG.ProcessNSOpts) {
  let { namespace, namespaceName } = opts;
  return namespace.classes.map(_class => {
    let prefixedClassName = getPrefixedClassName({
      ...opts,
      _class,
      apiClass: false
    });
    let expSpec = ts.createExportSpecifier(prefixedClassName, _class.name);
    let exportClause = ts.createNamedExports([expSpec]);
    let relativePath = path.relative(
      '.',
      path.join(namespaceName, prefixedClassName)
    );
    let relativeModulePath = `.${path.sep}${relativePath}`;
    let moduleSpecifier = ts.createStringLiteral(relativeModulePath);
    return ts.createExportDeclaration(_, _, exportClause, moduleSpecifier);
  });
}

async function createImportsForIndex(opts: TSG.GenIndexOpts) {
  const { hierarchy } = opts;
  return Object.keys(hierarchy)
    .filter(ns => ns !== NO_NAMESPACE)
    .map(namespaceName => {
      return generateStarImport(namespaceName, `./${namespaceName}`);
    }) as ts.Statement[];
}

async function processAddonsForIndex(opts: TSG.GenIndexOpts) {
  let statements: ts.Statement[] = [];
  let { api } = opts;
  let addonPath = path.join(__dirname, `${api}_addons.js`);
  let hasAddons = fss.existsSync(addonPath);
  if (hasAddons) {
    let addonsMod = await import(addonPath);
    let addons = addonsMod.default as Mod.AddOns;
    const { dependencies, variables } = addons;
    for (let dep of dependencies) {
      statements.push(generateNamedImport(dep.name, dep.path));
    }
    for (let v of variables) {
      let dec = ts.createVariableDeclaration(v.name, generateType(v.type));
      let decList = ts.createVariableDeclarationList([dec]);
      let declareKW = ts.createModifier(ts.SyntaxKind.DeclareKeyword);
      let varStatement = ts.createVariableStatement([declareKW], decList);
      statements.push(varStatement);
      let varExport = generateExport(v.name);
      statements.push(varExport);
    }
  }
  return statements;
}

async function createExportsForIndex(opts: TSG.GenIndexOpts) {
  const { hierarchy } = opts;
  let exportDecs: ts.Statement[] = [];
  for (let namespaceName in hierarchy) {
    if (namespaceName === NO_NAMESPACE) {
      let namespace = hierarchy[namespaceName];
      for (let _class of namespace.classes) {
        exportDecs.push(
          generateExportFrom({
            className: _class.name,
            modulePath: _class.name
          })
        );
      }
    } else {
      exportDecs.push(generateExport(namespaceName));
    }
  }
  return exportDecs;
}

function getAPIClassName(className: string) {
  return `SNAPI${className}`;
}

function generateClassMembers(opts: TSG.ProcessClassOpts): ts.ClassElement[] {
  let { _class } = opts;
  let methods = generateMethods(_class.methods, _class);
  let properties = generateProperties(_class.properties) as ts.ClassElement[];
  return properties.concat(methods);
}

function generateMethods(methods: SNC.SNMethodMap, _class: SNC.SNClass) {
  let tsMethods: ts.ClassElement[] = [];
  for (let methodName in methods) {
    let method = methods[methodName];
    for (let inst of method.instances) {
      let methodId = ts.createIdentifier(methodName);
      let parameters = generateParameters(inst.params, _class);
      if (methodName !== 'constructor') {
        let returnType = inst.returns
          ? generateType(inst.returns, _class)
          : ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword);
        let genMethod = ts.createMethod(
          _,
          _,
          _,
          methodId,
          _,
          _,
          parameters,
          returnType,
          _
        );
        ts.addSyntheticLeadingComment(
          genMethod,
          ts.SyntaxKind.MultiLineCommentTrivia,
          generateMethodComment(method, inst),
          true
        );
        tsMethods.push(genMethod);
      } else {
        let _constructor = ts.createConstructor(_, _, parameters, _);
        tsMethods.push(_constructor);
      }
    }
  }
  return tsMethods;
}

function generateMethodComment(
  method: SNC.SNClassMethod,
  instance: SNC.SNMethodInstance
) {
  let c = comment();
  c.description(method.description);
  for (let p of instance.params) {
    c.param(p.name, p.description);
  }
  return c.render();
}

function generateProperties(properties: SNC.Property[]) {
  return properties.map(prop => {
    return ts.createProperty(_, _, prop.name, _, generateType(prop.type), _);
  });
}

function generateParameters(params: SNC.SNMethodParam[], _class: SNC.SNClass) {
  //figure out last non-optional param
  let lastNonOptional = findLastNonOptionalParam(params);
  return params.map((param, index) => {
    let paramType = generateType(param.type, _class);
    if (param.optional && index < lastNonOptional) {
      paramType = ts.createUnionTypeNode([
        generateType(param.type),
        generateType('undefined')
      ]);
      return ts.createParameter(_, _, _, param.name, _, paramType, _);
    } else if (param.optional && index > lastNonOptional) {
      let questionMarkToken = ts.createToken(ts.SyntaxKind.QuestionToken);
      return ts.createParameter(
        _,
        _,
        _,
        param.name,
        questionMarkToken,
        paramType,
        _
      );
    } else {
      return ts.createParameter(_, _, _, param.name, _, paramType, _);
    }
  });
}

function findLastNonOptionalParam(params: SNC.SNMethodParam[]) {
  let last = -1;
  for (let i = 0; i < params.length; i++) {
    if (!params[i].optional) {
      last = i;
    }
  }
  return last;
}

function generateType(typeName: string, _class?: SNC.SNClass): ts.TypeNode {
  let types = ts.SyntaxKind;
  let basicTypes = new Map<string, ts.TypeNode>();
  basicTypes
    .set('string', ts.createKeywordTypeNode(types.StringKeyword))
    .set('number', ts.createKeywordTypeNode(types.NumberKeyword))
    .set('any', ts.createKeywordTypeNode(types.AnyKeyword))
    .set(
      'any[]',
      ts.createArrayTypeNode(ts.createKeywordTypeNode(types.AnyKeyword))
    )
    .set('boolean', ts.createKeywordTypeNode(types.BooleanKeyword))
    .set('undefined', ts.createKeywordTypeNode(types.UndefinedKeyword));
  if (basicTypes.has(typeName)) {
    return basicTypes.get(typeName) as ts.TypeNode;
  } else {
    // not using this right now, but we might need it later (circular dependencies)
    // if (typeName === _class.name) {
    //   return ts.createKeywordTypeNode(types.ThisKeyword);
    // }
    return ts.createTypeReferenceNode(typeName, _);
  }
}

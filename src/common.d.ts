export interface SNResponse<T> {
  result: {
    data: T;
  };
}

export interface DocsObj {
  blurb: string;
  class_data: ClassData;
  is_namespace_supported: boolean;
  navbar: NavbarItem[];
  release: string;
  sub_type: string;
  type: string;
}

interface BaseNode {
  dc_identifier?: string;
  name: string;
  type: "Constructor" | "Method" | "Server Side Scoped" | "Namespace" | "Parameter" | "Return" | "Class";
}

interface DocNode extends BaseNode {
  children?: DocNode[];
  order: number;
  release: string;
  text: string;
  text2?: string;
  variable?: string;
}

export interface ClassData extends DocNode {
  is_current: boolean;
  is_highlighted: true;
  level?: string;
  children?: ClassMethod[];
}

interface ClassMethod extends DocNode {
  hasExample: boolean;
  hasParameter: boolean;
  hasReturn: boolean;
  children?: MethodDescriptor[];
}

interface MethodDescriptor extends DocNode {}

interface NavbarItem extends BaseNode {
  items: BaseNode[];
}

export interface SNApiHierarchy {
  [namespace: string]: SNApiNamespace;
}

export interface SNApiNamespace {
  classes: SNClass[];
}

export interface SNClass {
  name: string;
  dependencies: SNClassDependency[];
  methods: SNMethodMap;
}

export interface SNMethodMap {
  [name: string]: SNClassMethod;
}

interface SNClassDependency {
  name: string;
}

interface SNClassMethod {
  description: string;
  instances: SNMethodInstance[];
}

interface SNMethodInstance {
  params: SNMethodParam[];
  returns?: string;
}

interface SNMethodParam {
  name: string;
  type: string;
  description: string;
}

export module SNC {
  interface HierarchyOpts {
    release: string;
    api: string;
    type: string;
  }

  interface NSOpts extends HierarchyOpts {
    namespace: NavbarItem;
  }

  interface DocsBase {
    blurb: string;
    class_data: ClassData;
    is_namespace_supported: boolean;
    navbar: any;
    release: string;
    sub_type: string;
    type: string;
  }

  interface ClientDocs extends DocsBase {
    navbar: {
      client: NavbarItem[];
    };
  }

  interface ServerDocs extends DocsBase {
    navbar: NavbarItem[];
  }
}
export module TSG {
  interface Base {
    hierarchy: SNApiHierarchy;
    release: string;
    api: string;
    type: string;
  }

  interface GenIndexOpts extends Base {
    moduleMap: Map<string, string>;
  }

  interface ProcessNSOpts extends Base {
    namespaceName: string;
    namespace: SNApiNamespace;
    moduleMap: Map<string, string>;
  }

  interface ProcessClassOpts extends ProcessNSOpts {
    _class: SNClass;
  }

  interface GenClassNameOpts extends ProcessClassOpts {
    apiClass: boolean;
  }

  interface GenExportArgs {
    className: string;
    modulePath: string;
  }

  interface GenFilePathArgs extends ProcessClassOpts {
    fileName: string;
  }
}

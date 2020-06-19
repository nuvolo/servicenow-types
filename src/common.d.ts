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

  interface LegacyNavBarOpts extends HierarchyOpts {
    navbar: LegacyNavBar;
  }

  type LegacyNavBar = ClassData[];

  interface ClientNavBarOpts extends HierarchyOpts {
    navbar: ClientNavBar;
  }

  interface ClientNavBar {
    [key: string]: string | ClassData[];
  }

  interface ClientDocs extends DocsBase {
    navbar: ClientNavBar;
  }

  interface ServerDocs extends DocsBase {
    navbar: NavbarItem[];
  }

  interface Property {
    name: string;
    type: string;
  }

  interface ClassChild extends DocNode {
    hasExample: boolean;
    hasParameter: boolean;
    hasReturn: boolean;
    children?: MethodDescriptor[];
  }

  interface GetDependenciesOpts extends NSOpts {
    methods: SNMethodMap;
    _class: ClassData;
    properties: Property[];
  }
  interface SNClass {
    name: string;
    dependencies: SNClassDependency[];
    methods: SNMethodMap;
    properties: Property[];
  }
  interface SNResponse<T> {
    result: {
      data: T;
    };
  }

  interface DocsObj {
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
    type:
      | 'Constructor'
      | 'Method'
      | 'Server Side Scoped'
      | 'Namespace'
      | 'Parameter'
      | 'Return'
      | 'Class'
      | 'Property';
  }

  interface DocNode extends BaseNode {
    children?: DocNode[];
    order: number;
    release: string;
    text: string;
    text2?: string;
    variable?: string;
  }

  interface ClassData extends DocNode {
    is_current: boolean;
    is_highlighted: true;
    level?: string;
    children?: ClassChild[];
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

  export interface SNMethodMap {
    [name: string]: SNClassMethod;
  }

  interface SNClassDependency {
    name: string;
  }

  interface SNClassMethod {
    description: string;
    static: boolean;
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
    optional: boolean;
  }

  interface ProcessClassOpts extends NSOpts {
    _class: ClassData;
  }

  interface ProcessMethodOpts extends ProcessClassOpts {
    method: ClassChild;
  }
}
export module TSG {
  interface Base {
    hierarchy: SNC.SNApiHierarchy;
    release: string;
    api: string;
    type: string;
  }

  interface GenIndexOpts extends Base {
    moduleMap: Map<string, string>;
  }

  interface ProcessNSOpts extends Base {
    namespaceName: string;
    namespace: SNC.SNApiNamespace;
    moduleMap: Map<string, string>;
  }

  interface ProcessClassOpts extends ProcessNSOpts {
    _class: SNC.SNClass;
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

export module CG {
  interface Param {
    name: string;
    description: string;
  }
}

export module Mod {
  interface AddOns {
    dependencies: Dependency[];
    variables: Variable[];
  }

  interface Variable {
    name: string;
    type: string;
  }

  interface Dependency {
    name: string;
    path: string;
  }
}

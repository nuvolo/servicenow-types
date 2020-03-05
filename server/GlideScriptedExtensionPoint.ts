
declare class GlideScriptedExtensionPoint {
/**
   * Get extension point by name.
   * @param extensionName The name of the extension point.
   */
  getExtensions(extensionName: string): Array<any>;
}

export { GlideScriptedExtensionPoint };

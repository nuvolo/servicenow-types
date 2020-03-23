
declare class GlideScriptedExtensionPoint {
/**
   * Get extension point by name.
   * @param extensionName The name of the extension point.
   */
  getExtensions<TExtension>(extensionName: string): TExtension[];
}

export { GlideScriptedExtensionPoint };

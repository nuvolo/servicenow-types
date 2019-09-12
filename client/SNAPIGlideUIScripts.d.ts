declare class SNAPIGlideUIScripts {
  /**
   * Calls a UI script with the UI Type set to All or Desktop from a client script or other
   * client-side code. Returns a promise.
   * @param scriptName API name of the UI script to run.
   */
  getUIScript(scriptName: string): Promise<any>;
}
export { SNAPIGlideUIScripts };

declare class SNAPIScriptLoader {
  /**
   * Loads scripts asynchronously.
   * @param scripts An array of scripts.
   * @param callback The function called when the scripts have been loaded. The callback function
   * has no arguments.
   */
  getScripts(scripts: any[], callback: any): void;
  /**
   * Loads scripts asynchronously.
   * @param filePath A path, including the file name, that contains one or more scripts.
   * @param callback The function to be called after the scripts have been loaded. The callback
   * function has no arguments.
   */
  getScripts(filePath: string, callback: any): void;
}
export { SNAPIScriptLoader };

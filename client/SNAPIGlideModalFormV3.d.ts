declare class SNAPIGlideModalFormV3 {
  constructor(title: string, tableName: string, onCompletionCallback: any);
  /**
   * Sets the specified parameter to the specified value.
   * @param name The parameter name.
   * @param value The parameter value.
   */
  addParm(name: string, value: string): void;
  /**
   * Shows the form.
   */
  render(): void;
  /**
   * Sets the function to be called when the form has been successfully submitted and
   * processed by the server.
   * @param callbackFunction The callback function to be called when the form has been successfully
   * processed.
   */
  setCompletionCallback(callbackFunction: any): void;
  /**
   * Sets the function to be called after the form has been loaded.
   * @param callbackFunction The function to be called after the form has been loaded. The callback function
   * has the form callBackFunction(GlideModalForm obj)
   */
  setOnloadCallback(callbackFunction: any): void;
  /**
   * Sets the object's sys_id preference.
   * @param sys_id The id preference. One of the query parameters passed to the form.
   */
  setSysID(sys_id: string): void;
}
export { SNAPIGlideModalFormV3 };

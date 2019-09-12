declare class SNAPIGlideURLV3 {
  constructor(contextPath: string);
  /**
   * Adds a query string name-value pair to the URL.
   * @param name Name of the query string parameter.
   * @param value Query string value.
   */
  addParam(name: string, value: string): string;
  /**
   * Get the entire context path and query string parameters as a single URI.
   * @param additionalParams A name-value pair object that contains parameters that are added to this URL
   * request only. These additional parameters are not saved to the GlideURL
   * object.
   */
  getURL(additionalParams: any): string;
  /**
   * Reloads the current page URL.
   */
  refresh(): void;
}
export { SNAPIGlideURLV3 };

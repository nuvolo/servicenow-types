declare class SNAPIJSON {
  /**
   * Creates an object or primitive type from a JSON formatted string.
   * @param str A JSON formatted string.
   */
  parse(str: string): any;
  /**
   * Creates a string from a JSON object.
   * @param jsonObject The JSON object to be turned into a string.
   */
  stringify(jsonObject: any): string;
}
export { SNAPIJSON };

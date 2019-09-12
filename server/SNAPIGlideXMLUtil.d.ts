declare class SNAPIGlideXMLUtil {
  /**
   * Removes invalid characters from an XML string.
   * @param xmlString The string to be processed.
   */
  removeInvalidChars(xmlString: string): string;
  /**
   * Determines if the specified string is valid XML.
   * @param xmlString The string to be validated.
   * @param nsAware When true, the validation is aware of name spaces. When false, the validation
   * ignores name spaces.
   * @param forgiveUnclosed When true, the validation does not check for  tags enclosing the
   * string.
   */
  validateXML(
    xmlString: string,
    nsAware: boolean,
    forgiveUnclosed: boolean
  ): string;
}
export { SNAPIGlideXMLUtil };

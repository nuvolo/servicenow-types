declare class SNAPIGlideDocumentV3 {
  /**
   * Returns a node found in the specified DOM based context or created from the HTML
   * context.
   * @param selector The selector expression
   * @param context (Optional) A DOM Element, document, or JQuery object to be searched.
   */
  getElement(selector: string, context?: string): HTMLElement;
  /**
   * Returns a node list found in the specified DOM based context or created if an HTML
   * context is specified.
   * @param selector The selector expression
   * @param context (Optional) A DOM Element, document, or JQuery object to be searched.
   */
  getElements(selector: string, context?: string): HTMLElement;
}
export { SNAPIGlideDocumentV3 };

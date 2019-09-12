declare class SNAPIMobile {
  /**
   * Adds a decorative icon next to a field.
   * @param fieldName The field name.
   * @param icon The font icon to show next to the field.
   * @param text The text title for the icon (used for screen readers).
   */
  addDecoration(fieldName: string, icon: string, text: string): void;
  /**
   * Gets the form label text.
   * @param fieldName The field name.
   */
  getLabel(fieldName: string): string;
  /**
   * Determines if a field is present on the form.
   * @param fieldName The field to look for.
   */
  hasField(fieldName: string): boolean;
  /**
   * Removes a decorative icon from next to a field.
   * @param fieldName The field name.
   * @param icon The icon to remove.
   * @param text The text title for the icon.
   */
  removeDecoration(fieldName: string, icon: string, text: string): void;
  /**
   * Sets the form label text.
   * @param fieldName The field name.
   * @param label The field label text.
   */
  setLabel(fieldName: string, label: string): void;
}
export { SNAPIMobile };

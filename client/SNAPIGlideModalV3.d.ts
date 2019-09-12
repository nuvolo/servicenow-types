declare class SNAPIGlideModalV3 {
  constructor(id: string, readOnly: boolean, width: number);
  /**
   * Get a GlideModal object by ID.
   * @param id The element id of the GlideModal object.
   */
  get(id: string): any;
  /**
   * Returns the value of the specified property.
   * @param name The property name
   */
  getPreference(name: string): string;
  /**
   * Renders the UI page in the modal.
   */
  render(): void;
  /**
   * Display a modal with the specified HTML content.
   * @param html The HTML content to be shown in the modal.
   */
  renderWithContent(html: any): void;
  /**
   * Display a modal with the specified HTML content.
   * @param html The HTML content to be shown in the modal.
   */
  renderWithContent(html: string): void;
  /**
   * Set a property that is read by the loaded UI page.
   * @param name The property name
   * @param value The property value
   */
  setPreference(name: string, value: string): void;
  /**
   * Set the properties and reload the modal.
   * @param properties An array of name-value pairs to be set.
   */
  setPreferenceAndReload(properties: any[]): void;
  /**
   * Sets the title of the modal.
   * @param title The title to be displayed
   */
  setTitle(title: string): void;
  /**
   * Set the width in pixels.
   * @param width The number of pixels.
   */
  setWidth(width: number): void;
  /**
   * Change the view and reload the modal.
   * @param newView The view to use.
   */
  switchView(newView: string): void;
}
export { SNAPIGlideModalV3 };

declare class SNAPIGlideDialogWindow {
  constructor(id: string, readOnly?: boolean, width?: number, height?: number);
  /**
   * Adjusts the body height of a dialog window to be the window height minus the header
   * height.
   */
  adjustBodySize(): void;
  /**
   * Closes the dialog window.
   */
  destroy(): void;
  /**
   * Renders the dialog window.
   */
  render(): void;
  /**
   * Sets a given window property to a specified value.
   * @param name The window property to set.
   * @param value The value for the window property.
   */
  setPreference(name: string, value: string): void;
  /**
   * Sets the size of the dialog window.
   * @param width The width of the dialog window.
   * @param height The height of the dialog window.
   */
  setSize(width: number, height: number): void;
  /**
   * Sets the title of the dialog window.
   * @param title The title for the current window.
   */
  setTitle(title: string): void;
}
export { SNAPIGlideDialogWindow };

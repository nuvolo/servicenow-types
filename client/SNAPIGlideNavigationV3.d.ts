declare class SNAPIGlideNavigationV3 {
  /**
   * Redirects to a new URL.
   * @param url The URL to be loaded. It can be any URL supported by the browser.
   * @param target The frame to use. If omitted, opens in the current frame.
   */
  open(url: string, target: string): void;
  /**
   * Opens a popup window.
   * @param url The URL to open.
   * @param name The window name
   * @param features A comma separated list of features for the popup window.
   * @param noStack True to append sysparm_stack=no to the url. This prevents weirdness when using
   * the form back button.
   */
  openPopup(url: string, name: string, features: string, noStack: boolean): any;
  /**
   * Redirects to a record. The record will be displayed in the navigator.
   * @param tableName The name of the table containing the record to be displayed.
   * @param sys_id The sys_id of the record to be displayed.
   */
  openRecord(tableName: string, sys_id: string): void;
  /**
   * Refreshes the navigator display.
   */
  refreshNavigator(): void;
  /**
   * Reloads the current frame.
   */
  reloadWindow(): void;
}
export { SNAPIGlideNavigationV3 };

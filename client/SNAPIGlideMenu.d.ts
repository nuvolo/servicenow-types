declare class SNAPIGlideMenu {
  /**
   * Clears the image for an item.
   * @param item Specifies the item to have its image removed from display.
   */
  clearImage(item: any): void;
  /**
   * Clears any selection images from items in the menu.
   */
  clearSelected(): void;
  /**
   * Returns a menu item by item ID.
   * @param itemID Specifies the item to be returned.
   */
  getItem(itemID: string): any;
  /**
   * Disables a menu item so that it cannot be selected. The disabled menu item is displayed
   * in a lighter color (grayed out) to indicate it is disabled.
   * @param item The item to be disabled.
   */
  setDisabled(item: any): void;
  /**
   * Enables the specified menu item.
   * @param item The item to be enabled.
   */
  setEnabled(item: any): void;
  /**
   * Hides the specified menu item.
   * @param item The item to be hidden.
   */
  setHidden(item: any): void;
  /**
   * Sets an image for an item.
   * @param item the item to have the image displayed.
   * @param imgSrc the image to attach to the menu item.
   */
  setImage(item: any, imgSrc: string): void;
  /**
   * Sets the display label for a menu item. The label may contain HTML.
   * @param item the item to be labeled.
   * @param label the label to be displayed. The string may contain HTML.
   */
  setLabel(item: any, label: string): void;
  /**
   * Displays the specified item.
   * @param item The item to be displayed.
   */
  setVisible(item: any): void;
}
export { SNAPIGlideMenu };

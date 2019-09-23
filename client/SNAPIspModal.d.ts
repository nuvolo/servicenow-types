declare class SNAPIspModal {
  /**
   * Displays an alert.
   * @param message The message to display.
   */
  alert(message: string): boolean;
  /**
   * Displays a confirmation message.
   * @param message The message to display.
   */
  confirm(message: string): boolean;
  /**
   * Opens a modal window using the specified options.
   * @param options An object that may have these properties.
   * title - a string that can be HTML that goes in the header. The default is
   * empty.
   *
   * message - a string that can be HTML that goes in the header. The default is
   * empty.
   *
   * buttons - an array that contains the buttons to show on the dialog. The
   * default is Cancel and OK.
   *
   * input - a Boolean. When true shows an input field on the dialog. The default
   * is false.
   *
   * value - a string containing the value of the input field. The default is
   * empty.
   *
   * widget - a string that identifies the widget ID or sys_id to embed in the
   * dialog. The default is empty.
   *
   * widgetInput - an object to send the embedded widget as input. The default is
   * null.
   *
   * shared - a client-side object to share data with the embedded widget client
   * script.
   *
   * size - a string indicating the size of the window. Can be 'sm' or 'lg'. The
   * default is empty.
   *
   *
   */
  open(options: any): void;
  /**
   * Displays a prompt for user input.
   * @param message The message to display.
   * @param default_ A default value to use if the user does not provide a response.
   */
  prompt(message: string, default_?: string): string;
}
export { SNAPIspModal };

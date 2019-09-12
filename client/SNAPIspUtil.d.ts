declare class SNAPIspUtil {
  /**
   * Displays a notification error message.
   * @param message Error message to display.
   */
  addErrorMessage(message: string): void;
  /**
   * Displays a notification info message.
   * @param message Message to display.
   */
  addInfoMessage(message: string): void;
  /**
   * Displays a trivial notification message.
   * @param message Message to display.
   */
  addTrivialMessage(message: string): void;
  /**
   * Formats a string as an alternative to string concatenation.
   * @param template String template with values for substitution.
   * @param data Object containing variables for substitution.
   */
  format(template: string, data: any): string;
  /**
   * Returns a widget model by ID or sys_id.
   * @param widgetId Widget ID or sys_id of the widget to embed.
   * @param data (Optional) Name/value pairs of parameters to pass to the widget model.
   */
  get(widgetId: string, data?: any): any;
  /**
   * Watches for updates to a table or filter and returns the value from the callback
   * function.
   * @param $scope Scope of the data object updated by the callback function.
   * @param table Watched table.
   * @param filter Filter for fields to watch.
   * @param callback Optional. Parameter to define the callback function.
   */
  recordWatch(
    $scope: any,
    table: string,
    filter: string,
    callback?: any
  ): Promise<any>;
  /**
   * Calls the server and replaces the current options and
   * data with the server response.
   * @param $scope The scope defined for the update.
   */
  refresh($scope: any): any;
  /**
   * Updates the data object on the server within a given scope.
   * @param $scope The scope defined for the update.
   */
  update($scope: any): any;
}
export { SNAPIspUtil };

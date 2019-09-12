declare class SNAPIWorkflow {
  inputs: any;
  result: string;
  /**
   * Adds a debug message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  debug(message: string, args: any): string;
  /**
   * Adds an error message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  error(message: string, args: any): string;
  /**
   * Returns the specified variable's value.
   * @param name The variable name
   */
  getVariable(name: string): any;
  /**
   * Adds an informational message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  info(message: string, args: any): string;
  /**
   * Returns the workflow name.
   */
  name(): string;
  /**
   * Removes the specified variable from the workflow.
   * @param name The variable name
   */
  removeVariable(name: string): void;
  /**
   * Returns the workflow's scratchpad object.
   */
  scratchpad(): any;
  /**
   * Sets the workflow's result.
   * @param result The workflow's result
   */
  setResult(result: string): void;
  /**
   * Sets the specified variable to the specified value.
   * @param name The variable name
   * @param value The value to be assigned to the variable.
   */
  setVariable(name: string, value: any): void;
  /**
   * Adds a warning message to the log.
   * @param message The message to add to the log.
   * @param args Arguments to add to the message.
   */
  warn(message: string, args: any): string;
}
export { SNAPIWorkflow };

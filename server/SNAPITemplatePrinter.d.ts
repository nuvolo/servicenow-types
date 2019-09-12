declare class SNAPITemplatePrinter {
  /**
   * Prints the string to the email body.
   * @param string The string to print
   */
  print(string: string): void;
  /**
   * Adds non-breaking spaces to the email body.
   * @param spaces The number of non-breaking spaces to output to the email body.
   */
  space(spaces: number): void;
}
export { SNAPITemplatePrinter };

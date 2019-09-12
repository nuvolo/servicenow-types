declare class SNAPIGlideURI {
  constructor();
  /**
   * Returns the specified parameter.
   * @param name The parameter name.
   */
  get(name: string): string;
  /**
   * Returns the file name portion of the URI.
   */
  getFileFromPath(): string;
  /**
   * Sets the specified parameter to the specified value.
   * @param name The parameter name.
   * @param value The value.
   */
  set(name: string, value: string): void;
  /**
   * Reconstructs the URI string and performs the proper URL encoding by converting
   * non-valid characters to their URL code. For example, converting & to '%26'.
   * @param path The base portion of the system URL to which the URI is appended.
   */
  toString(path: string): string;
}
export { SNAPIGlideURI };

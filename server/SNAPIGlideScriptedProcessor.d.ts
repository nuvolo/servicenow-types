declare class SNAPIGlideScriptedProcessor {
  /**
   * Redirects to the specified URL.
   * @param url the destination URL
   */
  redirect(url: string): void;
  /**
   * Encodes an object as a JSON string and writes it to the current URL.
   * @param o The object to encode to a JSON string.
   */
  writeJSON(o: any): void;
  /**
   * Writes the specified string to the current URL in the specified
   * character-encoding.
   * @param contentType Sets the content type of the response sent to the client, if the response has
   * not been committed, and may include a character-encoding specification.
   * @param s The string to write.
   */
  writeOutput(contentType: string, s: string): void;
  /**
   * Writes the specified string to the current URL in the specified
   * character-encoding.
   * @param s The string to write.
   */
  writeOutput(s: string): void;
}
export { SNAPIGlideScriptedProcessor };

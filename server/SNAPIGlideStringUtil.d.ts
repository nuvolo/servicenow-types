declare class SNAPIGlideStringUtil {
  /**
   * Replaces periods with underscore characters.
   * @param sourceString The string to be processed.
   */
  dotToUnderBar(sourceString: string): string;
  /**
   * Remove quotes from a string.
   * @param sourceString The string to be processed.
   */
  escapeAllQuotes(sourceString: string): string;
  /**
   * Use for home pages to replace problem characters with escape characters.
   * @param sourceString The string to be processed.
   */
  escapeForHomePage(sourceString: string): string;
  /**
   * Use to replace illegal characters with their escape codes.
   * @param htmlString The string to be processed.
   */
  escapeHTML(htmlString: string): string;
  /**
   * Replaces non-printable characters with their printable notation.
   * @param sourceString The string to be processed.
   */
  escapeNonPrintable(sourceString: string): string;
  /**
   * Replaces query term separators "^" with their escape sequence "^^".
   * @param sourceString The string to be processed.
   */
  escapeQueryTermSeparator(sourceString: string): string;
  /**
   * Replace quotes with escape characters by adding a backslash before each
   * quote.
   * @param sourceString The string to be processed.
   */
  escapeTicks(sourceString: string): string;
  /**
   * Use to replace illegal HTML characters into HTML notation.
   * @param sourceString The string to be processed.
   */
  getHTMLValue(sourceString: string): string;
  /**
   * Extract numeric characters from a string.
   * @param sourceString The string to be processed.
   */
  getNumeric(sourceString: string): string;
  /**
   * Returns true if the specified string is a valid base64 string.
   * @param sourceString The string to be processed.
   */
  isBase64(sourceString: string): boolean;
  /**
   * Returns true if the specified string is in valid sys ID format.
   * @param sourceString The string to be processed.
   */
  isEligibleSysID(sourceString: string): boolean;
  /**
   * Replaces the new line character, "/n", with a break code "".
   * @param sourceString The string to be processed.
   */
  newLinesToBreaks(sourceString: string): string;
  /**
   * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading,
   * trailing, and duplicate spaces.
   * @param sourceString The string to be processed.
   */
  normalizeWhitespace(sourceString: string): string;
  /**
   * Replaces escape characters with their respective character.
   * @param htmlString String to process.
   */
  unEscapeHTML(htmlString: string): string;
}
export { SNAPIGlideStringUtil };

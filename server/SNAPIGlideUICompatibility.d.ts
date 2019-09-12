declare class SNAPIGlideUICompatibility {
  constructor(scopeName: string);
  /**
   * Returns the terms "block" or "allow" based upon the browser version.
   */
  getCompatibility(): string;
  /**
   * Determines if the browser is not supported.
   */
  isBlocked(): boolean;
}
export { SNAPIGlideUICompatibility };

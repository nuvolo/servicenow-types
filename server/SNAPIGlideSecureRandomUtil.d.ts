declare class SNAPIGlideSecureRandomUtil {
  /**
   * Generates a pseudo-random integer.
   */
  getSecureRandomInt(): number;
  /**
   * Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value
   * that you pass into the method.
   * @param bound The bound value.
   */
  getSecureRandomIntBound(bound: number): number;
  /**
   * Generates pseudo-random long value.
   */
  getSecureRandomLong(): number;
  /**
   * Generates a random alpha-numeric String with the specified length.
   * @param length The length of the string in number of characters.
   */
  getSecureRandomString(length: number): string;
}
export { SNAPIGlideSecureRandomUtil };

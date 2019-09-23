declare class SNAPIGlideGuidV3 {
  /**
   * Creates a globally unique identifier 32 characters long, or as specified with the
   * optional length argument.
   * @param stringLength The desired string length, must be between 1 and 32 inclusive. This parameter
   * is optional. If not specified, the returned string will be 32 characters
   * long.
   */
  generate(stringLength?: number): string;
}
export { SNAPIGlideGuidV3 };

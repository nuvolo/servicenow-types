import { GlideScriptableInputStream } from './GlideScriptableInputStream';
declare class SNAPIGlideDigest {
  constructor();
  /**
   * Create a message digest from a string using the MD5 algorithm. The output string is in
   * Base64.
   * @param source The source string.
   */
  getMD5Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the MD5 algorithm. The output string
   * is in Base64.
   * @param inputStream The source input stream.
   */
  getMD5Base64FromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the MD5 algorithm. The output string is in
   * hexadecimal.
   * @param source The source string.
   */
  getMD5Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the MD5 algorithm. The output string
   * is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getMD5HexFromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA1 algorithm. The output string is in
   * Base64.
   * @param source The source string.
   */
  getSHA1Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA1 algorithm. The output
   * string is in Base64.
   * @param inputStream The source input stream.
   */
  getSHA1Base64FromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA1 algorithm. The output string is in
   * hexadecimal.
   * @param source The source string.
   */
  getSHA1Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA1 algorithm. The output
   * string is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getSHA1HexFromInputStream(inputStream: GlideScriptableInputStream): string;
  /**
   * Create a message digest from a string using the SHA256 algorithm. The output string is
   * in Base64.
   * @param source The source string.
   */
  getSHA256Base64(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA256 algorithm. The output
   * string is in Base64.
   * @param inputStream The source input stream.
   */
  getSHA256Base64FromInputStream(
    inputStream: GlideScriptableInputStream
  ): string;
  /**
   * Create a message digest from a string using the SHA256 algorithm. The output string is
   * in hexadecimal.
   * @param source The source string.
   */
  getSHA256Hex(source: string): string;
  /**
   * Create a message digest from an input stream using the SHA256 algorithm. The output
   * string is in hexadecimal.
   * @param inputStream The source input stream.
   */
  getSHA256HexFromInputStream(inputStream: GlideScriptableInputStream): string;
}
export { SNAPIGlideDigest };

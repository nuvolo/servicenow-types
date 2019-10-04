import { GlideScriptableInputStream } from './GlideScriptableInputStream';
declare class SNAPIGlideTextReader {
  constructor(inputStream: GlideScriptableInputStream);
  /**
   * Returns the character encoding of the input stream.
   */
  getEncoding(): string;
  /**
   * Returns a single line from the input stream and returns a string. Since this is working
   * off of a stream, it is not subject to the 5MB size limit.
   */
  readLine(): string;
}
export { SNAPIGlideTextReader };

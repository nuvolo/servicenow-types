import { SNAPIGlideDate } from './SNAPIGlideDate';
import { GlideDuration } from './GlideDuration';
declare class GlideDate extends SNAPIGlideDate {
  /**
   * Gets the duration difference between two GlideDate values.
   * @param start The start value.
   * @param end The end value.
   */
  static subtract(start: GlideDate, end: GlideDate): GlideDuration;

  /**
   * DO NOT USE.  Refer to static subtract method.
   */
  //@ts-ignore
  subtract(): void;
}
export { GlideDate };

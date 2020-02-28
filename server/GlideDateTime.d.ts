import { SNAPIGlideDateTime } from './SNAPIGlideDateTime';
import { GlideDuration } from './GlideDuration';
import { GlideTime } from './GlideTime';
declare class GlideDateTime extends SNAPIGlideDateTime {
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param start The start value.
   * @param end The end value.
   */
  static subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param time The time value to subtract.
   */
  //@ts-ignore
  subtract(time: GlideTime): void;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param milliseconds The number of milliseconds to subtract.
   */
  //@ts-ignore
  subtract(milliseconds: number): void;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to
   * getValue().
   */
  /**
   * DO NOT USE.  Refer to static subtract method.
   */
  //@ts-ignore
  subtract(start: GlideDateTime, end: GlideDateTime): void;
}

export { GlideDateTime };

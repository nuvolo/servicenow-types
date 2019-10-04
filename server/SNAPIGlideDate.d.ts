import { GlideDate } from './GlideDate';
import { GlideDuration } from './GlideDuration';
declare class SNAPIGlideDate {
  constructor();
  /**
   * Gets the date in the specified date format.
   * @param format the desired date format
   */
  getByFormat(format: string): string;
  /**
   * Gets the day of the month stored by the GlideDate object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthNoTZ(): number;
  /**
   * Gets the date in the current user's display format and time zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the display value in the internal format (yyyy-MM-dd).
   */
  getDisplayValueInternal(): string;
  /**
   * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
   */
  getMonthNoTZ(): number;
  /**
   * Gets the date value stored in the database by the GlideDate object in the internal
   * format, yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getValue(): string;
  /**
   * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
   */
  getYearNoTZ(): number;
  /**
   * Sets a date value using the current user's display format and time zone.
   * @param asDisplayed The date in the current user's display format and time zone. The parameter must
   * be formatted using the current user's preferred display format, such as yyyy-MM-dd.
   */
  setDisplayValue(asDisplayed: string): void;
  /**
   * Sets the date of the GlideDate object.
   * @param o The date and time to use.
   */
  setValue(o: string): void;
  /**
   * Gets the duration difference between two GlideDate values.
   * @param start The start value.
   * @param end The end value.
   */
  subtract(start: GlideDate, end: GlideDate): GlideDuration;
}
export { SNAPIGlideDate };

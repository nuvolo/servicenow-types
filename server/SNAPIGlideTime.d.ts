import { GlideTime } from './GlideTime';
import { GlideDuration } from './GlideDuration';
declare class SNAPIGlideTime {
  constructor();
  constructor(milliseconds: number);
  /**
   * Gets the time in the specified format.
   * @param format The time format.
   */
  getByFormat(format: string): string;
  /**
   * Gets the time in the current user's display format and time zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the display value in the current user's time zone and the internal format
   * (HH:mm:ss).
   */
  getDisplayValueInternal(): string;
  /**
   * Returns the hours part of the time using the local time zone.
   */
  getHourLocalTime(): number;
  /**
   * Returns the hours part of the time using the local time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayLocalTime(): number;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 24 hour clock.
   */
  getHourOfDayUTC(): number;
  /**
   * Returns the hours part of the time using the UTC time zone. The number of hours is
   * based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
   */
  getHourUTC(): number;
  /**
   * Returns the number of minutes using the local time zone.
   */
  getMinutesLocalTime(): number;
  /**
   * Returns the number of minutes in the hour based on the UTC time zone.
   */
  getMinutesUTC(): number;
  /**
   * Returns the number of seconds in the current minute.
   */
  getSeconds(): number;
  /**
   * Gets the time value stored in the database by the GlideTime object in the internal
   * format, HH:mm:ss, and the system time zone.
   */
  getValue(): string;
  /**
   * Sets a time value using the current user's display format and time zone.
   * @param asDisplayed The time in the current user's display format and time zone. The parameter must
   * be formatted using the current user's preferred display format, such as HH:mm:ss.
   */
  setDisplayValue(asDisplayed: string): void;
  /**
   * Sets the time of the GlideTime object in the internal time zone.
   * @param o The time in hh:mm:ss format.
   */
  setValue(o: string): void;
  /**
   * Gets the duration difference between two GlideTime object values.
   * @param startTime The start value.
   * @param endTime The end value.
   */
  subtract(startTime: GlideTime, endTime: GlideTime): GlideDuration;
}
export { SNAPIGlideTime };

import { GlideDuration } from './GlideDuration';
declare class SNAPIGlideDuration {
  /**
   * Add the specified duration to the object.
   * @param duration The value to add to the object.
   */
  add(duration: GlideDuration): GlideDuration;
  constructor();
  constructor(another: GlideDuration);
  constructor(milliseconds: number);
  constructor(displayValue: string);
  /**
   * Gets the duration in the specified format.
   * @param format The duration format.
   */
  getByFormat(format: string): string;
  /**
   * Gets the number of days.
   */
  getDayPart(): number;
  /**
   * Gets the display value of the duration in number of days, hours, and
   * minutes.
   */
  getDisplayValue(): string;
  /**
   * Gets the duration value in "d HH:mm:ss" format.
   */
  getDurationValue(): string;
  /**
   * Gets the rounded number of days. If the time part is more than 12 hours, the return
   * value is rounded up. Otherwise, it is rounded down.
   */
  getRoundedDayPart(): number;
  /**
   * Gets the internal value of the GlideDuration object.
   */
  getValue(): string;
  /**
   * Sets the display value.
   * @param asDisplayed The duration in "d HH:mm:ss" format.
   */
  setDisplayValue(asDisplayed: string): void;
  /**
   * Sets the internal value of the GlideDuration object.
   * @param o The duration in the object's internal format, which is the date and time from
   * January 1, 1970, 00:00:00.
   */
  setValue(o: any): void;
  /**
   * Subtracts the specified duration from the current duration.
   * @param duration The duration to subtract.
   */
  subtract(duration: GlideDuration): void;
}
export { SNAPIGlideDuration };

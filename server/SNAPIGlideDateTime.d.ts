import { GlideTime } from './GlideTime';
import { GlideDateTime } from './GlideDateTime';
import { GlideDate } from './GlideDate';
import { GlideDuration } from './GlideDuration';
declare class SNAPIGlideDateTime {
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param gd The GlideTime object to add.
   */
  add(gd: GlideTime): void;
  /**
   * Adds a GlideTime object to the current GlideDateTime object.
   * @param milliseconds The number of milliseconds to add.
   */
  add(milliseconds: number): void;
  constructor();
  constructor(g: GlideDateTime);
  constructor(value: string);
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts days using the local date and time
   * values.
   * @param days The number of days to add. Use a negative value to subtract.
   */
  addDaysLocalTime(days: number): void;
  /**
   * Adds a specified number of days to the current GlideDateTime object. A negative
   * parameter subtracts days. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts days using the UTC date and time
   * values.
   * @param days The number of days to add. Use a negative number to subtract.
   */
  addDaysUTC(days: number): void;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months. The method determines the local date and time equivalent to the
   * value stored by the GlideDateTime object, then adds or subtracts months using the local date and
   * time values.
   * @param months The number of months to add. use a negative value to subtract.
   */
  addMonthsLocalTime(months: number): void;
  /**
   * Adds a specified number of months to the current GlideDateTime object. A negative
   * parameter subtracts months. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts months using the UTC date and time
   * values.
   * @param months The number of months to add. Use a negative value to subtract.
   */
  addMonthsUTC(months: number): void;
  /**
   * Adds the specified number of seconds to the current GlideDateTime object.
   * @param seconds The number of seconds to add.
   */
  addSeconds(seconds: number): void;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts weeks using the local date and time
   * values.
   * @param weeks The number of weeks to add. Use a negative value to subtract.
   */
  addWeeksLocalTime(weeks: number): void;
  /**
   * Adds a specified number of weeks to the current GlideDateTime object. A negative
   * parameter subtracts weeks. The method determines the UTC date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts weeks using the UTC date and time
   * values.
   * @param weeks The number of weeks to add. Use a negative value to subtract.
   */
  addWeeksUTC(weeks: number): void;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years. The method determines the local date and time equivalent to the value
   * stored by the GlideDateTime object, then adds or subtracts years using the local date and time
   * values.
   * @param years The number of years to add.  Use a negative value to subtract.
   */
  addYearsLocalTime(years: number): void;
  /**
   * Adds a specified number of years to the current GlideDateTime object. A negative
   * parameter subtracts years. The date and time value stored by GlideDateTime object is interpreted
   * as being in the UTC time zone.
   * @param years The number of years to add. Use a negative value to subtract.
   */
  addYearsUTC(years: number): void;
  /**
   * Determines if the GlideDateTime object occurs after the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  after(gdt: GlideDateTime): boolean;
  /**
   * Determines if the GlideDateTime object occurs before the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  before(gdt: GlideDateTime): boolean;
  /**
   * Compares two date and time objects to determine whether they are equivalent or one
   * occurs before or after the other.
   * @param o Date and time object in GlideDateTime format
   */
  compareTo(o: any): number;
  /**
   * Compares a datetime with an existing value for equality.
   * @param dateTime The datetime to compare.
   */
  equals(dateTime: GlideDateTime): boolean;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the system time zone, UTC by default.
   */
  getDate(): GlideDate;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the current
   * user's time zone.
   */
  getDayOfMonthLocalTime(): number;
  /**
   * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfMonthUTC(): number;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the user's
   * time zone.
   */
  getDayOfWeekLocalTime(): number;
  /**
   * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time
   * zone.
   */
  getDayOfWeekUTC(): number;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the current user's time zone.
   */
  getDaysInMonthLocalTime(): number;
  /**
   * Gets the number of days in the month stored by the GlideDateTime object, expressed in
   * the UTC time zone.
   */
  getDaysInMonthUTC(): number;
  /**
   * Gets the date and time value in the current user's display format and time
   * zone.
   */
  getDisplayValue(): string;
  /**
   * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
   */
  getDisplayValueInternal(): string;
  /**
   * Gets the amount of time that daylight saving time is offset.
   */
  getDSTOffset(): number;
  /**
   * Gets the current error message.
   */
  getErrorMsg(): string;
  /**
   * Returns the object's time in the local time zone and in the internal
   * format.
   */
  getInternalFormattedLocalTime(): string;
  /**
   * Gets the date stored by the GlideDateTime object, expressed in the standard format,
   * yyyy-MM-dd, and the current user's time zone.
   */
  getLocalDate(): GlideDate;
  /**
   * Returns a GlideTime object that represents the time portion of the GlideDateTime object
   * in the user's time zone.
   */
  getLocalTime(): GlideTime;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getMonthLocalTime(): number;
  /**
   * Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.
   */
  getMonthUTC(): number;
  /**
   * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
   */
  getNumericValue(): number;
  /**
   * Returns a GlideTime object that represents the time portion of the GlideDateTime
   * object.
   */
  getTime(): GlideTime;
  /**
   * Gets the time zone offset in milliseconds.
   */
  getTZOffset(): number;
  /**
   * Returns the object's time in the local time zone and in the user's format.
   */
  getUserFormattedLocalTime(): string;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
   */
  getValue(): string;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the
   * current user's time zone. All weeks begin on Sunday. The first week of the year is the week that
   * contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered
   * the first week of 2016 as that week contains January 1 and 2.
   */
  getWeekOfYearLocalTime(): number;
  /**
   * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC
   * time zone. All weeks begin on Sunday. The first week of the year is the week that contains at
   * least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week
   * of 2016 as that week contains January 1 and 2.
   */
  getWeekOfYearUTC(): number;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the current user's time
   * zone.
   */
  getYearLocalTime(): number;
  /**
   * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
   */
  getYearUTC(): number;
  /**
   * Determines if an object's date is set.
   */
  hasDate(): boolean;
  /**
   * Determines if an object's time uses a daylight saving offset.
   */
  isDST(): boolean;
  /**
   * Determines if a value is a valid date and time.
   */
  isValid(): boolean;
  /**
   * Determines if the GlideDateTime object occurs on or after the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  onOrAfter(gdt: GlideDateTime): boolean;
  /**
   * Determines if the GlideDateTime object occurs on or before the specified
   * GlideDateTime.
   * @param gdt The time to check against.
   */
  onOrBefore(gdt: GlideDateTime): boolean;
  /**
   * Sets the day of the month to a specified value in the current user's time
   * zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the month.
   */
  setDayOfMonthLocalTime(day: number): void;
  /**
   * Sets the day of the month to a specified value in the UTC time zone.
   * @param day The day of month to change to, from 1 to 31. If this value is greater than the
   * maximum number of days in the month, the value is set to the last day of the month.
   */
  setDayOfMonthUTC(day: number): void;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param asDisplayed The date and time in the current user's display format and time zone. The
   * parameter must be formatted using the current user's preferred display format, such
   * as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a
   * workflow script, use
   * variable.setDisplayValue(gs.nowDateTime);.
   */
  setDisplayValue(asDisplayed: string): void;
  /**
   * Sets a date and time value using the current user's display format and time
   * zone.
   * @param value The date and time in the current user's time zone.
   * @param format The date and time format to use to parse the value
   * parameter.
   */
  setDisplayValue(value: string, format: string): void;
  /**
   * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the
   * current user's time zone.
   * @param value The date and time in internal format.
   */
  setDisplayValueInternal(value: string): void;
  /**
   * Sets the date and time of the current object using an existing GlideDateTime object.
   * This method is equivalent to instantiating a new object with a GlideDateTime
   * parameter.
   * @param g The object to use for setting the datetime value.
   */
  setGlideDateTime(g: GlideDateTime): void;
  /**
   * Sets the month stored by the GlideDateTime object to the specified value using the
   * current user's time zone.
   * @param month The month to change to.
   */
  setMonthLocalTime(month: number): void;
  /**
   * Sets the month stored by the GlideDateTime object to the specified value using the UTC
   * time zone.
   * @param month The month to change to.
   */
  setMonthUTC(month: number): void;
  /**
   * Sets the date and time of the GlideDateTime object.
   * @param o The date and time to use. This parameter may be one of several types:
   * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss.
   * Sets the value of the object to the specified date and time. Using the method
   * this way is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(String value) constructor. If the date and time
   * format used does not match the internal format, the method attempts to set the
   * date and time using other available formats. Resolving the date and time this
   * way can lead to inaccurate data due to ambiguity in the day and month values.
   * When using a non-standard date and time format, use
   * etValueUTC(String dt, String format) instead.
   *
   * A GlideDateTime object. Sets the value of the object to the date and time
   * stored by the GlideDateTime passed in the parameter. Using the method this way
   * is equivalent to instantiating a new GlideDateTime object using the
   * GlideDateTime(GlideDateTime g) constructor.
   *
   * A JavaScript Number. Sets the value of the object using the Number value as
   * milliseconds past January 1, 1970 00:00:00 GMT.
   *
   *
   */
  setValue(o: string): void;
  /**
   * Sets a date and time value using the UTC time zone and the specified date and time
   * format. This method throws a runtime exception if the date and time format used in the
   * dt parameter does not match the format parameter.
   * You can retrieve the error message by calling getErrorMsg() on the
   * GlideDateTime object after the exception is caught.
   * @param dt The date and time to use.
   * @param format The date and time format to use.
   */
  setValueUTC(dt: string, format: string): void;
  /**
   * Sets the year stored by the GlideDateTime object to the specified value using the
   * current user's time zone.
   * @param year The year to change to.
   */
  setYearLocalTime(year: number): void;
  /**
   * Sets the year stored by the GlideDateTime object to the specified value using the UTC
   * time zone.
   * @param year The year to change to.
   */
  setYearUTC(year: number): void;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param Start The start value.
   * @param End The end value.
   */
  subtract(Start: GlideDateTime, End: GlideDateTime): GlideDuration;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param time The time value to subtract.
   */
  subtract(time: GlideTime): void;
  /**
   * Gets the duration difference between two GlideDateTime values.
   * @param milliseconds The number of milliseconds to subtract.
   */
  subtract(milliseconds: number): void;
  /**
   * Gets the date and time value stored by the GlideDateTime object in the internal format,
   * yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to
   * getValue().
   */
  toString(): string;
}
export { SNAPIGlideDateTime };

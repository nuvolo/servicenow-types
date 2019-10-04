import { GlideDateTime } from './GlideDateTime';
import { GlideDuration } from './GlideDuration';
declare class SNAPIGlideSchedule {
  /**
   * Adds a new schedule segment to the current schedule.
   * @param startDate The starting date of the new schedule segment.
   * @param offSet The time offset of the new schedule segment.
   */
  add(startDate: GlideDateTime, offSet: GlideDuration): GlideDateTime;
  constructor();
  constructor(sysID: string, timeZone?: string);
  /**
   * Determines the elapsed time in the schedule between two date time values using the
   * timezone of the schedule or, if that is not specified, the timezone of the session.
   * @param startDate The starting datetime.
   * @param endDate The ending datetime.
   */
  duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
  /**
   * Retrieves the schedule name.
   */
  getName(): string;
  /**
   * Determines if the given datetime is within the current schedule.
   * @param time The datetime value to check.
   */
  isInSchedule(time: GlideDateTime): boolean;
  /**
   * Determines if the current schedule is valid. A schedule is valid if it has at least one
   * schedule span.
   */
  isValid(): boolean;
  /**
   * Loads a schedule with the schedule information.
   * @param sysID The system ID of the schedule.
   * @param timeZone (Optional) The timezone. If a timezone is not specified, or is nil, the current
   * session timezone is used for the schedule.
   * @param excludeSpanID Any span to exclude.
   */
  load(
    sysID: string,
    timeZone: string | undefined,
    excludeSpanID: string
  ): void;
  /**
   * Sets the timezone for the current schedule.
   * @param timeZone The timezone.
   */
  setTimeZone(timeZone: string): void;
  /**
   * Determines how much time (in milliseconds) until start time of the next schedule
   * item.
   * @param time Time to be evaluated
   * @param timeZone Timezone
   */
  whenNext(time: GlideDateTime, timeZone: string): number;
}
export { SNAPIGlideSchedule };

import { GlideRecord } from './GlideRecord';
declare class SNAPIGlideFilter {
  /**
   * Compares a specified filter to the contents of a specified GlideRecord.
   * @param gr GlideRecord to evaluate.
   * @param filter Encoded query string (case-sensitive).
   * @param match Optional. Flag that indicates whether all conditions must be met if
   * the filter parameter contains multiple conditions. Valid
   * values:
   *
   * true: all conditions must be met for the method to return true
   *
   * false: only one of the conditions must be met for the method to return
   * true
   *
   *
   * Default: true
   */
  checkRecord(gr: GlideRecord<any>, filter: string, match?: boolean): boolean;
}
export { SNAPIGlideFilter };

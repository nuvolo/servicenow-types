import { SNAPIGlideFilter } from './SNAPIGlideFilter';
import { GlideRecord } from './GlideRecord';
declare class GlideFilter extends SNAPIGlideFilter {
  /**
   * Compares a specified filter to the contents of a specified GlideRecord.
   * Static method: does not require instantiation of GlideFilter class
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
  static checkRecord(
    gr: GlideRecord<any>,
    filter: string,
    match?: boolean,
  ): boolean;
}
export { GlideFilter };

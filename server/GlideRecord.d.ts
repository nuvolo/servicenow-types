import { SNAPIGlideRecord } from "./SNAPIGlideRecord";
declare class GlideRecord extends SNAPIGlideRecord {
  /**
   * Returns the specified record in an instantiated GlideRecord object.
   * @param sys_id sys_id of the record to get.
   */
  get(sys_id: string): boolean;
  /**
   * Returns the specified record in an instantiated GlideRecord object.
   * @param fieldName Name of the instantiated GlideRecord column to search for the
   * specified value parameter. If only a single parameter is
   * passed in, the method assumes that this parameter is sys_id.
   * @param value Value to match.
   */
  get(fieldName: string, value: string): boolean;
}
export { GlideRecord };

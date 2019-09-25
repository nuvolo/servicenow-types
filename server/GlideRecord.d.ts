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
  /**
   * Runs the query against the table based on the filters specified by addQuery,
   * addEncodedQuery, etc.
   * @param field Column name to query on.
   * @param value Value to query for.
   */
  query(): void;
  query(name: any, value: any): void;
  /**
   * Identical to query(). This method is intended to be used on tables
   * where there is a column named query, which would interfere with using the
   * query() method.
   * @param name Column name on which to query
   * @param value Value for which to query
   */
  _query(): void;
  _query(name: any, value: any): void;
}
export { GlideRecord };

declare class SNAPIGlideRecord {
  constructor(tableName: string);
  /**
   * Adds a column to order by in the query.
   * @param column The column by which to order the result set.
   */
  addOrderBy(column: string): void;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param name Name of the field to check.
   * @param operator Query operator. The available values are dependent on the data type of the
   * value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * NOT IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOES NOT CONTAIN
   *
   * INSTANCEOF
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, operator: any, value: any): void;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param name Name of the field to check.
   * @param value Value on which to query.
   */
  addQuery(name: string, value: any): void;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param query An encoded query string.
   */
  addQuery(query: string): void;
  /**
   * Deletes the current record.
   * @param responseFunction The response function for the Ajax callback.
   */
  deleteRecord(responseFunction: any): boolean;
  /**
   * Executes a GlideRecord query for a record with the specified sys_id. This method is
   * expected to be used to query for single records, so a next operation is performed before
   * returning.
   * @param sys_id The sys_id of the record to be found.
   */
  get(sys_id: any): boolean;
  /**
   * Retrieves the query condition of the current result set as an encoded query
   * string.
   */
  getEncodedQuery(): string;
  /**
   * Returns the limit for records to be returned by the GlideRecord query.
   */
  getLimit(): number;
  /**
   * Retrieves the name of the table associated with this GlideRecord.
   */
  getTableName(): string;
  /**
   * Determines if there are any more records in the GlideRecord.
   */
  hasNext(): boolean;
  /**
   * Inserts a new record using the field values that have been set for the current
   * record.
   * @param responseFunction The response function.
   */
  insert(responseFunction: any): string;
  /**
   * Moves to the next record in the GlideRecord.
   */
  next(): boolean;
  /**
   * Specifies an orderBy column. May be called more than once to order by multiple
   * columns.
   * @param column The column name to be used to order the result set.
   */
  orderBy(column: string): void;
  /**
   * Runs the query against the table based on the addQuery() filter. This queries the
   * GlideRecord table as well as any references of the table.
   * @param responseFunction The response function for the Ajax callback.
   */
  query(responseFunction: any): void;
  /**
   * Sets the limit for how many records are in the GlideRecord.
   * @param maxQuery The limit for the number of records to retrieve.
   */
  setLimit(maxQuery: number): void;
}
export { SNAPIGlideRecord };

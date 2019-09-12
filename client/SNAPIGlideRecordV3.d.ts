declare class SNAPIGlideRecordV3 {
  constructor(tableName: string);
  /**
   * Adds a column to order by in the query.
   * @param column The column by which to order the result set.
   */
  addOrderBy(column: string): void;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param fieldName Name of the field to be checked.
   * @param operator An operator for the query.
   * @param value The value to use.
   */
  addQuery(fieldName: string, operator: any, value: any): void;
  /**
   * Adds a filter to return records where the field meets the specified condition (field,
   * operator, value).
   * @param fieldName Name of the field to be checked.
   * @param value The value or list of values on which to query.
   */
  addQuery(fieldName: string, value: any): void;
  /**
   * Deletes the current record.
   * @param responseFunction The response function.
   */
  deleteRecord(responseFunction: any): boolean;
  /**
   * Get a record by sysID.
   * @param sysId The sysID of the record for which to search.
   */
  get(sysId: string): boolean;
  /**
   * Retrieves all query conditions as an encoded query string.
   */
  getEncodedQuery(): string;
  /**
   * Gets the name of the table associated with the GlideRecord.
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
   * @param column The column to add to sort the result set.
   */
  orderBy(column: string): void;
  /**
   * Performs a query. Takes zero or more parameters. Parameters may be in any order. Any
   * function is considered to be a response function. Any pair of literals is considered a query
   * pair (field : value).
   * @param responseFunction The function called when the query results are available. (optional)
   * @param name A field name. (optional)
   * @param value The field value to check for. (optional)
   */
  query(responseFunction?: any, name?: string, value?: string): void;
}
export { SNAPIGlideRecordV3 };

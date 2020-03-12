import { GlideQueryCondition } from './GlideQueryCondition';
import { GlideElementDescriptor } from './GlideElementDescriptor';
import { GlideElement } from './GlideElement';
declare class SNAPIGlideRecord {
  /**
   * Adds a filter to return active records.
   */
  addActiveQuery(): GlideQueryCondition<any>;
  /**
   * Adds an encoded query to other queries that may have been set.
   * @param query An encoded query
   * string.
   */
  addEncodedQuery(query: string): void;
  /**
   * Applies a pre-defined GlideDBFunctionBuilder object to a record.
   * @param _function A GlideDBFunctionBuilder object that defines a SQL operation.
   */
  addFunction(_function: any): void;
  constructor(tableName: string);
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param joinTable Table name
   * @param primaryField (Optional) If other than sys_id, the primary field
   * @param joinTableField (Optional) If other than sys_id, the field that joins the tables.
   */
  addJoinQuery(
    joinTable: string,
    primaryField?: any,
    joinTableField?: any,
  ): GlideQueryCondition<any>;
  /**
   * A filter that specifies records where the value of the field passed in the parameter is
   * not null.
   * @param fieldName Name of the field to check.
   */
  addNotNullQuery(fieldName: string): GlideQueryCondition<any>;
  /**
   * Adds a filter to return records where the value of the specified field is
   * null.
   * @param fieldName Name of the field to check.
   */
  addNullQuery(fieldName: string): GlideQueryCondition<any>;
  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   * @param name Table field name.
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(name: string, value: any): GlideQueryCondition<any>;
  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   * @param name Table field name.
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
  addQuery(
    name: string,
    operator: string,
    value: any,
  ): GlideQueryCondition<any>;
  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   */
  addQuery(): GlideQueryCondition<any>;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit
   * inserting new records in this table.
   */
  canCreate(): boolean;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit deleting
   * records in this table.
   */
  canDelete(): boolean;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit reading
   * records in this table.
   */
  canRead(): boolean;
  /**
   * Determines if the Access Control Rules, which include the user's roles, permit editing
   * records in this table.
   */
  canWrite(): boolean;
  /**
   * Sets a range of rows to be returned by subsequent queries.
   * @param firstRow The first row to include. Because the index starts at 0, a value of 0 returns
   * the first row.
   * @param lastRow The last row to include in the range. Because the index starts at 0, use the
   * value n - 1, in which n equals the actual row number.
   * @param forceCount If true, the getRowCount() method will return all possible records.
   */
  chooseWindow(firstRow: number, lastRow: number, forceCount: boolean): void;
  /**
   * Deletes multiple records that satisfy the query condition.
   */
  deleteMultiple(): void;
  /**
   * Deletes the current record.
   */
  deleteRecord(): boolean;
  /**
   * Returns the specified record in an instantiated GlideRecord object.
   * @param name Optional. Name of the instantiated GlideRecord column to search for the
   * specified value parameter. If only a single parameter is
   * passed in, the method assumes that this parameter is sys_id.
   * @param value Value to match.
   */
  get(name: any | undefined, value: any): boolean;
  /**
   * Returns the dictionary attributes for the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: string): string;
  /**
   * Returns the table's label.
   */
  getClassDisplayValue(): string;
  /**
   * Retrieves the display value for the current record.
   */
  getDisplayValue(): string;
  /**
   * Returns the element's descriptor.
   */
  getED(): GlideElementDescriptor;
  /**
   * Retrieves the GlideElement object for the specified field.
   * @param columnName Name of the column to get the element from.
   */
  getElement(columnName: string): GlideElement;
  /**
   * Retrieves the query condition of the current result set as an encoded query string.
   */
  getEncodedQuery(): string;
  /**
   * Returns the field's label.
   */
  getLabel(): string;
  /**
   * Retrieves the last error message. If there is no last error message, null is returned.
   */
  getLastErrorMessage(): string;
  /**
   * Retrieves a link to the current record.
   * @param noStack If true, the sysparm_stack parameter is not appended to the link. The parameter
   * sysparm_stack specifies the page to visit after closing the current link.
   */
  getLink(noStack: boolean): string;
  /**
   * Retrieves the class name for the current record.
   */
  getRecordClassName(): string;
  /**
   * Retrieves the number of rows in the query result.
   */
  getRowCount(): number;
  /**
   * Retrieves the name of the table associated with the GlideRecord.
   */
  getTableName(): string;
  /**
   * Gets the primary key of the record, which is usually the sys_id unless otherwise
   * specified.
   */
  getUniqueValue(): string;
  /**
   * Retrieves the string value of an underlying element in a field.
   * @param name The name of the field to get the value from.
   */
  getValue(name: string): string;
  /**
   * Determines if there are any more records in the GlideRecord object.
   */
  hasNext(): boolean;
  /**
   * Creates an empty record suitable for population before an insert.
   */
  initialize(): void;
  /**
   * Inserts a new record using the field values that have been set for the current record.
   */
  insert(): string;
  /**
   * Checks to see if the current database action is to be aborted.
   */
  isActionAborted(): boolean;
  /**
   * Verifies whether the specified encoded query is valid.
   * @param query Encoded query to validate.
   */
  isEncodedQueryValid(query: string): boolean;
  /**
   * Checks if the current record is a new record that has not yet been inserted into the
   * database.
   */
  isNewRecord(): boolean;
  /**
   * Determines if the table exists.
   */
  isValid(): boolean;
  /**
   * Determines if the specified field is defined in the current table.
   * @param columnName The name of the the field.
   */
  isValidField(columnName: string): boolean;
  /**
   * Determines if a record was actually returned by the query/get record
   * operation.
   */
  isValidRecord(): boolean;
  /**
   * Creates a new GlideRecord record, sets the default values for the fields, and assigns a
   * unique ID to the record.
   */
  newRecord(): void;
  /**
   * Moves to the next record in the GlideRecord object.
   */
  next(): boolean;
  /**
   * Retrieves the current operation being performed, such as insert, update, or delete.
   */
  operation(): string;
  /**
   * Specifies an orderBy column.
   * @param name The column name used to order the records in this GlideRecord object.
   */
  orderBy(name: string): void;
  /**
   * Specifies a decending orderBy column.
   * @param name The column name to be used to order the records in a GlideRecord object.
   */
  orderByDesc(name: string): void;
  /**
   * Runs the query against the table based on the filters specified by addQuery,
   * addEncodedQuery, etc.
   * @param field Column name to query on.
   * @param value Value to query for.
   */
  query(field: any, value: any): void;
  /**
   * Sets a flag to indicate if the next database action (insert, update, delete) is to be
   * aborted. This is often used in business rules.
   * @param b True to abort the next action. False if the action is to be allowed.
   */
  setAbortAction(b: boolean): void;
  /**
   * Sets the limit for number of records are fetched by the GlideRecord query.
   * @param maxNumRecords The maximum number of records to fetch.
   */
  setLimit(maxNumRecords: number): void;
  /**
   * Sets sys_id value for the current record.
   * @param guid The GUID to be assigned to the current record.
   */
  setNewGuidValue(guid: string): void;
  /**
   * Sets the value of the field with the specified name to the specified value.
   * @param name Name of the field.
   * @param value The value to assign to the field.
   */
  setValue(name: string, value: any): void;
  /**
   * Enables or disables the running of business rules, script engines, and
   * audit.
   * @param enable If true (default), enables business rules. If false, disables business
   * rules.
   */
  setWorkflow(enable: boolean): void;
  /**
   * Updates the GlideRecord with any changes that have been made. If the record does not
   * already exist, it is inserted.
   * @param reason Optional. Reason for the update. The reason appears in the audit
   * record.
   */
  update(reason?: string): string;
  /**
   * Updates each GlideRecord in a stated query with a specified set of changes.
   */
  updateMultiple(): void;
  /**
   * Moves to the next record in the GlideRecord. Provides the same functionality as
   * next(), it is  intended to be used in cases where the GlideRecord has a
   * column named next.
   */
  _next(): boolean;
  /**
   * Identical to query(). This method is intended to be used on tables
   * where there is a column named query, which would interfere with using the
   * query() method.
   * @param name Column name on which to query
   * @param value Value for which to query
   */
  _query(name: any, value: any): void;
}
export { SNAPIGlideRecord };

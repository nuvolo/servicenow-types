import { SNAPIGlideRecord } from './SNAPIGlideRecord';
import { GlideQueryCondition } from './GlideQueryCondition';
import { GlideElement } from './GlideElement';
import { QueryOperator, FieldType } from '../util';
declare class GlideRecordBase<T> extends SNAPIGlideRecord {
  /**
   * Adds a filter to return active records.
   */
  addActiveQuery(): GlideQueryCondition<T>;
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param joinTable Table name
   * @param primaryField (Optional) If other than sys_id, the primary field
   * @param joinTableField (Optional) If other than sys_id, the field that joins the tables.
   */
  addJoinQuery<TJoinTable>(
    joinTable: string,
    primaryField?: FieldType<T>,
    joinTableField?: FieldType<TJoinTable>,
  ): GlideQueryCondition<TJoinTable>;

  /**
   * A filter that specifies records where the value of the field passed in the parameter is
   * not null.
   * @param fieldName Name of the field to check.
   */
  addNotNullQuery(fieldName: FieldType<T>): GlideQueryCondition<T>;

  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   * @param fieldName Table field name.
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(): GlideQueryCondition<T>;
  addQuery(fieldName: FieldType<T>, value: any): GlideQueryCondition<T>;
  addQuery(
    name: FieldType<T>,
    operator: QueryOperator,
    value: any,
  ): GlideQueryCondition<T>;
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
  get(fieldName: FieldType<T>, value: string): boolean;

  /**
   * Returns the dictionary attributes for the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: FieldType<T>): string;

  /**
   * Retrieves the GlideElement object for the specified field.
   * @param fieldName Name of the column to get the element from.
   */
  getElement(fieldName: FieldType<T>): GlideElement;

  /**
   * Retrieves the string value of an underlying element in a field.
   * @param fieldName The name of the field to get the value from.
   */
  getValue(fieldName: FieldType<T>): string | null;

  /**
   * Specifies an orderBy column.
   * @param fieldName The column name used to order the records in this GlideRecord object.
   */
  orderBy(fieldName: FieldType<T>): void;

  /**
   * Specifies a decending orderBy column.
   * @param fieldName The column name to be used to order the records in a GlideRecord object.
   */
  orderByDesc(fieldName: FieldType<T>): void;

  /**
   * Sets the value of the field with the specified name to the specified value.
   * @param fieldName Name of the field.
   * @param value The value to assign to the field.
   */
  setValue(fieldName: FieldType<T>, value: any): void;
  /**
   * Runs the query against the table based on the filters specified by addQuery,
   * addEncodedQuery, etc.
   * @param field Column name to query on.
   * @param value Value to query for.
   */
  query(): void;
  query(name: FieldType<T>, value: any): void;
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

type GlideRecordConstructor = { new <T>(table: string): GlideRecord<T> };
type GlideRecord<T> = GlideRecordBase<T> & T;
declare const GlideRecord: GlideRecordConstructor;
export { GlideRecord };

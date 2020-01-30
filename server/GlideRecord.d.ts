import { SNAPIGlideRecord } from './SNAPIGlideRecord';
import { GlideQueryCondition } from './GlideQueryCondition';
import { GlideElement } from './GlideElement';
import { Override } from '../util';

/**
 * Operators available for filters and queries.
 * https://docs.servicenow.com/bundle/newyork-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html
 */
type QueryOperator =
  | 'STARTSWITH'
  | 'ENDSWITH'
  | '%'
  | 'LIKE'
  | '*'
  | 'NOTLIKE'
  | '!*'
  | '='
  | '!='
  | 'ISEMPTY'
  | 'ISNOTEMPTY'
  | 'ANYTHING'
  | 'EMPTYSTRING'
  | '<='
  | '<'
  | '>='
  | '>'
  | 'BETWEEN'
  | 'SAMEAS'
  | 'NSAMEAS'
  | 'DYNAMIC'
  | 'ONToday'
  | 'NOTONToday'
  | 'DATEPART'
  | 'RELATIVEGE'
  | 'RELATIVELE'
  | 'RELATIVEGT'
  | 'RELATIVELT'
  | 'RELATIVEEE'
  | 'MORETHAN'
  | 'LESSTHAN'
  | 'GT_FIELD'
  | 'LT_FIELD'
  | 'GT_OR_EQUALS_FIELD'
  | 'LT_OR_EQUALS_FIELD'
  | 'VALCHANGES'
  | 'CHANGESFROM'
  | 'CHANGESTO';

type GlideRecordField<T> = keyof T;

declare interface GlideRecord<T>
  extends Override<SNAPIGlideRecord, GlideRecord<T>> {}

declare class GlideRecord<T> {
  /**
   * Initialize a new Glide Record.
   * @param tableName Table name to query.
   */
  constructor(tableName: string);

  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param joinTable Table name
   * @param primaryField (Optional) If other than sys_id, the primary field
   * @param joinTableField (Optional) If other than sys_id, the field that joins the tables.
   */
  addJoinQuery(
    joinTable: string,
    primaryField?: GlideRecordField<T>,
    joinTableField?: any,
  ): GlideQueryCondition;

  /**
   * A filter that specifies records where the value of the field passed in the parameter is
   * not null.
   * @param fieldName Name of the field to check.
   */
  addNotNullQuery(fieldName: GlideRecordField<T>): GlideQueryCondition;

  /**
   * Adds a filter to return records where the value of the specified field is
   * null.
   * @param fieldName Name of the field to check.
   */
  addNullQuery(fieldName: GlideRecordField<T>): GlideQueryCondition;

  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   * @param fieldName Table field name.
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(fieldName: GlideRecordField<T>, value: any): GlideQueryCondition;

  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   * @param fieldName Table field name.
   * @param operator Query operator.
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(
    fieldName: GlideRecordField<T>,
    operator: QueryOperator,
    value: any,
  ): GlideQueryCondition;

  /**
   * Returns the specified record in an instantiated GlideRecord object.
   * @param fieldName Optional. Name of the instantiated GlideRecord column to search for the
   * specified value parameter. If only a single parameter is
   * passed in, the method assumes that this parameter is sys_id.
   * @param value Value to match.
   */
  get(sys_id: string): boolean;
  get(fieldName: GlideRecordField<T>, value: string): boolean;

  /**
   * Returns the dictionary attributes for the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: GlideRecordField<T>): string;
  /**
   * Retrieves the GlideElement object for the specified field.
   * @param fieldName Name of the column to get the element from.
   */
  getElement(fieldName: GlideRecordField<T>): GlideElement<T>;

  /**
   * Retrieves the string value of an underlying element in a field.
   * @param fieldName The name of the field to get the value from.
   */
  getValue(fieldName: GlideRecordField<T>): string;

  /**
   * Specifies an orderBy column.
   * @param fieldName The column name used to order the records in this GlideRecord object.
   */
  orderBy(fieldName: GlideRecordField<T>): void;

  /**
   * Specifies a decending orderBy column.
   * @param fieldName The column name to be used to order the records in a GlideRecord object.
   */
  orderByDesc(fieldName: GlideRecordField<T>): void;

  /**
   * Sets the value of the field with the specified name to the specified value.
   * @param fieldName Name of the field.
   * @param value The value to assign to the field.
   */
  setValue(fieldName: GlideRecordField<T>, value: any): void;

  /**
   * Runs the query against the table based on the filters specified by addQuery,
   * addEncodedQuery, etc.
   * @param name Column name to query on.
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

type GlideRecordProps<T> = T & GlideRecord<T>;

export { GlideRecord, GlideRecordProps };

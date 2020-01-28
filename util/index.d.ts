import {
  GlideRecord,
  GlideElement,
  sn_ws,
  GlideQueryCondition,
} from '../server';

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

/**
 * Override method and property signatures from TBase, and use the signatures provided in TOverride.
 */
type Override<TBase, TOverride> = Omit<TBase, keyof TOverride> & TOverride;

declare interface GlideRecordOverride<T> {
  /**
   * Adds a filter to return records based on a relationship in a related table.
   * @param joinTable Table name
   * @param primaryField (Optional) If other than sys_id, the primary field
   * @param joinTableField (Optional) If other than sys_id, the field that joins the tables.
   */
  addJoinQuery(
    joinTable: string,
    primaryField?: keyof T,
    joinTableField?: any,
  ): GlideQueryCondition;
  /**
   * A filter that specifies records where the value of the field passed in the parameter is
   * not null.
   * @param fieldName Name of the field to check.
   */
  addNotNullQuery(fieldName: keyof T): GlideQueryCondition;
  /**
   * Adds a filter to return records where the value of the specified field is
   * null.
   * @param fieldName Name of the field to check.
   */
  addNullQuery(fieldName: keyof T): GlideQueryCondition;
  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   * @param fieldName Table field name.
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(fieldName: keyof T, value: any): GlideQueryCondition;
  /**
   * Provides the ability to build a request, which when executed, returns the rows from the
   * specified table, that match the request.
   * @param fieldName Table field name.
   * @param operator Query operator.
   * @param value Value on which to query (not case-sensitive).
   */
  addQuery(
    fieldName: keyof T,
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
  get(fieldName: keyof T, value: string): boolean;
  /**
   * Returns the dictionary attributes for the specified field.
   * @param fieldName Field name for which to return the dictionary attributes
   */
  getAttribute(fieldName: keyof T): string;
  /**
   * Retrieves the GlideElement object for the specified field.
   * @param fieldName Name of the column to get the element from.
   */
  getElement(fieldName: keyof T): GlideElement;
  /**
   * Retrieves the string value of an underlying element in a field.
   * @param fieldName The name of the field to get the value from.
   */
  getValue(fieldName: keyof T): string;
  /**
   * Specifies an orderBy column.
   * @param fieldName The column name used to order the records in this GlideRecord object.
   */
  orderBy(fieldName: keyof T): void;
  /**
   * Specifies a decending orderBy column.
   * @param fieldName The column name to be used to order the records in a GlideRecord object.
   */
  orderByDesc(fieldName: keyof T): void;
  /**
   * Sets the value of the field with the specified name to the specified value.
   * @param fieldName Name of the field.
   * @param value The value to assign to the field.
   */

  setValue(fieldName: keyof T, value: any): void;
}

export type TypedGR<T> = T & Override<GlideRecord, GlideRecordOverride<T>>;

export type ReferenceGlideElement<T> = Override<
  GlideElement,
  {
    /**
     * Returns a TypedGR<T> for a given reference element.
     */
    getRefRecord(): TypedGR<T>;
  }
>;

type TypedRequestBody<T> = Override<
  sn_ws.RESTAPIRequestBody,
  {
    data: T;
  }
>;

export type TypedRESTAPIRequest<T> = Override<
  sn_ws.RESTAPIRequest,
  {
    body: TypedRequestBody<T>;
  }
>;

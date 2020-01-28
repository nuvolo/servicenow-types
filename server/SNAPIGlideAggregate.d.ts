import { GlideQueryCondition } from './GlideQueryCondition';
declare class SNAPIGlideAggregate {
  constructor(tableName: string);
  /**
   * Adds an aggregate.
   * @param agg Name of the aggregate to add, for example, COUNT, MIN, or MAX
   * @param name (Optional) Name of the column to aggregate. Null is the default.
   */
  addAggregate(agg: string, name?: string): void;
  /**
   * Adds an encoded query to the other queries that may have been set for this
   * aggregate.
   * @param query An encoded query to add to the aggregate.
   */
  addEncodedQuery(query: string): void;
  /**
   * Adds a not null query to the aggregate.
   * @param fieldname The name of the field.
   */
  addNotNullQuery(fieldname: string): GlideQueryCondition<any>;
  /**
   * Adds a null query to the aggregate.
   * @param fieldName The name of the field.
   */
  addNullQuery(fieldName: string): GlideQueryCondition<any>;
  /**
   * Adds a query to the aggregate.
   * @param name The query to add.
   * @param operator The operator for the query.
   * @param value The list of values to include in the query.
   */
  addQuery(
    name: string,
    operator: string,
    value: string,
  ): GlideQueryCondition<any>;
  /**
   * Adds a trend for a field.
   * @param fieldName The name of the field for which trending should occur.
   * @param timeInterval The time interval for the trend. The following choices are available: Year,
   * Quarter, Date, Week, DayOfWeek, Hour, Value.
   */
  addTrend(fieldName: string, timeInterval: string): void;
  /**
   * Gets the value of an aggregate from the current record.
   * @param agg The type of the aggregate, for example, SUM or Count.
   * @param name Name of the field to get the aggregate from.
   */
  getAggregate(agg: string, name: string): string;
  /**
   * Gets the query necessary to return the current aggregate.
   */
  getAggregateEncodedQuery(): string;
  /**
   * Retrieves the encoded query.
   */
  getEncodedQuery(): string;
  /**
   * Retrieves the number of rows in the GlideAggregate object.
   */
  getRowCount(): number;
  /**
   * Retrieves the table name associated with this GlideAggregate object.
   */
  getTableName(): string;
  /**
   * Gets the value of a field.
   * @param name The name of the field.
   */
  getValue(name: string): string;
  /**
   * Provides the name of a field to use in grouping the aggregates.
   * @param name Name of the field.
   */
  groupBy(name: string): void;
  /**
   * Determines if there are any more records in the GlideAggregate object.
   */
  hasNext(): boolean;
  /**
   * Moves to the next record in the GlideAggregate.
   */
  next(): boolean;
  /**
   * Orders the aggregates using the value of the specified field. The field will also be
   * added to the group-by list.
   * @param name Name of the field to order the aggregates by.
   */
  orderBy(name: string): void;
  /**
   * Orders the aggregates based on the specified aggregate and field.
   * @param agg Type of aggregation.
   * @param fieldName Name of the field to aggregate.
   */
  orderByAggregate(agg: string, fieldName: string): void;
  /**
   * Sorts the aggregates in descending order based on the specified field. The field will
   * also be added to the group-by list.
   * @param name Name of the field.
   */
  orderByDesc(name: string): void;
  /**
   * Issues the query and gets the results.
   */
  query(): void;
  /**
   * Sets whether the results are to be grouped.
   * @param b When true the results are grouped.
   */
  setGroup(b: boolean): void;
}
export { SNAPIGlideAggregate };

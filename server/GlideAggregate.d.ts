import { SNAPIGlideAggregate } from './SNAPIGlideAggregate';
import { FieldType, Aggregation, QueryOperator } from '../util';
import { GlideQueryCondition } from '.';

type GroupByField<T, TGroupBy extends FieldType<T>> = [TGroupBy] extends [never]
  ? FieldType<T>
  : TGroupBy;

type AggField<T, TGroupBy extends FieldType<T>> = [TGroupBy] extends [never]
  ? FieldType<T>
  : Exclude<FieldType<T>, TGroupBy>;

declare class GlideAggregateBase<
  T,
  TGroupBy extends FieldType<T> = never
> extends SNAPIGlideAggregate {
  /**
   * Adds an aggregate.
   * @param agg Name of the aggregate to add, for example, COUNT, MIN, or MAX
   * @param name (Optional) Name of the column to aggregate. Null is the default.
   */
  addAggregate(agg: Aggregation, name?: AggField<T, TGroupBy>): void;
  /**
   * Adds an encoded query to the other queries that may have been set for this
   * aggregate.
   * @param query An encoded query to add to the aggregate.
   */
  addEncodedQuery(query: string): void;
  /**
   * Adds a not null query to the aggregate.
   * @param fieldName The name of the field.
   */
  addNotNullQuery(fieldName: FieldType<T>): GlideQueryCondition<T>;
  /**
   * Adds a null query to the aggregate.
   * @param fieldName The name of the field.
   */
  addNullQuery(fieldName: FieldType<T>): GlideQueryCondition<any>;
  /**
   * Adds a query to the aggregate.
   * @param name The query to add.
   * @param operator The operator for the query.
   * @param value The list of values to include in the query.
   */
  addQuery(
    name: FieldType<T>,
    operator: QueryOperator,
    value: string,
  ): GlideQueryCondition<any>;
  /**
   * Adds a trend for a field.
   * @param fieldName The name of the field for which trending should occur.
   * @param timeInterval The time interval for the trend. The following choices are available: Year,
   * Quarter, Date, Week, DayOfWeek, Hour, Value.
   */
  addTrend(fieldName: FieldType<T>, timeInterval: string): void;
  /**
   * Gets the value of an aggregate from the current record.
   * @param agg The type of the aggregate, for example, SUM or Count.
   * @param name Name of the field to get the aggregate from.
   */
  getAggregate(agg: Aggregation, name: AggField<T, TGroupBy>): string;
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
  getValue(name: GroupByField<T, TGroupBy>): string;
  /**
   * Provides the name of a field to use in grouping the aggregates.
   * @param name Name of the field.
   */
  groupBy(name: GroupByField<T, TGroupBy>): void;
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
  orderBy(name: GroupByField<T, TGroupBy>): void;
  /**
   * Orders the aggregates based on the specified aggregate and field.
   * @param agg Type of aggregation.
   * @param fieldName Name of the field to aggregate.
   */
  orderByAggregate(agg: Aggregation, fieldName: AggField<T, TGroupBy>): void;
  /**
   * Sorts the aggregates in descending order based on the specified field. The field will
   * also be added to the group-by list.
   * @param name Name of the field.
   */
  orderByDesc(name: GroupByField<T, TGroupBy>): void;
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

type GlideAggregateConstructor = {
  new <T, TGroupBy extends FieldType<T> = never>(table: string): GlideAggregate<
    T,
    TGroupBy
  >;
};

type GlideAggregate<
  T,
  TGroupBy extends FieldType<T> = never
> = GlideAggregateBase<T, TGroupBy> & Pick<T, GroupByField<T, TGroupBy>>;

declare const GlideAggregate: GlideAggregateConstructor;

export { GlideAggregate, GroupByField, AggField };

import { TransformPart } from '../sn_clotho';
import { TransformResult } from '../sn_clotho';
import { GlideDateTime } from '../GlideDateTime';
import { GlideDuration } from '../GlideDuration';
declare class sn_clotho_SNAPITransformPart {
  /**
   * Add the specified number to the value in each time stamp.
   * @param constant The number to add to the value in each time stamp.
   */
  add(constant: number): TransformPart;
  /**
   * Aggregate the selected metric series into one series containing the average value for
   * each time stamp.
   */
  avg(): TransformPart;
  /**
   * Create a result set that for each time stamp returns specified number of bottom values.
   * This method results in 'count' number of series. Each value retains the label of its source
   * series.
   * @param count The number of series to return. The series are labeled 0 to count - 1.
   */
  bottom(count: number): TransformPart;
  /**
   * Replace the value in any time stamp that is greater than the specified value with the
   * specified value.
   * @param ceiling The maximum allowed value for any time stamp.
   */
  ceil(ceiling: number): TransformPart;
  /**
   * Mark this transform for collection.
   */
  collect(): TransformPart;
  /**
   * Aggregate the selected metric series into one series containing the number of values
   * for each time stamp.
   */
  count(): TransformPart;
  /**
   * Divide the value in each time stamp by the specified number.
   * @param constant The number by which to divide the value of each time stamp.
   */
  div(constant: number): TransformPart;
  /**
   * Create a series using the specified aggregator for the specified time.
   * @param aggregator Can be:
   * AVG
   *
   * CHISQUARE
   *
   * LAST
   *
   * MAX
   *
   * MEDIAN
   *
   * MIN
   *
   * STDDEV
   *
   *
   * For definitions of these options, see MetricBase transforms. .
   * @param duration The time period for doing
   */
  filter(aggregator: any, duration: any): TransformPart;
  /**
   * Replace the value in any time stamp that is less than the specified value with the
   * specified value.
   * @param floor The minimum value for any time stamp.
   */
  floor(floor: number): TransformPart;
  /**
   * Create series made up of the value that the specified percentage of values is below.
   * Returns a series for each fraction in the specified array.
   * @param fractions The fractions to use on the input series.
   */
  fractiles(fractions: any[]): TransformPart;
  /**
   * Return the part of the result relevant to this transform.
   */
  getResult(): TransformResult;
  /**
   * Specify a field to be used to group the data.
   * @param field A field in the table to be used to group the transform results.
   */
  groupBy(field: string): TransformPart;
  /**
   * Create a data value for a NaN data item by interpolating from adjacent data values.
   * @param count Specifies the number of data samples in each direction to check for a non NaN
   * value. If if a non NaN value is not found, NaN is used.
   */
  interpolate(count: any): TransformPart;
  /**
   * Perform an Interquartile range transform.
   */
  iqr(): TransformPart;
  /**
   * Add a label for the resulting series.
   * @param label The label for the transform results.
   */
  label(label: string): TransformPart;
  /**
   * Returns at most the specified number of values, starting at the most recent non-NaN
   * value.
   * @param count A number of time stamps.
   */
  limit(count: any): TransformPart;
  /**
   * Run a logarithm on the value in each time stamp where the result is the log of the
   * specified base for the time stamp value.
   * @param base The base for the logarithm calculation.
   */
  log(base: number): TransformPart;
  /**
   * Returns a series with the maximum value for each time stamp.
   */
  max(): TransformPart;
  /**
   * Create a series containing the median of values for each time stamp across a set of
   * series.
   */
  median(): TransformPart;
  /**
   * Specify the metric field to be used in the transform.
   * @param metric Name of the metric field.
   */
  metric(metric: string): TransformPart;
  /**
   * Returns a series with the minimum value for each time stamp.
   */
  min(): TransformPart;
  /**
   * Multiply the value in each time stamp by the specified number.
   * @param constant The number by which to multiply the value of each time stamp.
   */
  mul(constant: number): TransformPart;
  /**
   * Partition the series into intervals of the same duration.
   * @param aggregator The aggregator to use. Can be min, max, avg, or last.
   * @param duration The interval length.
   * @param base The zero offset for partitioning. For example, if you partition by day (24h),
   * then set the base to Monday at midnight in your time zone. If you partition by 30
   * days, then set the base to  1st day of the most recent month.
   */
  partition(
    aggregator: string,
    duration: GlideDateTime,
    base: GlideDateTime
  ): TransformPart;
  /**
   * Specify the number of data points to include in the result.
   * @param count The number of samples to include in the result.
   */
  resample(count: number): TransformPart;
  /**
   * Specify the number of data points to include in the result.
   * @param min The minimum number of samples to include in the result. If not enough samples
   * are available, interpolation is used to create samples.
   * @param max The maximum number of samples to include in the result.
   */
  resample(min: number, max: number): TransformPart;
  /**
   * Specify the number of data points to include in the result.
   * @param aggregator Can be LAST, AVG, MIN, or MAX.
   * @param duration The time period for the result set.
   */
  resample(aggregator: string, duration: GlideDuration): TransformPart;
  /**
   * Specify the number of data points to include in the result.
   * @param aggregator Can be LAST, AVG, MIN, or MAX.
   * @param numValues The number of samples to include in the result set.When the number of values
   * requested is greater than the number of values in the data for the requested time
   * period, interpolate() is used to add values between existing
   * points to reach the requested number of values.
   */
  resample(aggregator: string, numValues: number): TransformPart;
  /**
   * Round the value in each time stamp to the specified precision.
   * @param precision The value to be used in the rounding calculation.
   */
  round(precision: number): TransformPart;
  /**
   * Create a series containing the standard deviation of values for each time stamp across
   * a set of series.
   */
  stddev(): TransformPart;
  /**
   * Subtract the specified number from the value in each time stamp.
   * @param constant The number to subtract from the value in each time stamp.
   */
  sub(constant: any): TransformPart;
  /**
   * Aggregate the selected metric series into one series containing the sum of all values
   * for each time stamp.
   */
  sum(): TransformPart;
  /**
   * Create a result set that for each time stamp returns the specified number of top
   * values. This method results in 'count' number of series. Each value retains the label of its
   * source series.
   * @param count The number of series to return. The series are labeled 0 to count - 1.
   */
  top(count: number): TransformPart;
}
export { sn_clotho_SNAPITransformPart };

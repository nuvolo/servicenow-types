import { GlideDateTime } from '../GlideDateTime';
import { DataBuilder } from '../sn_clotho';
declare class sn_clotho_SNAPIDataBuilder {
  /**
   * Add a series of data points to the DataBuilder object. Each data point is a time stamp
   * and a value.
   * @param start The time stamp for the first data point. Subsequent time stamps are calculated
   * using the retention policy collection period.
   * @param value An array of numbers.
   */
  add(start: GlideDateTime, value: any[]): DataBuilder;
  /**
   * Add a series of data points to the DataBuilder object. Each data point is a time stamp
   * and a value.
   * @param start The time stamp for the data point.
   * @param value The value of the data point.
   */
  add(start: GlideDateTime, value: number): DataBuilder;
  constructor(glideRecord: any, subject: string, metric: string);
}
export { sn_clotho_SNAPIDataBuilder };

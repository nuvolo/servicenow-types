import { GlideDateTime } from '../GlideDateTime';
declare class sn_clotho_SNAPIData {
  /**
   * Returns the end time for data in the Data object.
   */
  getEnd(): GlideDateTime;
  /**
   * Returns the label assigned by the
   * sn_clotho.ClothoTransform.label() method.
   */
  getLabel(): string;
  /**
   * Returns the name of the metric of the data series. Returns null when the data object is
   * associated with multiple data series.
   */
  getMetricName(): string;
  /**
   * Returns the time period in milliseconds.
   */
  getPeriod(): number;
  /**
   * Returns the start time for data in the Data object.
   */
  getStart(): GlideDateTime;
  /**
   * Returns the subject of the data series. Returns null when the data object is associated
   * with multiple data series.
   */
  getSubject(): string;
  /**
   * Returns the name of the table assigned in the DataSelector class constructor. Returns
   * null when the data object is associated with multiple data series.
   */
  getTableName(): string;
  /**
   * Returns an array of values.
   */
  getValues(): any[];
  /**
   * Returns the number of values in the Data object.
   */
  size(): number;
}
export { sn_clotho_SNAPIData };

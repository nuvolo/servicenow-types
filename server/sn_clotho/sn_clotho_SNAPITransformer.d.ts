import { GlideRecord } from '../GlideRecord';
import { GlideDateTime } from '../GlideDateTime';
import { TransformResult } from '../sn_clotho';
import { TransformPart } from '../sn_clotho';
declare class sn_clotho_SNAPITransformer {
  constructor(sourceRecords: GlideRecord<any>);
  /**
   * Run the transform.
   * @param start The beginning of the period to be evaluated.
   * @param end The end of the period to be evaluated.
   */
  execute(start: GlideDateTime, end: GlideDateTime): TransformResult;
  /**
   * Specify a field to be used to group the data.
   * @param field A field in the table to be used to group the transform results.
   */
  groupBy(field: string): TransformPart;
  /**
   * Specify the metric field to be used in the transform.
   * @param metricName Name of the metric field.
   */
  metric(metricName: string): TransformPart;
}
export { sn_clotho_SNAPITransformer };

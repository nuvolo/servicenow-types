import { sn_clotho_SNAPIClient } from './sn_clotho_SNAPIClient';
import { GlideRecord } from '../GlideRecord';
import { Override } from '../../util';
declare interface sn_clotho_Client<T>
  extends Override<sn_clotho_SNAPIClient, sn_clotho_Client<T>> {}

declare class sn_clotho_Client<T> {
  /**
   * Remove the data in the MetricBase database associated with
   * the specified metric in the specified GlideRecord. Use this method for removing test data.
   * @param gr The records whose time series data for the specified metric is to be
   * deleted.
   * @param metric The name of the metric.
   */
  deleteSeries(gr: GlideRecord<T>, metric: string): void;
}
export { sn_clotho_Client };

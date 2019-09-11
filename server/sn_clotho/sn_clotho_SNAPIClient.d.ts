import { GlideRecord } from "../GlideRecord";
import { DataBuilder } from "../sn_clotho";
declare class sn_clotho_SNAPIClient {
    constructor();
    /**
     * Remove the data in the <span class="ph">MetricBase</span> database associated with
     * the specified metric in the specified GlideRecord. Use this method for removing test data.
     * @param gr The records whose time series data for the specified metric is to be
     * deleted.
     * @param metric The name of the metric.
    */
    deleteSeries(gr: GlideRecord, metric: string): void;
    /**
     * Save metric data to the <span class="ph">MetricBase</span> database.
     * @param metricData A DataBuilder object containing metric data.
    */
    put(metricData: DataBuilder): void;
}
export { sn_clotho_SNAPIClient };

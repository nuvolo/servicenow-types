declare class sn_fd_SNAPIFlow {
  /**
   * Ignores the trigger and runs an activated flow asynchronously.
   * @param flowInputs Name-value pairs in &lt;String, Object&gt; format that define
   * record-based flow inputs.To call a flow with a record-based trigger, use the
   * format:var flowInputs = {};
   * flowInputs['current'] = glideRecord;
   * flowInputs['table_name'] = glideRecord.getTableName();
   *
   * The
   * GlideRecord object must be named 'current'.
   * To call a flow with a Service Catalog
   * trigger, use the
   * format:var flowInputs = {};
   * flowInputs['request_item'] = glideRecord;
   * flowInputs['table_name'] = glideRecord.getTableName();
   *
   * The
   * GlideRecord object must be named 'request_item'.
   */
  startAsync(flowInputs: any): any;
}
export { sn_fd_SNAPIFlow };

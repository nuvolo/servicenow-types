declare class sn_fd_SNAPIFlow {
  /**
   * Ignores the trigger and runs an activated flow asynchronously.
   * @param scopeName_flowName The application scope for the flow and the internal name of the flow to run. If
   * scopeName is not included, the scope of the user currently logged in is used.
   * Retrieve the internal name of the flow using the Internal
   * name column on the Flow Designer landing
   * page.
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
  startAsync(scopeName_flowName: string, flowInputs: any): any;
}
export { sn_fd_SNAPIFlow };

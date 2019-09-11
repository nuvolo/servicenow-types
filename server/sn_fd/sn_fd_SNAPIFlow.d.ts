declare class sn_fd_SNAPIFlow {
    /**
     * Ignores the trigger and runs an activated flow asynchronously.
     * @param scopeName_flowName The application scope for the flow and the internal name of the flow to run. If
     * scopeName is not included, the scope of the user currently logged in is used.
     * Retrieve the internal name of the flow using the <span class="ph uicontrol">Internal
     * name</span> column on the <span class="ph">Flow Designer</span> landing
     * page.
     * @param flowInputs Name-value pairs in <samp class="ph codeph">&lt;String, Object&gt;</samp> format that define
     * record-based flow inputs.<div class="p">To call a flow with a record-based trigger, use the
     * format:<pre class="pre codeblock">var flowInputs = {};
     * flowInputs['current'] = glideRecord;
     * flowInputs['table_name'] = glideRecord.getTableName();</pre>
     * </div>
     * <p class="p">The
     * GlideRecord object must be named 'current'.</p>
     * <div class="p">To call a flow with a <span class="ph">Service Catalog</span>
     * trigger, use the
     * format:<pre class="pre codeblock">var flowInputs = {};
     * flowInputs['request_item'] = glideRecord;
     * flowInputs['table_name'] = glideRecord.getTableName();</pre>
     * </div>
     * <p class="p">The
     * GlideRecord object must be named 'request_item'.</p>
    */
    startAsync(scopeName_flowName: string, flowInputs: any): any;
}
export { sn_fd_SNAPIFlow };

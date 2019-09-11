declare class sn_fd_SNAPISubflow {
    /**
     * Runs a published subflow asynchronously.
     * @param scopeName_subflowName The application scope for the subflow and the internal name of the subflow to
     * run. If scopeName is not included, the scope of the user currently logged in is
     * used. Retrieve the internal name of the subflow using the <span class="ph uicontrol">Internal
     * name</span> column on the <span class="ph">Flow Designer</span> landing
     * page.
     * @param inputs Name-value pairs that define subflow inputs. If a subflow includes mandatory
     * inputs, they must be included. For inputs of Reference or Document ID field types,
     * use a GlideRecord object as the value.
    */
    startAsync(scopeName_subflowName: string, inputs: any): any;
}
export { sn_fd_SNAPISubflow };

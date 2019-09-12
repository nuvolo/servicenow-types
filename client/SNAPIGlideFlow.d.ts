declare class SNAPIGlideFlow {
  /**
   * Get an existing execution instance by ID.
   * @param executionId The ID of the execution to be retrieved.
   */
  getExecution(executionId: string): any;
  /**
   * Start an action.
   * @param scopedName The scoped name of the flow to be executed.
   * @param inputs An object containing inputs defined for the action.
   */
  startAction(scopedName: string, inputs: any): any;
  /**
   * Start a flow.
   * @param scopedName The scoped name of the flow to be executed.
   * @param inputs An object containing inputs defined for the flow.
   */
  startFlow(scopedName: string, inputs: any): any;
  /**
   * Start a subflow.
   * @param scopedName The scoped name of the flow to be executed.
   * @param inputs An object containing inputs used for the subflow.
   */
  startSubflow(scopedName: string, inputs: any): any;
}
export { SNAPIGlideFlow };

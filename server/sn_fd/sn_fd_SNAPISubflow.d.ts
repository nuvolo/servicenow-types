declare class sn_fd_SNAPISubflow {
  /**
   * Runs a published subflow asynchronously.
   * @param inputs Name-value pairs that define subflow inputs. If a subflow includes mandatory
   * inputs, they must be included. For inputs of Reference or Document ID field types,
   * use a GlideRecord object as the value.
   */
  startAsync(inputs: any): any;
}
export { sn_fd_SNAPISubflow };

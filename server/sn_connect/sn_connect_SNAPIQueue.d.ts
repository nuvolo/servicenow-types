declare class sn_connect_SNAPIQueue {
  /**
   * Get an existing chat queue by sys_ID.
   * @param SysID The sysID of a queue from the chat_queue table.
   */
  get(SysID: string): any;
  /**
   * Add the current user to an existing Connect Support chat queue. Use a sysID
   * from the chat_queue table.
   * @param Question Type a question to add to the queue.
   */
  join(Question: string): void;
}
export { sn_connect_SNAPIQueue };

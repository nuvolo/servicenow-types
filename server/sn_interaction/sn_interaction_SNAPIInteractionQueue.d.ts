import { GlideRecord } from '../GlideRecord';
declare class sn_interaction_SNAPIInteractionQueue {
  /**
   * Assign the next interaction in a queue to the current user.
   */
  acceptNext(): any;
  /**
   * Get an existing interaction queue by sys_id.
   * @param queue Queue from the interaction_queue table.
   */
  get(queue: GlideRecord<any>): any;
  /**
   * Returns a list of agents who are online and assigned to a particular queue.
   */
  getAvailableAgents(): any[];
  /**
   * Check if a user is an agent for a queue.
   * @param queue Sys ID for a queue in the interaction_queue table.
   */
  isAgentFor(queue: GlideRecord<any>): boolean;
  /**
   * Find out whether the queue is in schedule.
   */
  isInSchedule(): any;
}
export { sn_interaction_SNAPIInteractionQueue };

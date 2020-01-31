import { GlideRecord } from '../GlideRecord';
declare class sn_interaction_SNAPIInteraction {
  /**
   * Accept a new interaction.
   */
  accept(): boolean;
  /**
   * Create an interaction.
   * @param options Field values for an interaction record. The channel field with the channel
   * sys_id and channel metadata are required. If a queue is not included in the
   * parameter, the system returns Interaction b2c0a3af202a1300964f959e0488de75
   * has no queue specified... running queue matching rules.
   */
  create(options: any): any;
  /**
   * Get an interaction record.
   * @param interaction Interaction record from the interaction table [interaction] that is retrieved
   * from the system.
   */
  getInteraction(interaction: GlideRecord<any>): any;
  /**
   * Transfer an interaction record to an agent using the sys_id for the agent.
   * @param SysID The sys_id of the user you want to transfer an interaction record to.
   */
  transferToAgent(SysID: string): void;
  /**
   * Transfer an interaction record to an interaction queue.
   * @param SysID The sys_id of the interaction queue you want to transfer the interaction record
   * to.
   */
  transferToQueue(SysID: string): void;
}
export { sn_interaction_SNAPIInteraction };

import { GlideRecord } from '../GlideRecord';
declare class sn_notification_SNAPIMessaging {
  /**
   * Sends a custom message to a third-party application in response to a messaging event.
   * For example, you can send a custom welcome message to a Slack channel when the Now Actions
   * application installs.
   * @param messagingApplication Third-party application to send a message to from the Messaging Entities
   * [messaging_application] table.
   * @param recipient Recipient of the message. When the instance receives an inbound message, you
   * can send a response to a Slack channel, Team, or individual user ID found in the
   * inbound payload.
   * @param messagingContent Message content to send from the Messaging Contents [messaging_content] table.
   * @param target Record used to define dynamic field values in the message. Table must match the
   * Target table field in the Messaging Contents record. If the
   * Messaging Contents record does not use a target table, set the value to null.
   */
  send(
    messagingApplication: GlideRecord<any>,
    recipient: string,
    messagingContent: GlideRecord<any>,
    target: GlideRecord<any>
  ): void;
}
export { sn_notification_SNAPIMessaging };

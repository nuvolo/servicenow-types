import { sn_notify_SNAPINotify } from './sn_notify_SNAPINotify';
import { GlideRecord } from '../GlideRecord';
import { NotifyPhoneNumber } from '../sn_notify';
import { Override } from '../../util';

declare interface sn_notify_Notify<T>
  extends Override<sn_notify_SNAPINotify, sn_notify_Notify<T>> {}

declare class sn_notify_Notify<T> {
  /**
   * Calls the specified E.164-compliant telephone number.
   * @param notifyPhoneNumber Notify phone number from which to make the call. When you initiate a call, the
   * outgoing call workflow for the number group associated with this number runs. Ensure
   * this workflow includes a join conference call activity to
   * connect the user to the conference call.
   * @param toPhoneNumber Phone number to call. Called numbers are added to the conference call.
   * @param conferenceCall Optional. If this parameter is passed in, the callers identified in the
   * toPhoneNumber parameter are automatically joined into the
   * conference call identified by this record. GlideRecord for the Notify Call
   * [notify_call] table which identifies the conference call record. This record is
   * automatically added to the outgoing call workflow scratchpad as the
   * workflow.scratchpad.conference_call variable.
   * @param userSysId Optional. Unique identifier (sys_id) of the user associated with the
   * call.
   * @param groupSysId Optional. Unique identifier (sys_id) of the group associated with the
   * call.
   * @param sourceRecord Optional. Source record that prompted this call.
   */
  call(
    notifyPhoneNumber: string,
    toPhoneNumber: string,
    conferenceCall?: GlideRecord<T>,
    userSysId?: string,
    groupSysId?: string,
    sourceRecord?: GlideRecord<T>,
  ): void;

  /**
   * Creates a new conference call GlideRecord.
   * @param sourceRecord Optional. Record that initiated the request to create the conference call. Used
   * to populate the source and table fields on notify_conference_call record.
   */
  conferenceCall(sourceRecord?: GlideRecord<T>): GlideRecord<T>;

  /**
   * Resumes a call after it was put in a queue (on hold).
   * @param callRecord GlideRecord<T> object on the Notify Call [notify_call] table with the held call
   * you want to resume.
   */
  dequeueCall(callRecord: GlideRecord<T>): void;

  /**
   * Forwards the specified call to a different call recipient.
   * @param call Notify call record or the telephony provider call ID, of the call to be
   * forwarded.
   * @param destination Notify phone number record or an E.164-compliant phone number, of the caller to
   * which to forward the call.
   * @param dtmf Dual Tone - Multi Frequency (DTMF) code to send upon call connection.
   */
  forwardCall(
    call: GlideRecord<T>,
    destination: GlideRecord<T>,
    dtmf: string,
  ): void;

  /**
   * Returns client tokens for any active telephony drivers for use in WebRTC or mobile
   * clients.
   * @param record GlideRecord to use to identify the Notify client, such as a group record or a
   * user record.
   */
  getTokens(record: GlideRecord<T>): string;

  /**
   * Removes the specified caller from the current Notify conference call.
   * @param participant GlideRecord object containing the Notify Participant [notify_participant]
   * record of the caller to remove from the conference call.
   */
  kick(participant: GlideRecord<T>): void;

  /**
   * Performs one or more activities on an active Notify phone call.
   * @param callRecord Notify Call [notify_call] record of the call for which to apply the
   * actions.
   * @param notifyAction NotifyAction object describing one or more activities to perform on the
   * call.
   */
  modifyCall(callRecord: GlideRecord<T>, notifyAction: any): void;

  /**
   * Mutes the specified conference call participant.
   * @param participantRecord GlideRecord from the notify_participant table for the participant to
   * mute.
   */
  mute(participantRecord: GlideRecord<T>): void;

  /**
   * Puts the specified call into a queue (on hold).
   * @param callRecord GlideRecord object of the Notify Call  record (notify_call table) to put on
   * hold.
   */
  queueCall(callRecord: GlideRecord<T>): void;

  /**
   * Sends a specified SMS message to the specified list of Notify clients (phone
   * numbers).
   * @param notifyPhoneNumber Phone number from which the SMS message is being sent.
   * @param toPhoneNumbers Comma separated list of E.164-compliant phone numbers to which to send the SMS
   * message.
   * @param messageBody SMS text to send.
   * @param source Source record that prompted this SMS message, such as an incident.
   */
  sendBulkSMS(
    notifyPhoneNumber: NotifyPhoneNumber,
    toPhoneNumbers: string,
    messageBody: string,
    source: GlideRecord<T>,
  ): string;

  /**
   * Sends an SMS text message to an E.164-compliant phone number.
   * @param notifyPhoneNumber Notify phone number or short code to which to send this SMS message.
   * @param toPhoneNumber E.164-compliant phone number to which to send the SMS message.
   * @param messageBody SMS text message.
   * @param source Source record that prompted this SMS message, such as an incident.
   */
  sendSMS(
    notifyPhoneNumber: NotifyPhoneNumber,
    toPhoneNumber: string,
    messageBody: string,
    source: GlideRecord<T>,
  ): string;

  /**
   * Unmutes the specified conference call participant.
   * @param participantRecord GlideRecord from the notify_participant table for the participant to
   * unmute.
   */
  unmute(participantRecord: GlideRecord<T>): void;
}

export { sn_notify_Notify };

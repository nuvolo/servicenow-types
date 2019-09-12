declare class sn_notify_SNAPINotifyPhoneNumber {
  /**
   * Returns the international dialing code for a Notify phone number.
   */
  getDialCode(): string;
  /**
   * Returns the ID of this phone number as defined by the telephony provider.
   */
  getID(): string;
  /**
   * Returns the numerical phone number for the current Notify caller.
   */
  getNumber(): string;
  /**
   * Returns the telephony provider associated with this phone number.
   */
  getOwner(): string;
  /**
   * Returns the country associated with the phone number.
   */
  getTerritory(): string;
  /**
   * Determines if the Notify phone number supports conference calls.
   */
  supportsConferenceCall(): boolean;
  /**
   * Determines if the Notify phone number supports receiving phone calls.
   */
  supportsIncomingPhoneCall(): boolean;
  /**
   * Determines if the Notify phone number supports receiving SMS messages.
   */
  supportsIncomingSMS(): boolean;
  /**
   * Determines if the Notify phone number supports initiating phone calls.
   */
  supportsOutgoingPhoneCall(): boolean;
  /**
   * Determines if the Notify phone number supports sending SMS messages.
   */
  supportsOutgoingSMS(): boolean;
  /**
   * Determines if the Notify phone number supports recording phone calls.
   */
  supportsRecording(): boolean;
  /**
   * Determines if the Notify phone number supports calls to a browser, such as in a WebRTC
   * implementation.
   */
  supportsWebRTC(): boolean;
}
export { sn_notify_SNAPINotifyPhoneNumber };

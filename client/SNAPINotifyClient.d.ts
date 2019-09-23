declare class SNAPINotifyClient {
  constructor(initializeVendorClientLazily: boolean, notifyConfig: any);
  /**
   * Registers an event handler to listen for changes in a Notify client.
   * @param event Name of the event to listen for. Instead of passing strings, use the
   * constants defined in SNC.Notify.STD_EVENTS.
   *
   * CALL_START: call has started and is in progress.
   *
   * CALL_CANCEL: caller canceled the call.
   *
   * CALL_INIT: WebRTC connected to a call (incoming or outgoing).
   *
   * CALL_DISCONNECT: current call has been disconnected.
   *
   * ERROR: Error occurred. Parameters: message(string),
   * errCode(string)
   * message: error message to display.
   *
   * errCode: Optional. Associated error code.
   *
   *
   *
   *
   * INCOMING_CALL: Call is coming in. Parameters: from(string),
   * to(string), callId(string), parentId(string), sysId(string),
   * isFromClient(boolean)
   * from: caller's phone number.
   *
   * to: called phone number.
   *
   * callId: SID of the call.
   *
   * parentId: parent notify_call reference. If skipParentId
   * is set to true, this parameter should not be passed.
   *
   * sysId: WebRTC-to-WebRTC calls only. Unique identifier
   * (sys_id) of the caller.
   *
   * isFromClient: WebRTC-to-WebRTC calls only. Flag that
   * indicates whether the call is from another WebRTC client.
   *
   *
   *
   *
   * CALL_MUTE: client is muted.
   *
   * CALL_UNMUTE: client is unmuted.
   *
   * OFFLINE: WebRTC session is not active.
   *
   * ONLINE: WebRTC session is ready. Must be set after calling the init()
   * method.
   *
   *
   */
  addEventListener(event?: string): any;
  /**
   * Calls the specified phone number or the phone number associated with a specified
   * user.
   * @param identifier JSON object that contains either a phone number to call or the sys_id of a
   * WebRTC user. Passing a user sys_id causes the call to be made through
   * browser-to-browser communication.You can obtain the user sys_id from the Notify
   * WebRTC Session table.
   * Note: If you provide both a phone number and user sys_id,
   * the method only uses the phone number.
   */
  call(identifier: any): void;
  /**
   * Kills the current Notify client, rendering it unusable.
   */
  destroy(): void;
  /**
   * Forwards an ongoing incoming or outgoing phone call to either a different phone number
   * or a different WebRTC client.
   * @param argument JSON object that contains the necessary information for forwarding the call to
   * either a phone number or a WebRTC client (user sys_id). You can obtain this sys_id
   * from the Notify WebRTC Session table.
   */
  forwardCall(argument: any): void;
  /**
   * Returns a list of clients available to accept calls.
   * @param callback Function to use to parse the list of clients. This function accepts a single
   * parameter, an array of JSON objects with the following
   * format:[{
   * sys_id: "...",  // user's sys_id
   * name: "..." // user's name
   * }]
   */
  getAvailableClients(callback: any): void;
  /**
   * Returns the parent call identifier for a specified call identifier, if one
   * exists.
   * @param callId Unique identifier of the call for which to return the parent call
   * identifier.
   * @param callback Function that obtains the JSON object that contains either the parent call
   * identifier or an error message if the identifier could not be obtained after several
   * tries.
   */
  getParentId(callId: string, callback: any): string;
  /**
   * Returns the normalized status of the current call.
   */
  getStatus(): string;
  /**
   * End the current call.
   */
  hangupCall(): void;
  /**
   * Initializes the client driver.
   */
  init(): void;
  /**
   * Mute or unmute the current client.
   * @param muted Mutes or unmutes the current call.
   * false: (or any non-true value) unmutes the current call.
   *
   * true: mutes the current call.
   *
   *
   */
  mute(muted: boolean): void;
  /**
   * Answers and connects to an incoming call from a WebRTC client.
   */
  pickupCall(): void;
  /**
   * Send one or more DTMF-valid digits over the current call.
   * @param digits One or more DTMF-valid digits.
   */
  sendDtmf(digits: string): void;
  /**
   * Sets the caller ID for the current client session.
   * @param value Phone number to use to make and receive calls.
   * @param autoSelectVendorCallback Optional.initializeVendorClientLazily must be set
   * to "true" in the constructor to use this function, otherwise an error is thrown.
   * Name of the callback function to call once the vendor is automatically set for
   * the specified phone number. With this option, the vendor does not need to be
   * specified in the constructor (notifyConfig.vendor). Auto
   * vendor selection is an asynchronous operation. Therefore, this callback is
   * required to indicate when it is safe to call
   * notifyConfig.init(), as this method requires that the vendor
   * be set before it is called. In addition, you must also check if
   * notifyConfig.vendor has been set in the callback to ensure
   * that a vendor has been specified.
   */
  setCallerId(value: string, autoSelectVendorCallback?: any): void;
  /**
   * Sets the availability of an active WebRTC client agent.
   * @param available Flag that indicates whether an active WebRTC client wants to receive calls.
   * false: client does not want to receive calls.
   *
   * true: client does want to receive calls.
   *
   *
   */
  setClientAvailable(available: boolean): void;
}
export { SNAPINotifyClient };

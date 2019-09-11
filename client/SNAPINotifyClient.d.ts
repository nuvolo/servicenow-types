import { Constant } from "./Constant";
declare class SNAPINotifyClient {
    constructor(initializeVendorClientLazily: boolean, notifyConfig: any, notifyConfig_autoLoadScriptResources: boolean, notifyConfig_callerId: number, notifyConfig_forceRefreshToken: boolean, notifyConfig_skipParentId: boolean, notifyConfig_vendor: Constant);
    /**
     * Registers an event handler to listen for changes in a Notify client.
     * @param event Name of the event to listen for. <p class="p">Instead of passing strings, use the
     * constants defined in <samp class="ph codeph">SNC.Notify.STD_EVENTS</samp>.</p>
     * <ul class="ul" id="NotifyClient-addEventListener_S_F__ul_dnl_vl4_3gb">
     * <li class="li">CALL_START: call has started and is in progress.</li>
     *
     * <li class="li">CALL_CANCEL: caller canceled the call.</li>
     *
     * <li class="li">CALL_INIT: WebRTC connected to a call (incoming or outgoing).</li>
     *
     * <li class="li">CALL_DISCONNECT: current call has been disconnected.</li>
     *
     * <li class="li">ERROR: Error occurred. Parameters: <samp class="ph codeph">message(string),
     * errCode(string)</samp><ul class="ul" id="NotifyClient-addEventListener_S_F__ul_tpd_1r4_3gb">
     * <li class="li"><samp class="ph codeph">message</samp>: error message to display.</li>
     *
     * <li class="li"><samp class="ph codeph">errCode</samp>: Optional. Associated error code.</li>
     *
     * </ul>
     * </li>
     *
     * <li class="li">INCOMING_CALL: Call is coming in. Parameters: <samp class="ph codeph">from(string),
     * to(string), callId(string), parentId(string), sysId(string),
     * isFromClient(boolean)</samp><ul class="ul" id="NotifyClient-addEventListener_S_F__ul_mtl_2r4_3gb">
     * <li class="li"><samp class="ph codeph">from</samp>: caller's phone number.</li>
     *
     * <li class="li"><samp class="ph codeph">to</samp>: called phone number.</li>
     *
     * <li class="li"><samp class="ph codeph">callId</samp>: SID of the call.</li>
     *
     * <li class="li"><samp class="ph codeph">parentId</samp>: parent notify_call reference. If skipParentId
     * is set to true, this parameter should not be passed.</li>
     *
     * <li class="li"><samp class="ph codeph">sysId</samp>: WebRTC-to-WebRTC calls only. Unique identifier
     * (sys_id) of the caller.</li>
     *
     * <li class="li"><samp class="ph codeph">isFromClient</samp>: WebRTC-to-WebRTC calls only. Flag that
     * indicates whether the call is from another WebRTC client.</li>
     *
     * </ul>
     * </li>
     *
     * <li class="li">CALL_MUTE: client is muted.</li>
     *
     * <li class="li">CALL_UNMUTE: client is unmuted.</li>
     *
     * <li class="li">OFFLINE: WebRTC session is not active.</li>
     *
     * <li class="li">ONLINE: WebRTC session is ready. Must be set after calling the init()
     * method.</li>
     *
     * </ul>
    */
    addEventListener(event: string): any;
    /**
     * Calls the specified phone number or the phone number associated with a specified
     * user.
     * @param identifier JSON object that contains either a phone number to call or the sys_id of a
     * WebRTC user. Passing a user sys_id causes the call to be made through
     * browser-to-browser communication.<p class="p">You can obtain the user sys_id from the Notify
     * WebRTC Session table.</p>
     * <div class="note note"><span class="notetitle">Note:</span> If you provide both a phone number and user sys_id,
     * the method only uses the phone number.</div>
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
     * format:<pre class="pre codeblock">[{
     * sys_id: "...",  // user's sys_id
     * name: "..." // user's name
     * }]</pre>
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
     * @param muted Mutes or unmutes the current call.<ul class="ul" id="r_Notify2WebRTCClient-mute_boolean__ul_wwg_ymh_wfb">
     * <li class="li">false: (or any non-true value) unmutes the current call.</li>
     *
     * <li class="li">true: mutes the current call.</li>
     *
     * </ul>
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
     * @param autoSelectVendorCallback <strong class="ph b">Optional.</strong><span class="keyword parmname">initializeVendorClientLazily</span> must be set
     * to "true" in the constructor to use this function, otherwise an error is thrown.
     * <p class="p">Name of the callback function to call once the vendor is automatically set for
     * the specified phone number. With this option, the vendor does not need to be
     * specified in the constructor (<span class="keyword parmname">notifyConfig.vendor</span>). Auto
     * vendor selection is an asynchronous operation. Therefore, this callback is
     * required to indicate when it is safe to call
     * <span class="keyword apiname">notifyConfig.init()</span>, as this method requires that the vendor
     * be set before it is called. In addition, you must also check if
     * <span class="keyword parmname">notifyConfig.vendor</span> has been set in the callback to ensure
     * that a vendor has been specified.</p>
    */
    setCallerId(value: string, autoSelectVendorCallback: any): void;
    /**
     * Sets the availability of an active WebRTC client agent.
     * @param available Flag that indicates whether an active WebRTC client wants to receive calls.<ul class="ul" id="r_NC-setClientAvailable_boolean__ul_fym_4vg_wfb">
     * <li class="li">false: client does not want to receive calls.</li>
     *
     * <li class="li">true: client does want to receive calls.</li>
     *
     * </ul>
    */
    setClientAvailable(available: boolean): void;
}
export { SNAPINotifyClient };

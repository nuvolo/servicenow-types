import { RESTResponseV2 } from '../sn_ws';
declare class sn_ws_SNAPIRESTMessageV2 {
  constructor();
  constructor(name: string, methodName: string);
  /**
   * Send the REST message to the endpoint.
   */
  execute(): RESTResponseV2;
  /**
   * Send the REST message to the endpoint asynchronously. The instance does not wait for a
   * response from the web service provider when making asynchronous calls.
   */
  executeAsync(): RESTResponseV2;
  /**
   * Get the URL of the endpoint for the REST message.
   */
  getEndpoint(): string;
  /**
   * Get the content of the REST message body.
   */
  getRequestBody(): string;
  /**
   * Get the value for an HTTP header specified in the REST message.
   * @param headerName The request header you want to get the value for.
   */
  getRequestHeader(headerName: string): string;
  /**
   * Get HTTP headers that were set by the REST client and the associated
   * values.
   */
  getRequestHeaders(): any;
  /**
   * Configures the REST message to save the returned response body as an attachment
   * record.
   * @param tableName Specify the table that contains the record you want to attach the saved file
   * to.
   * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
   * @param fileName Specify the file name to give to the saved file.
   */
  saveResponseBodyAsAttachment(
    tableName: string,
    recordSysId: string,
    fileName: string
  ): void;
  /**
   * Configures the REST message to save the returned response body as an attachment
   * record.
   * @param tableName Specify the table that contains the record you want to attach the saved file
   * to.
   * @param recordSysId Specify the sys_id of the record you want to attach the saved file to.
   * @param fileName Specify the file name to give to the saved file.
   * @param encryptContext Specify the sys_id of an encryption context. The saved file is encrypted using
   * this context.
   */
  saveResponseBodyAsAttachment(
    tableName: string,
    recordSysId: string,
    fileName: string,
    encryptContext: string
  ): void;
  /**
   * Set the credentials for the REST message using an existing basic auth or OAuth 2.0
   * profile.
   * @param type The type of authentication profile to use. Valid values are 'basic' to use
   * basic authentication, or 'oauth2' to use OAuth 2.0.
   * @param profileId The sys_id of an authentication profile record. When using basic auth, specify
   * the sys_id of a Basic Auth Configuration [sys_auth_profile_basic] record. When using
   * OAuth 2.0, specify the sys_id of a OAuth Entity Profile [oauth_entity_profile]
   * record.
   */
  setAuthenticationProfile(type: string, profileId: string): void;
  /**
   * Sets basic authentication headers for the REST message.
   * @param userName The username you want to use to authenticate the REST message.
   * @param userPass The password for the specified user.
   */
  setBasicAuth(userName: string, userPass: string): void;
  /**
   * Associate outbound requests and the resulting response record in the ECC queue. This
   * method only applies to REST messages sent through a MID Server.
   * @param correlator A unique identifier
   */
  setEccCorrelator(correlator: string): void;
  /**
   * Override a value from the database by writing to the REST message payload. This method
   * only applies to REST messages sent through a MID Server.
   * @param name The name of the parameter, such as source.
   * @param value The value to assign to the specified parameter.
   */
  setEccParameter(name: string, value: string): void;
  /**
   * Set the endpoint for the REST message.
   * @param endpoint The URL of the REST provider you want to interface with.
   */
  setEndpoint(endpoint: string): void;
  /**
   * The HTTP method this REST message performs, such as GET or PUT.
   * @param method The HTTP method to perform.
   */
  setHttpMethod(method: string): void;
  /**
   * Set the amount of time the REST message waits for a response from the web service
   * provider before the request times out.
   * @param timeoutMs The amount of time, in milliseconds, before the call to the REST provider times
   * out.
   */
  setHttpTimeout(timeoutMs: number): void;
  /**
   * Set the log level for this message and the corresponding response.
   * @param level The log level. Valid values are basic, elevated, and all.
   */
  setLogLevel(level: string): void;
  /**
   * Configure the REST message to communicate through a MID Server.
   * @param midServer The name of the MID Server to use. Your instance must have an active MID Server
   * with the specified name.
   */
  setMIDServer(midServer: string): void;
  /**
   * Set the mutual authentication protocol profile for the REST message.
   * @param profileName The Name of the protocol profile to use for mutual
   * authentication.
   */
  setMutualAuth(profileName: string): void;
  /**
   * Append a parameter to the end of the request URL with the form name=value.
   * @param name The name of the URL parameter to pass.
   * @param value The value to assign the URL parameter.
   */
  setQueryParameter(name: string, value: string): void;
  /**
   * Set the body content to send to the web service provider when using PUT or POST HTTP
   * methods.
   * @param body The request body to send.
   */
  setRequestBody(body: string): void;
  /**
   * Sets the request body using an existing attachment record.
   * @param attachmentSysId The sys_id of the Attachment [sys_attachment] record you want to send in this
   * REST message.
   */
  setRequestBodyFromAttachment(attachmentSysId: string): void;
  /**
   * Set the body content of a PUT or POST message using a binary stream.
   * @param stream The binary data to send, such as an attachment or a stream from a 3rd-party
   * service.
   */
  setRequestBodyFromStream(stream: any): void;
  /**
   * Set an HTTP header in the REST message to the specified value.
   * @param name The name of the header.
   * @param value The value to assign to the specified header.
   */
  setRequestHeader(name: string, value: string): void;
  /**
   * Override the default requestor profile for the REST message in order to retrieve an
   * OAuth access token associated with a different requestor.
   * @param requestorContext
   * @param requestorId
   */
  setRequestorProfile(requestorContext: string, requestorId: string): void;
  /**
   * Set a REST message function variable with the specified name from the REST message
   * record to the specified value.
   * @param name The name of the REST message variable. This parameter must be defined in the
   * REST message record before you can assign a value to it.
   * @param value The value to assign the variable.
   */
  setStringParameter(name: string, value: string): void;
  /**
   * Set a REST message function variable with the specified name from the REST message
   * record to the specified value.
   * @param name The name of the REST message variable. This parameter must be defined in the
   * REST message record before you can assign a value to it.
   * @param value The value to assign the variable.
   */
  setStringParameterNoEscape(name: string, value: string): void;
}
export { sn_ws_SNAPIRESTMessageV2 };

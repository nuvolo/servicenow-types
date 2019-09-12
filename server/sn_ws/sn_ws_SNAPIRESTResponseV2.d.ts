declare class sn_ws_SNAPIRESTResponseV2 {
  /**
   * Return all headers contained in the response, including any duplicate
   * headers.
   */
  getAllHeaders(): any;
  /**
   * Get the content of the REST response body.
   */
  getBody(): string;
  /**
   * Returns all cookies included in the response.
   */
  getCookies(): any;
  /**
   * Get the numeric error code if there was an error during the REST transaction.
   */
  getErrorCode(): number;
  /**
   * Get the error message if there was an error during the REST transaction.
   */
  getErrorMessage(): string;
  /**
   * Get the value for a specified header.
   * @param name The name of the header that you want the value for, such as Set-Cookie.
   */
  getHeader(name: string): string;
  /**
   * Get all headers returned in the REST response and the associated values.
   */
  getHeaders(): any;
  /**
   * Get the fully-resolved query sent to the REST endpoint..
   */
  getQueryString(): string;
  /**
   * Get the sys_id value of the attachment created from the response body
   * content.
   */
  getResponseAttachmentSysid(): string;
  /**
   * Get the numeric HTTP status code returned by the REST provider.
   */
  getStatusCode(): number;
  /**
   * Indicate if there was an error during the REST transaction.
   */
  haveError(): boolean;
  /**
   * Set the amount of time the instance waits for a response from the web service
   * provider.
   * @param timeoutSecs The amount of time, in seconds, to wait for this response.
   */
  waitForResponse(timeoutSecs: number): void;
}
export { sn_ws_SNAPIRESTResponseV2 };

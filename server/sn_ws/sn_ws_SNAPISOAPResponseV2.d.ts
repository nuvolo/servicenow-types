declare class sn_ws_SNAPISOAPResponseV2 {
  /**
   * Returns all headers contained in the response, including any duplicate
   * headers.
   */
  getAllHeaders(): any;
  /**
   * Get the content of the SOAP response body.
   */
  getBody(): string;
  /**
   * Returns all cookies included in the response.
   */
  getCookies(): any;
  /**
   * Get the numeric error code if there was an error during the SOAP
   * transaction.
   */
  getErrorCode(): number;
  /**
   * Get the error message if there was an error during the SOAP transaction.
   */
  getErrorMessage(): string;
  /**
   * Get the value for a specified HTTP header.
   * @param name The name of the header that you want the value for, such as Set-Cookie.
   */
  getHeader(name: string): string;
  /**
   * Get all HTTP headers returned in the SOAP response and the associated
   * values.
   */
  getHeaders(): any;
  /**
   * Get the numeric HTTP status code returned by the SOAP provider.
   */
  getStatusCode(): number;
  /**
   * Indicate if there was an error during the SOAP transaction.
   */
  haveError(): boolean;
  /**
   * Set the amount of time the instance waits for a response from the web service
   * provider.
   * @param timeoutSecs The amount of time, in seconds, to wait for this response.
   */
  waitForResponse(timeoutSecs: number): void;
}
export { sn_ws_SNAPISOAPResponseV2 };

import { RESTAPIResponseStream } from '../sn_ws';
declare class sn_ws_SNAPIRESTAPIResponse {
  /**
   * Get the ResponseStreamWriter for this response, allowing you to write directly to the
   * response stream.
   */
  getStreamWriter(): RESTAPIResponseStream;
  /**
   * Sets the body content to send in the web service response.
   * @param body The response body, as a JavaScript object.
   *
   * The body content is automatically serialized to JSON or XML depending on the
   * value of the Accept header passed in the request.
   */
  setBody(body: any): void;
  /**
   * Assigns a value to the Content-Type header in the web service response.
   * @param contentType The content type of the response body, such as application/json.
   */
  setContentType(contentType: string): void;
  /**
   * Configure the response to return an error.
   * @param error An error object.
   */
  setError(error: any): void;
  /**
   * Assign a value to a REST service response header.
   * @param header The header you want to set.
   * @param value The value to assign the specified header.
   */
  setHeader(header: string, value: string): void;
  /**
   * Sets the headers for the web service response.
   * @param headers A JavaScript object listing each header and the value to assign that
   * header.
   */
  setHeaders(headers: any): void;
  /**
   * Assigns a value to the Location header in the web service response.
   */
  setLocation(): void;
  /**
   * Sets the status code number for the web service response.
   * @param status The status code to send in the response, such as 200 to indicate success.
   * Passing a non-numerical value, such as a string, causes the status code to default
   * to 0.
   */
  setStatus(status: number): void;
}
export { sn_ws_SNAPIRESTAPIResponse };

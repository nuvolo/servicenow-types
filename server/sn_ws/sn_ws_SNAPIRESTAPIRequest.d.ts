import { sn_ws_SNAPIRESTAPIRequestBody } from './sn_ws_SNAPIRESTAPIRequestBody';
declare class sn_ws_SNAPIRESTAPIRequest {
  body: sn_ws_SNAPIRESTAPIRequestBody;
  headers: any;
  pathParams: any;
  queryParams: any;
  queryString: string;
  uri: string;
  url: string;
  /**
   * Returns the value of a specific header from the web service request.
   * @param header The name of the header, such as accept or
   * content-type.
   */
  getHeader(header: string): string;
  /**
   * Get the content types specified in the request Accept header.
   */
  getSupportedResponseContentTypes(): any[];
}
export { sn_ws_SNAPIRESTAPIRequest };

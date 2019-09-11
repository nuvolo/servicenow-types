import { RESTAPIRequestBody } from "../sn_ws";
declare class sn_ws_SNAPIRESTAPIRequest {
    body: RESTAPIRequestBody;
    headers: any;
    pathParams: any;
    queryParams: any;
    queryString: string;
    uri: string;
    url: string;
    /**
     * Returns the value of a specific header from the web service request.
     * @param header The name of the header, such as <span class="keyword parmname">accept</span> or
     * <span class="keyword parmname">content-type</span>.
    */
    getHeader(header: string): string;
    /**
     * Get the content types specified in the request Accept header.
    */
    getSupportedResponseContentTypes(): any[];
}
export { sn_ws_SNAPIRESTAPIRequest };

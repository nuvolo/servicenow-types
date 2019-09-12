declare class sn_ws_SNAPIRESTAPIRequestBody {
  data: any;
  dataStream: any;
  dataString: string;
  /**
   * Determine if there are additional entries in the request body.
   */
  hasNext(): boolean;
  /**
   * Retrieve one entry from the request body as a script object.
   */
  nextEntry(): any;
}
export { sn_ws_SNAPIRESTAPIRequestBody };

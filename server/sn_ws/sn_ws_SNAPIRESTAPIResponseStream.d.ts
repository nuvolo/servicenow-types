declare class sn_ws_SNAPIRESTAPIResponseStream {
  /**
   * Write an input stream to the response stream.
   * @param stream An attachment or a response stream from a third-party service.
   */
  writeStream(stream: any): void;
  /**
   * Write string data to the response stream.
   * @param data The string to add to the response data.
   */
  writeString(data: string): void;
}
export { sn_ws_SNAPIRESTAPIResponseStream };

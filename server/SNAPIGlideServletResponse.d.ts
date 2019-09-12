declare class SNAPIGlideServletResponse {
  /**
   * Sends a temporary redirect to the client.
   * @param location The URL to receive the response.
   */
  sendRedirect(location: string): void;
  /**
   * Sets the MIME type of the response
   * @param type The MIME type.
   */
  setContentType(type: string): void;
  /**
   * Sets a response header to the specified value.
   * @param key Specifies the header.
   * @param value The value to be assigned to the header. If the header exists, it is over
   * written.
   */
  setHeader(key: string, value: string): void;
  /**
   * Sets the status code for the response.
   * @param status The status to be set.
   */
  setStatus(status: number): void;
}
export { SNAPIGlideServletResponse };

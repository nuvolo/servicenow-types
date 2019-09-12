declare class SNAPIGlideServletRequest {
  /**
   * Returns the MIME type of the body of the request.
   */
  getContentType(): string;
  /**
   * Returns the header value.
   * @param name The name of the header to be retrieved.
   */
  getHeader(name: string): string;
  /**
   * Returns a comma-separated list of header names.
   */
  getHeaderNames(): string;
  /**
   * Returns the header values.
   * @param name Names of the headers to be retrieved.
   */
  getHeaders(name: string): string;
  /**
   * Returns the value of the parameter contained in the request URL.
   * @param name The name of the parameter to be retrieved. This can be the parameter endpoint
   * from the processor form.
   */
  getParameter(name: string): string;
  /**
   * Returns a list of the parameter names found in the request URL.
   */
  getParameterNames(): string;
  /**
   * Returns the query string from the request.
   */
  getQueryString(): string;
}
export { SNAPIGlideServletRequest };

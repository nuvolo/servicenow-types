declare class sn_auth_SNAPIGlideOAuthClientRequest {
  /**
   * Retrieves the grant type.
   */
  getGrantType(): string;
  /**
   * Retrieves the HTTP headers for the string you provide.
   * @param name The name of the parameter.
   */
  getHeader(name: string): any;
  /**
   * Retrieves the HTTP headers.
   */
  getHeaders(): any;
  /**
   * Retrieves the parameters for the parameter name you provide.
   * @param name The parameter name for which you want the parameters.
   */
  getParameter(name: string): string;
  /**
   * Retrieves the password.
   */
  getPassword(): string;
  /**
   * Retrieves the refresh token.
   */
  getRefreshToken(): string;
  /**
   * Retrieves the scope.
   */
  getScope(): string;
  /**
   * Retrieves the user name.
   */
  getUserName(): string;
  /**
   * Sets the grant type for the string you provide.
   * @param name The grant type.
   */
  setGrantType(name: string): void;
  /**
   * Retrieves the HTTP headers for the string you provide.
   * @param name The name of the parameter.
   * @param value The value of the parameter.
   */
  setHead(name: string, value: string): void;
  /**
   * Sets the parameters for the name:value pair of strings you provide.
   * @param name The parameter name for which you want the parameters.
   * @param value The value of the parameter.
   */
  setParameter(name: string, value: string): void;
  /**
   * Sets the password with the string you provide.
   * @param password The user name.
   */
  setPassword(password: string): void;
  /**
   * Sets the refresh token with the string you provide.
   * @param refreshToken The refresh token.
   */
  setRefreshToken(refreshToken: string): void;
  /**
   * Sets the scope for the string you provide.
   * @param scope The scope.
   */
  setScope(scope: string): void;
  /**
   * Sets the user name with the string you provide.
   * @param userName The user name.
   */
  setUserName(userName: string): void;
}
export { sn_auth_SNAPIGlideOAuthClientRequest };

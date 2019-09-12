declare class SNAPIGlideSession {
  /**
   * Retrieves a session client value previously set with
   * putClientData().
   * @param paramName Name of the client data to retrieve.
   */
  getClientData(paramName: string): string;
  /**
   * Returns the client IP address.
   */
  getClientIP(): string;
  /**
   * Returns the application currently selected in the application picker.
   */
  getCurrentApplicationId(): string;
  /**
   * Returns the session's language code.
   */
  getLanguage(): string;
  /**
   * Returns the session token.
   */
  getSessionToken(): string;
  /**
   * Returns the name of the session's time zone.
   */
  getTimeZoneName(): string;
  /**
   * Returns the URL on the stack. Returns null if the stack is empty.
   */
  getUrlOnStack(): string;
  /**
   * Returns true if the user is impersonating another user.
   */
  isImpersonating(): boolean;
  /**
   * Returns true if the session is interactive.
   */
  isInteractive(): boolean;
  /**
   * Returns true if the user is logged in.
   */
  isLoggedIn(): boolean;
  /**
   * Sets a session client value that can be retrieved with
   * getClientData(). This method is used in a server side script that runs when
   * a form is created.
   * @param paramName Name of the client data to set.
   * @param paramValue Value of the client data.
   */
  putClientData(paramName: string, paramValue: string): void;
}
export { SNAPIGlideSession };

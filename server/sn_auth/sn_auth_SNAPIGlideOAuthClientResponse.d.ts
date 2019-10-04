import { GlideOAuthToken } from '../sn_auth';
declare class sn_auth_SNAPIGlideOAuthClientResponse {
  /**
   * Retrieves all of the response information, including instance information.
   */
  getBody(): string;
  /**
   * Retrieves the HTTP response content header from an external OAuth provider.
   */
  getContentType(): string;
  /**
   * Retrieves the error message if authentication is not successful.
   */
  getErrorMessage(): string;
  /**
   * Retrieves the HTTP response code from the external OAuth provider.
   */
  getResponseCode(): string;
  /**
   * Retrieves the error message if authentication is not successful.
   */
  getResponseParameters(): any;
  /**
   * Retrieves the refresh token.
   */
  getToken(): GlideOAuthToken;
}
export { sn_auth_SNAPIGlideOAuthClientResponse };

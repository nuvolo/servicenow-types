import { GlideOAuthToken } from '../sn_auth';
import { GlideOAuthClientResponse } from '../sn_auth';
import { GlideOAuthClientRequest } from '../sn_auth';
declare class sn_auth_SNAPIGlideOAuthClient {
  /**
   * Retrieves the token for the client. You can use the token to check the expiration date
   * and perform a token renewal.
   * @param OAuthEntityName The OAuth entity.
   * @param requestor The request.
   */
  getToken(OAuthEntityName: string, requestor: string): GlideOAuthToken;
  /**
   * Retrieves the token for the client, with the request parameters encoded in JSON
   * format.
   * @param clientName The client name.
   * @param jsonString The JSON string for the client.
   */
  requestToken(
    clientName: string,
    jsonString: string
  ): GlideOAuthClientResponse;
  /**
   * Retrieves the token for the client, with the client name and the request set into a
   * GlideOAuthClientResponse object.
   * @param clientName The client name.
   * @param request The request.
   */
  requestTokenByRequest(
    clientName: string,
    request: GlideOAuthClientRequest
  ): GlideOAuthClientResponse;
  /**
   * Revokes the access or refresh token for the client, with the request and optional
   * header parameters set into a GlideOAuthClientRequest object.
   * @param clientName The client name.
   * @param accessToken The access token.
   * @param refreshToken The refresh token.
   * @param request The request.
   */
  revokeToken(
    clientName: string,
    accessToken: string,
    refreshToken: string,
    request: GlideOAuthClientRequest
  ): GlideOAuthClientResponse;
}
export { sn_auth_SNAPIGlideOAuthClient };

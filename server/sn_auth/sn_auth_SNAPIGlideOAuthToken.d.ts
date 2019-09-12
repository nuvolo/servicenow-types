declare class sn_auth_SNAPIGlideOAuthToken {
  /**
   * Retrieves the access token.
   */
  getAccessToken(): string;
  /**
   * Retrieves the sys_id of the token ID.
   */
  getAccessTokenSysID(): string;
  /**
   * Retrieves the lifespan of the access token in seconds.
   */
  getExpiresIn(): number;
  /**
   * Retrieves the lifespan of the access token in seconds.
   */
  getRefreshToken(): number;
  /**
   * Retrieves the sys_id of the refresh token.
   */
  getRefreshTokenSysID(): number;
  /**
   * Retrieves the scope, which is the amount of access granted by the access
   * token.
   */
  getScope(): string;
}
export { sn_auth_SNAPIGlideOAuthToken };

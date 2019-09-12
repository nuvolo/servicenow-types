declare class sn_cc_SNAPIStandardCredentialsProvider {
  constructor();
  /**
   * This function retrieves a credential object identified by the given sys ID.
   * @param sys_ID A string representing the sys ID of the credential record.
   */
  getCredentialByID(sys_ID: string): any;
  /**
   * This function returns an array of all credentials that match the given types and
   * tags.
   * @param types Types is an array of credential type names. For example, ["ssh",
   * "windows"]Note: If types are null or empty, any match returns a credential. If
   * types are specified, the credentials whose type matches one of the types
   * returns.
   * @param handles Handles is a comma-separated list of handle names. For example,
   * "ssh,jdbc"
   */
  getCredentials(types: string, handles: string): any;
}
export { sn_cc_SNAPIStandardCredentialsProvider };

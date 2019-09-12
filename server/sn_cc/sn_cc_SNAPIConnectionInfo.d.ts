declare class sn_cc_SNAPIConnectionInfo {
  /**
   * Returns the value of a connection info attribute with the specified name.
   */
  getAttribute(): void;
  /**
   * Returns the value of credential attributes for a specified connection.
   */
  getCredentialAttribute(): void;
  /**
   * Returns the connection attributes as a collection of key-value pairs.
   */
  getDataMap(): void;
  /**
   * Returns the extended attributes as a collection of key-value pairs.
   */
  getExtendedAttributes(): void;
}
export { sn_cc_SNAPIConnectionInfo };

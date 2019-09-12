declare class SNAPICertificateEncryption {
  constructor();
  /**
   * Generates the Message Authentication Code (MAC), which is used to authenticate a
   * message.
   * @param key Key to use to sign the message. Must be Base64 encoded.
   * @param algorithm Algorithm to use to generate the MAC: HmacSHA256, HmacSHA1, HmacMD5, and so
   * on.
   * @param data Data to process.
   */
  generateMac(key: string, algorithm: string, data: string): string;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from Trust Store
   * Cert.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param algorithm SHA-1, SHA-256, and so on
   */
  getThumbPrint(certificateID: string, algorithm: string): string;
  /**
   * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the keystore
   * entry.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Alias name for the certificate.
   * @param algorithm SHA-1, SHA-256, and so on.
   */
  getThumbPrintFromKeystore(
    certificateID: string,
    alias: string,
    algorithm: string
  ): string;
  /**
   * Signs the data using the private key and the given algorithm.
   * @param certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate]
   * table.
   * @param alias Private key name.
   * @param aliaspassword Password for the private key.
   * @param datatosign Data to sign.
   * @param algorithm SHA-1, SHA-256, and so on.
   */
  sign(
    certificateID: string,
    alias: string,
    aliaspassword: string,
    datatosign: string,
    algorithm: string
  ): string;
}
export { SNAPICertificateEncryption };

declare class SNAPIGlideElementDescriptor {
  /**
   * Returns the encryption type used for attachments on the element's table.
   */
  getAttachmentEncryptionType(): string;
  /**
   * Returns the element's encryption type.
   */
  getEncryptionType(): string;
  /**
   * Returns the element's internal data type.
   */
  getInternalType(): string;
  /**
   * Returns the element's label.
   */
  getLabel(): string;
  /**
   * Returns the element's length.
   */
  getLength(): number;
  /**
   * Returns the element's name.
   */
  getName(): string;
  /**
   * Returns the element's plural label.
   */
  getPlural(): string;
  /**
   * Returns true if an encrypted attachment has been added to the table.
   */
  hasAttachmentsEncrypted(): boolean;
  /**
   * Returns true if the element is an automatically generated or system field.
   */
  isAutoOrSysID(): boolean;
  /**
   * Returns true if the element is defined as a dropdown choice in its dictionary
   * definition.
   */
  isChoiceTable(): boolean;
  /**
   * Returns true if an element is encrypted.
   */
  isEdgeEncrypted(): boolean;
  /**
   * Returns true if the element is a virtual element.
   */
  isVirtual(): boolean;
}
export { SNAPIGlideElementDescriptor };

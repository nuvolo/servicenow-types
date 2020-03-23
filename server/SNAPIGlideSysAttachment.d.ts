import { GlideRecord } from './GlideRecord';
import { GlideScriptableInputStream } from './GlideScriptableInputStream';
declare class SNAPIGlideSysAttachment {
  constructor();
  /**
   * Copies attachments from the source record to the target record.
   * @param sourceTable Name of the table with the attachments to be copied.
   * @param sourceID The source table's sysID.
   * @param targetTable Name of the table to have the attachments added.
   * @param targetID The target table's sysID.
   */
  copy(
    sourceTable: string,
    sourceID: string,
    targetTable: string,
    targetID: string,
  ): string;
  /**
   * Deletes the specified attachment.
   * @param attachmentID The attachment's sysID.
   */
  deleteAttachment(attachmentID: string): void;
  /**
   * Returns the attachment content as a string.
   * @param sysAttachment The attachment record.
   */
  getContent(sysAttachment: GlideRecord<any>): string;
  /**
   * Returns the attachment content as a string with base64 encoding.
   * @param sysAttachment The attachment record.
   */
  getContentBase64(sysAttachment: GlideRecord<any>): string;
  /**
   * Returns a GlideScriptableInputStream object given the sysID of an
   * attachment.
   * @param sysID The attachment sysID.
   */
  getContentStream(sysID: string): GlideScriptableInputStream;
  /**
   * Inserts an attachment for the specified record.
   * @param record The record to which the attachment is to be attached.
   * @param fileName The attachment's file name.
   * @param contentType The attachment's content type.
   * @param content The attachment content.
   */
  write(
    record: GlideRecord<any>,
    fileName: string,
    contentType: string,
    content: string,
  ): string;
  /**
   * Inserts an attachment for the specified record using base64 encoded
   * content.
   * @param gr The record to which the attachment is to be attached.
   * @param fileName The attachment's file name.
   * @param contentType The attachment's content type.
   * @param content The attachment content in base64 format.
   */
  writeBase64(
    gr: GlideRecord<any>,
    fileName: string,
    contentType: string,
    content: string,
  ): string;
  /**
   * Inserts an attachment using the input stream.
   * @param gr The record to which the attachment is to be attached.
   * @param fileName The attachment's file name.
   * @param contentType The attachment's content type.
   * @param content The attachment content.
   */
  writeContentStream(
    gr: GlideRecord<any>,
    fileName: string,
    contentType: string,
    content: GlideScriptableInputStream,
  ): string;
}
export { SNAPIGlideSysAttachment };

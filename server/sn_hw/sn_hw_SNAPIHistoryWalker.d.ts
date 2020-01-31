import { GlideRecord } from '../GlideRecord';
declare class sn_hw_SNAPIHistoryWalker {
  constructor(tableName: string, sydId: string);
  constructor(tableName: string, sydId: string, useAudit: boolean);
  /**
   * Gets the update number of the current walked glide record.
   */
  getUpdateNumber(): number;
  /**
   * Gets the record filled with the history/audit data after walking to an update
   * number.
   */
  getWalkedRecord(): GlideRecord<any>;
  /**
   * Gets a copy of the record filled with the history/audit data after walking to an update
   * number.
   */
  getWalkedRecordCopy(): GlideRecord<any>;
  /**
   * Specifies if the record-level read access is applied on the record when retrieving from
   * the database.
   */
  isFieldLevelSecurity(): boolean;
  /**
   * Specifies if the record-level read access is applied on the record when retrieving from
   * the database.
   */
  isRecordLevelSecurity(): boolean;
  /**
   * Specifies if any of the methods that walk the record from one update to another,
   * support the “changes” data for each element.
   */
  isWithChanges(): boolean;
  /**
   * Specifies if journal type fields are populated from the historical values.
   */
  isWithJournalFields(): boolean;
  /**
   * Specifies if values are set for variables that are recorded in the history.
   */
  isWithVariables(): boolean;
  /**
   * Sets the field-level read access on each element before setting the historical value of
   * that element in the GlideRecord. If the field-level security is enabled, it prevents the API to
   * populate the fields of the walked record that the user of the API does not have access
   * to.
   * @param fieldLevelSecurity If set to true, field-level security is enabled. The default value is
   * true.
   */
  setFieldLevelSecurity(fieldLevelSecurity: boolean): void;
  /**
   * Sets the record-level read access on the record when retrieving from the database. The
   * record-level security prevents the API to retrieve the walked record if the user of the API does
   * not have access to the GlideRecord.
   * @param recordLevelSecurity If set to true, record-level read access security is enabled. The default value
   * is true.
   */
  setRecordLevelSecurity(recordLevelSecurity: boolean): void;
  /**
   * Sets the “changes” data support for each element for a method that walks the record
   * from one update to another.
   * @param withChanges If set to true, the “changes” data is supported for each element. The default
   * value is true.
   */
  setWithChanges(withChanges: boolean): void;
  /**
   * Specifies if journal type fields are populated from the historical values.
   * @param withJournalFields If set to true, include journal-type fields. Th default value is false.
   */
  setWithJournalFields(withJournalFields: boolean): void;
  /**
   * Specifies if variables are populated from the historical values.
   * @param withVariables If set to true, values are populated for variables. The default value is
   * false.
   */
  setWithVariables(withVariables: boolean): void;
  /**
   * Applies the appropriate history/audit data to get a walked GlideRecord to the state
   * when it was one update number backward. If the previous update count is missing from the
   * history/audit data, it will walk to the previous available update count.
   */
  walkBackward(): boolean;
  /**
   * Applies the appropriate history/audit data to get a walked GlideRecord to the state
   * when it was one update number forward. If next update count is missing from the history/audit
   * data, it will walk to the next available update count.
   */
  walkForward(): boolean;
  /**
   * Applies the appropriate history/audit data to get a GlideRecord to the state it was in
   * a specific update count. Use getWalkedRecord() or getWalkedRecordCopy() after walking to an
   * update number to retrieve the “walked” GlideRecord.
   * @param updateCount The update number to walk to.
   */
  walkTo(updateCount: number): boolean;
}
export { sn_hw_SNAPIHistoryWalker };

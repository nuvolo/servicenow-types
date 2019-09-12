declare class SNAPIGlideSysListControl {
  constructor(tableName: string);
  /**
   * Returns the sys_id for the control.
   */
  getControlID(): string;
  /**
   * Returns true if the edit button is not displayed.
   */
  isOmitEditButton(): boolean;
  /**
   * Returns true when the New button is not displayed.
   */
  isOmitNewButton(): boolean;
}
export { SNAPIGlideSysListControl };

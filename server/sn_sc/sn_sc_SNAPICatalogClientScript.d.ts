declare class sn_sc_SNAPICatalogClientScript {
  constructor();
  /**
   * Adds a script to the catalog client script.
   * @param script Script to be added to the catalog client script.
   */
  addScript(script: string): void;
  /**
   * Specifies if the catalog client script runs on a catalog item.
   * @param flag If true, the catalog client script runs on the catalog item. If false, the
   * catalog client script does not run on the catalog item.
   */
  appliesToCatalogItem(flag: boolean): void;
  /**
   * Specifies if the catalog client script runs on a catalog task.
   * @param flag If true, the catalog client script runs on the catalog task. If false, the
   * catalog client script does not run on the catalog task.
   */
  appliesToCatalogTask(flag: boolean): void;
  /**
   * Specifies if the catalog client script runs on a requested item.
   * @param flag If true, the catalog client script runs on the requested item. If false, the
   * catalog client script does not run on the requested item.
   */
  appliesToRequestedItem(flag: boolean): void;
  /**
   * Specifies if the catalog client script runs on a requested item.
   * @param flag If true, the catalog client script runs on the target record. If false, the
   * catalog client script does not run on the target record.
   */
  appliesToTargetRecord(flag: boolean): void;
  /**
   * Inserts the defined catalog client script in the catalog_script_client table.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  create(standardUpdate: boolean): string;
  /**
   * Deletes the defined catalog client script.
   * @param sys_id sys_id of the catalog client script.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  deleteRecord(sys_id: string, standardUpdate: boolean): void;
  /**
   * Defines attribute values for the catalog client script.
   * @param attributes A JSON object that has mapping for the field and value pairs.
   */
  setAttributes(attributes: any): void;
  /**
   * Associates a catalog item with the catalog client script.
   * @param sys_id sys_id of the catalog item.
   */
  setCatalogItem(sys_id: string): void;
  /**
   * Runs the catalog client script when a variable value is updated.
   * @param sys_id sys_id of the variable.
   */
  setOnChangeVariable(sys_id: string): void;
  /**
   * Associates a variable set with the catalog client script.
   * @param sys_id sys_id of the variable set.
   */
  setVariableSet(sys_id: string): void;
}
export { sn_sc_SNAPICatalogClientScript };

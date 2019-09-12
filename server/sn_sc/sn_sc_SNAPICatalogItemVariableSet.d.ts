declare class sn_sc_SNAPICatalogItemVariableSet {
  /**
   * Insert the defined catalog item variable set.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  create(standardUpdate: boolean): string;
  /**
   * Delete the defined catalog item variable.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  deleteRecord(standardUpdate: boolean): void;
  /**
   * Get a mapping of catalog item variable set attribute values.
   * @param columns Specify the set of columns that you would like the values for.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  read(columns: any, standardUpdate: boolean): any;
  /**
   * Define attribute values for this catalog item variable set.
   * @param attributes An object mapping column names to values.
   */
  setAttributes(attributes: any): void;
  /**
   * Use to update current catalog item variable set with set values.
   * @param columnValues An object mapping column names to values.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  update(columnValues: any, standardUpdate: boolean): void;
}
export { sn_sc_SNAPICatalogItemVariableSet };

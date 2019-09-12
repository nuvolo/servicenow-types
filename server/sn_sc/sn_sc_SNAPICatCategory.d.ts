declare class sn_sc_SNAPICatCategory {
  /**
   * Adds the Available For user criteria to a catalog
   * category.
   * @param action Specify add to add the user criteria to the
   * Available For list. Specify
   * delete to delete the user criteria from the
   * Available For list.
   * @param criteriaIDs Array of the user criteria sys_ids.
   */
  availableForUserCriteria(action: string, criteriaIDs: any[]): void;
  /**
   * Determines whether a specified user can view a specified category on a mobile device or
   * desktop.
   * @param isMobile Flag that indicates whether to verify the user for access on a mobile device or
   * desktop.
   * true: validate for mobile.
   *
   * false: validate for desktop.
   *
   *
   * @param userSysId Unique identifier of the user to validate.
   */
  canView(isMobile: boolean, userSysId: string): boolean;
  /**
   * Insert the defined category.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  create(standardUpdate: boolean): string;
  /**
   * Deletes the category record on which the CatCategory class was initially
   * instantiated.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  deleteRecord(standardUpdate: boolean): void;
  /**
   * Returns the sys_id of the category.
   */
  getID(): string;
  /**
   * Adds the Not Available For user criteria to a catalog
   * category.
   * @param action Specify add to add the user criteria to the
   * Not Available For list. Specify
   * delete to delete the user criteria from the
   * Not Available For list.
   */
  notAvailableForUserCriteria(action: string): void;
  /**
   * Get a mapping of the category.
   * @param columns Specify the set of columns that you would like the values for.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  read(columns: any, standardUpdate: boolean): any;
  /**
   * Define attribute values for this category.
   * @param attributes Set the attributes for new field and value pairs.
   */
  setAttributes(attributes: any): void;
  /**
   * Define the table name for this category.
   * @param tableName Specify the name of the table that extends sc_category.
   */
  setTableName(tableName: string): void;
  /**
   * Use to update current category.
   * @param columnValues Object mapping column names to values.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  update(columnValues: any, standardUpdate: boolean): void;
}
export { sn_sc_SNAPICatCategory };

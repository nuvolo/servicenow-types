declare class sn_sc_SNAPICatItem {
  /**
   * Adds the Available For user criteria to a catalog
   * item.
   * @param action Specify add to add the user criteria to the
   * Available For list. Specify
   * delete to delete the user criteria from the
   * Available For list.
   * @param criteriaIDs Array of the user criteria sys_ids.
   */
  availableForUserCriteria(action: string, criteriaIDs: any[]): void;
  /**
   * Specifies if the user has access to view the catalog item on global search.
   * @param isMobile True if the search is in mobile view. Else, false.
   */
  canViewOnSearch(isMobile: boolean): boolean;
  /**
   * Insert the defined catalog item.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  create(standardUpdate: boolean): void;
  /**
   * Delete the defined catalog item.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  deleteRecord(standardUpdate: boolean): void;
  /**
   * Specifies the first category that the user can view in a catalog.
   * @param catalogId sys_id of the catalog.
   */
  getFirstAccessibleCategoryForSearch(catalogId: string): string;
  /**
   * Returns the class name for the current catalog item record.
   */
  getRecordClass(): string;
  /**
   * Specifies if the catalog item is available in service portal.
   */
  isVisibleServicePortal(): boolean;
  /**
   * Adds the Not Available For user criteria to a catalog
   * item.
   * @param action Specify add to add the user criteria to the
   * Not Available For list. Specify
   * delete to delete the user criteria from the
   * Not Available For list.
   */
  notAvailableForUserCriteria(action: string): void;
  /**
   * Get a mapping of catalog item attribute values.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   * @param columns Specify the set of columns that you would like the values for.
   */
  read(standardUpdate: boolean, columns: any): any;
  /**
   * Define attribute values for this catalog item.
   * @param attributes An object mapping column names to values.
   */
  setAttributes(attributes: any): void;
  /**
   * Define the catalogs that this catalog item is associated with.
   * @param catalogs Specify comma-separated list of catalogs that you would like the item to be
   * associated with.
   */
  setCatalogs(catalogs: string): void;
  /**
   * Define the categories that this catalog item is associated with.
   * @param categories Specify comma-separated list of categories that you would like the item to be
   * associated with.
   */
  setCategories(categories: string): void;
  /**
   * Set the image of a catalog item to a database image record.
   * @param dbImageSysId sys_id of an attachment referencing the db_image.
   * @param type Type can be picture or an icon.
   */
  setImage(dbImageSysId: string, type: string): void;
  /**
   * Define the table name for this catalog item.
   * @param tableName Specify the name of the table that extends sc_cat_item.
   */
  setTableName(tableName: string): void;
  /**
   * Use to update current catalog item with set values.
   * @param columnValues An object mapping column names to values.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  update(columnValues: any, standardUpdate: boolean): void;
}
export { sn_sc_SNAPICatItem };

import { GlideRecord } from '../GlideRecord';
declare class sn_sc_SNAPICatalogJS {
  constructor(gr: any);
  constructor(sys_id: string);
  /**
   * Specifies if the catalog is viewable for the user.
   * @param mobile True if the view is mobile view. Else, false.
   */
  canView(mobile: boolean): boolean;
  /**
   * If only one active catalog exists, that catalog is returned. Else, the earliest catalog
   * created is returned, from the list of the catalogs that the user can view. If no catalog is
   * available, null is returned.
   */
  getAvailableCatalog(): any;
  /**
   * Returns the catalog background color.
   */
  getBackgroundColor(): string;
  /**
   * Specifies the number of catalogs active in the catalog table.
   */
  getCatalogCount(): number;
  /**
   * Returns the categories for the specified catalog.
   */
  getCategories(): any;
  /**
   * Specifies the sys_ids of the categories in the specified catalog.
   */
  getCategoryIds(): any;
  /**
   * Specifies the catalog description.
   */
  getDescription(): string;
  /**
   * Returns the catalog desktop image value.
   */
  getDesktopImageSRC(): string;
  /**
   * Returns the catalog gliderecord.
   */
  getGr(): GlideRecord<any>;
  /**
   * Returns the catalog header icon.
   */
  getHeaderIconSRC(): string;
  /**
   * Specifies the sys_id of the catalog.
   */
  getID(): string;
  /**
   * Returns the title of the catalog.
   */
  getTitle(): string;
  /**
   * Specifies if the catalog has categories.
   */
  hasCategories(): boolean;
  /**
   * Specifies if the catalog has catalog items.
   */
  hasItems(): boolean;
  /**
   * Specifies if the wish list is enabled for a catalog.
   */
  isWishlistEnabled(): boolean;
}
export { sn_sc_SNAPICatalogJS };

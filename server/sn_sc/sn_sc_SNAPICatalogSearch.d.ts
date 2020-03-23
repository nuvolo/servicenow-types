import { GlideRecord } from '../GlideRecord';
declare class sn_sc_SNAPICatalogSearch {
  constructor();
  /**
   * Searches a catalog item based on a search term. The search can be narrowed down to a
   * catalog category level.
   * @param catalogID Identifier of the catalog that is searched.
   * @param categoryID Identifier of the catalog category that is searched.
   * @param term Search term.
   * @param mobile If true, only catalog items exposed for mobile are searched.
   * @param depthSearch If true,  subcategories are also searched.
   */
  search(
    catalogID: string,
    categoryID: string,
    term: string,
    mobile: boolean,
    depthSearch: boolean
  ): GlideRecord<any>;
}
export { sn_sc_SNAPICatalogSearch };

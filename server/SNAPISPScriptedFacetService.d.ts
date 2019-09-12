declare class SNAPISPScriptedFacetService {
  /**
   * Creates a single choice facets object.
   * @param label Label for the facet.
   * @param id ID for the facet.
   */
  createFacet(label: string, id: string): any;
  /**
   * Creates a multi choice facets object.
   * @param label Label for the facet.
   * @param id ID for the facet.
   */
  createMultiChoiceFacet(label: string, id: string): any;
}
export { SNAPISPScriptedFacetService };

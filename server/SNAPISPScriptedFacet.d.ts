declare class SNAPISPScriptedFacet {
  /**
   * Adds facet items or mapped queries to a facets object.
   * @param label The display label for the facet item or mapped query.
   * @param valueObj The facet item or mapped query for the facet. Can only contain types String,
   * Number, Boolean, and Double.
   */
  addFacetItem(label: string, valueObj: any): void;
}
export { SNAPISPScriptedFacet };

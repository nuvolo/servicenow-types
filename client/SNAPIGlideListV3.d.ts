declare class SNAPIGlideListV3 {
  /**
   * Adds a single term to the list query filter.
   * @param filter Query string condition to add.
   */
  addFilter(filter: string): void;
  /**
   * Returns the GlideList object for the specified DOM element.
   * @param DomElement The DOM element ID for which you want the GlideList object.
   */
  get(DomElement: any): any;
  /**
   * Returns the GlideList object for the specified DOM element.
   * @param listId The list name.
   */
  get(listId: string): any;
  /**
   * Returns a comma-separated list of sys_ids for checked items in the list. Does not
   * return items that are not allowed to be executed.
   */
  getChecked(): string;
  /**
   * Returns the sysparm_fixed query.
   */
  getFixedQuery(): string;
  /**
   * Returns the form's target attribute.
   */
  getFormTarget(): string;
  /**
   * Returns the field or comma-separated list of fields that are used to group the
   * list.
   */
  getGroupBy(): string;
  /**
   * Returns the name of the list, which is usually the table name.
   */
  getListName(): string;
  /**
   * Returns the first field used to order the list.
   */
  getOrderBy(): string;
  /**
   * Returns the name of the parent table (the table associated with the form).
   */
  getParentTable(): string;
  /**
   * Returns the encoded query string for the list.
   * @param options The options can be one or more of the following.
   * orderby - include ORDERBY in the query
   *
   * groupby - include GROUPBY in the query
   *
   * fixed - include sysparm_fixed_query in the query
   *
   * all - include all the options in the query
   *
   *
   */
  getQuery(options: any): string;
  /**
   * Returns the referring URL.
   */
  getReferringUrl(): string;
  /**
   * Returns the related list field that associates the related list to the parent
   * form.
   */
  getRelated(): string;
  /**
   * Returns the related list type.
   */
  getRelatedListType(): string;
  /**
   * Returns the relationship record id, if this is type REL related list.
   */
  getRelationshipId(): string;
  /**
   * Returns the number of rows returned by the query.
   */
  getRowCount(): number;
  /**
   * Returns the number of rows to be displayed on a page.
   */
  getRowsPerPage(): number;
  /**
   * Returns the table name of the list.
   */
  getTableName(): string;
  /**
   * Returns the list title.
   */
  getTitle(): string;
  /**
   * Returns the view used to display the list.
   */
  getView(): string;
  /**
   * Returns true if the list has been personalized by the user.
   */
  isUserList(): boolean;
  /**
   * Refreshes the list. The orderBy part of the list filter is ignored so that the list's
   * natural ordering is used.
   * @param firstRow (Optional) The first row to display in the list. If not specified, the list's
   * current first row is used.
   * @param additionalParams (Optional) Name- value pairs that are submitted with the list refresh
   * request.
   */
  refresh(firstRow?: number, additionalParams?: any): void;
  /**
   * Refreshes the list using the orderBy fields.
   * @param firstRow (Optional) The first row to display in the list. If not specified, the list's
   * current first row is used.
   * @param additionalParams (Optional) Name- value pairs that are submitted with the list refresh
   * request.
   */
  refreshWithOrderBy(firstRow?: number, additionalParams?: any): void;
  /**
   * Sets the encoded query string for the list ignoring the orderBy and groupBy parts of
   * the query string.
   * @param filter An encoded query string.
   * @param saveOrderBy The default is false. When true uses the orderBy part of the query.
   * @param saveGroupBy The default is false. When true uses the groupBy part of the query.
   */
  setFilter(filter: string, saveOrderBy: boolean, saveGroupBy: boolean): void;
  /**
   * Sets the encoded query string for the list, and then refreshes the list using the new
   * filter.
   * @param filter Encoded query string.
   */
  setFilterAndRefresh(filter: string): void;
  /**
   * Sets the first row to be displayed when the list is refreshed.
   * @param firstRow The row number in the list.
   */
  setFirstRow(firstRow: number): void;
  /**
   * Specifies where to display the response from the form.
   * @param target The form.target attribute value to use.
   */
  setFormTarget(target: string): void;
  /**
   * Sets the groupBy criteria for the list, for a single field or
   * multiple fields.
   * @param String The group by criteria for the list.
   */
  setGroupBy(String: string): void;
  /**
   * Sets the orderBy criteria for the list.
   * @param orderBy Single or multiple order by fields.
   */
  setOrderBy(orderBy: string): void;
  /**
   * Sets the parent form referring url.
   * @param url The parent form's URL
   */
  setReferringUrl(url: string): void;
  /**
   * Set the number of rows to display on a page.
   * @param numRows The number of rows to display on a page.
   */
  setRowsPerPage(numRows: number): void;
  /**
   * Displays or hides all of the groups within the list and saves the current
   * collapsed/expanded state of the groups as a user preference.
   * @param showFlag When true, displays the groups within the list.
   */
  showHideGroups(showFlag: boolean): void;
  /**
   * Displays or hides the list and saves the current collapsed/expanded state of the list
   * as a user preference.
   * @param showFlag When true, displays the list.
   */
  showHideList(showFlag: boolean): void;
  /**
   * Sort the list in ascending order.
   * @param field The field to be used to sort the list.
   */
  sort(field: string): void;
  /**
   * Sorts the list in descending order.
   * @param field The field used to sort the list.
   */
  sortDescending(field: string): void;
  /**
   * Toggles the list display between collapsed and expanded, and saves the state as a user
   * preference.
   */
  toggleList(): void;
  /**
   * Toggles the list display between collapsed and expanded, but does not save the state as
   * a user preference.
   */
  toggleListNoPref(): void;
}
export { SNAPIGlideListV3 };

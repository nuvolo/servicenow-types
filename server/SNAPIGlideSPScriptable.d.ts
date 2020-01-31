import { GlideRecord } from './GlideRecord';
declare class SNAPIGlideSPScriptable {
  /**
   * Returns true if the user can read the specified GlideRecord.
   * @param gr The GlideRecord to check.
   */
  canReadRecord(gr: GlideRecord<any>): boolean;
  /**
   * Returns true if the user can read the specified GlideRecord.
   * @param table Name of the table to query.
   * @param sysId Sys_id of the record to query.
   */
  canReadRecord(table: string, sysId: string): boolean;
  /**
   * Returns true if the currently logged in user has permission to view the specified
   * page.
   * @param pageID Page ID from the Pages [sp_page] table.
   */
  canSeePage(pageID: string): boolean;
  /**
   * Returns a model and view model for a sc_cat_item or
   * sc_cat_item_guide.
   * @param sysId The sys_id of the catalog item (sc_cat_item) or order guide
   * (sc_cat_item_guide).
   */
  getCatalogItem(sysId: string): any;
  /**
   * Returns a model and view model for a sc_cat_item or
   * sc_cat_item_guide.
   * @param sysId The sys_id of the catalog item (sc_cat_item) or order guide
   * (sc_cat_item_guide).
   * @param isOrdering When true, uses create roles security check. When false, uses write roles
   * security check.When users are ordering an item or have it in their cart,  check
   * using the create roles.
   * If users are not ordering, for example, somebody is
   * looking at a requested item to see the variables associated with that item, then
   * check using the write roles.
   */
  getCatalogItem(sysId: string, isOrdering: boolean): any;
  /**
   * Returns the display value of the specified field (if it exists and has a value) from
   * either the widget's sp_instance or the sp_portal
   * record.
   * @param fieldName Name of the field
   */
  getDisplayValue(fieldName: string): string;
  /**
   * Returns information about the specified field in the specified GlideRecord.
   * @param gr The GlideRecord to check
   * @param fieldName The field to find information for
   */
  getField(gr: GlideRecord<any>, fieldName: string): any;
  /**
   * Checks the specified list of field names, and returns an array of valid field
   * names.
   * @param gr The GlideRecord to check
   * @param field_Names A comma separated list of field names.
   */
  getFields(gr: GlideRecord<any>, field_Names: string): any[];
  /**
   * Checks the specified list of field names and returns an object of valid field
   * names.
   * @param gr The GlideRecord to check
   * @param field_Names A comma separated list of field names.
   */
  getFieldsObject(gr: GlideRecord<any>, field_Names: string): any;
  /**
   * Return the form.
   * @param tableName The name of the table
   * @param sysId The form's sys_id
   */
  getForm(tableName: string, sysId: string): any;
  /**
   * Returns KB articles in the specified category and its subcategories.
   * @param sys_id Sys_id of the KB article category.
   * @param limit Maximum number of KB articles returned.
   */
  getKBCategoryArticles(sys_id: string, limit: number): any[];
  /**
   * Returns Knowledge Base article summaries in the specified category and its
   * subcategories.
   * @param sys_id Sys_id of the KB article category.
   * @param limit Maximum number of KB articles returned.
   * @param maxChars Maximum number of characters to return from the article text. For full article
   * text, set the value to -1.
   */
  getKBCategoryArticleSummaries(
    sys_id: string,
    limit: number,
    maxChars: number,
  ): any[];
  /**
   * Returns the number of articles in the defined Knowledge Base.
   * @param sys_id Sys_id of a Knowledge Base record.
   */
  getKBCount(sys_id: string): number;
  /**
   * Returns a list of the specified table's columns in the specified view.
   * @param tableName Name of the table
   * @param view The view by which to filter the columns
   */
  getListColumns(tableName: string, view: string): any;
  /**
   * Returns the (?id=) portion of the URL based on the sp_menu type.
   * @param page The page
   */
  getMenuHREF(page: GlideRecord<any>): string;
  /**
   * Returns an array of menu items for the specified instance.
   * @param sysId sysId of the instance
   */
  getMenuItems(sysId: string): any[];
  /**
   * Returns the value of the specified parameter.
   * @param name The name of the key from the query string or post body.
   */
  getParameter(name: string): any;
  /**
   * Returns the portal GlideRecord from the Service Portals [sp_portal] table.
   */
  getPortalRecord(): GlideRecord<any>;
  /**
   * If parameters are provided, returns the GlideRecord identified by the provided table
   * and Sys ID. If no parameters are provided, returns the record identified by the current URL.
   * @param table Optional. The table of the record to return. If no parameters are included,
   * returns the table and Sys ID identified by the current URL.
   * @param sys_id Optional. The Sys ID of the record to return. If no parameters are included,
   * returns the record identified by the current URL.
   */
  getRecord(table?: string, sys_id?: string): GlideRecord<any>;
  /**
   * Copies display values for the specified fields into the data parameter.
   * @param data The display values for the specified fields are copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordDisplayValues(
    data: any,
    from: GlideRecord<any>,
    names: string,
  ): void;
  /**
   * For the specified fields, copies the element's name, display value, and value into the
   * data parameter.
   * @param data The element's name, display value, and value for the specified fields are
   * copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordElements(data: any, from: GlideRecord<any>, names: string): void;
  /**
   * Copies values for the specified field names from the GlideRecord into the data
   * parameter.
   * @param data The value for the specified fields are copied to this object.
   * @param from The GlideRecord to process.
   * @param names A comma-separated list of field names.
   */
  getRecordValues(data: any, from: GlideRecord<any>, names: string): void;
  /**
   * Returns Service Catalog
   * variables associated with a record in String format.
   * @param gr The record to retrieve Service Catalog variables
   * for. Must be a record with Service Catalog variables
   * defined, such as a requested item [sc_req_item] record or an incident submitted
   * through a record producer.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getRecordVariables(
    gr: GlideRecord<any>,
    includeNilResponses?: boolean,
  ): string;
  /**
   * Returns an array of Service Catalog variables associated
   * with a record.
   * @param gr The record to retrieve Service Catalog variables
   * for. Must be a record with Service Catalog variables
   * defined, such as a requested item [sc_req_item] record or an incident submitted
   * through a record producer.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getRecordVariablesArray(
    gr: GlideRecord<any>,
    includeNilResponses?: boolean,
  ): any;
  /**
   * Gets the activity stream for the specified record. This method works on tables that
   * extend the task table.
   * @param table The table name
   * @param sysID The sys_id of the record
   */
  getStream(table: string, sysID: string): any;
  /**
   * Returns the user's initials.
   */
  getUserInitials(): string;
  /**
   * Returns the named value of the JSON request, instance, or portal.
   * @param name Name of the JSON request, instance, or portal.
   */
  getValue(name: string): any;
  /**
   * Copies values from the request or instance to the data parameter.
   * @param data Receives the parameter values.
   * @param names Comma-separated string of field names.
   */
  getValues(data: any, names: string): void;
  /**
   * Returns an array of Service Catalog variables associated
   * with the record in the URL.
   * @param includeNilResponses Optional. If true, the API includes variables with no user-defined value.
   */
  getVariablesArray(includeNilResponses?: boolean): any;
  /**
   * Gets a widget by id or sys_id, executes that widget's server script using the provided
   * options, then returns the widget model.
   * @param sysID The widget sys_id or widget_id
   * @param options An object to pass to the widget's server script. Refer to this object as
   * options in your server script.Note: Any options passed into this
   * function will only be available in the embedded widget's server script on the
   * first execution of that script. Any subsequent calls into
   * the server script from the embedded widget will not contain the object properties
   * passed in.
   */
  getWidget(sysID: string, options: any): any;
  /**
   * Transforms a URL requesting a list or form in the platform UI into the URL of the
   * corresponding id=list or id=form Service Portal
   * page.
   * @param url Platform UI URL
   */
  mapUrlToSPUrl(url: string): string;
}
export { SNAPIGlideSPScriptable };

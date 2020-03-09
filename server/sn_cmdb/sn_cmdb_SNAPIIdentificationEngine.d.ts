import { GlideRecord } from '../GlideRecord';
declare class sn_cmdb_SNAPIIdentificationEngine {
  /**
   * Insert or update configuration items in the CMDB based on identification and
   * reconciliation rules. Use this API instead of updating the CMDB directly.
   * @param source Identifies the data source of the CI information. These must be one of the
   * choice values defined for the discovery_source field of the cmdb_ci table.
   * @param input A JSON formatted string of configuration items to be added or updated. Each
   * input string is in the format  'items: [{}], relations:[{}], related[{}]', where
   * each item within the items,  relations, and related lists contains name-value pairs.
   * The possible name-value pairs within the items list are:
   * className - the sys_class_name of the CI to be created or updated.
   *
   * values:{} - the field information for the CI as name-value pairs, where the
   * name is the field name. When updating reference fields, the value must be the
   * referenced sys_id.
   *
   * lookup:[{}] - a list of records with each item having name-value pairs like
   * the items list.
   *
   * related: [{}] - a list of records with each item having name-value pairs
   * like the items list.
   *
   *
   *
   * The possible name-value pairs within the relations list are:
   * parent - index of the parent item in the dependency relation
   *
   * child - index of the child item in the dependency relation
   *
   * type - the relationship type. This is one of the name field values from the
   * cmdb_rel_type table.
   *
   *
   *
   */
  createOrUpdateCI(source: string, input: string): string;
  /**
   * Determines the operation (insert/update) that will be performed with the specified
   * payload without committing the operation in the database.
   * @param jsonString A JSON formatted string of configuration items to be added or updated. Each
   * input string is in the format  'items: [{}], relations:[{}]', where each item within
   * the items and relations lists contains name-value pairs. The possible name-value
   * pairs within the items list are:
   * className - the sys_class_name of the CI to be created or updated.
   *
   * values:{} - the field information for the CI as name-value pairs, where the
   * name is the field name.
   *
   * lookup:[{}] - a list of records with each item having name-value pairs like
   * the items list.
   *
   *
   *
   * The possible name-value pairs within the relations list are:
   * parent - index of the parent item in the dependency relation
   *
   * child - index of the child item in the dependency relation
   *
   * type - the relationship type. This is one of the name field values from the
   * cmdb_rel_type table.
   *
   *
   *
   */
  identifyCI(jsonString: string): string;
  /**
   * Run an identification audit against the specified CI to detect duplicates.
   * @param gr The CI on which to run the audit to detect duplicates. The CI must have
   * independent identification rules.
   */
  runIdentificationAudit(gr: GlideRecord<any>): void;
}
export { sn_cmdb_SNAPIIdentificationEngine };

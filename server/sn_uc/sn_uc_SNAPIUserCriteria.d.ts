declare class sn_uc_SNAPIUserCriteria {
  constructor();
  constructor(sys_id: string);
  /**
   * Creates a user criteria with specified values in the user_criteria table. Values
   * specified in columnValues override the values provided via setters.
   * @param columnValues Key and value pairs for a column and its value.
   * @param standardUpdate Set to true to enable the running of engines and workflow.
   */
  create(columnValues: any, standardUpdate: boolean): string;
  /**
   * Deletes the current user criteria.
   */
  deleteRecord(): boolean;
  /**
   * Displays the mapping for the attribute and value pairs of the catalog item.
   * @param columns Array of catalog item attributes.
   */
  read(columns: string): any;
  /**
   * Specifies if the user criteria is active.
   * @param active If true, the user criteria is active. If false, the user criteria is
   * inactive.
   */
  setActive(active: boolean): void;
  /**
   * Specifies if the user criteria has an advanced script.
   * @param advanced If true, the user criteria has an advanced script.If false, the user
   * criteria does not have an advanced script.
   */
  setAdvanced(advanced: boolean): void;
  /**
   * Sets the company property for the user criteria.
   * @param companies Comma-separated list of the company sys_ids to be set for the user
   * criteria.
   */
  setCompanies(companies: string): void;
  /**
   * Sets the department property for the user criteria.
   * @param departments Comma-separated list of the department sys_ids to be set for the user
   * criteria.
   */
  setDepartments(departments: string): void;
  /**
   * Sets the group property for the user criteria.
   * @param groups Comma-separated list of the group sys_ids to be set for the user
   * criteria.
   */
  setGroups(groups: string): void;
  /**
   * Sets the location property for the user criteria.
   * @param locations Comma-separated list of the location sys_ids to be set for the user
   * criteria.
   */
  setLocations(locations: string): void;
  /**
   * Sets the match_all property for the user criteria.
   */
  setMatchAll(): void;
  /**
   * Sets the name property for the user criteria.
   * @param name Name of the user criteria.
   */
  setName(name: string): void;
  /**
   * Sets the role property for the user criteria.
   * @param roles Comma-separated list of the role sys_ids to be set for the user
   * criteria.
   */
  setRoles(roles: string): void;
  /**
   * Sets the script for the user criteria.
   * @param script Script to be set for the advanced user criteria.
   */
  setScript(script: string): void;
  /**
   * Sets the user property for the user criteria.
   * @param users Comma-separated list of the user sys_ids to be set for the user
   * criteria.
   */
  setUsers(users: string): void;
  /**
   * Updates the current catalog item with the specified values.
   * @param columnValues Mapping for the column name and the value pairs.
   * @param reason Reason for updating the catalog item.
   */
  update(columnValues: any, reason: string): string;
}
export { sn_uc_SNAPIUserCriteria };

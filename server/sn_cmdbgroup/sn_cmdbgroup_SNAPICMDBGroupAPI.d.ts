declare class sn_cmdbgroup_SNAPICMDBGroupAPI {
  /**
   * Returns all CIs for this group. This includes all manual CIs and the list of CIs from
   * the Query Builder's saved query.
   * @param groupId The sysId of the CMDB group.
   * @param requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL
   * restrictions.
   */
  getAllCI(groupId: string, requireCompleteSet: boolean): string;
  /**
   * Returns all CIs returned from all saved query builder's query IDs for the specified
   * group.
   * @param groupId The sysId of the CMDB group.
   * @param requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL
   * restrictions.
   */
  getAllCIFromQueryBuilder(
    groupId: string,
    requireCompleteSet: boolean
  ): string;
  /**
   * Returns the CMDB group's manual CI list.
   * @param groupId The sysId of the CMDB group.
   * @param requireCompleteSet When true, returns an error string if any CIs are filtered out by ACL
   * restrictions.
   */
  getManualCIList(groupId: string, requireCompleteSet: boolean): string;
  /**
   * Returns the query builder's query IDs for the specified CMDB group.
   * @param groupId The sysId of the CMDB group.
   * @param requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL
   * restrictions.
   */
  getSavedQueryIdList(groupId: string, requireCompleteSet: boolean): string;
  /**
   * Sets the manual CI list for the specified group. The existing manual CI list is
   * overwritten. CI sysIds not found in the cmdb_ci table are ignored.
   * @param groupId The sysId of the CMDB group.
   * @param ciSysIds Comma separated list of CI sysIds.
   */
  setManualCIList(groupId: string, ciSysIds: string): string;
  /**
   * Sets the saved query ID list for the specified group. The existing query ID list is
   * overwritten. Query sysIds not found in the qb_saved_query table are ignored.
   * @param groupId The sysId of the CMDB group.
   * @param queryIds Comma separated list of saved query sysIds.
   */
  setSavedQueryIdList(groupId: string, queryIds: string): string;
}
export { sn_cmdbgroup_SNAPICMDBGroupAPI };

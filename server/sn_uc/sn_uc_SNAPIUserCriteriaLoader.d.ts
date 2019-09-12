declare class sn_uc_SNAPIUserCriteriaLoader {
  /**
   * Returns all user criteria associated with the logged in user.
   */
  getAllUserCriteria(): any;
  /**
   * Returns all user criteria associated with the logged in user.
   * @param userId sys_id of the user.
   */
  getAllUserCriteria(userId: string): any;
  /**
   * Returns the user criteria associated with the specified linkTable for the logged in
   * user.
   * @param linkTable Mtom link table between the record and the Available For or Not Available For
   * User Criteria.
   */
  getUserCriteria(linkTable: string): any;
  /**
   * Returns the user criteria associated with the specified linkTable for the logged in
   * user.
   * @param userId sys_id of the user.
   * @param linkTable Mtom link table between the record and the Available For or Not Available For
   * User Criteria.
   */
  getUserCriteria(userId: string, linkTable: string): any;
}
export { sn_uc_SNAPIUserCriteriaLoader };

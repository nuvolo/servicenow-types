declare class SNAPIGlideUser {
  firstName: string;
  lastName: string;
  userID: string;
  userName: string;
  /**
   * Returns a session client value previously set with putClientData().
   * @param Key Name of the client data to retrieve.
   */
  getClientData(Key: string): string;
  /**
   * Returns the first and last name of the current user.
   */
  getFullName(): string;
  /**
   * Returns true if the current user has the specified role or the admin role.
   * @param role Role to check
   * @param includeDefaults (Optional) Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Explicit roles.
   * Default: false
   */
  hasRole(role: string, includeDefaults?: boolean): boolean;
  /**
   * Returns true only if the current user has the specified role.
   * @param role Role to check
   * @param includeDefaults (Optional) Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Explicit roles.
   * Default: false
   */
  hasRoleExactly(role: string, includeDefaults?: boolean): boolean;
  /**
   * Returns true if the current user has at least one of the specified roles or has the
   * admin role.
   * @param roles Comma-separated list of roles to check
   * @param includeDefaults (Optional) Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Explicit roles.
   * Default: false
   */
  hasRoleFromList(roles: string, includeDefaults?: boolean): boolean;
  /**
   * Returns true if the current user has any role.
   * @param includeDefaults (Optional) Flag that indicates whether to include default roles, such as
   * snc_internal and snc_external, in the request. For additional information on roles,
   * see Explicit roles.
   * Default: false
   */
  hasRoles(includeDefaults?: boolean): boolean;
}
export { SNAPIGlideUser };

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
     * see <p class="p"><a class="extRef" href="https://docs.servicenow.com/bundle/madrid-customer-service-management/page/administer/contextual-security/concept/c_InternalAndExternalUsers.html" target="_blank">Explicit roles</a>.</p>
     * <p class="p">Default: false</p>
    */
    hasRole(role: string, includeDefaults: boolean): boolean;
    /**
     * Returns true only if the current user has the specified role.
     * @param role Role to check
     * @param includeDefaults (Optional) Flag that indicates whether to include default roles, such as
     * snc_internal and snc_external, in the request. For additional information on roles,
     * see <p class="p"><a class="extRef" href="https://docs.servicenow.com/bundle/madrid-customer-service-management/page/administer/contextual-security/concept/c_InternalAndExternalUsers.html" target="_blank">Explicit roles</a>.</p>
     * <p class="p">Default: false</p>
    */
    hasRoleExactly(role: string, includeDefaults: boolean): boolean;
    /**
     * Returns true if the current user has at least one of the specified roles or has the
     * admin role.
     * @param roles Comma-separated list of roles to check
     * @param includeDefaults (Optional) Flag that indicates whether to include default roles, such as
     * snc_internal and snc_external, in the request. For additional information on roles,
     * see <p class="p"><a class="extRef" href="https://docs.servicenow.com/bundle/madrid-customer-service-management/page/administer/contextual-security/concept/c_InternalAndExternalUsers.html" target="_blank">Explicit roles</a>.</p>
     * <p class="p">Default: false</p>
    */
    hasRoleFromList(roles: string, includeDefaults: boolean): boolean;
    /**
     * Returns true if the current user has any role.
     * @param includeDefaults (Optional) Flag that indicates whether to include default roles, such as
     * snc_internal and snc_external, in the request. For additional information on roles,
     * see <p class="p"><a class="extRef" href="https://docs.servicenow.com/bundle/madrid-customer-service-management/page/administer/contextual-security/concept/c_InternalAndExternalUsers.html" target="_blank">Explicit roles</a>.</p>
     * <p class="p">Default: false</p>
    */
    hasRoles(includeDefaults: boolean): boolean;
}
export { SNAPIGlideUser };

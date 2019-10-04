import { ConnectionInfo } from '../sn_cc';
declare class sn_cc_SNAPIConnectionInfoProvider {
  constructor();
  /**
   * This function retrieves a ConnectionInfo object identified by the given aliasID in the
   * current domain.
   * @param aliasID The sys_id of a connection alias.
   */
  getConnectionInfo(aliasID: string): ConnectionInfo;
  /**
   * This function retrieves a ConnectionInfo object identified by the given aliasID for a
   * specific domain.
   * @param aliasID The sys_id of a connection alias.
   * @param domainID The sys_id of a domain or global.
   */
  getConnectionInfoByDomain(aliasID: string, domainID: string): ConnectionInfo;
}
export { sn_cc_SNAPIConnectionInfoProvider };

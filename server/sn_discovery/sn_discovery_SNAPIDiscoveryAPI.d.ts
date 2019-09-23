declare class sn_discovery_SNAPIDiscoveryAPI {
  /**
   * Used to discover a single IPv4 address.
   * @param IP_address IP address to discover.
   * @param application Application configured for the MID Server.
   * @param source (Optional) Source of the Discovery, displayed in the optional Source field in
   * the Discovery Status record, which indicates how the Discovery was triggered. If
   * no source is specified, the system uses Discovery_API as the source. To define a
   * source, you must have an application value. If no application is defined, use a
   * place holder of NULL in the expression.
   */
  discoverIpAddress(
    IP_address: string,
    application: string,
    source?: string
  ): string;
  /**
   * Used to return a summary of a configuration item's Discovery status given the specific
   * status sys_id and IPv4 address.
   * @param ipAddress The IPv4 address that was scanned.
   * @param discoveryStatusSysId The sys_id of the Discovery status record for the IP address that was
   * scanned.
   */
  reportCiIpAddressStatus(
    ipAddress: string,
    discoveryStatusSysId: string
  ): any[];
  /**
   * Used to return a summary of a CI Discovery status given a specific Discovery Status
   * sys_id.
   * @param sys_id The sys_id of a Discovery status record.
   */
  reportCiStatus(sys_id: string): any[];
}
export { sn_discovery_SNAPIDiscoveryAPI };

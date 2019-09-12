declare class sn_discovery_SNAPIReportCiStatusOutputJS {
  /**
   * Used to return the state of the scanned CI.
   */
  getCiOperationStatus(): string;
  /**
   * Used to return the value in the cmdb_ci field from the discovery_device_history table
   * for the CI being scanned.
   */
  getCmdbCI(): string;
  /**
   * Used to return the value from the State field in the Discovery
   * Status [discovery_status] table.
   */
  getDiscoveryState(): string;
  /**
   * Used to return the value from the source field in the discovery_device_history table
   * for the CI being scanned.
   */
  getIpAddress(): string;
  /**
   * Used to return the value from the issues field in the discovery_device_history table
   * for the CI being scanned.
   */
  getIssues(): number;
  /**
   * Used to return the value from the issues_link field in the discovery_device_history
   * table for the CI being scanned.
   */
  getIssuesLink(): string;
  /**
   * Used to serialized the ReportCiStatusOutputJS object.
   */
  toJson(): string;
}
export { sn_discovery_SNAPIReportCiStatusOutputJS };

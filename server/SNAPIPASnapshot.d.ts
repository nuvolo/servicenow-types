declare class SNAPIPASnapshot {
  /**
   * Compare records in snapshots for a specified indicator at multiple dates, such as to
   * identify records included in one snapshot but not the other.
   * @param sys_id The indicator sys_id.
   * @param date1 The date of the first snapshot, in the format yyyymmdd.
   * @param date2 The date of the second snapshot, in the format yyyymmdd.
   * @param type Specifies what data to retrieve. Valid values are:
   * all1: all records in the first snapshot
   *
   * all2: all records in the second snapshot
   *
   * shared: records that are in both snapshots
   *
   * movedin: records that are in the second snapshot, but not the first
   *
   * movedout: records that are in the first snapshot, but not the second
   *
   *
   */
  getCompareIDs(
    sys_id: string,
    date1: number,
    date2: number,
    type: string
  ): string;
  /**
   * Get the query used to compare records in snapshots for a specified indicator at
   * multiple dates.
   * @param sys_id The indicator sys_id.
   * @param date1 The date of the first snapshot, in the format yyyymmdd.
   * @param date2 The date of the second snapshot, in the format yyyymmdd.
   * @param type Specifies what data to retrieve. Valid values are:
   * all1: all records in the first snapshot
   *
   * all2: all records in the second snapshot
   *
   * shared: records that are in both snapshots
   *
   * movedin: records that are in the second snapshot, but not the first
   *
   * movedout: records that are in the first snapshot, but not the second
   *
   *
   */
  getCompareQuery(
    sys_id: string,
    date1: number,
    date2: number,
    type: string
  ): string;
  /**
   * Get the sys_id values for all records contained in the snapshot for a specified
   * indicator at the specified date.
   * @param sys_id The indicator sys_id.
   * @param date The date when the snapshot was taken, in the format yyyymmdd.
   */
  getIDs(sys_id: string, date: number): string;
  /**
   * Get the query used to generate the snapshot for a specified indicator at the specified
   * date.
   * @param sys_id The indicator sys_id.
   * @param date The date when the snapshot was taken, in the format yyyymmdd.
   */
  getQuery(sys_id: string, date: number): string;
}
export { SNAPIPASnapshot };

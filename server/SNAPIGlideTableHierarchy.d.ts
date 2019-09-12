declare class SNAPIGlideTableHierarchy {
  constructor(tableName: string);
  /**
   * Returns an array of strings containing all tables that extend the current table and
   * includes the current table.
   */
  getAllExtensions(): any[];
  /**
   * Returns the parent class.
   */
  getBase(): string;
  /**
   * Returns an array of strings containing all classes in the hierarchy of the current
   * table.
   */
  getHierarchy(): any[];
  /**
   * Returns the table's name.
   */
  getName(): string;
  /**
   * Returns the top level class in the hierarchy.
   */
  getRoot(): string;
  /**
   * Returns an array of strings containing all tables that extend the current
   * table.
   */
  getTableExtensions(): any[];
  /**
   * Returns an array of strings of the table names in the hierarchy.
   */
  getTables(): any[];
  /**
   * Returns true of this class has been extended.
   */
  hasExtensions(): boolean;
  /**
   * Returns true if this is a base class.
   */
  isBaseClass(): boolean;
  /**
   * Returns true if this table is not in a hierarchy.
   */
  isSoloClass(): boolean;
}
export { SNAPIGlideTableHierarchy };

import { Data } from '../sn_clotho';
declare class sn_clotho_SNAPITransformResult {
  /**
   * Returns an array of Data objects. Returns an error if no group was specified for the
   * transform.
   */
  byGroup(): any[];
  /**
   * Returns the transformed data with the specified label.
   * @param label The label that identifies the data to be retrieved.
   */
  getByLabel(label: string): Data;
  /**
   * Returns a single Data object, or null if the result is empty.
   */
  getData(): Data;
  /**
   * Returns the transformed data as an array. This method turns a Data object into an
   * array.
   */
  toArray(): any[];
}
export { sn_clotho_SNAPITransformResult };

import { GlideScriptableInputStream } from '../GlideScriptableInputStream';
declare class sn_impex_SNAPIGlideExcelParser {
  constructor();
  /**
   * Close the connection to the input stream and release the document.
   */
  close(): void;
  /**
   * Returns a list of column headers from the parsed document.
   */
  getColumnHeaders(): any[];
  /**
   * Returns the error message when the parse() method fails.
   */
  getErrorMessage(): string;
  /**
   * Get the current row values and headers.
   */
  getRow(): any;
  /**
   * Moves to the next row.
   */
  next(): boolean;
  /**
   * Parse an XLSX formatted Excel document.
   * @param inputStream The Excel document to be parsed.
   */
  parse(inputStream: GlideScriptableInputStream): boolean;
  /**
   * Set the number of the header row to be retrieved.
   * @param headerRowNumber The header row to be retrieved.
   */
  setHeaderRowNumber(headerRowNumber: number): void;
  /**
   * Return an empty value instead of null when an Excel cell is not present.
   * @param empty When true, cells that are not present return an empty value. When false, cells
   * that are not present return null.
   */
  setNullToEmpty(empty: boolean): void;
  /**
   * Set the name of the sheet to be retrieved.
   * @param sheetName The name of the sheet to be retrieved.
   */
  setSheetName(sheetName: string): void;
  /**
   * Set the number of the Excel sheet to be retrieved.
   * @param sheetNumber The Excel sheet number to retrieve.
   */
  setSheetNumber(sheetNumber: number): void;
}
export { sn_impex_SNAPIGlideExcelParser };

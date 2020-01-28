import { SNAPIGlideElement } from './SNAPIGlideElement';
declare class GlideElement extends SNAPIGlideElement {
  // Methods to access currency fields
  // TODO:
  //      This should be moved in separate class, but this requires work in other packages.
  //      See for more info: https://github.com/nuvolo/servicenow-types/issues/22

  /**
   * For Currency fields only!
   *
   * Returns the currency value in the user's session currency as an unformatted number.
   *
   * Example: "1563.72"
   */
  getValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value in the reference currency as an unformatted number.
   *
   * Example: "1152.48"
   */
  getReferenceValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value in the user's session currency as and unformatted number.
   *
   * Example: "1563.72"
   */
  getSessionValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value as entered as an unformatted number.
   * Note: This might not be the session or reference currency.
   *
   * Example: "21345.67"
   */
  getCurrencyValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value in the user's session currency
   * formatted in the user's locale with a currency symbol.
   *
   * Example: "€1.563,72"
   */
  getDisplayValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value in the user's session currency
   * formatted in the user's locale with a currency symbol.
   *
   * Example: "€1.563,72"
   */
  getSessionDisplayValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value in the reference currency
   * formatted in the user's locale with a currency symbol.
   *
   * Example: "$1,152.48"
   */
  getReferenceDisplayValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value as entered formatted
   * in the user's locale with a currency symbol.
   *
   * Example: "¥21.345,67"
   */
  getCurrencyDisplayValue(): string;

  /**
   * For Currency fields only!
   *
   * Returns the currency value as entered as an unformatted number
   * prefixed by the 3-letter ISO currency code separated by a semicolon.
   *
   * Example: "JPY;21345.67"
   */
  getCurrencyString(): string;

  /**
   * For Currency fields only!
   *
   * Returns the 3-letter ISO currency code for the currency value as entered.
   *
   * Example: "JPY"
   */
  getCurrencyCode(): string;

  /**
   * For Currency fields only!
   *
   * Returns the 3-letter ISO currency code for the user's session currency.
   *
   * Example: "EUR"
   */
  getSessionCurrencyCode(): string;

  /**
   * For Currency fields only!
   *
   * Returns the 3-letter ISO currency code for the reference currency.
   *
   * Example: "USD"
   */
  getReferenceCurrencyCode(): string;

  /**
   * For Currency fields only!
   *
   * Sets the currency value as:
   * - An unformatted number taken as a value in the user's session currency.
   * - An unformatted number prefixed by a 3-letter currency code separated by a semicolon.
   *
   * @param value The currency value. Example: "4369.21" or "JPY;4369.21"
   */
  setValue(value: string): void;

  /**
   * For Currency fields only!
   *
   * Sets the currency value as:
   * - A number formatted in the user's locale that is taken as a value in the user's session currency.
   * - A number formatted in the user's locale prefixed by a 3-letter currency code separated by a semicolon.
   *
   * @param value The currency display value. Example: "4369.21" or "JPY;4369.21"
   */
  setDisplayValue(valud: string): void;
}
export { GlideElement };

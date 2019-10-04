import { GlideLocale } from './GlideLocale';
declare class SNAPIGlideLocale {
  /**
   * Returns the GlideLocale object.
   */
  get(): GlideLocale;
  /**
   * Returns the decimal separator.
   */
  getDecimalSeparator(): string;
  /**
   * Returns the grouping separator.
   */
  getGroupingSeparator(): string;
}
export { SNAPIGlideLocale };

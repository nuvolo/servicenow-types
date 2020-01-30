import { SNAPIGlideElement } from './SNAPIGlideElement';
import { GlideRecord } from './GlideRecord';
import { SNAPIGlideRecord } from './SNAPIGlideRecord';
import { Override } from '../util';

declare interface GlideElement<T>
  extends Override<SNAPIGlideElement, GlideElement<T>> {}

declare class GlideElement<T> {
  /**
   * Returns a GlideRecord object for a given reference element.
   */
  getRefRecord(): GlideRecord<T>;
}

export { GlideElement };

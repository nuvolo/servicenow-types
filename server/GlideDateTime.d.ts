import { SNAPIGlideDateTime } from "./SNAPIGlideDateTime";
import { GlideDuration } from './GlideDuration';
declare class GlideDateTime extends SNAPIGlideDateTime {
    /**
   * Gets the duration difference between two GlideDateTime values.
   * @param start The start value.
   * @param end The end value.
   */
    static subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;

}
export { GlideDateTime };

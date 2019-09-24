import { GlideRecord, GlideElement } from "../server";

export type TypedGR<T> = T & GlideRecord;

declare class ReferenceGlideElement<T> extends GlideElement {
  getRefRecord(): TypedGR<T>;
}

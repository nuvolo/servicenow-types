import { GlideRecord, GlideElement, sn_ws } from '../server';

export type TypedGR<T> = T & GlideRecord;

declare class ReferenceGlideElement<T> extends GlideElement {
  getRefRecord(): TypedGR<T>;
}

declare class TypedRequestBody<T> extends sn_ws.RESTAPIRequestBody {
  data: T;
}

declare class TypedRESTAPIRequest<T> extends sn_ws.RESTAPIRequest {
  body: TypedRequestBody<T>;
}

export { ReferenceGlideElement, TypedRESTAPIRequest };

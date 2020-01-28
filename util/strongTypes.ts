import { Override } from './helpers';
import { TypedGR } from './TypedGR';
import { GlideElement, sn_ws } from '../server';

type ReferenceGlideElement<T> = Override<
  GlideElement,
  {
    /**
     * Returns a TypedGR<T> for a given reference element.
     */
    getRefRecord(): TypedGR<T>;
  }
>;

type TypedRequestBody<T> = Override<
  sn_ws.RESTAPIRequestBody,
  {
    data: T;
  }
>;

type TypedRESTAPIRequest<T> = Override<
  sn_ws.RESTAPIRequest,
  {
    body: TypedRequestBody<T>;
  }
>;

export { ReferenceGlideElement, TypedRESTAPIRequest };

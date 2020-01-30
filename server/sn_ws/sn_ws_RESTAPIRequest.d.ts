import { sn_ws_SNAPIRESTAPIRequest } from './sn_ws_SNAPIRESTAPIRequest';
import { sn_ws_RESTAPIRequestBody } from './sn_ws_RESTAPIRequestBody';

declare class sn_ws_RESTAPIRequest<T> extends sn_ws_SNAPIRESTAPIRequest {
  body: sn_ws_RESTAPIRequestBody<T>;
}
export { sn_ws_RESTAPIRequest };

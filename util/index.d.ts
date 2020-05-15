import { GlideRecord, GlideElement, sn_ws } from '../server';

declare class ReferenceGlideElement<T> extends GlideElement {
  getRefRecord(): GlideRecord<T>;
}

declare class TypedRequestBody<T> extends sn_ws.RESTAPIRequestBody {
  data: T;
}

declare class TypedRESTAPIRequest<T> extends sn_ws.RESTAPIRequest {
  body: TypedRequestBody<T>;
}

type FieldType<T> = Extract<keyof T, string>;

/**
 * Operators available for filters and queries.
 * https://developer.servicenow.com/dev.do#!/reference/api/orlando/server/r_ScopedGlideRecordAddQuery_String_String_Object
 */
type QueryOperator =
  | '='
  | '!='
  | '>'
  | '>='
  | '<'
  | '<='
  | 'IN'
  | 'NOT IN'
  | 'STARTSWITH'
  | 'ENDSWITH'
  | 'CONTAINS'
  | 'DOES NOT CONTAIN'
  | 'INSTANCEOF';

export { ReferenceGlideElement, TypedRESTAPIRequest, FieldType, QueryOperator };

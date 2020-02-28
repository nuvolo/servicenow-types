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

/**
 * Operators available for filters and queries.
 * https://docs.servicenow.com/bundle/newyork-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html
 */
type QueryOperator =
  | 'STARTSWITH'
  | 'ENDSWITH'
  | '%'
  | 'LIKE'
  | '*'
  | 'NOTLIKE'
  | '!*'
  | '='
  | '!='
  | 'ISEMPTY'
  | 'ISNOTEMPTY'
  | 'ANYTHING'
  | 'EMPTYSTRING'
  | '<='
  | '<'
  | '>='
  | '>'
  | 'BETWEEN'
  | 'SAMEAS'
  | 'NSAMEAS'
  | 'DYNAMIC'
  | 'ONToday'
  | 'NOTONToday'
  | 'DATEPART'
  | 'RELATIVEGE'
  | 'RELATIVELE'
  | 'RELATIVEGT'
  | 'RELATIVELT'
  | 'RELATIVEEE'
  | 'MORETHAN'
  | 'LESSTHAN'
  | 'GT_FIELD'
  | 'LT_FIELD'
  | 'GT_OR_EQUALS_FIELD'
  | 'LT_OR_EQUALS_FIELD'
  | 'VALCHANGES'
  | 'CHANGESFROM'
  | 'CHANGESTO';

export { ReferenceGlideElement, TypedRESTAPIRequest, QueryOperator };

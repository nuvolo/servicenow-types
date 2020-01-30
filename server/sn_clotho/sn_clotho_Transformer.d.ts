import { sn_clotho_SNAPITransformer } from './sn_clotho_SNAPITransformer';
import { GlideRecord } from '../GlideRecord';
import { Override } from '../../util';
declare interface sn_clotho_Transformer<T>
  extends Override<sn_clotho_SNAPITransformer, sn_clotho_Transformer<T>> {}

declare class sn_clotho_Transformer<T> {
  constructor(sourceRecords: GlideRecord<T>);
}
export { sn_clotho_Transformer };

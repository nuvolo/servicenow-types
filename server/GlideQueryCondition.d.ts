import { SNAPIGlideQueryCondition } from './SNAPIGlideQueryCondition';
import { QueryOperator, FieldType } from '../util';
declare class GlideQueryCondition<T> extends SNAPIGlideQueryCondition {
  /**
   * Adds an AND condition to the current condition.
   * @param name The name of a field.
   * @param oper (Optional) The operator for the query. If you do not specify an operator, the
   * condition uses an equals operator.
   * @param value The value to query on.
   */
  addCondition(name: FieldType<T>, value: any): GlideQueryCondition<T>;
  addCondition(
    name: FieldType<T>,
    oper: QueryOperator | undefined,
    value: any,
  ): GlideQueryCondition<T>;
  /**
   * Appends a 2-or-3 parameter OR condition to an existing GlideQueryCondition.
   * @param name Field name
   * @param oper (Optional) Query operator. The available values are dependent on the data
   * type of the value parameter.Numbers:
   * =
   *
   * !=
   *
   * &gt;
   *
   * &gt;=
   *
   * &lt;
   *
   * &lt;=
   *
   *
   *
   * Strings (must be in upper case):
   * =
   *
   * !=
   *
   * IN
   *
   * STARTSWITH
   *
   * ENDSWITH
   *
   * CONTAINS
   *
   * DOESNOTCONTAIN
   *
   *
   *
   * @param value Value on which to query (not case-sensitive).Note: All passed in arrays must
   * contain a minimum of two elements. Single element arrays are not
   * supported.
   */
  addOrCondition(name: FieldType<T>, value: any): GlideQueryCondition<T>;
  addOrCondition(
    name: FieldType<T>,
    oper: QueryOperator | undefined,
    value: any,
  ): GlideQueryCondition<T>;
}
export { GlideQueryCondition };

import { GlideQueryCondition } from './GlideQueryCondition';
declare class SNAPIGlideQueryCondition {
  /**
   * Adds an AND condition to the current condition.
   * @param name The name of a field.
   * @param oper (Optional) The operator for the query. If you do not specify an operator, the
   * condition uses an equals operator.
   * @param value The value to query on.
   */
  addCondition(
    name: string,
    oper: string | undefined,
    value: any,
  ): GlideQueryCondition<any>;
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
  addOrCondition(
    name: string,
    oper: string | undefined,
    value: any,
  ): GlideQueryCondition<any>;
}
export { SNAPIGlideQueryCondition };

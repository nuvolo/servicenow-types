import { GlideRecord } from './GlideRecord';
declare class SNAPIGlideScopedEvaluator {
  constructor();
  /**
   * Evaluates a script from a GlideRecord field.
   * @param grObj The GlideRecord containing a script expression.
   * @param scriptField (Optional) The name of the field containing the script expression.
   * @param variables (Optional) A map of variables with name-value pairs. These variables are
   * available to the script during execution of this method.
   */
  evaluateScript(
    grObj: GlideRecord<any>,
    scriptField?: string,
    variables?: any
  ): any;
  /**
   * Returns a variable from a GlideScopedEvaluator object.
   * @param name The name of the variable.
   */
  getVariable(name: string): any;
  /**
   * Puts a variable into the GlideScopedEvaluator object. These variables are available to
   * the script that this GlideScopedEvaluator object runs.
   * @param name The name of the variable.
   * @param value The value of the variable.
   */
  putVariable(name: string, value: any): void;
}
export { SNAPIGlideScopedEvaluator };

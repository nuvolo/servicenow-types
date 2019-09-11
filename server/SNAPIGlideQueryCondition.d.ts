import { GlideQueryCondition } from "./GlideQueryCondition";
declare class SNAPIGlideQueryCondition {
    /**
     * Adds an AND condition to the current condition.
     * @param name The name of a field.
     * @param oper (Optional) The operator for the query. If you do not specify an operator, the
     * condition uses an equals operator.
     * @param value The value to query on.
    */
    addCondition(name: string, oper: string, value: any): GlideQueryCondition;
    /**
     * Appends a 2-or-3 parameter OR condition to an existing GlideQueryCondition.
     * @param name Field name
     * @param oper (Optional) Query operator. The available values are dependent on the data
     * type of the <var class="keyword varname">value</var> parameter.<div class="p">Numbers:<ul class="ul" id="r_ScopedGlideQueryConditionOrAddCondition_String_name_String_oper_Object_value__ul_qyb_rbt_3y">
     * <li class="li">=</li>
     *
     * <li class="li">!=</li>
     *
     * <li class="li">&gt;</li>
     *
     * <li class="li">&gt;=</li>
     *
     * <li class="li">&lt;</li>
     *
     * <li class="li">&lt;=</li>
     *
     * </ul>
     * </div>
     * <div class="p">Strings (must be in upper case):<ul class="ul" id="r_ScopedGlideQueryConditionOrAddCondition_String_name_String_oper_Object_value__ul_egz_vbt_3y">
     * <li class="li">=</li>
     *
     * <li class="li">!=</li>
     *
     * <li class="li">IN</li>
     *
     * <li class="li">STARTSWITH</li>
     *
     * <li class="li">ENDSWITH</li>
     *
     * <li class="li">CONTAINS</li>
     *
     * <li class="li">DOESNOTCONTAIN</li>
     *
     * </ul>
     * </div>
     * @param value Value on which to query (not case-sensitive).<div class="note note"><span class="notetitle">Note:</span> All passed in arrays must
     * contain a minimum of two elements. Single element arrays are not
     * supported.</div>
    */
    addOrCondition(name: string, oper: string, value: any): GlideQueryCondition;
}
export { SNAPIGlideQueryCondition };

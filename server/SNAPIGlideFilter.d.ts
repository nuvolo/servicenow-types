import { GlideRecord } from "./GlideRecord";
declare class SNAPIGlideFilter {
    /**
     * Compares a specified filter to the contents of a specified GlideRecord.
     * @param gr GlideRecord to evaluate.
     * @param filter Encoded query string (case-sensitive).
     * @param match Optional. Flag that indicates whether all conditions must be met if
     * the<span class="keyword parmname"> filter</span> parameter contains multiple conditions. <p class="p">Valid
     * values:</p>
     * <ul class="ul" id="r_ScopedGlideFilterCheckRecord_GlideRecord_String_Object__ul_uwb_pd3_bhb">
     * <li class="li">true: all conditions must be met for the method to return true</li>
     *
     * <li class="li">false: only one of the conditions must be met for the method to return
     * true</li>
     *
     * </ul>
     * <p class="p">Default: true</p>
    */
    checkRecord(gr: GlideRecord, filter: string, match: boolean): boolean;
}
export { SNAPIGlideFilter };

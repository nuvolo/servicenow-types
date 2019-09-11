declare class SNAPIGlideDBFunctionBuilder {
    /**
     * Adds the values of two or more integer fields.
    */
    add(): void;
    constructor();
    /**
     * Builds the database function defined by the GlideDBFunctionBuilder object.
    */
    build(): void;
    /**
     * Concatenates the values of two or more fields.
    */
    concat(): void;
    /**
     * Defines a constant value to use in the function. If used with the
     * <span class="keyword apiname">dayofweek()</span> method, the string defines whether to use Sunday or Monday as
     * the first day of the week.
     * @param constant A constant value used in a function. <p class="p">When used with the
     * <span class="keyword apiname">dayofweek()</span> method, the value defines whether the week starts
     * on a Sunday or Monday. </p>
     * <div class="p">
     * <ul class="ul" id="GlideDBFBScoped-constant_S__ul_wz5_5bk_kbb">
     * <li class="li"><span class="ph uicontrol">1</span>: Week begins on Sunday. </li>
     *
     * <li class="li"><span class="ph uicontrol">2</span>: Week begins on Monday. </li>
     *
     * </ul>
     *
     * </div>
     * <p class="p">This definition enables the <span class="keyword apiname">dayofweek()</span> method to return
     * the correct day of the week from a given date. If a value other than 1 or 2 is
     * provided, the <span class="keyword apiname">dayofweek()</span> method uses Sunday as the first day
     * of the week.</p>
    */
    constant(constant: string): void;
    /**
     * Determines the duration using a given start date/time and end date/time.
    */
    datediff(): void;
    /**
     * Returns an integer representing the day of the week for a given date.
    */
    dayofweek(): number;
    /**
     * Divides the value of one integer field by another.
    */
    divide(): void;
    /**
     * Defines a field on which a SQL operation is performed.
     * @param field The field on which you are performing the SQL operation.
    */
    field(field: string): void;
    /**
     * Determines the number of code units in a field.
    */
    length(): void;
    /**
     * Multiplies the values of two integer fields.
    */
    multiply(): void;
    /**
     * Subtracts the value of one integer field from another.
    */
    subtract(): void;
}
export { SNAPIGlideDBFunctionBuilder };

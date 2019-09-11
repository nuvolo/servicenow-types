import { GlideRecord } from "../GlideRecord";
declare class sn_sc_SNAPICartJS {
    constructor();
    constructor(cartName: string);
    /**
     * Adds the request for a catalog item to the current cart.
     * @param request A JSON object that contains the details of the catalog item to be added to the
     * cart.<p class="p">The structure of the request object
     * is:</p>
     * <pre class="pre codeblock">{
     * 'sysparm_id': item_id,
     * 'sysparm_quantity': item_quantity,
     * 'variables':{
     * 'var_name': 'var_value',
     * ...
     * }
     * }</pre>
     * <ul class="ul" id="r_CJSS-addToCart_O__ul_tdn_1ly_5z">
     * <li class="li">item_id: sys_id of the item to be added to the cart</li>
     *
     * <li class="li">item_quantity: Number of items to be added. Default value is 1.</li>
     *
     * <li class="li">var_name: Name of the question.</li>
     *
     * <li class="li">var_value: Value of the answer (Not the display value).</li>
     *
     * </ul>
    */
    addToCart(request: any): any;
    /**
     * Specifies if the current user has the required role to edit the Request
     * for field.
    */
    canViewRF(): boolean;
    /**
     * Performs the cart checkout. If the two-step checkout is enabled, returns the order
     * summary. If the two-step checkout is disabled, the cart is submitted and details of the
     * generated request are returned.
    */
    checkoutCart(): any;
    /**
     * Deletes the current cart.
    */
    empty(): void;
    /**
     * Returns the cart details.
    */
    getCartDetails(): any;
    /**
     * Returns the cart id of the current cart.
    */
    getCartID(): string;
    /**
     * Returns the GlideRecord for the cart item (sc_cart_item) in the current
     * cart.
    */
    getCartItems(): GlideRecord;
    /**
     * Gets the delivery address for the current cart.
    */
    getDeliveryAddress(): string;
    /**
     * Gets the sys_id from the sys_user record of the user for whom the cart is
     * requested.
    */
    getRequestedFor(): string;
    /**
     * Gets the name from the user record of the user for whom the current cart is
     * requested.
    */
    getRequestedForDisplayName(): string;
    /**
     * Gets the special instructions for the current cart.
    */
    getSpecialInstructions(): string;
    /**
     * Orders a single item. If two-step checkout is enabled, the method adds the specified
     * item to the cart and returns the sys_id of the cart. If two-step checkout is disabled, the
     * method completes the purchase of the specified item and returns the sys_id of the generated
     * request.
     * @param request JSON object that contains details of the catalog item to order.
     * @param request_delivery_address Address to which to deliver the items.<p class="p">Default: Address of user</p>
     * @param request_sysparm_id Required. The sys_id of the item to purchase.
     * @param request_special_instructions Instructions to follow when processing the order.
     * @param request_sysparm_quantity Quantity of the specified item to purchase.<p class="p">Default: 1</p>
     * @param request_sysparm_requested_for The sys_id of the user for whom the item is requested.<p class="p">Default: Session
     * user</p>
     * @param request_variables Questions and customer answers associated with the item.
     * @param request_variables_var_name Name of the question.
     * @param request_variables_var_value Customer's response to the associated question.
    */
    orderNow(request: any, request_delivery_address: string, request_sysparm_id: string, request_special_instructions: string, request_sysparm_quantity: number, request_sysparm_requested_for: string, request_variables: any[], request_variables_var_name: string, request_variables_var_value: string): any;
    /**
     * Sets the delivery address for the current cart.
     * @param address Delivery address for the current cart.
    */
    setDeliveryAddress(address: string): void;
    /**
     * Sets the sys_id in the sys_user record of the user for whom the cart is
     * requested.
     * @param user sys_id to be set in the sys_user record of the user for whom the cart is
     * requested.
    */
    setRequestedFor(user: string): void;
    /**
     * Sets the special instructions for the current cart.
     * @param specialInstructions Special instructions for the current cart.
    */
    setSpecialInstructions(specialInstructions: string): void;
    /**
     * Updates special instructions, requested for, and delivery address from the
     * request parameter and performs the cart checkout. Use this API to modify
     * the mentioned parameters of the cart and perform the cart checkout simultaneously. Missing
     * parameters in the request object will have their default value.
     * @param request A JSON object that contains details of the cart to be submitted.<p class="p">The
     * structure of the request object
     * is:</p>
     * <pre class="pre codeblock">{
     * 'special_instructions' : 'instructions',
     * 'sysparm_requested_for' : requested_for,
     * 'delivery_address' : 'address'
     * }</pre>
     * <ul class="ul" id="r_CJSS-submitOrder-O__ul_iky_vrd_zz">
     * <li class="li">instructions: Special instructions for the request.</li>
     *
     * <li class="li">requested_for : sys_id of the requested_for user.</li>
     *
     * <li class="li">address: Delivery address for the request.</li>
     *
     * </ul>
    */
    submitOrder(request: any): any;
    /**
     * Updates an item in the cart.
     * @param request A JSON object that contains details of the catalog item to be updated.<p class="p">The
     * structure of the request object
     * is:</p>
     * <pre class="pre codeblock">{
     * 'sysparm_quantity' : item_quantity,
     * 'sysparm_requested_for' : requested_for,
     * 'variables' : {
     * 'var_name' : 'var_value',
     * ...
     * }
     * }</pre>
     * <ul class="ul" id="r_CJSS-updateItem_M_S__ul_agy_ypd_zz">
     * <li class="li">item_quantity: Number of items to be added. Default value is 1.</li>
     *
     * <li class="li">var_name: Name of the question.</li>
     *
     * <li class="li">var_value: Value of the answer (Not the display value).</li>
     *
     * </ul>
     * @param cart_item_id sys_id of the cart item to be modified.
    */
    updateItem(request: any, cart_item_id: string): any;
}
export { sn_sc_SNAPICartJS };

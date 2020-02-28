import { GlideRecord } from '../GlideRecord';
declare class sn_sc_SNAPICartJS {
  constructor();
  constructor(cartName: string);
  /**
   * Adds the request for a catalog item to the current cart.
   * @param request A JSON object that contains the details of the catalog item to be added to the
   * cart.The structure of the request object
   * is:
   * {
   * 'sysparm_id': item_id,
   * 'sysparm_quantity': item_quantity,
   * 'variables':{
   * 'var_name': 'var_value',
   * ...
   * }
   * }
   *
   * item_id: sys_id of the item to be added to the cart
   *
   * item_quantity: Number of items to be added. Default value is 1.
   *
   * var_name: Name of the question.
   *
   * var_value: Value of the answer (Not the display value).
   *
   *
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
  getCartItems(): GlideRecord<any>;
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
   */
  orderNow(request: any): any;
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
   * @param request A JSON object that contains details of the cart to be submitted.The
   * structure of the request object
   * is:
   * {
   * 'special_instructions' : 'instructions',
   * 'sysparm_requested_for' : requested_for,
   * 'delivery_address' : 'address'
   * }
   *
   * instructions: Special instructions for the request.
   *
   * requested_for : sys_id of the requested_for user.
   *
   * address: Delivery address for the request.
   *
   *
   */
  submitOrder(request: any): any;
  /**
   * Updates an item in the cart.
   * @param request A JSON object that contains details of the catalog item to be updated.The
   * structure of the request object
   * is:
   * {
   * 'sysparm_quantity' : item_quantity,
   * 'sysparm_requested_for' : requested_for,
   * 'variables' : {
   * 'var_name' : 'var_value',
   * ...
   * }
   * }
   *
   * item_quantity: Number of items to be added. Default value is 1.
   *
   * var_name: Name of the question.
   *
   * var_value: Value of the answer (Not the display value).
   *
   *
   * @param cart_item_id sys_id of the cart item to be modified.
   */
  updateItem(request: any, cart_item_id: string): any;
}
export { sn_sc_SNAPICartJS };

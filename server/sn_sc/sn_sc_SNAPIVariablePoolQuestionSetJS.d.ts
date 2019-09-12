declare class sn_sc_SNAPIVariablePoolQuestionSetJS {
  constructor();
  /**
   * Returns the array of questions associated with the cart item ids specified.
   */
  getFlatQuestions(): any;
  /**
   * Loads the question set.
   */
  load(): void;
  /**
   * Sets the cart item ids of the variable pool.
   * @param id
   */
  setCartID(id: string): void;
}
export { sn_sc_SNAPIVariablePoolQuestionSetJS };

declare class GlideAction {
  /**
   * Set getRedirectURL in UI Actions.
   * @param scope takes the 'current' object.
   */
  getRedirectURL<TRecord>(scope: TRecord): void;
}

export { GlideAction };

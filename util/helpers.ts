/**
 * Override method and property signatures from TBase, and use the signatures provided in TOverride.
 */
export type Override<TBase, TOverride> = Omit<TBase, keyof TOverride>;

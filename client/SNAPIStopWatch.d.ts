declare class SNAPIStopWatch {
  constructor();
  constructor(initialDate: Date);
  /**
   * Returns the number of milliseconds since the timer started.
   */
  getTime(): number;
  /**
   * Resets the timer to the current time.
   */
  restart(): void;
  /**
   * The elapsed time as HH:MM:SS.SSS.
   */
  toString(): string;
}
export { SNAPIStopWatch };

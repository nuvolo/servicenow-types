import { GlideRecord } from './GlideRecord';
import { GlideUser } from './GlideUser';
declare class SNAPIGlideSystem {
  /**
   * Adds an error message for the current session.
   * @param message The message to add.
   */
  addErrorMessage(message: any): void;
  /**
   * Adds an info message for the current session. This method is not supported for
   * asynchronous business rules.
   * @param message An info message object.
   */
  addInfoMessage(message: any): void;
  /**
   * Returns an ASCII string from the specified base64 string.
   * @param source A base64 encoded string.
   */
  base64Decode(source: string): string;
  /**
   * Creates a base64 string from the specified string.
   * @param source The string to be encoded.
   */
  base64Encode(source: string): string;
  /**
   * Returns the date and time for the beginning of last month in GMT.
   */
  beginningOfLastMonth(): string;
  /**
   * Returns the date and time for the beginning of last week in GMT.
   */
  beginningOfLastWeek(): string;
  /**
   * Returns the date and time for the beginning of next month in GMT.
   */
  beginningOfNextMonth(): string;
  /**
   * Returns the date and time for the beginning of next week in GMT.
   */
  beginningOfNextWeek(): string;
  /**
   * Returns the date and time for the beginning of next year in GMT.
   */
  beginningOfNextYear(): string;
  /**
   * Returns the date and time for the beginning of this month in GMT.
   */
  beginningOfThisMonth(): string;
  /**
   * Returns the date and time for the beginning of this quarter in GMT.
   */
  beginningOfThisQuarter(): string;
  /**
   * Returns the date and time for the beginning of this week in GMT.
   */
  beginningOfThisWeek(): string;
  /**
   * Returns the date and time for the beginning of this year in GMT.
   */
  beginningOfThisYear(): string;
  /**
   * Generates a date and time for the specified date in GMT.
   * @param date Format: yyyy-mm-dd
   * @param range Start, end, or a time in the 24 hour format hh:mm:ss.
   */
  dateGenerate(date: string, range: string): string;
  /**
   * Returns the date and time for a specified number of days ago.
   * @param days Integer number of days
   */
  daysAgo(days: number): string;
  /**
   * Returns the date and time for the end of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoEnd(days: number): string;
  /**
   * Returns the date and time for the beginning of the day a specified number of days
   * ago.
   * @param days Integer number of days
   */
  daysAgoStart(days: string): string;
  /**
   * Writes a debug message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  debug(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): void;
  /**
   * Returns the date and time for the end of last month in GMT.
   */
  endOfLastMonth(): string;
  /**
   * Returns the date and time for the end of last week in GMT.
   */
  endOfLastWeek(): string;
  /**
   * Returns the date and time for the end of last year in GMT.
   */
  endOfLastYear(): string;
  /**
   * Returns the date and time for the end of next month in GMT.
   */
  endOfNextMonth(): string;
  /**
   * Returns the date and time for the end of next week in GMT.
   */
  endOfNextWeek(): string;
  /**
   * Returns the date and time for the end of next year in GMT.
   */
  endOfNextYear(): string;
  /**
   * Returns the date and time for the end of this month in GMT.
   */
  endOfThisMonth(): string;
  /**
   * Returns the date and time for the end of this quarter in GMT.
   */
  endOfThisQuarter(): string;
  /**
   * Returns the date and time for the end of this week in GMT.
   */
  endOfThisWeek(): string;
  /**
   * Returns the date and time for the end of this year in GMT.
   */
  endOfThisYear(): string;
  /**
   * Writes an error message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  error(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): void;
  /**
   * Queues an event for the event manager.
   * @param name Name of the event being queued.
   * @param instance GlideRecord object, such as "current".
   * @param parm1 (Optional) Saved with the instance if specified.
   * @param parm2 (Optional) Saved with the instance if specified.
   * @param queue Name of the queue.
   */
  eventQueue(
    name: string,
    instance: any,
    parm1?: string,
    parm2?: string,
    queue?: string,
  ): void;
  /**
   * Queues an event for the event manager at a specified date and time.
   * @param name Name of the event being queued.
   * @param instance GlideRecord object, such as "current".
   * @param parm1 (Optional) Saved with the instance if specified.
   * @param parm2 (Optional) Saved with the instance if specified.
   * @param expiration Date and time to process this event..
   */
  eventQueueScheduled(
    name: string,
    instance: any,
    parm1: string | undefined,
    parm2: string | undefined,
    expiration: any,
  ): void;
  /**
   * Executes a job for a scoped application.
   * @param job The job to be run.
   */
  executeNow(job: GlideRecord<any>): string;
  /**
   * Generates a GUID that can be used when a unique identifier is required.
   */
  generateGUID(): string;
  /**
   * Gets the caller scope name; returns null if there is no caller.
   */
  getCallerScopeName(): string;
  /**
   * Gets a string representing the cache version for a CSS file.
   */
  getCssCacheVersionString(): string;
  /**
   * Gets the ID of the current application as set using the Application Picker.
   */
  getCurrentApplicationId(): string;
  /**
   * Gets the name of the current scope.
   */
  getCurrentScopeName(): string;
  /**
   * Returns the list of error messages for the session that were added by
   * addErrorMessage().
   */
  getErrorMessages(): string;
  /**
   * Retrieves a message from UI messages that has HTML special characters, and replaces
   * them with escape sequences. For example, &amp; becomes
   * &amp;amp;.
   * @param id ID of the message.
   * @param args Optional. List of strings or other values defined by java.text.MessageFormat,
   * which allows you to produce language-neutral messages for display to users.
   */
  getEscapedMessage(id: string, args?: any[]): string;
  /**
   * Retrieves a message from UI messages.
   * @param id The ID of the message.
   * @param args (Optional) a list of strings or other values defined by
   * java.text.MessageFormat,
   * which allows you to produce language-neutral messages for display to users.
   */
  getMessage(id: string, args?: any[]): string;
  /**
   * Gets the value of a Glide property. If the property is not found, returns an alternate
   * value.
   * @param key The key for the property whose value should be returned.
   * @param alt (Optional) Alternate object to return if the property is not found.
   */
  getProperty(key: string, alt?: any): string;
  /**
   * Gets a reference to the current Glide session.
   */
  getSession(): string;
  /**
   * Retrieves the GlideSession session ID.
   */
  getSessionID(): string;
  /**
   * This method is no longer available. Instead, use
   * gs.getSession().getSessionToken().
   */
  getSessionToken(): string;
  /**
   * Returns the name of the time zone associated with the current user.
   */
  getTimeZoneName(): string;
  /**
   * Gets the current URI for the session.
   */
  getUrlOnStack(): string;
  /**
   * Returns a reference to the scoped GlideUser object for the current user.
   */
  getUser(): GlideUser;
  /**
   * Gets the display name of the current user.
   */
  getUserDisplayName(): string;
  /**
   * Gets the sys_id of the current user.
   */
  getUserID(): string;
  /**
   * Gets the user name, or user id, of the current user.
   */
  getUserName(): string;
  /**
   * Determines if the current user has the specified role.
   * @param role The role to check.
   */
  hasRole(role: any): boolean;
  /**
   * Returns the date and time for a specified number of hours ago.
   * @param hours Integer number of hours
   */
  hoursAgo(hours: number): string;
  /**
   * Returns the date and time for the end of the hour a specified number of hours
   * ago.
   * @param hours Integer number of hours
   */
  hoursAgoEnd(hours: number): string;
  /**
   * Returns the date and time for the start of the hour a specified number of hours
   * ago.
   * @param hours Integer number of hours
   */
  hoursAgoStart(hours: number): string;
  /**
   * Provides a safe way to call from the sandbox, allowing only trusted scripts to be
   * included.
   * @param name The name fo the script to include.
   */
  include(name: string): boolean;
  /**
   * Writes an info message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  info(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): void;
  /**
   * Determines if debugging is active for a specific scope.
   */
  isDebugging(): boolean;
  /**
   * Checks if the current session is interactive. An example of an interactive session is
   * when a user logs in normally. An example of a non-interactive session is using a SOAP request to
   * retrieve data.
   */
  isInteractive(): boolean;
  /**
   * Determines if the current user is currently logged in.
   */
  isLoggedIn(): boolean;
  /**
   * You can determine if a request comes from a mobile device.
   */
  isMobile(): boolean;
  /**
   * Returns the date and time for the end of the minute a specified number of minutes
   * ago.
   * @param minutes Integer number of minutes
   */
  minutesAgoEnd(minutes: number): string;
  /**
   * Returns the date and time for the start of the minute a specified number of minutes
   * ago.
   * @param minutes Integer number of minutes
   */
  minutesAgoStart(minutes: number): string;
  /**
   * Returns the date and time for a specified number of months ago.
   * @param months Integer number of months
   */
  monthsAgo(months: number): string;
  /**
   * Returns the date and time for the start of the month a specified number of months
   * ago.
   * @param months Integer number of months
   */
  monthsAgoStart(months: number): string;
  /**
   * Queries an object and returns true if the object is null, undefined, or contains an
   * empty string.
   * @param o The object to be checked.
   */
  nil(o: any): boolean;
  /**
   * Returns the date and time for the last day of the quarter for a specified number of
   * quarters ago.
   * @param quarters Integer number of quarters
   */
  quartersAgoEnd(quarters: number): string;
  /**
   * Returns the date and time for the first day of the quarter for a specified number of
   * quarters ago.
   * @param quarters Integer number of quarters
   */
  quartersAgoStart(quarters: number): string;
  /**
   * Sets the specified key to the specified value if the property is within the script's
   * scope.
   * @param key The key for the property to be set.
   * @param value The value of the property to be set.
   * @param description A description of the property.
   */
  setProperty(key: string, value: string, description: string): void;
  /**
   * Sets the redirect URI for this transaction, which then determines the next page the
   * user will see.
   * @param o URI object or URI string to set as the redirect
   */
  setRedirect(o: any): void;
  /**
   * Determines if a database table exists.
   * @param name Name of the table to check for existence.
   */
  tableExists(name: string): boolean;
  /**
   * Replaces UTF-8 encoded characters with ASCII characters.
   * @param url A string with UTF-8 percent (%) encoded characters.
   */
  urlDecode(url: string): string;
  /**
   * Encodes non-ASCII characters, unsafe ASCII characters, and spaces so the returned
   * string can be used on the Internet. Uses UTF-8 encoding. Uses percent (%) encoding.
   * @param url The string to be encoded.
   */
  urlEncode(url: string): string;
  /**
   * Writes a warning message to the system log.
   * @param message The log message with place holders for any variable arguments.
   * @param param1 (Optional) First variable argument.
   * @param param2 (Optional) Second variable argument.
   * @param param3 (Optional) Third variable argument.
   * @param param4 (Optional) Fourth variable argument.
   * @param param5 (Optional) Fifth variable argument.
   */
  warn(
    message: string,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
  ): void;
  /**
   * Takes an XML string and returns a JSON object.
   * @param xmlString The XML string to be converted.
   */
  xmlToJSON(xmlString: string): any;
  /**
   * Returns a date and time for a certain number of years ago.
   * @param years An integer number of years
   */
  yearsAgo(years: number): string;
  /**
   * Returns yesterday's time (24 hours ago).
   */
  yesterday(): string;
}
export { SNAPIGlideSystem };

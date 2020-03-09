import { GlideRecord } from './GlideRecord';
declare class SNAPIGlideForm {
  /**
   * Adds an icon on a field’s label.
   * @param fieldName The field name.
   * @param icon The font icon to show next to the field. Supported icons - icon-user,
   * icon-user-group, icon-lightbulb, icon-home, icon-mobile, icon-comment, icon-mail,
   * icon-locked, icon-database, icon-book, icon-drawer, icon-folder, icon-catalog,
   * icon-tab, icon-cards, icon-tree-right, icon-tree, icon-book-open, icon-paperclip,
   * icon-edit, icon-trash, icon-image, icon-search, icon-power, icon-cog, icon-star,
   * icon-star-empty, icon-new-ticket, icon-dashboard, icon-cart-full, icon-view,
   * icon-label, icon-filter, icon-calendar, icon-script, icon-add, icon-delete,
   * icon-help, icon-info, icon-check-circle, icon-alert, icon-sort-ascending,
   * icon-console, icon-list, icon-form, and icon-livefeed.
   * @param title The text title for the icon.
   */
  addDecoration(fieldName: string, icon: string, title: string): void;
  /**
   * Adds an icon on a field’s label.
   * @param fieldName The field name.
   * @param icon The font icon to show next to the field. Supported icons - icon-user,
   * icon-user-group, icon-lightbulb, icon-home, icon-mobile, icon-comment, icon-mail,
   * icon-locked, icon-database, icon-book, icon-drawer, icon-folder, icon-catalog,
   * icon-tab, icon-cards, icon-tree-right, icon-tree, icon-book-open, icon-paperclip,
   * icon-edit, icon-trash, icon-image, icon-search, icon-power, icon-cog, icon-star,
   * icon-star-empty, icon-new-ticket, icon-dashboard, icon-cart-full, icon-view,
   * icon-label, icon-filter, icon-calendar, icon-script, icon-add, icon-delete,
   * icon-help, icon-info, icon-check-circle, icon-alert, icon-sort-ascending,
   * icon-console, icon-list, icon-form, and icon-livefeed.
   * @param title The text title for the icon.
   * @param color A CSS color.
   */
  addDecoration(
    fieldName: string,
    icon: string,
    title: string,
    color: string,
  ): void;
  /**
   * Displays the error message at the top of the form.
   * @param message The message to display.
   */
  addErrorMessage(message: string): void;
  /**
   * Adds an informational message to the top of the form.
   * @param message The message to display.
   */
  addInfoMessage(message: string): void;
  /**
   * Adds a choice to the end of a choice list field.
   * @param fieldName The name of the field.
   * @param choiceValue The value to be stored in the database.
   * @param choiceLabel The value displayed.
   */
  addOption(fieldName: string, choiceValue: string, choiceLabel: string): void;
  /**
   * Adds a choice to the end of a choice list field.
   * @param fieldName The field name.
   * @param choiceValue The value stored in the database.
   * @param choiceLabel The value displayed.
   * @param choiceIndex Order of the choice in the list. The index is into a zero based array.
   */
  addOption(
    fieldName: string,
    choiceValue: string,
    choiceLabel: string,
    choiceIndex: number,
  ): void;
  /**
   * Removes all informational and error messages from the top of the form.
   */
  clearMessages(): void;
  /**
   * Removes all options from the choice list.
   * @param fieldName Name of the field.
   */
  clearOptions(fieldName: string): void;
  /**
   * Removes any value(s) from the field.
   * @param fieldName Name of the field.
   */
  clearValue(fieldName: string): void;
  /**
   * Prevents file attachments from being added.
   */
  disableAttachments(): void;
  /**
   * Allows file attachments to be added. Shows the paper clip icon.
   */
  enableAttachments(): void;
  /**
   * Used to draw attention to a particular field. Flashes the specified color for a
   * specified duration of time in the specified field.
   * @param fieldName Specifies the field to highlight in the following format:
   * "&lt;table-name&gt;.&lt;field-name&gt;".
   * @param color RGB color or acceptable CSS color.
   * @param count Specifies how long the label will flash. Options include:
   * 2: Flashes for 1 second
   *
   * 0: Flashes for 2 seconds
   *
   * -2: Flashes for 3 seconds
   *
   * -4: Flashes for 4 seconds
   *
   *
   */
  flash(fieldName: string, color: string, count: number): void;
  /**
   * Returns the most recent action name, or, for a client script, the sys_id of the UI
   * action clicked.
   */
  getActionName(): string;
  /**
   * Returns a Boolean value for the specified field.
   * @param fieldName Name of the field.
   */
  getBooleanValue(fieldName: string): boolean;
  /**
   * Returns the HTML element for the specified field.
   * @param fieldName Name of the field.
   */
  getControl(fieldName: string): HTMLElement;
  /**
   * Returns the decimal value of the specified field.
   * @param fieldName The name of the field.
   */
  getDecimalValue(fieldName: string): string;
  /**
   * Returns the HTML element specified by the parameter.
   * @param id The field id.
   */
  getElement(id: string): HTMLElement;
  /**
   * Returns the HTML element for the form.
   */
  getFormElement(): HTMLFormElement;
  /**
   * Returns the HTML element of the help text for the specified field.
   * @param fieldName Name of the field.
   */
  getHelpTextControl(fieldName: string): HTMLElement;
  /**
   * Returns the integer value of the field.
   * @param fieldName The field name.
   */
  getIntValue(fieldName: string): number;
  /**
   * Returns the plain text value of the field label.
   * @param fieldName The field name
   */
  getLabelOf(fieldName: string): string;
  /**
   * Returns the option element for a selected box named fieldName
   * where choiceValue matches the option value.
   * @param fieldName Name of the field.
   * @param choiceValue Value of the option.
   */
  getOption(fieldName: string, choiceValue: string): HTMLElement;
  /**
   * Returns the GlideRecord for a specified field.
   * @param fieldName Name of the field.
   * @param callBack Name of the call back function.
   */
  getReference(fieldName: string, callBack: any): GlideRecord;
  /**
   * Returns all section names, whether visible or not.
   */
  getSectionNames(): any[];
  /**
   * Returns an array of the form's sections.
   */
  getSections(): any[];
  /**
   * Returns the name of the table to which this record belongs.
   */
  getTableName(): string;
  /**
   * Returns the sys_id of the record displayed in the form.
   */
  getUniqueValue(): string;
  /**
   * Returns the value of the specified field.
   * @param fieldName The field name.
   */
  getValue(fieldName: string): string;
  /**
   * Hides all field messages.
   */
  hideAllFieldMsgs(): void;
  /**
   * Hides all field messages.
   * @param type The type of message, info or error.
   */
  hideAllFieldMsgs(type: string): void;
  /**
   * Hides the error message placed by showErrorBox().
   * @param fieldName The name of the field or control.
   */
  hideErrorBox(fieldName: string): void;
  /**
   * Hides the last message placed by showFieldMsg().
   * @param fieldName Name of the field.
   */
  hideFieldMsg(fieldName: string): void;
  /**
   * Hides the last message placed by showFieldMsg().
   * @param fieldName Name of the field.
   * @param clearAll When true, all messages for the field are cleared. When false, only the last
   * message is removed.
   */
  hideFieldMsg(fieldName: string, clearAll: boolean): void;
  /**
   * Hides the specified related list on the form.
   * @param listTableName Name of the related list. Use the sys_id to hide a list through a relationship.
   */
  hideRelatedList(listTableName: string): void;
  /**
   * Hides all related lists on the form.
   */
  hideRelatedLists(): void;
  /**
   * Returns true while a live update is being done on the record the form is showing.
   */
  isLiveUpdating(): boolean;
  /**
   * Returns true if the field is mandatory.
   * @param fieldName Name of the field.
   */
  isMandatory(fieldName: string): boolean;
  /**
   * Returns true if the record has never been saved.
   */
  isNewRecord(): boolean;
  /**
   * Returns true if the section is visible.
   */
  isSectionVisible(): boolean;
  /**
   * You can update a list collector variable.
   * @param fieldName Name of the slush bucket.
   */
  refreshSlushbucket(fieldName: string): void;
  /**
   * Removes the icon from the specified field that matches the icon and title.
   * @param fieldName Field name.
   * @param icon Name of the icon to remove.
   * @param title The icon's text title (name).
   */
  removeDecoration(fieldName: string, icon: string, title: string): void;
  /**
   * Removes the icon from the specified field that matches the icon and title.
   * @param fieldName Field name.
   * @param icon Name of the icon to remove.
   * @param title The icon's text title (name).
   * @param color A CSS color
   */
  removeDecoration(
    fieldName: string,
    icon: string,
    title: string,
    color: string,
  ): void;
  /**
   * Removes the specified option from the choice list.
   * @param fieldName Name of the field.
   * @param choiceValue The value stored in the database. This is not the label.
   */
  removeOption(fieldName: string, choiceValue: string): void;
  /**
   * Saves the record without navigating away (update and stay).
   */
  save(): void;
  /**
   * Makes the specified field available or unavailable.
   * @param fieldName Name of the field.
   * @param disable When true disables the field. When false enables the field.
   */
  setDisabled(fieldName: string, disable: boolean): void;
  /**
   * Displays or hides a field.
   * @param fieldname Name of the field.
   * @param display When true displays the field, when false hides the field.
   */
  setDisplay(fieldname: string, display: boolean): void;
  /**
   * Sets the plain text value of the field label.
   * @param fieldName The field name.
   * @param label The field text label.
   */
  setLabelOf(fieldName: string, label: string): void;
  /**
   * Makes the specified field mandatory.
   * @param fieldName Name of the field.
   * @param mandatory When true makes the field mandatory. When false makes the field
   * optional.
   */
  setMandatory(fieldName: string, mandatory?: boolean): void;
  /**
   * Makes the specified field read only or editable.
   * @param fieldName Name of the field.
   * @param readOnly When true makes the field read only. When false makes the field
   * editable.
   */
  setReadOnly(fieldName: string, readOnly: boolean): void;
  /**
   * Shows or hides a section.
   * @param sectionName The section name is lower case with an underscore replacing the first space in
   * the name, and with the remaining spaces being removed, for example "Section Four is
   * Here" becomes "section_fourishere". Other non-alphanumeric characters, such as
   * ampersand (&), are removed. Section names can be found by using the
   * getSectionNames() method.
   * @param display When true shows the section. When false hides the section.
   */
  setSectionDisplay(sectionName: string, display: boolean): boolean;
  /**
   * Sets the value of a field.
   * @param fieldName Name of the field.
   * @param value Value in the database.
   */
  setValue(fieldName: string, value: string): void;
  /**
   * Sets the value of a field.
   * @param fieldName Name of the field.
   * @param value System ID for the reference value in the database. Can be an array of system
   * IDs if the field is a glide-list.
   * @param displayValue Display name for the referenced value in the database. Can be an array of
   * display names if the field is a glide-list.
   */
  setValue(fieldName: string, value: string, displayValue: string): void;
  /**
   * Displays or hides the field.
   * @param fieldName The field name.
   * @param display When true displays the field. When false hides the field.
   */
  setVisible(fieldName: string, display: boolean): void;
  /**
   * Displays an error message under the specified form field (either a control object or
   * the name of the field). If the control or field is currently off the screen, the form scrolls to
   * the control or field.
   * @param name The name of the control or field.
   * @param message The message to be displayed.
   */
  showErrorBox(name: string, message: string): void;
  /**
   * Displays an error message under the specified form field (either a control object or
   * the name of the field). If the control or field is currently off the screen, the form scrolls to
   * the control or field.
   * @param name Name of the field or control.
   * @param message Message to display.
   * @param scrollForm When true scrolls the form to the field. When false the form does not scroll to
   * the field.
   */
  showErrorBox(name: string, message: string, scrollForm: boolean): void;
  /**
   * Displays either an informational or error message under the specified form field
   * (either a control object or the name of the field). If the control or field is off the screen,
   * the form is scrolled to the field.
   * @param field Name of the field or control.
   * @param message Message to display.
   * @param type "error","info", or "warning".
   */
  showFieldMsg(field: string, message: string, type: string): void;
  /**
   * Displays either an informational or error message under the specified form field
   * (either a control object or the name of the field). If the control or field is off the screen,
   * the form is scrolled to the field.
   * @param field Name of the field or control.
   * @param message Message to display.
   * @param type "error","info", or "warning".
   * @param scrollForm When true, the form scrolls to the field if it is off screen. When false, the
   * form does not scroll.
   */
  showFieldMsg(
    field: string,
    message: string,
    type: string,
    scrollForm: boolean,
  ): void;
  /**
   * Displays the specified related list on the form.
   * @param listTableName Name of the related list.
   */
  showRelatedList(listTableName: string): void;
  /**
   * Displays all the form's related lists.
   */
  showRelatedLists(): void;
  /**
   * Saves the record.
   */
  submit(): void;
  /**
   * Saves the record.
   * @param verb An action_name from a sys_ui_action record. The action name must be for a
   * visible form button.
   */
  submit(verb: string): void;
}
export { SNAPIGlideForm };

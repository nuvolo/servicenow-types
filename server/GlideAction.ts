import { GlideRecord } from './GlideRecord';
declare class GlideAction {
  /**
   * Set a redirect URL in UI Actions.
   * @param target takes a GlideRecord object or string query
   * Examples from official ServiceNow documentation can be seen on 'Create a UI routing action' tutorial
   */
  setRedirectURL(target: GlideRecord<any> | string): void;
}

export { GlideAction };

import { SNAPIGlideRecord } from "./SNAPIGlideRecord";
declare class GlideRecord extends SNAPIGlideRecord {
  get(sys_id: string): boolean;
}
export { GlideRecord };

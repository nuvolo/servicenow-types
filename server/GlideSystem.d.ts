import { SNAPIGlideSystem } from './SNAPIGlideSystem';
import { GlideSession } from './GlideSession';
declare class GlideSystem extends SNAPIGlideSystem {
  //@ts-ignore
  getSession(): GlideSession;
}
export { GlideSystem };

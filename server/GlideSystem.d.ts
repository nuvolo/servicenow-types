import { SNAPIGlideSystem } from "./SNAPIGlideSystem";
type printable = string | number;
declare class GlideSystem extends SNAPIGlideSystem {
  info(
    message: string,
    parm1?: printable,
    parm2?: printable,
    parm3?: printable,
    parm4?: printable,
    parm5?: printable
  ): void;
  error(
    message: string,
    parm1?: printable,
    parm2?: printable,
    parm3?: printable,
    parm4?: printable,
    parm5?: printable
  ): void;
  warn(
    message: string,
    parm1?: printable,
    parm2?: printable,
    parm3?: printable,
    parm4?: printable,
    parm5?: printable
  ): void;
}
export { GlideSystem };

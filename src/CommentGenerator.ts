import { CG } from "./common";
class JSDocComment {
  private beginning = "/**";
  private ending = " */";
  private _description: string;
  private _params: CG.Param[];
  constructor() {
    this._description = "";
    this._params = [];
  }
  description(desc: string) {
    this._description = desc;
    return this;
  }
  param(name: string, description: string) {
    this._params.push({ name, description });
    return this;
  }
  private _line(text: string) {
    return ` * ${text.trimLeft()}`;
  }

  private _multiLine(text: string) {
    return text
      .split("\n")
      .map((cur, index) => {
        return this._line(cur);
      })
      .join("\n");
  }

  render(): string {
    let desc = this._multiLine(this._description);
    let params = this._params.map(param => this._multiLine(`@param ${param.name} ${param.description}`)).join("\n");
    let body = [desc, params].filter(cur => cur !== "").join("\n");
    return `*\n${body}\n`;
  }
}

export function comment() {
  return new JSDocComment();
}

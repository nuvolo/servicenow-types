declare class AbstractAjaxProcessor {
  newItem(name: string): AjaxItem;

  getParameter(name: string): string;

  getDocument(): unknown;

  getRootElement(): unknown;

  getName(): string;

  getValue(): string;

  getType(): string;

  getChars(): string;

  setAnswer(value: string): void;

  setError(error: string): void;
}

interface AjaxItem {
  setAttribute(name: string, value: string): void;
}

export { AbstractAjaxProcessor };

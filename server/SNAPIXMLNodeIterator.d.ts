import { XMLNode } from './XMLNode';
declare class SNAPIXMLNodeIterator {
  /**
   * Returns true if the iteration has more elements.
   */
  hasNext(): boolean;
  /**
   * Gets the next element in the iteration. The returned element may be a #text node for
   * the spaces/tabs if XML is "pretty formatted".
   */
  next(): XMLNode;
}
export { SNAPIXMLNodeIterator };

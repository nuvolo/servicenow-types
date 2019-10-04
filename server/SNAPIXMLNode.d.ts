import { XMLNodeIterator } from './XMLNodeIterator';
import { XMLNode } from './XMLNode';
declare class SNAPIXMLNode {
  /**
   * Gets the value of the attribute.
   * @param attribute Name of the attribute.
   */
  getAttribute(attribute: string): string;
  /**
   * Returns an object containing the node's attributes as properties with
   * values.
   */
  getAttributes(): any;
  /**
   * Gets a XMLNodeIterator object that can be used to walk through the list of child
   * nodes.
   */
  getChildNodeIterator(): XMLNodeIterator;
  /**
   * Gets the node's first child node.
   */
  getFirstChild(): XMLNode;
  /**
   * Gets the node's last child node.
   */
  getLastChild(): XMLNode;
  /**
   * Gets the node's name. A node's name is determined by the node type. A document-element
   * node's name is #document. A text node's name is #text. An element node's name is the element's
   * name.
   */
  getNodeName(): string;
  /**
   * Gets the node's value. A node's value is determined by the node type. Element and
   * document-element nodes return null.
   */
  getNodeValue(): string;
  /**
   * Gets the text content of the current node. The text content of a node consists of all
   * the node's child text nodes
   */
  getTextContent(): string;
  /**
   * Determines if the node has the specified attribute.
   * @param attribute The name of the attribute to check.
   */
  hasAttribute(attribute: string): boolean;
  /**
   * Returns the string value of the current node.
   */
  toString(): string;
}
export { SNAPIXMLNode };

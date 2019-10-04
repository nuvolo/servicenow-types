import { GlideScriptableInputStream } from './GlideScriptableInputStream';
import { XMLNode } from './XMLNode';
declare class SNAPIXMLDocument2 {
  constructor(inputStream: GlideScriptableInputStream);
  constructor();
  /**
   * Creates and adds an element node to the current node. The element name is the string
   * passed in as a parameter. The new element has no text child nodes.
   * @param name The new element's name.
   */
  createElement(name: string): XMLNode;
  /**
   * Creates and adds an element node with a text child node to the current
   * node.
   * @param name Name of the element to add.
   * @param value Element's text value.
   */
  createElementWithTextValue(name: string, value: string): XMLNode;
  /**
   * Gets the document element node of the XMLdocument2 object. The document element node is
   * the root node.
   */
  getDocumentElement(): XMLNode;
  /**
   * Gets the first node in the specified XPATH.
   * @param xPath The XPATH.
   */
  getFirstNode(xPath: string): XMLNode;
  /**
   * Gets the node after the specified node.
   * @param current The current node.
   */
  getNextNode(current: any): XMLNode;
  /**
   * Gets the node specified in the xpath.
   * @param xPath XPath of the node to obtain.
   */
  getNode(xPath: string): XMLNode;
  /**
   * Gets all the text child nodes from the node referenced in the specified
   * XPath.
   * @param xPath XPath of the text to obtain.
   */
  getNodeText(xPath: string): string;
  /**
   * Parses the XML string and loads it into the XMLDocument2 object.
   * @param xmlDoc The document to parse.
   */
  parseXML(xmlDoc: string): boolean;
  /**
   * Makes the node passed in as a parameter the current node.
   * @param element The element node to set as the current node.
   */
  setCurrentElement(element: XMLNode): void;
  /**
   * When set to true, the XMLDocument2 object processes the document with XML
   * namespaces.
   * @param aware When true, the XMLDocument2 object processes the document with XML namespaces.
   */
  setNamespaceAware(aware: boolean): void;
  /**
   * Returns a string containing the XML.
   */
  toString(): string;
}
export { SNAPIXMLDocument2 };

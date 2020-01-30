import { GlideRecord } from '../GlideRecord';
declare class sn_nlp_sentiment_SNAPISentimentAnalyser {
  constructor();
  constructor(configGR: GlideRecord<any>);
  /**
   * Performs sentiment analysis on the specified text.
   * @param inputText Text on which sentiment analysis should be performed.
   */
  analyze(inputText: string): any;
  /**
   * Performs sentiment analysis on an array of strings.
   * @param inputTextArray Array of text (string) on which sentiment analysis should be performed.
   */
  analyzeMultiple(inputTextArray: any[]): any;
  /**
   * Performs sentiment analysis on an array of strings in the specified
   * language.
   * @param inputTextArray Array of text (string) on which sentiment analysis should be performed.
   * @param language Language for the input text. This can very for different sentiment
   * services.
   */
  analyzeMultipleWithLanguage(inputTextArray: any[], language: string): any;
  /**
   * Performs sentiment analysis on a specified text and language.
   * @param inputText Text on which sentiment analysis should be performed.
   * @param language Language for the input text. This can very for different sentiment
   * services.
   */
  analyzeWithLanguage(inputText: string, language: string): any;
  /**
   * Returns the GlideRecord of the specified connector configuration.
   * @param connectorName Name of the connector configuration.
   */
  getConnectorByName(connectorName: string): GlideRecord<any>;
  /**
   * Returns the GlideRecord of the default connector configuration.
   */
  getDefaultConnector(): GlideRecord<any>;
}
export { sn_nlp_sentiment_SNAPISentimentAnalyser };

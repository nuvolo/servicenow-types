import fs from 'fs';
//types that don't introduce dependencies
const nonDependencyTypes = new Set<string>()
  .add('string')
  .add('number')
  .add('boolean')
  .add('any')
  .add('any[]')
  .add('void')
  .add('htmlelement')
  .add('htmlformelement')
  .add('this')
  .add('date')
  .add('promise<any>');

//maps incorrect/non-existent types to real ones
const incorrectTypesMap = new Map<string, string>()
  .set('QueryCondition', 'GlideQueryCondition')
  .set('SysListControl', 'GlideSysListControl')
  .set('RESTResponse', 'RESTResponseV2')
  .set('Strings', 'string')
  .set('groupBy', 'string')
  .set('Promise', 'Promise<any>')
  .set('node', 'HTMLElement')
  .set('???', 'any')
  .set('name/value', 'any')
  .set('Void', 'void')
  .set('Constant', 'any');

//matches regex to types
const typeConversionMap: { [type: string]: RegExp } = {
  string: /^string$/i,
  boolean: /^boolean$/i,
  any: /^object|map|mapstring|standardcredential|list|notifyaction|json|function|window|glidemenuitem|glidemodal|\s$/i,
  number: /^number|integer|int$/i,
  'any[]': /^array|arraylist$/i,
};

//disallowed param names for functions
const disallowedParamNames = new Set<string>()
  .add('function')
  .add('default')
  .add('class');

//exceptions to make function params optional when they aren't marked as such in the docs
const optionalParamExceptions = new Map<string, Set<string>>();
const server_exceptions = new Set<string>().add(
  'GlideSystem->eventQueue->queue',
);
const client_exceptions = new Set<string>();
optionalParamExceptions.set('server', server_exceptions);
optionalParamExceptions.set('client', client_exceptions);

const staticMethods = JSON.parse(
  fs.readFileSync('../util/StaticMethods.json', 'utf8'),
);

export {
  incorrectTypesMap,
  typeConversionMap,
  disallowedParamNames,
  nonDependencyTypes,
  optionalParamExceptions,
  staticMethods,
};

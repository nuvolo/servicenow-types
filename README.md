# servicenow-types

This repo is for generating accurate and useful types from [ServiceNow's Documentation](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&type=server&id=no-namespace).

## Installation

```bash
npm i -D @nuvolo/servicenow-types
```

## Type Packages

Currently there are three type packages available `server`,`client`,and `util`.

### Server

This contains the server-side types for ServiceNow's backend such as `GlideRecord`, `GlideAggregate` and so on.

#### GlideRecord as a generic type

GlideRecord has been converted to a generic type, that means that you can get some really rich type completions by creating types for your tables!

```typescript
import { GlideRecord, GlideElement } from '@nuvolo/servicenow-types';
import { ReferenceGlideElement } from '@nuvolo/servicenow-types/util';

interface MyTableOne {
  field_one: GlideElement;
  field_two: ReferenceGlideElement<MyTableTwo>;
}

interface MyTableTwo {
  field_three: GlideElement;
}

// Set up a GlideRecord for my_table_one and pass the type for that table
const myTableGR = new GlideRecord<MyTableOne>('my_table_one');
/**
 * Methods like addQuery will:
 * 1. Suggest fields from the table
 * 2. Prevent using fields that aren't on the table
 * 3. Suggest operators
 */
myTableGR.addQuery('field_one', '=', 'asdf');
myTableGR.query();
/**
 * The Gliderecord will:
 * 1. Expose field properties as type GlideElement or ReferenceGlideElement,
 *    which makes you use getValue/setValue.
 * 2. Correctly resolve getRefRecord on ReferenceGlideElements
 *    (tableTwoGR is now a GlideRecord for MyTableTwo)
 */
const tableTwoGR = myTableGR.field_two.getRefRecord();
```

### Client

This contains client-side types for ServiceNow such as `GlideAjax`.

### Util

This package is for convenience types.

#### ReferenceGlideElement

`ReferenceGlideElement` is a utility type for using `getRefRecord()`. It makes your table interfaces more powerful.

```typescript
import { GlideRecord, GlideElement } from "@nuvolo/servicenow-types/server";
import { TypedGR, ReferenceGlideElement } from "@nuvolo/servicenow-types/util";
//interface for my_table.
interface my_table {
  test: GlideElement;
  test2: ReferenceGlideElement<my_table_two>;
}
interface my_table_two {
  test3: GlideElement;
}
//gr will now suggest test and test2 as properties
let gr = new GlideRecord("my_table") as TypedGR<my_table>;
//ref_gr will now suggest test3 as a property
let ref_gr = gr.test2.getRefRecord();
```

### TypedRESTAPIRequest

Extended type for `sn_ws.RESTAPIRequest` that takes a type to use as the body data object.

```typescript
import {sn_ws} from "@nuvolo/servicenow-types";
import {TypedRESTAPIRequest} from "@nuvolo/servicenow-types/util";
declare var request:TypedRESTAPIRequest<test>;
declare var response:sn_ws.RESTAPIResponse;
interface test{
  prop1:string;
  prop2:number;
}
(function process(request:TypedRESTAPIRequest<test>,response:sn_ws.RESTAPIResponse) {

})(request,response)
```

### How it works

This package scrapes the docs to generate basic types for ServiceNow. Those `.d.ts` files are prefixed with `SNAPI`. The types that get actually used like `GlideRecord` are extended from those types so we can correct errors in the documentation without having to write it all into the scraping algorithm. It also allows us to create some really nice utility types and use them later.

### How to contribute / I noticed something wrong with the types

Since the types are generated from the documentation (which is unfortunately not always accurate), we have very loosely defined types which we can then extend and correct/improve. If you wanted to fix `GlideRecord` in the `server` package, you could simply fork this repo, make your changes to `server/GlideRecord.d.ts` and submit a pull request! Easy right?

#### Rules

1. Always add jsdoc comments to whatever you contribute if they aren't already there
2. Name your parameters well

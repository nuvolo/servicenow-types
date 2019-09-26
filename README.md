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

### Client

This contains client-side types for ServiceNow such as `GlideAjax`.

### Util

This package is for convenience types.

#### TypedGR

`TypedGR` is a utility type for creating more useful GlideRecord interactions. It can be combined with `ReferenceGlideElement` to make `getRefRecord()` work really well. It is a generic, which means you can create interfaces for your table structures and get type inferences for them.

```typescript
import {GlideRecord,GlideElement} from "@nuvolo/servicenow-types/server"
import {TypedGR} from "@nuvolo/servicenow-types/util";
//interface for my_table. All properties are GlideElements
interface my_table{
  test:GlideElement,
  test2:GlideElement
}
//gr will now suggest test and test2 as properties
let gr = new GlideRecord('my_table') as TypedGR<my_table>
```

#### ReferenceGlideElement

`ReferenceGlideElement` is a utility type for using `getRefRecord()`. It makes your table interfaces more powerful.

```typescript
import {GlideRecord,GlideElement} from "@nuvolo/servicenow-types/server"
import {TypedGR, ReferenceGlideElement} from "@nuvolo/servicenow-types/util";
//interface for my_table.
interface my_table{
  test:GlideElement,
  test2:ReferenceGlideElement<my_table_two>
}
interface my_table_two{
  test3:GlideElement
}
//gr will now suggest test and test2 as properties
let gr = new GlideRecord('my_table') as TypedGR<my_table>
//ref_gr will now suggest test3 as a property
let ref_gr = gr.test2.getRefRecord();
```

### How it works

This package scrapes the docs to generate basic types for ServiceNow. Those `.d.ts` files are prefixed with `SNAPI`. The types that get actually used like `GlideRecord` are extended from those types so we can correct errors in the documentation without having to write it all into the scraping algorithm. It also allows us to create some really nice utility types and use them later.

### How to contribute / I noticed something wrong with the types

Since the types are generated from the documentation (which is unfortunately not always accurate), we have very loosely defined types which we can then extend and correct/improve. If you wanted to fix `GlideRecord` in the `server` package, you could simply branch this repo, make your changes to `server/GlideRecord.d.ts` and submit a pull request! Easy right?

#### Rules

1. Always add jsdoc comments to whatever you contribute if they aren't already there
2. Name your parameters well

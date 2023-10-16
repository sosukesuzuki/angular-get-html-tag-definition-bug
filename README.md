# Bug of Angular's `getHtmlTagDefinition`

```js
import * as ac from "@angular/compiler";

const KNOWN_TAG_DIV = "div";
const UNKNOWN_TAG_FOO = "foo";
const UNKNOWN_TAG_CONSTRUCTOR = "constructor";

// Expected
console.log(ac.getHtmlTagDefinition(KNOWN_TAG_DIV));
// HtmlTagDefinition {
//   closedByChildren: {},
//   closedByParent: false,
//   isVoid: false,
//   implicitNamespacePrefix: null,
//   contentType: 2,
//   ignoreFirstLf: false,
//   preventNamespaceInheritance: false,
//   canSelfClose: false
// }

// Expected
console.log(ac.getHtmlTagDefinition(UNKNOWN_TAG_FOO));
// HtmlTagDefinition {
//   closedByChildren: {},
//   closedByParent: false,
//   isVoid: false,
//   implicitNamespacePrefix: null,
//   contentType: 2,
//   ignoreFirstLf: false,
//   preventNamespaceInheritance: false,
//   canSelfClose: true
// }

// Unexpected
console.log(ac.getHtmlTagDefinition(UNKNOWN_TAG_CONSTRUCTOR));
// [Function: Object]
```

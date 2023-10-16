import * as ac from "@angular/compiler";

const KNOWN_TAG_DIV = "div";
const UNKNOWN_TAG_FOO = "foo";
const UNKNOWN_TAG_CONSTRUCTOR = "constructor";

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

console.log(ac.getHtmlTagDefinition(UNKNOWN_TAG_CONSTRUCTOR));
// [Function: Object]

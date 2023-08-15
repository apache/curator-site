"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[7285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),h=l,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const r={},o="Schema Support",i={unversionedId:"schema",id:"schema",title:"Schema Support",description:'In larger ZooKeeper applications you will end with many paths to ZNodes that have specific meanings and uses. E.g. "/myapp/clients/clusters/instances" or "/myapp/writers/locks". These paths can become unwieldy and difficult to reason about. Ideally, you should have a simple way to commonly refer to these paths, a way to validate how they are used, and a way to document what they are used for.',source:"@site/docs/schema.md",sourceDirName:".",slug:"/schema",permalink:"/docs/schema",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/schema.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1692089714,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Migrations",permalink:"/docs/migrations"},next:{title:"Framework",permalink:"/docs/framework"}},s={},m=[{value:"Schema and SchemaSet",id:"schema-and-schemaset",level:2},{value:"SchemaValidator",id:"schemavalidator",level:3},{value:"Getting ZNode paths/schemas by name",id:"getting-znode-pathsschemas-by-name",level:2},{value:"Loading JSON Schema from a file/stream",id:"loading-json-schema-from-a-filestream",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],p={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"schema-support"},"Schema Support"),(0,l.kt)("p",null,'In larger ZooKeeper applications you will end with many paths to ZNodes that have specific meanings and uses. E.g. "/myapp/clients/clusters/instances" or "/myapp/writers/locks". These paths can become unwieldy and difficult to reason about. Ideally, you should have a simple way to commonly refer to these paths, a way to validate how they are used, and a way to document what they are used for.'),(0,l.kt)("p",null,"Curator provides a mechanism to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Document your ZooKeeper paths"),(0,l.kt)("li",{parentName:"ul"},"Validate operations on ZooKeeper paths"),(0,l.kt)("li",{parentName:"ul"},"Map a simple string to a ZooKeeper path")),(0,l.kt)("p",null,"When a Curator operation violates a schema, ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaViolation")," is thrown."),(0,l.kt)("h2",{id:"schema-and-schemaset"},"Schema and SchemaSet"),(0,l.kt)("p",null,"The basic specification is the Schema class:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique name for this schema")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"A full path to a ZNode or a regex pattern to a ZNode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"User displayable documentation for this schema")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schemaValidator"),(0,l.kt)("td",{parentName:"tr",align:null},"SchemaValidator"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"see below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ephemeral"),(0,l.kt)("td",{parentName:"tr",align:null},"can/must/cannot"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the schema allows for ephemerals at the path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sequential"),(0,l.kt)("td",{parentName:"tr",align:null},"can/must/cannot"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the schema allows for sequentials at the path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"watched"),(0,l.kt)("td",{parentName:"tr",align:null},"can/must/cannot"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the schema allows for watchers at the path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canBeDeleted"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the schema allows the path to be deleted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Any fields-to-values you want")))),(0,l.kt)("p",null,"All the Schema instances are combined into a SchemaSet and this can be set in the CuratorFrameworkFactory when creating a CuratorFramework instance. Schemas in a SchemaSet are applied in the following order:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Exact match on full path (i.e. nonregex)"),(0,l.kt)("li",{parentName:"ol"},"Match on the first regex path, searched in the order given to the SchemaSet constructor")),(0,l.kt)("h3",{id:"schemavalidator"},"SchemaValidator"),(0,l.kt)("p",null,"SchemaValidators are used to optionally validate a ZNode operation when the node is created or modified. It is a functor of the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"boolean isValid(Schema schema, String path, byte[] data, List<ACL> acl);\n")),(0,l.kt)("h2",{id:"getting-znode-pathsschemas-by-name"},"Getting ZNode paths/schemas by name"),(0,l.kt)("p",null,"Use SchemaSets to access ZNode paths by a simple name. E.g.,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'CuratorFramework client = ...;\nString path = SchemaSet.getNamedPath(client, "locks");\nclient.create().forPath(path);\n')),(0,l.kt)("h2",{id:"loading-json-schema-from-a-filestream"},"Loading JSON Schema from a file/stream"),(0,l.kt)("p",null,"An optional utility is provided to load SchemaSets from a JSON file or stream: SchemaSetLoader."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},'To avoid adding a new dependency to Curator, the Jackson library has been used with "provided" scope. You will need to add a dependency to jackson-core and jackson-databind to your project.')),(0,l.kt)("p",null,"The JSON stream should be an array of schemas:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n       "name": "name",                       // required - name of the schema\n       "path": "path or pattern",            // required - full path or regex pattern\n       "isRegex": true/false,                // optional - true if path is a regular expression - default is false\n       "schemaValidator": "name",            // optional - name of a schema validator - default is no validator\n       "documentation": "docs",              // optional - user displayable docs - default is ""\n       "ephemeral": "allowance",             // optional - "can", "must" or "cannot" - default is "can"\n       "sequential": "allowance",            // optional - "can", "must" or "cannot" - default is "can"\n       "watched": "allowance",               // optional - "can", "must" or "cannot" - default is "can"\n       "canBeDeleted": true/false,           // optional - true if ZNode at path can be deleted - default is true\n       "metadata": {                         // optional - any fields -> values that you want\n           "field1": "value1",\n           "field2": "value2"\n       }\n   }\n]\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "test",\n        "path": "/a/b/c",\n        "ephemeral": "must",\n        "sequential": "cannot",\n        "metadata": {\n            "origin": "outside",\n            "type": "large"\n        }\n    }\n]\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This SchemaSet has only 1 schema"),(0,l.kt)("li",{parentName:"ul"},'The schema applies only to the path "/a/b/c"'),(0,l.kt)("li",{parentName:"ul"},'The ZNode "/a/b/c" must be ephemeral, cannot be sequential, can be watched, and can be deleted')),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "test",\n        "path": "/a/b/c",\n        "ephemeral": "must",\n        "sequential": "cannot"\n    },\n\n    {\n        "name": "test2",\n        "path": "/a/.*",\n        "isRegex": true,\n        "schemaValidator": "test",\n        "ephemeral": "cannot",\n        "canBeDeleted": false\n    }\n]\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This SchemaSet has 2 schemas"),(0,l.kt)("li",{parentName:"ul"},'The first schema applies only to the path "/a/b/c"'),(0,l.kt)("li",{parentName:"ul"},'The ZNode "/a/b/c" must be ephemeral, cannot be sequential, can be watched, and can be deleted'),(0,l.kt)("li",{parentName:"ul"},'The second schema is regex and applies to any path that matches the expression "/a/.*"'),(0,l.kt)("li",{parentName:"ul"},'The ZNodes that match "/a/.*" cannot be ephemeral, can be sequential, can be watched, and cannot be deleted'),(0,l.kt)("li",{parentName:"ul"},'The second schema also has a schema validator. The schema validator named "test" (configured when constructing the SchemaSetLoader) will be called to validate ZNodes that match "/a/.*".')))}d.isMDXComponent=!0}}]);
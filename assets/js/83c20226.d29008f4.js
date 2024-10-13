"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[7668],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,d(d({ref:t},s),{},{components:a})):n.createElement(h,d({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,d[1]=l;for(var p=2;p<o;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7263),r=(a(9496),a(9613));const o={displayed_sidebar:"docs"},d="Modeled Curator - Caching, Typed Parameters and Versioning",l={unversionedId:"modeled-typed",id:"modeled-typed",title:"Modeled Curator - Caching, Typed Parameters and Versioning",description:"In addition to its main features Modeled Curator also supports integrated caching, typed parameters and versioning.",source:"@site/docs/modeled-typed.md",sourceDirName:".",slug:"/modeled-typed",permalink:"/docs/modeled-typed",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/modeled-typed.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1728813389,formattedLastUpdatedAt:"Oct 13, 2024",frontMatter:{displayed_sidebar:"docs"},sidebar:"docs"},i={},p=[{value:"Caching",id:"caching",level:2},{value:"Unresolved Paths and Caching",id:"unresolved-paths-and-caching",level:3},{value:"Typed Parameters",id:"typed-parameters",level:2},{value:"Versioning",id:"versioning",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modeled-curator---caching-typed-parameters-and-versioning"},"Modeled Curator - Caching, Typed Parameters and Versioning"),(0,r.kt)("p",null,"In addition to its ",(0,r.kt)("a",{parentName:"p",href:"/docs/modeled-components"},"main features")," Modeled Curator also supports integrated caching, typed parameters and versioning."),(0,r.kt)("h2",{id:"caching"},"Caching"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ModeledFramework")," instances can be wrapped with a facade that uses a Curator cache internally. All read operations use this cache instead of making direct ZooKeeper calls. You can also listen for node changes. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ModeledFramework<MyModel> modeledClient = ModeledFramework.wrap(client, myModelSpec);\nCachedModeledFramework<MyModel> cached = modeledClient.cached();\ncached.start();\n\n// reads come from the cache\ncached.read().whenComplete(...) ...\n\ncached.listenable.addListener((type, path, stat, model) -> {\n    // type is NODE_ADDED, NODE_UPDATED, etc.\n});\n")),(0,r.kt)("h3",{id:"unresolved-paths-and-caching"},"Unresolved Paths and Caching"),(0,r.kt)("p",null,"If the last node in the ModelSpec's path is a parameter, CachedModeledFramework will automatically listen to the parent path. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ZPath path = ZPath.parseWithIds("/root/instance/{id}");\nModelSpec<MyModel> modelSpec = ModelSpec.builder(path, serializer);\nModeledFramework<MyModel> modeledClient = ModeledFramework.wrap(modelSpec, client, modelSpec);\n\nCachedModeledFramework<MyModel> cached = modeledClient.cached();\ncached.start(); // automatically listens to "/root/instance" and below\n')),(0,r.kt)("h2",{id:"typed-parameters"},"Typed Parameters"),(0,r.kt)("p",null,'The "resolve" methods in ZPath et al. consume untyped Objects. Ideally, we should be able to specify parameters in a strongly typed manner. Modeled Curator\'s "type" templates provide this. You can specify typed parameters for ZPaths, ModelSpecs and ModeledFramework. The ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/curator/tree/master/curator-examples/src/main/java/pubsub"},"Pub-Sub Example")," shows how to use typed parameters with ModeledFramework."),(0,r.kt)("p",null,"Typed interfaces are provided for up to 10 parameters and are named ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedZPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedZPath2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedModelSpec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedModelSpec2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedModeledFramework"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedModeledFramework2"),", etc."),(0,r.kt)("p",null,"Here's an example of a TypedModeledFramework that models a Person and uses two parameters to generate the path, a Group and an Organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TypedModeledFramework2<Person, Group, Organization> clientTemplate = TypedModeledFramework2.from(\n    ModeledFrameworkBuilder.build(),\n    personModelSpec\n);\n\n...\n\nGroup group = ...\nOrganization organization = ...\nModeledFramework<Person> modeledClient = clientTemplate.resolve(asyncClient, group, organization);\nclient.set(person);\n")),(0,r.kt)("p",null,"TypedZPath and TypedModelSpec work similarly."),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"Modeled Curator supports associating a ZNode version with a model object via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Versioned")," interface and the ",(0,r.kt)("inlineCode",{parentName:"p"},"VersionedModeledFramework")," APIs. To read a model along with its ZNode version use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ModeledFramework<Person> client = ...\n\nclient.versioned().read().whenComplete((value, e) -> {\n    if ( value != null ) {\n        // value's type is Versioned<Person>\n        Person personModel = value.model();\n        int znodeVersion = value.version();\n    }\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VersionedModeledFramework")," has set/update APIs which automatically use the version from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Versioned")," instance."))}m.isMDXComponent=!0}}]);
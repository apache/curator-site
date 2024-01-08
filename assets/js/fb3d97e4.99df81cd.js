"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[9973],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(y,s(s({ref:t},p),{},{components:a})):r.createElement(y,s({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7263),n=(a(9496),a(9613));const o={},s="Curator Async",i={unversionedId:"async",id:"async",title:"Curator Async",description:"Packaging",source:"@site/docs/async.md",sourceDirName:".",slug:"/async",permalink:"/docs/async",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/async.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1704703627,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Simple Distributed Queue",permalink:"/docs/recipes-simple-distributed-queue"},next:{title:"Strongly Typed Models",permalink:"/docs/modeled"}},l={},c=[{value:"Packaging",id:"packaging",level:2},{value:"What Is Curator Async?",id:"what-is-curator-async",level:2},{value:"Curator Async",id:"curator-async-1",level:2},{value:"Modeled Curator",id:"modeled-curator",level:2},{value:"Migrations",id:"migrations",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"curator-async"},"Curator Async"),(0,n.kt)("h2",{id:"packaging"},"Packaging"),(0,n.kt)("p",null,"Curator Async is in its own package in Maven Central: curator-x-async"),(0,n.kt)("h2",{id:"what-is-curator-async"},"What Is Curator Async?"),(0,n.kt)("p",null,"Curator Async is a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"DSL")," that wraps existing ",(0,n.kt)("inlineCode",{parentName:"p"},"CuratorFramework")," instances. This DSL is entirely asynchronous and uses ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionStage.html"},"Java 8's CompletionStage")," mechanism for chaining, composing, etc. Additionally, Curator's original DSL has been cleaned up and simplified, in particular for operations such as ",(0,n.kt)("inlineCode",{parentName:"p"},"create()"),"."),(0,n.kt)("p",null,"With this DSL you can do asynchronous tasks in a more natural, functional way using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"},"Java 8 lambdas"),"."),(0,n.kt)("p",null,"The Curator Async package also contains a strongly typed DSL and strongly typed Cache Recipe wrappers that allows you to map a ZooKeeper path to a serializable class as opposed to raw byte arrays."),(0,n.kt)("h2",{id:"curator-async-1"},(0,n.kt)("a",{parentName:"h2",href:"/docs/async-details"},"Curator Async")),(0,n.kt)("p",null,"With this DSL you can do asynchronous tasks in a more natural, functional way using Java 8 lambdas. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// let "client" be a CuratorFramework instance\nAsyncCuratorFramework async = AsyncCuratorFramework.wrap(client);\nasync.checkExists().forPath(somePath).thenAccept(stat -> mySuccessOperation(stat));\n')),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/async-details"},"Curator Async")," for details."),(0,n.kt)("h2",{id:"modeled-curator"},(0,n.kt)("a",{parentName:"h2",href:"/docs/modeled"},"Modeled Curator")),(0,n.kt)("p",null,"This is a strongly typed DSL that allows you to map a Curator-style client to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ZooKeeper path (supporting parameterized substitutions)"),(0,n.kt)("li",{parentName:"ul"},"A serializer for the data stored at the path"),(0,n.kt)("li",{parentName:"ul"},"Options for how nodes should be created (sequential, compressed data, ttl, etc.)"),(0,n.kt)("li",{parentName:"ul"},"ACLs for the nodes at the path"),(0,n.kt)("li",{parentName:"ul"},"Options for how to delete nodes (guaranteed, deleting children, etc.)")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ModeledFramework<Foo> modeled = ModeledFramework.wrap(client, fooModelSpec);\nmodeled.set(new Foo());\n")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/modeled"},"Modeled Curator")," for details."),(0,n.kt)("h2",{id:"migrations"},(0,n.kt)("a",{parentName:"h2",href:"/docs/migrations"},"Migrations")),(0,n.kt)("p",null,"Curator Migrations allow you pre-apply transactions in a staged manner so that you can ensure a consistent state for parts of your ZooKeeper node hierarchy in a manner similar to database migration utilities."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrations"},"Migrations")," for details."))}d.isMDXComponent=!0}}]);
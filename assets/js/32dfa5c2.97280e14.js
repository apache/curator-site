"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[4956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={displayed_sidebar:"docs"},s="Curator Async Usage",l={unversionedId:"async-details",id:"async-details",title:"Curator Async Usage",description:"With this DSL you can do asynchronous tasks in a more natural, functional way using Java 8 lambdas. For example:",source:"@site/docs/async-details.md",sourceDirName:".",slug:"/async-details",permalink:"/docs/async-details",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/async-details.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1698746921,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{displayed_sidebar:"docs"},sidebar:"docs"},c={},i=[{value:"Usage",id:"usage",level:2},{value:"AsyncStage",id:"asyncstage",level:3},{value:"Watchers",id:"watchers",level:3},{value:"AsyncEventException",id:"asynceventexception",level:3},{value:"AsyncResult",id:"asyncresult",level:3},{value:"Examples",id:"examples",level:2},{value:"Create a sequential ZNode",id:"create-a-sequential-znode",level:3},{value:"AsyncStage canonical usage",id:"asyncstage-canonical-usage",level:3},{value:"Simplified usage via AsyncResult",id:"simplified-usage-via-asyncresult",level:3},{value:"Using executors",id:"using-executors",level:3},{value:"Separate handlers",id:"separate-handlers",level:3},{value:"Synchronous usage",id:"synchronous-usage",level:3}],p={toc:i},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"curator-async-usage"},"Curator Async Usage"),(0,r.kt)("p",null,"With this DSL you can do asynchronous tasks in a more natural, functional way using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"},"Java 8 lambdas"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// let "client" be a CuratorFramework instance\nAsyncCuratorFramework async = AsyncCuratorFramework.wrap(client);\nasync.checkExists().forPath(somePath).thenAccept(stat -> mySuccessOperation(stat));\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use Curator Async, you should be familiar with Java 8's lambdas, CompletedFuture and CompletionStage.")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework"},"CuratorFramework")," instance in the normal way. You then wrap this instance using AsyncCuratorFramework. i.e.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// let "client" be a CuratorFramework instance\nAsyncCuratorFramework async = AsyncCuratorFramework.wrap(client);\n')),(0,r.kt)("p",null,"AsyncCuratorFramework has most of the same builder methods that CuratorFramework does with some important differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AsyncCuratorFramework builders return AsyncStage instances"),(0,r.kt)("li",{parentName:"ul"},"AsyncCuratorFramework builders have no checked exceptions"),(0,r.kt)("li",{parentName:"ul"},"Many of the builder methods have been simplified/clarified"),(0,r.kt)("li",{parentName:"ul"},"All builders invoke the asynchronous versions of ZooKeeper APIs"),(0,r.kt)("li",{parentName:"ul"},"Watchers also use CompletionStages - see below for details")),(0,r.kt)("h3",{id:"asyncstage"},"AsyncStage"),(0,r.kt)("p",null,'AsyncStage instances extend Java 8\'s CompletionStage. CompletionStage objects can be "completed" with a success value or an exception. The parameterized type of the AsyncStage will be whatever the builder used would naturally return as a success value. E.g. the async getData() builder\'s AsyncStage is parameterized with "byte[]".'),(0,r.kt)("h3",{id:"watchers"},"Watchers"),(0,r.kt)("p",null,"ZooKeeper's watchers also get the CompletionStage treatment in Curator Async. To add a watcher, call watched() prior to starting the appropriate builders. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"async.watched().getData().forPath(path) ...\n")),(0,r.kt)("p",null,"Thus, a data watcher will be set on the specified path. You access the CompletionStage for the watcher by using the event() method of AsyncStage. Here is a complete example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"async.watched().getData().forPath(path).event().thenAccept(watchedEvent -> watchWasTriggered(watchedEvent));\n")),(0,r.kt)("p",null,"ZooKeeper calls watchers when there is a connection loss. This can make using the CompletionStage somewhat complicated (see AsyncEventException below). If you are not interested in watcher connection problems, you can tell Curator Async to not send them by calling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// only complete the CompletionStage when the watcher is successfully triggered\n// i.e. don't complete on connection issues\nasync.with(WatchMode.successOnly).watched()...\n")),(0,r.kt)("h3",{id:"asynceventexception"},"AsyncEventException"),(0,r.kt)("p",null,"When an async watcher fails the exception set in the CompletionStage will be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncEventException"),". This exception allows you to see the KeeperState that caused the trigger and allows you to reset the completion stage. Reset is needed because ZooKeeper temporarily triggers watchers when there is a connection event (unless ",(0,r.kt)("inlineCode",{parentName:"p"},"WatchMode.successOnly")," is used). However, the watcher stays set for the original operation. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncEventException#reset")," to start a new completion stage that will wait on the next trigger of the watcher."),(0,r.kt)("p",null,"E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"AsyncStage stage = ...\nstage.event().exceptionally(e -> {\n    AsyncEventException asyncEx = (AsyncEventException) e;\n\n    // ... note a connection problem ...\n\n    asyncEx.reset().thenAccept(watchedEvent -> watchWasTriggered(watchedEvent));\n});\n")),(0,r.kt)("h3",{id:"asyncresult"},"AsyncResult"),(0,r.kt)("p",null,"As a convenience, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncResult")," to combine ZooKeeper method value, the ZooKeeper result code and any exception in one object allowing you to not worry about exceptional completions. i.e. the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletionStage")," returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncResult.of()")," always completes successfully with an AsyncResult object."),(0,r.kt)("p",null,"AsyncResult has methods to get either the method result (a path, Stat, etc.), a KeeperException code or a general exception:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Optional<T> getValue();\nKeeperException.Code getCode();\nOptional<Throwable> getException();\n")),(0,r.kt)("p",null,"Use AsyncResult by wrapping an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncStage")," value. i.e.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"CompletionStage<AsyncResult<Stat>> resultStage = AsyncResult.of(async.checkExists().forPath(path));\nresultStage.thenAccept(result -> {\n    if ( result.getValue().isPresent() ) {\n        // ...\n    } else if ( result.getCode() == KeeperException.Code.NOAUTH ) {\n        // ...\n    }\n    // etc.\n});\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"create-a-sequential-znode"},"Create a sequential ZNode"),(0,r.kt)("p",null,"Create a sequential ZNode and, once successfully completed, set a watcher on the ZNode."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This code does not deal with errors. Should a connection problem occur or another exception occur, the completion lambda will never be called.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"async.create()\n    .withMode(PERSISTENT_SEQUENTIAL)\n    .forPath(path)\n    .thenCompose(actualPath -> async.watched()\n                                .getData()\n                                .forPath(actualPath)\n                                .thenApply(() -> watchTriggered()));\n")),(0,r.kt)("h3",{id:"asyncstage-canonical-usage"},"AsyncStage canonical usage"),(0,r.kt)("p",null,"This is the canonical way to deal with AsyncStage. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle()")," method which provides both the success value and the exception. The exception will be non-null on error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"async.create().withOptions(EnumSet.of(doProtected)).forPath(path).handle((actualPath, exception) -> {\n    if (exception != null) {\n        // handle problem\n    } else {\n        // actualPath is the path created\n    }\n    return null;\n});\n")),(0,r.kt)("h3",{id:"simplified-usage-via-asyncresult"},"Simplified usage via AsyncResult"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"AsyncResult.of(async.create().withOptions(EnumSet.of(doProtected)).forPath(path)).thenAccept(result -> {\n    if (result.getRawValue() != null) {\n        // result.getRawValue() is the path created\n    } else {\n        // ...\n    }\n});\n")),(0,r.kt)("h3",{id:"using-executors"},"Using executors"),(0,r.kt)("p",null,"Your completion routines can operate in a separate thread if you provide an executor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'async.create()\n    .withOptions(EnumSet.of(createParentsIfNeeded))\n    .forPath("/a/b/c")\n    .thenAcceptAsync(path -> handleCreate(path), executor);\n')),(0,r.kt)("h3",{id:"separate-handlers"},"Separate handlers"),(0,r.kt)("p",null,"This example shows specifying separate completion handlers for success and exception."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AsyncStage<byte[]> stage = async.getData().forPath("/my/path");\nstage.exceptionally(e -> {\n    if (e instanceof KeeperException.NoNodeException) {\n        // handle no node\n    } else {\n        // handle other\n    }\n    return null;\n});\nstage.thenAccept(data -> processData(data));\n')),(0,r.kt)("h3",{id:"synchronous-usage"},"Synchronous usage"),(0,r.kt)("p",null,"CompletionStage provides a blocking method as well so that you can block to get the result of an operation. i.e. this makes it possible to use the async APIs in a synchronous way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// NOTE: get() specifies a checked exception\nasync.create().forPath("/foo").toCompletableFuture().get();\n')))}d.isMDXComponent=!0}}]);
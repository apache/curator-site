"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[2847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=i.createContext({}),l=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||n;return r?i.createElement(h,s(s({ref:t},c),{},{components:r})):i.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<n;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const n={sidebar_label:"Distributed Priority Queue"},s="Recipe: Distributed Priority Queue",o={unversionedId:"recipes-distributed-priority-queue",id:"recipes-distributed-priority-queue",title:"Recipe: Distributed Priority Queue",description:"We recommend that you do NOT use ZooKeeper for Queues. Please see Tech Note 4 for details.",source:"@site/docs/recipes-distributed-priority-queue.md",sourceDirName:".",slug:"/recipes-distributed-priority-queue",permalink:"/docs/recipes-distributed-priority-queue",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-distributed-priority-queue.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1692090157,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{sidebar_label:"Distributed Priority Queue"},sidebar:"docs",previous:{title:"Distributed ID Queue",permalink:"/docs/recipes-distributed-id-queue"},next:{title:"Distributed Delay Queue",permalink:"/docs/recipes-distributed-delay-queue"}},u={},l=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a DistributedPriorityQueue",id:"creating-a-distributedpriorityqueue",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Lock Safety",id:"lock-safety",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Error Handling",id:"error-handling",level:2}],c={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-distributed-priority-queue"},"Recipe: Distributed Priority Queue"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We recommend that you do NOT use ZooKeeper for Queues. Please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/tech-note-04"},"Tech Note 4")," for details.")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"An implementation of the Distributed Priority Queue ZK recipe."),(0,a.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"QueueBuilder"),(0,a.kt)("li",{parentName:"ul"},"QueueConsumer"),(0,a.kt)("li",{parentName:"ul"},"QueueSerializer"),(0,a.kt)("li",{parentName:"ul"},"DistributedPriorityQueue")),(0,a.kt)("h2",{id:"creating-a-distributedpriorityqueue"},"Creating a DistributedPriorityQueue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - the curator client\n// consumer - message consumer\n// serializer - serializer to use for items\n// queuePath - path to store queue\npublic static <T> QueueBuilder<T> builder(\n    CuratorFramework client,\n    QueueConsumer<T> consumer,\n    QueueSerializer<T> serializer,\n    java.lang.String queuePath\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"QueueBuilder<MessageType> builder = QueueBuilder.builder(client, consumer, serializer, path);\n// ... more builder method calls as needed ...\nDistributedPriorityQueue<MessageType> queue = builder.buildPriorityQueue(minItemsBeforeRefresh);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// minItemsBeforeRefresh - minimum items to process before refreshing the item list\npublic DistributedPriorityQueue<T> buildPriorityQueue(int minItemsBeforeRefresh);\n")),(0,a.kt)("p",null,"Build a DistributedPriorityQueue from the current builder values."),(0,a.kt)("p",null,"When the priority queue detects an item addition/removal, it will stop processing its current list of items and refresh the list. minItemsBeforeRefresh modifies this. It determines the minimum number of items from the active list that will get processed before a refresh."),(0,a.kt)("p",null,"Due to a quirk in the way ZooKeeper notifies changes, the queue will get an item addition/remove notification after every item is processed. This can lead to poor performance. Set minItemsBeforeRefresh to the value your application can tolerate being out of sync."),(0,a.kt)("p",null,"For example: if the queue sees 10 items to process, it will end up making 10 calls to ZooKeeper to check status. You can control this by setting minItemsBeforeRefresh to 10 (or more) and the queue will only refresh with ZooKeeper after 10 items are processed"),(0,a.kt)("h2",{id:"general-usage"},"General Usage"),(0,a.kt)("p",null,"The queue must be started via the ",(0,a.kt)("inlineCode",{parentName:"p"},"start()")," method. Call ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," when you are done with the queue."),(0,a.kt)("p",null,"To add messages to the queue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"queue.put(aMessage, priority);\n")),(0,a.kt)("p",null,"The consumer (",(0,a.kt)("inlineCode",{parentName:"p"},"QueueConsumer.consumeMessage()"),") will get called as messages arrive."),(0,a.kt)("h2",{id:"lock-safety"},"Lock Safety"),(0,a.kt)("p",null,"In the general usage case, the message is removed from the queue prior to the consumer being called. A more atomic mode is provided that removes the item from the queue only after the consumer successfully returns. To enable this mode, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"lockPath()")," method of the Queue Builder. This uses a lock to make the message recoverable. A lock is held while the message is being processed - this prevents other processes from taking the message. The message will not be removed from the queue until the consumer functor returns. Thus, if there is a failure or the process dies, the message will get sent to another process. There is a small performance penalty for this behavior, however."),(0,a.kt)("h2",{id:"data-format"},"Data Format"),(0,a.kt)("p",null,"Same as ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes-distributed-queue#data-format"},"Distributed Queue"),"."),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"QueueConsumer")," class extends ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener"),". When the queue is started, it adds the listener to the Curator instance. Users of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DistributedPriorityQueue")," must pay attention to any connection state changes."),(0,a.kt)("p",null,"If the SUSPENDED state is reported, the instance must assume that, until it receives a RECONNECTED state, the queue is no longer being updated. If the LOST state is reported, the queue is permanently down."))}p.isMDXComponent=!0}}]);
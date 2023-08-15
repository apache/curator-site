"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[8395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},u=Object.keys(e);for(i=0;i<u.length;i++)r=u[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)r=u[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=i.createContext({}),d=function(e){var t=i.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||u;return r?i.createElement(f,a(a({ref:t},l),{},{components:r})):i.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,a=new Array(u);a[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<u;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var i=r(7462),n=(r(7294),r(3905));const u={sidebar_label:"Distributed ID Queue"},a="Recipe: Distributed ID Queue",s={unversionedId:"recipes-distributed-id-queue",id:"recipes-distributed-id-queue",title:"Recipe: Distributed ID Queue",description:"We recommend that you do NOT use ZooKeeper for Queues. Please see Tech Note 4 for details.",source:"@site/docs/recipes-distributed-id-queue.md",sourceDirName:".",slug:"/recipes-distributed-id-queue",permalink:"/docs/recipes-distributed-id-queue",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-distributed-id-queue.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1692086414,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{sidebar_label:"Distributed ID Queue"},sidebar:"docs",previous:{title:"Distributed Queue",permalink:"/docs/recipes-distributed-queue"},next:{title:"Distributed Priority Queue",permalink:"/docs/recipes-distributed-priority-queue"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a DistributedIdQueue",id:"creating-a-distributedidqueue",level:2},{value:"General Usage",id:"general-usage",level:2}],l={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recipe-distributed-id-queue"},"Recipe: Distributed ID Queue"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"We recommend that you do NOT use ZooKeeper for Queues. Please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/tech-note-04"},"Tech Note 4")," for details.")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This is an alternate version of ",(0,n.kt)("a",{parentName:"p",href:"/docs/recipes-distributed-queue"},"Distributed Queue")," that supports assigning IDs to the items added to the queue. Items put into the queue are guaranteed to be ordered (by means of ZK's PERSISTENTSEQUENTIAL node). If a single consumer takes items out of the queue, they will be ordered FIFO. If ordering is important, use a LeaderSelector to nominate a single consumer."),(0,n.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"QueueBuilder"),(0,n.kt)("li",{parentName:"ul"},"QueueConsumer"),(0,n.kt)("li",{parentName:"ul"},"QueueSerializer"),(0,n.kt)("li",{parentName:"ul"},"DistributedQueue")),(0,n.kt)("h2",{id:"creating-a-distributedidqueue"},"Creating a DistributedIdQueue"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/recipes-distributed-queue"},"Distributed Queue")," for details of using the builder, the only difference is to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"buildIdQueue()")," method."),(0,n.kt)("h2",{id:"general-usage"},"General Usage"),(0,n.kt)("p",null,"The queue must be started via the ",(0,n.kt)("inlineCode",{parentName:"p"},"start()")," method. Call ",(0,n.kt)("inlineCode",{parentName:"p"},"close()")," when you are done with the queue."),(0,n.kt)("p",null,"To add messages to the queue:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"queue.put(aMessage, messageId);\n")),(0,n.kt)("p",null,"To remove messages from the queue:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int numberRemoved = queue.remove(messageId);\n")),(0,n.kt)("p",null,"Your consumer (",(0,n.kt)("inlineCode",{parentName:"p"},"QueueConsumer.consumeMessage()"),") will get called as messages arrive."),(0,n.kt)("p",null,"The lock safety and error handling are the same as for ",(0,n.kt)("a",{parentName:"p",href:"/docs/recipes-distributed-queue"},"Distributed Queue"),"."))}c.isMDXComponent=!0}}]);
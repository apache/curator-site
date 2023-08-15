"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[7268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?i.createElement(h,a(a({ref:t},s),{},{components:r})):i.createElement(h,a({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"Distributed Atomic Long"},a="Recipe: Distributed Atomic Long",l={unversionedId:"recipes-distributed-atomic-long",id:"recipes-distributed-atomic-long",title:"Recipe: Distributed Atomic Long",description:"Description",source:"@site/docs/recipes-distributed-atomic-long.md",sourceDirName:".",slug:"/recipes-distributed-atomic-long",permalink:"/docs/recipes-distributed-atomic-long",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-distributed-atomic-long.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1692089714,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{sidebar_label:"Distributed Atomic Long"},sidebar:"docs",previous:{title:"Shared Counter",permalink:"/docs/recipes-shared-counter"},next:{title:"Curator Cache",permalink:"/docs/recipes-curator-cache"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a DistributedAtomicLong",id:"creating-a-distributedatomiclong",level:2},{value:"Optimistic mode only",id:"optimistic-mode-only",level:3},{value:"Mutex promotion mode",id:"mutex-promotion-mode",level:3},{value:"General Usage",id:"general-usage",level:2},{value:"Perform an operation on the counter",id:"perform-an-operation-on-the-counter",level:3},{value:"Examine the result AtomicValue",id:"examine-the-result-atomicvalue",level:3},{value:"Error Handling",id:"error-handling",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recipe-distributed-atomic-long"},"Recipe: Distributed Atomic Long"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"A counter that attempts atomic increments. It first tries using optimistic locking. If that fails, an optional InterProcessMutex is taken. For both optimistic and mutex, a retry policy is used to retry the increment."),(0,n.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DistributedAtomicLong"),(0,n.kt)("li",{parentName:"ul"},"AtomicValue"),(0,n.kt)("li",{parentName:"ul"},"PromotedToLock")),(0,n.kt)("h2",{id:"creating-a-distributedatomiclong"},"Creating a DistributedAtomicLong"),(0,n.kt)("h3",{id:"optimistic-mode-only"},"Optimistic mode only"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Creates the counter in optimistic mode only - i.e. the promotion to a mutex is not done\n// Parameters:\n// client - the client\n// counterPath - path to hold the counter value\n// retryPolicy - the retry policy to use\npublic DistributedAtomicLong(CuratorFramework client, String counterPath, RetryPolicy retryPolicy);\n")),(0,n.kt)("h3",{id:"mutex-promotion-mode"},"Mutex promotion mode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Creates the counter in mutex promotion mode. The optimistic lock will be tried first using the given retry policy.\n// If the increment does not succeed, a InterProcessMutex will be tried with its own retry policy\n//\n// Parameters:\n// client - the client\n// counterPath - path to hold the counter value\n// retryPolicy - the retry policy to use\n// promotedToLock - the arguments for the mutex promotion\npublic DistributedAtomicLong(\n    CuratorFramework client,\n    String counterPath,\n    RetryPolicy retryPolicy,\n    PromotedToLock promotedToLock\n);\n")),(0,n.kt)("h2",{id:"general-usage"},"General Usage"),(0,n.kt)("h3",{id:"perform-an-operation-on-the-counter"},"Perform an operation on the counter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"get()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"increment()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"decrement()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"add()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"subtract()"))),(0,n.kt)("h3",{id:"examine-the-result-atomicvalue"},"Examine the result AtomicValue"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You ",(0,n.kt)("strong",{parentName:"li"},"must")," first check ",(0,n.kt)("inlineCode",{parentName:"li"},"succeeded()")," which returns true if the operation succeeded. If false is returned, the operation failed and the atomic was not updated."),(0,n.kt)("li",{parentName:"ul"},"If the operation succeeded, you can get the value prior to the operation via ",(0,n.kt)("inlineCode",{parentName:"li"},"preValue()")," and the value after the operation ",(0,n.kt)("inlineCode",{parentName:"li"},"postValue()"),".")),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"All the atomic instances access the ZooKeeper server for each method call. Therefore, the standard retry mechanism will be applied and any errors executing the operations will result in an Exception being thrown."))}d.isMDXComponent=!0}}]);
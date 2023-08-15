"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[5685],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||s;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_label:"Shared Semaphore"},o="Recipe: Shared Semaphore",i={unversionedId:"recipes-shared-semaphore",id:"recipes-shared-semaphore",title:"Recipe: Shared Semaphore",description:"Description",source:"@site/docs/recipes-shared-semaphore.md",sourceDirName:".",slug:"/recipes-shared-semaphore",permalink:"/docs/recipes-shared-semaphore",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-shared-semaphore.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1692089714,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{sidebar_label:"Shared Semaphore"},sidebar:"docs",previous:{title:"Shared Reentrant Read Write Lock",permalink:"/docs/recipes-shared-reentrant-read-write-lock"},next:{title:"Multi Shared Lock",permalink:"/docs/recipes-multi-shared-lock"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating an InterProcessSemaphoreV2",id:"creating-an-interprocesssemaphorev2",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],u={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recipe-shared-semaphore"},"Recipe: Shared Semaphore"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,'A counting semaphore that works across JVMs. All processes in all JVMs that use the same lock path will achieve an inter-process limited set of leases. Further, this semaphore is mostly "fair" - each user will get a lease in the order requested (from ZK\'s point of view).'),(0,n.kt)("p",null,"There are two modes for determining the max leases for the semaphore. In the first mode the max leases is a convention maintained by the users of a given path. In the second mode a SharedCountReader is used as the method for semaphores of a given path to determine the max leases."),(0,n.kt)("p",null,"If a SharedCountReader is not used, no internal checks are done to prevent Process A acting as if there are 10 leases and Process B acting as if there are 20. Therefore, make sure that all instances in all processes use the same numberOfLeases value."),(0,n.kt)("p",null,"The various acquire methods return Lease objects that represent acquired leases. Clients must take care to close lease objects (ideally in a ",(0,n.kt)("inlineCode",{parentName:"p"},"finally")," block) else the lease will be lost. However, if the client session drops (crash, etc.), any leases held by the client are automatically closed and made available to other clients."),(0,n.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"InterProcessSemaphoreV2"),(0,n.kt)("li",{parentName:"ul"},"Lease"),(0,n.kt)("li",{parentName:"ul"},"SharedCountReader")),(0,n.kt)("h2",{id:"creating-an-interprocesssemaphorev2"},"Creating an InterProcessSemaphoreV2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - client\n// path - the path to lock\n// numberOfLeases - the number of leases allowed by this semaphore\npublic InterProcessSemaphoreV2(\n    CuratorFramework client,\n    String path,\n    int numberOfLeases\n);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - the client\n// path - path for the semaphore\n// count - the shared count to use for the max leases\npublic InterProcessSemaphoreV2(\n    CuratorFramework client,\n    String path,\n    SharedCountReader count\n);\n")),(0,n.kt)("h2",{id:"general-usage"},"General Usage"),(0,n.kt)("p",null,"To acquire one lease/usage, use one of the acquire methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire a lease. If no leases are available, this method blocks until either the maximum number of\n// leases is increased or another client/process closes a lease.\n// The client must close the lease when it is done with it. You should do this in a finally block.\npublic Lease acquire();\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire qty leases. If there are not enough leases available, this method blocks until either the\n// maximum number of leases is increased enough or other clients/processes close enough leases.\n// The client must close the leases when it is done with them. You should do this in a finally block.\n// NOTE: You can use returnAll(Collection) for this.\n// Parameters:\n// qty - number of leases to acquire\npublic Collection<Lease> acquire(int qty);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire a lease. If no leases are available, this method blocks until either the maximum number of\n// leases is increased or another client/process closes a lease. However, this method will only block\n// to a maximum of the time parameters given.\n// The client must close the lease when it is done with it. You should do this in a finally block.\n// Parameters:\n// time - time to wait\n// unit - time unit\n// Returns:\n// the new lease or null if time ran out\npublic Lease acquire(long time, TimeUnit unit);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire qty leases. If there are not enough leases available, this method blocks until either the\n// maximum number of leases is increased enough or other clients/processes close enough leases. However,\n// this method will only block to a maximum of the time parameters given. If time expires before all\n// leases are acquired, the subset of acquired leases are automatically closed.\n// The client must close the leases when it is done with them. You should do this in a finally block.\n// NOTE: You can use returnAll(Collection) for this.\n// Parameters:\n// qty - number of leases to acquire\n// time - time to wait\n// unit - time unit\npublic Collection<Lease> acquire(int qty, long time, TimeUnit unit);\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Lease")," instances can either be closed directly or you can use these convenience methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void returnAll(Collection<Lease> leases);\npublic void returnLease(Lease lease);\n")),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"It is strongly recommended that you add a ",(0,n.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener")," and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock."))}p.isMDXComponent=!0}}]);
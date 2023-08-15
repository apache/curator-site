"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[4868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Multi Shared Lock"},l="Recipe: Multi Shared Lock",o={unversionedId:"recipes-multi-shared-lock",id:"recipes-multi-shared-lock",title:"Recipe: Multi Shared Lock",description:"Description",source:"@site/docs/recipes-multi-shared-lock.md",sourceDirName:".",slug:"/recipes-multi-shared-lock",permalink:"/docs/recipes-multi-shared-lock",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-multi-shared-lock.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1692089714,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{sidebar_label:"Multi Shared Lock"},sidebar:"docs",previous:{title:"Shared Semaphore",permalink:"/docs/recipes-shared-semaphore"},next:{title:"Barrier",permalink:"/docs/recipes-barrier"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a InterProcessMultiLock",id:"creating-a-interprocessmultilock",level:3},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recipe-multi-shared-lock"},"Recipe: Multi Shared Lock"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"A container that manages multiple locks as a single entity. When acquire() is called, all the locks are acquired. If that fails, any paths that were acquired are released. Similarly, when release() is called, all locks are released (failures are ignored)."),(0,n.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"InterProcessMultiLock"),(0,n.kt)("li",{parentName:"ul"},"InterProcessLock")),(0,n.kt)("h3",{id:"creating-a-interprocessmultilock"},"Creating a InterProcessMultiLock"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Creates a multi lock of any type of inter process lock\n// Parameters:\n// locks - the locks\npublic InterProcessMultiLock(List<InterProcessLock> locks);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Creates a multi lock of InterProcessMutexes\n// Parameters:\n// client - client\n// paths - list of paths to manage in the order that they are to be locked\npublic InterProcessMultiLock(CuratorFramework client, List<String> paths);\n")),(0,n.kt)("h2",{id:"general-usage"},"General Usage"),(0,n.kt)("p",null,"The usage is the same as for ",(0,n.kt)("a",{parentName:"p",href:"/docs/recipes-shared-lock"},"Shared Lock"),". However, When ",(0,n.kt)("inlineCode",{parentName:"p"},"acquire()")," is called, all the locks are acquired. If that fails, any paths that were acquired are released. Similarly, when ",(0,n.kt)("inlineCode",{parentName:"p"},"release()")," is called, all locks are released (failures are ignored)."),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"It is strongly recommended that you add a ",(0,n.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener")," and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock."))}d.isMDXComponent=!0}}]);
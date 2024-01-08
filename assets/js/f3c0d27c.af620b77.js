"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[812],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7263),n=(r(9496),r(9613));const o={sidebar_label:"Shared Lock"},i="Recipe: Shared Lock",l={unversionedId:"recipes-shared-lock",id:"recipes-shared-lock",title:"Recipe: Shared Lock",description:"Description",source:"@site/docs/recipes-shared-lock.md",sourceDirName:".",slug:"/recipes-shared-lock",permalink:"/docs/recipes-shared-lock",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-shared-lock.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1704703627,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{sidebar_label:"Shared Lock"},sidebar:"docs",previous:{title:"Shared Reentrant Lock",permalink:"/docs/recipes-shared-reentrant-lock"},next:{title:"Shared Reentrant Read Write Lock",permalink:"/docs/recipes-shared-reentrant-read-write-lock"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Create an InterProcessSemaphoreMutex",id:"create-an-interprocesssemaphoremutex",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recipe-shared-lock"},"Recipe: Shared Lock"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Fully distributed locks that are globally synchronous, meaning at any snapshot in time no two clients think they hold the same lock. Note: unlike InterProcessMutex this lock is ",(0,n.kt)("em",{parentName:"p"},"not")," reentrant."),(0,n.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"InterProcessSemaphoreMutex")),(0,n.kt)("h2",{id:"create-an-interprocesssemaphoremutex"},"Create an InterProcessSemaphoreMutex"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - client\n// path - the path to lock\npublic InterProcessSemaphoreMutex(CuratorFramework client, String path);\n")),(0,n.kt)("h2",{id:"general-usage"},"General Usage"),(0,n.kt)("p",null,"To acquire the lock, use one of the acquire methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire the mutex - blocking until it's available. Must be balanced by a call to release().\npublic void acquire();\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire the mutex - blocks until it's available or the given time expires. Must be balanced by a call to release().\n//\n// Parameters:\n// time - time to wait\n// unit - time unit\n// Returns:\n// true if the mutex was acquired, false otherwise\npublic boolean acquire(long time, TimeUnit unit);\n")),(0,n.kt)("p",null,"To release the mutex, call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Perform one release of the mutex if the calling thread is the same thread that acquired it.\npublic void release();\n")),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"It is strongly recommended that you add a ",(0,n.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener")," and watch for SUSPENDED and LOST state changes."),(0,n.kt)("p",null,"If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock."))}d.isMDXComponent=!0}}]);
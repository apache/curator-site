"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[7210],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var a=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),h=n,k=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return t?a.createElement(k,i(i({ref:r},d),{},{components:t})):a.createElement(k,i({ref:r},d))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},968:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(7263),n=(t(9496),t(9613));const o={sidebar_label:"Shared Reentrant Read Write Lock"},i="Recipe: Shared Reentrant Read Write Lock",c={unversionedId:"recipes-shared-reentrant-read-write-lock",id:"recipes-shared-reentrant-read-write-lock",title:"Recipe: Shared Reentrant Read Write Lock",description:"Description",source:"@site/docs/recipes-shared-reentrant-read-write-lock.md",sourceDirName:".",slug:"/recipes-shared-reentrant-read-write-lock",permalink:"/docs/recipes-shared-reentrant-read-write-lock",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-shared-reentrant-read-write-lock.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1704703627,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{sidebar_label:"Shared Reentrant Read Write Lock"},sidebar:"docs",previous:{title:"Shared Lock",permalink:"/docs/recipes-shared-lock"},next:{title:"Shared Semaphore",permalink:"/docs/recipes-shared-semaphore"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Reentrancy",id:"reentrancy",level:3},{value:"Lock Downgrading",id:"lock-downgrading",level:3},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Create an InterProcessReadWriteLock",id:"create-an-interprocessreadwritelock",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],d={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recipe-shared-reentrant-read-write-lock"},"Recipe: Shared Reentrant Read Write Lock"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,'A re-entrant read/write mutex that works across JVMs. Uses Zookeeper to hold the lock. All processes in all JVMs that use the same lock path will achieve an inter-process critical section. Further, this mutex is "fair" - each user will get the mutex in the order requested (from ZK\'s point of view).'),(0,n.kt)("p",null,"A read write lock maintains a pair of associated locks, one for read-only operations and one for writing. The read lock may be held simultaneously by multiple reader processes, so long as there are no writers. The write lock is exclusive."),(0,n.kt)("h3",{id:"reentrancy"},"Reentrancy"),(0,n.kt)("p",null,"This lock allows both readers and writers to reacquire read or write locks in the style of a re-entrant lock. Non-re-entrant readers are not allowed until all write locks held by the writing thread/process have been released. Additionally, a writer can acquire the read lock, but not vice-versa. If a reader tries to acquire the write lock it will never succeed."),(0,n.kt)("h3",{id:"lock-downgrading"},"Lock Downgrading"),(0,n.kt)("p",null,"Reentrancy also allows downgrading from the write lock to a read lock, by acquiring the write lock, then the read lock and then releasing the write lock. However, upgrading from a read lock to the write lock is not possible."),(0,n.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"InterProcessReadWriteLock"),(0,n.kt)("li",{parentName:"ul"},"InterProcessLock")),(0,n.kt)("h2",{id:"create-an-interprocessreadwritelock"},"Create an InterProcessReadWriteLock"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - the client\n// basePath - path to use for locking\npublic InterProcessReadWriteLock(CuratorFramework client, String basePath);\n")),(0,n.kt)("h2",{id:"general-usage"},"General Usage"),(0,n.kt)("p",null,"Access either the read lock or the write lock and then use the methods as described for ",(0,n.kt)("a",{parentName:"p",href:"/docs/recipes-shared-lock"},"Shared lock"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public InterProcessLock readLock();\npublic InterProcessLock writeLock();\n")),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"It is strongly recommended that you add a ",(0,n.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener")," and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock."))}u.isMDXComponent=!0}}]);
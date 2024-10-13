"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[1950],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7263),n=(r(9496),r(9613));const o={sidebar_label:"Shared Reentrant Lock"},i="Recipe: Shared Reentrant Lock",l={unversionedId:"recipes-shared-reentrant-lock",id:"recipes-shared-reentrant-lock",title:"Recipe: Shared Reentrant Lock",description:"Description",source:"@site/docs/recipes-shared-reentrant-lock.md",sourceDirName:".",slug:"/recipes-shared-reentrant-lock",permalink:"/docs/recipes-shared-reentrant-lock",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-shared-reentrant-lock.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1728813389,formattedLastUpdatedAt:"Oct 13, 2024",frontMatter:{sidebar_label:"Shared Reentrant Lock"},sidebar:"docs",previous:{title:"Leader Election",permalink:"/docs/recipes-leader-election"},next:{title:"Shared Lock",permalink:"/docs/recipes-shared-lock"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Create an InterProcessMutex",id:"create-an-interprocessmutex",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Revoking",id:"revoking",level:2},{value:"Error Handling",id:"error-handling",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recipe-shared-reentrant-lock"},"Recipe: Shared Reentrant Lock"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Fully distributed locks that are globally synchronous, meaning at any snapshot in time no two clients think they hold the same lock."),(0,n.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"InterProcessMutex")),(0,n.kt)("h2",{id:"create-an-interprocessmutex"},"Create an InterProcessMutex"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - client\n// path - the path to lock\npublic InterProcessMutex(CuratorFramework client, String path);\n")),(0,n.kt)("h2",{id:"general-usage"},"General Usage"),(0,n.kt)("p",null,"To acquire the lock, use one of the acquire methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire the mutex - blocking until it's available. Note: the same thread can call acquire\n// re-entrantly. Each call to acquire must be balanced by a call to release()\npublic void acquire();\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Acquire the mutex - blocks until it's available or the given time expires. Note: the same thread can\n// call acquire re-entrantly. Each call to acquire that returns true must be balanced by a call to release()\n//\n// Parameters:\n// time - time to wait\n// unit - time unit\n// Returns:\n// true if the mutex was acquired, false otherwise\npublic boolean acquire(long time, TimeUnit unit);\n")),(0,n.kt)("p",null,"To release the mutex, call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Perform one release of the mutex if the calling thread is the same thread that acquired it. If the\n// thread had made multiple calls to acquire, the mutex will still be held when this method returns.\npublic void release();\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A InterProcessMutex instance is reusable. i.e. don't create a new instance every time. Re-use a single instance.")),(0,n.kt)("h2",{id:"revoking"},"Revoking"),(0,n.kt)("p",null,"InterProcessMutex supports a cooperative revocation mechanism as described on the ZooKeeper recipes wiki."),(0,n.kt)("p",null,"To make a mutex revocable, call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Make the lock revocable. Your listener will get called when another process/thread wants you to release the lock. Revocation is cooperative.\n// Parameters:\n// listener - the listener\npublic void makeRevocable(RevocationListener<T> listener);\n")),(0,n.kt)("p",null,"To ask for a lock to revoke/release, use the static method in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Revoker")," class:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Utility to mark a lock for revocation. Assuming that the lock has been registered\n// with a RevocationListener, it will get called and the lock should be released. Note,\n// however, that revocation is cooperative.\n// Parameters:\n// client - the client\n// path - the path of the lock - usually from something like InterProcessMutex.getParticipantNodes()\npublic static void attemptRevoke(CuratorFramework client, String path) throws Exception;\n")),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"It is strongly recommended that you add a ",(0,n.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener")," and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock."))}d.isMDXComponent=!0}}]);
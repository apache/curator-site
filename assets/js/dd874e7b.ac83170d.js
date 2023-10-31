"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[1138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},c="Tech Note 1",i={unversionedId:"tech-note-01",id:"tech-note-01",title:"Tech Note 1",description:"ZooKeeper's watches are single threaded.",source:"@site/docs/tech-note-01.md",sourceDirName:".",slug:"/tech-note-01",permalink:"/docs/tech-note-01",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/tech-note-01.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698746944,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Tech Notes",permalink:"/docs/tech-notes"},next:{title:"Tech Note 2",permalink:"/docs/tech-note-02"}},s={},l=[{value:"Details",id:"details",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tech-note-1"},"Tech Note 1"),(0,o.kt)("p",null,"ZooKeeper's watches are single threaded."),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,"When your watcher is called, it should return as quickly as possible. All ZooKeeper watchers are serialized - processed by a single thread. Thus, ",(0,o.kt)("strong",{parentName:"p"},"no other watchers can be processed while your watcher is running"),". For example, a Curator user had a watcher handler something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"InterProcessMutex lock = ...;\n\npublic void process(WatchedEvent event) {\n    lock.acquire();\n    // ...\n}\n")),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},"cannot work"),". Curator's InterProcessMutex relies on ZooKeeper watchers getting notified. The code above, however, is holding on to the ZooKeeper watcher processing thread. The way to fix this is to run the code that needs a lock in a separate thread. e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"InterProcessMutex lock = ...;\nExecutorService service = ...;\n\npublic void process(WatchedEvent event) {\n    service.submit(new Callable<Void>() {\n        @Override\n        public Void call() throws Exception {\n            lock.acquire();\n            // ...\n        }\n    });\n}\n")))}d.isMDXComponent=!0}}]);
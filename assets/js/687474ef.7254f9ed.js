"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[6380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Persistent Recursive Watcher"},s="Recipe: Persistent Recursive Watcher",c={unversionedId:"recipes-persistent-watcher",id:"recipes-persistent-watcher",title:"Recipe: Persistent Recursive Watcher",description:"PersistentWatcher requires ZooKeeper 3.6+",source:"@site/docs/recipes-persistent-watcher.md",sourceDirName:".",slug:"/recipes-persistent-watcher",permalink:"/docs/recipes-persistent-watcher",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-persistent-watcher.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1692089714,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{sidebar_label:"Persistent Recursive Watcher"},sidebar:"docs",previous:{title:"Tree Cache",permalink:"/docs/recipes-tree-cache"},next:{title:"Persistent Node",permalink:"/docs/recipes-persistent-node"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a PersistentWatcher",id:"creating-a-persistentwatcher",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],p={toc:o},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-persistent-recursive-watcher"},"Recipe: Persistent Recursive Watcher"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"PersistentWatcher requires ZooKeeper 3.6+")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A managed persistent watcher. The watch will be managed such that it stays set through connection lapses, etc."),(0,a.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PersistentWatcher")),(0,a.kt)("h2",{id:"creating-a-persistentwatcher"},"Creating a PersistentWatcher"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - the client\n// basePath - path to set the watch on\n// recursive - ZooKeeper persistent watches can optionally be recursive\npublic PersistentWatcher(CuratorFramework client, String basePath, boolean recursive);\n")),(0,a.kt)("h2",{id:"general-usage"},"General Usage"),(0,a.kt)("p",null,"The instance must be started by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"start()"),". Call ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," when you want to remove the watch."),(0,a.kt)("p",null,"PersistentWatcher presents two listener types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Listenable<Watcher> getListenable()")," - Use this to add watchers. These will behave in the same manner that watchers added via ",(0,a.kt)("inlineCode",{parentName:"li"},"ZooKeeper.addWatch()")," behave."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Listenable<Runnable> getResetListenable()")," - The ",(0,a.kt)("inlineCode",{parentName:"li"},"Runnable"),"s added with this get called once the Persistent Watcher has been successfully set(or reset after a connection partition).")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"PersistentWatcher instances internally monitor connection losses, etc. automatically resetting on reconnection."))}d.isMDXComponent=!0}}]);
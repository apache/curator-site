"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[6392],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>k});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(k,o(o({ref:r},p),{},{components:t})):n.createElement(k,o({ref:r},p))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8333:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7263),a=(t(9496),t(9613));const i={},o="Breaking Changes",l={unversionedId:"breaking-changes",id:"breaking-changes",title:"Breaking Changes",description:"Curator 5.0 Breaking Changes",source:"@site/docs/breaking-changes.md",sourceDirName:".",slug:"/breaking-changes",permalink:"/docs/breaking-changes",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/breaking-changes.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1718429251,formattedLastUpdatedAt:"Jun 15, 2024",frontMatter:{},sidebar:"docs",previous:{title:"ZooKeeper 3.4.x",permalink:"/docs/zk-compatibility-34"},next:{title:"Service Discovery",permalink:"/docs/service-discovery"}},c={},s=[{value:"Curator 5.0 Breaking Changes",id:"curator-50-breaking-changes",level:2}],p={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"breaking-changes"},"Breaking Changes"),(0,a.kt)("h2",{id:"curator-50-breaking-changes"},"Curator 5.0 Breaking Changes"),(0,a.kt)("p",null,"Curator 5.0 contains a few non-backward compatible/breaking changes from previous versions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ZooKeeper 3.4.x is no longer supported (the associated ",(0,a.kt)("inlineCode",{parentName:"li"},"Compatibility")," classes/methods have been removed). If you still need to use Curator with ZooKeeper 3.4.x you will need to use a previous version. ",(0,a.kt)("a",{parentName:"li",href:"/docs/zk-compatibility-34"},"Click here for details"),"."),(0,a.kt)("li",{parentName:"ul"},"The old ",(0,a.kt)("inlineCode",{parentName:"li"},"ListenerContainer")," classes have been removed so as not to leak Guava classes into Curator APIs. Instead, use the new ",(0,a.kt)("inlineCode",{parentName:"li"},"StandardListenerManager"),"."),(0,a.kt)("li",{parentName:"ul"},"Exhibitor support has been removed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ConnectionHandlingPolicy")," and related classes have been removed."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Reaper")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ChildReaper")," classes/recipes have been removed. You should use ZooKeeper container nodes instead."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"newPersistentEphemeralNode()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"newPathChildrenCache()")," were removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"GroupMember"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ServiceCacheBuilder<T> executorService(CloseableExecutorService executorService)")," was removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"ServiceCacheBuilder"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ServiceProviderBuilder<T> executorService(CloseableExecutorService executorService)")," was removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"ServiceProviderBuilder"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static boolean shouldRetry(int rc)")," was removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"RetryLoop"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static boolean isRetryException(Throwable exception)")," was removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"RetryLoop"),".")))}d.isMDXComponent=!0}}]);
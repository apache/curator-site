"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[3933],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4299:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(7263),a=(t(9496),t(9613));const i={sidebar_label:"Double Barrier"},l="Recipe: Double Barrier",o={unversionedId:"recipes-double-barrier",id:"recipes-double-barrier",title:"Recipe: Double Barrier",description:"Description",source:"@site/docs/recipes-double-barrier.md",sourceDirName:".",slug:"/recipes-double-barrier",permalink:"/docs/recipes-double-barrier",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-double-barrier.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1704703627,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{sidebar_label:"Double Barrier"},sidebar:"docs",previous:{title:"Barrier",permalink:"/docs/recipes-barrier"},next:{title:"Shared Counter",permalink:"/docs/recipes-shared-counter"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a DistributedBarrier",id:"creating-a-distributedbarrier",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-double-barrier"},"Recipe: Double Barrier"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"An implementation of the Distributed Double Barrier ZK recipe."),(0,a.kt)("p",null,"Double barriers enable clients to synchronize the beginning and the end of a computation. When enough processes have\njoined the barrier, processes start their computation and leave the barrier once they have finished."),(0,a.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DistributedDoubleBarrier")),(0,a.kt)("h2",{id:"creating-a-distributedbarrier"},"Creating a DistributedBarrier"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Creates the barrier abstraction. memberQty is the number of members in the barrier. When enter() is called,\n// it blocks until all members have entered. When leave() is called, it blocks until all members have left.\n// Parameters:\n// client - the client\n// barrierPath - path to use\n// memberQty - the number of members in the barrier\npublic DistributedDoubleBarrier(CuratorFramework client, String barrierPath, int memberQty);\n")),(0,a.kt)("h2",{id:"general-usage"},"General Usage"),(0,a.kt)("p",null,"To enter on the barrier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public void enter();\n")),(0,a.kt)("p",null,"To leave on the barrier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public void leave();\n")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"DistributedDoubleBarrier instances watch for connection loss and will throw an exception from ",(0,a.kt)("inlineCode",{parentName:"p"},"enter()")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"leave()"),"."))}d.isMDXComponent=!0}}]);
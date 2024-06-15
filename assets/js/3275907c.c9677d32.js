"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[3250],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7263),a=(r(9496),r(9613));const o={},c="Tech Notes",i={unversionedId:"tech-notes",id:"tech-notes",title:"Tech Notes",description:"Various questions, issues, etc. come up from time to time. Answers and workarounds will be collected here as Tech Notes.",source:"@site/docs/tech-notes.md",sourceDirName:".",slug:"/tech-notes",permalink:"/docs/tech-notes",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/tech-notes.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1718429251,formattedLastUpdatedAt:"Jun 15, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Logging and Tracing",permalink:"/docs/logging"},next:{title:"Tech Note 1",permalink:"/docs/tech-note-01"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tech-notes"},"Tech Notes"),(0,a.kt)("p",null,"Various questions, issues, etc. come up from time to time. Answers and workarounds will be collected here as Tech Notes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-01"},"TN1"),": ZooKeeper watches are single threaded."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-02"},"TN2"),": InterProcessMutex acquire() can be used to return immediately if lock can't be acquired."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-03"},"TN3"),": Dealing with session failure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-04"},"TN4"),": ZooKeeper makes a very bad Queue source."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-05"},"TN5"),": The APIs in Apache Curator are exactly the same as Netflix Curator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-06"},"TN6"),": Friends don't let friends write ZooKeeper recipes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-07"},"TN7"),": Do not use paths passed to Curator recipes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-08"},"TN8"),": Curator logging can be customized."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-09"},"TN9"),": NOTE: PathChildrenCache now uses getData() instead of checkExists()."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-10"},"TN10"),": JVM pauses can cause unexpected client state with improperly chosen session timeouts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-11"},"TN11"),": Curator internally wraps Watchers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-12"},"TN12"),": Curator connection semantics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-13"},"TN13"),": Guava usage in Curator"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-14"},"TN14"),": Session expiration in Curator"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tech-note-15"},"TN15"),": API Changes in Curator 5.0.0 and how to workaround them if you need binary compatibility.")))}m.isMDXComponent=!0}}]);
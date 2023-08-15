"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[1087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return a?r.createElement(m,s(s({ref:t},i),{},{components:a})):r.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={},s="Tech Note 13",u={unversionedId:"tech-note-13",id:"tech-note-13",title:"Tech Note 13",description:"Guava usage in Curator",source:"@site/docs/tech-note-13.md",sourceDirName:".",slug:"/tech-note-13",permalink:"/docs/tech-note-13",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/tech-note-13.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1692090157,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Tech Note 12",permalink:"/docs/tech-note-12"},next:{title:"Tech Note 14",permalink:"/docs/tech-note-14"}},l={},c=[{value:"Details",id:"details",level:2},{value:"Shaded But Not Gone",id:"shaded-but-not-gone",level:3},{value:"Summary",id:"summary",level:2},{value:"Test",id:"test",level:2},{value:"Comment",id:"comment",level:2}],i={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tech-note-13"},"Tech Note 13"),(0,o.kt)("p",null,"Guava usage in Curator"),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,"Since Curator was created at Netflix it has used Google's popular Guava library. Due to the many versions of Guava used in projects that also use Curator there has always been the potential for conflicts. Recent versions of Guava removed some APIs that Curator uses internally and Curator users were getting ClassNotFoundException, etc. ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/CURATOR-200"},"CURATOR-200")," addresses these issues by shading Guava into Curator."),(0,o.kt)("h3",{id:"shaded-but-not-gone"},"Shaded But Not Gone"),(0,o.kt)("p",null,"Unfortunately, a few of Curator's public APIs use Guava classes (e.g. ListenerContainer's use of Guava's Function). Breaking public APIs would cause as much harm as solving the Guava problem. So, it was decided to shade all Guava except for these three classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"com.google.common.base.Function"),(0,o.kt)("li",{parentName:"ul"},"com.google.common.base.Predicate"),(0,o.kt)("li",{parentName:"ul"},"com.google.common.reflect.TypeToken")),(0,o.kt)("p",null,"The implication of this is that Curator still has a hard dependency on Guava but only for these three classes. What this means for Curator users is that you can use whatever version of Guava your project needs without concern about ClassNotFoundException, NoSuchMethodException, etc."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All but three Guava classes are completed shaded into Curator"),(0,o.kt)("li",{parentName:"ul"},"Curator still has a hard dependency on Guava, but you should be able to use whatever version of Guava your project needs")),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"Note, this project proves the shaded version of Guava: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Randgalt/curator-guava-example"},"https://github.com/Randgalt/curator-guava-example")),(0,o.kt)("h2",{id:"comment"},"Comment"),(0,o.kt)("p",null,"For those still not convinced. Here's a disassembly of ListenerContainer.class from Curator 3.3.0. You can see that various Guava classes like MoreExecutors are shaded."),(0,o.kt)("p",null,"Disassembly: ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/Randgalt/3fcdca337a2f8527a3f7ee871852f456"},"https://gist.github.com/Randgalt/3fcdca337a2f8527a3f7ee871852f456")))}d.isMDXComponent=!0}}]);
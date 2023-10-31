"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[3295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Shared Counter"},o="Recipe: Shared Counter",s={unversionedId:"recipes-shared-counter",id:"recipes-shared-counter",title:"Recipe: Shared Counter",description:"Description",source:"@site/docs/recipes-shared-counter.md",sourceDirName:".",slug:"/recipes-shared-counter",permalink:"/docs/recipes-shared-counter",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-shared-counter.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698746944,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{sidebar_label:"Shared Counter"},sidebar:"docs",previous:{title:"Double Barrier",permalink:"/docs/recipes-double-barrier"},next:{title:"Distributed Atomic Long",permalink:"/docs/recipes-distributed-atomic-long"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a SharedCounter",id:"creating-a-sharedcounter",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-shared-counter"},"Recipe: Shared Counter"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Manages a shared integer. All clients watching the same path will have the up-to-date value of the shared integer (considering ZK's normal consistency guarantees)."),(0,a.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SharedCount"),(0,a.kt)("li",{parentName:"ul"},"SharedCountReader"),(0,a.kt)("li",{parentName:"ul"},"SharedCountListener")),(0,a.kt)("h2",{id:"creating-a-sharedcounter"},"Creating a SharedCounter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - the client\n// path - the shared path - i.e. where the shared count is stored\n// seedValue - the initial value for the count iff the path has not yet been created\npublic SharedCount(CuratorFramework client, String path, int seedValue);\n")),(0,a.kt)("h2",{id:"general-usage"},"General Usage"),(0,a.kt)("p",null,"SharedCounts must be started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"count.start();\n")),(0,a.kt)("p",null,"When you are through with the instance, you should call close:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"count.close();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Return the current value of the count\nint getCount();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Add a listener for changes to the count\nvoid addListener(SharedCountListener listener);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Change the shared count value irrespective of its previous state\npublic void setCount(int newCount);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Changes the shared count only if its value has not changed since this client last read it. If the count\n// has changed, the value is not set and this client's view of the value is updated. i.e. if the count is\n// not successful you can get the updated value by calling getCount().\n// Parameters:\n// newCount - the new value to attempt\n// Returns:\n// true if the change attempt was successful, false if not. If the change was not successful, getCount()\n// will return the updated value\npublic boolean trySetCount(int newCount);\n")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SharedCountListener")," class extends ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener"),". When the SharedCount is started, it adds the listener to the Curator instance. Users of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SharedCount")," must pay attention to any connection state changes."),(0,a.kt)("p",null,"If the SUSPENDED state is reported, the instance must assume that, until it receives a RECONNECTED state, the count is no longer accurate and isn't being updated. If the LOST state is reported, the count is permanently down."))}d.isMDXComponent=!0}}]);
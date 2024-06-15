"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[9112],{9613:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(m,c(c({ref:t},h),{},{components:a})):n.createElement(m,c({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7263),r=(a(9496),a(9613));const i={sidebar_label:"Path Cache"},c="Recipe: Path Cache",l={unversionedId:"recipes-path-cache",id:"recipes-path-cache",title:"Recipe: Path Cache",description:"Description",source:"@site/docs/recipes-path-cache.md",sourceDirName:".",slug:"/recipes-path-cache",permalink:"/docs/recipes-path-cache",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-path-cache.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1718429251,formattedLastUpdatedAt:"Jun 15, 2024",frontMatter:{sidebar_label:"Path Cache"},sidebar:"docs",previous:{title:"Curator Cache",permalink:"/docs/recipes-curator-cache"},next:{title:"Node Cache",permalink:"/docs/recipes-node-cache"}},o={},s=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a PathChildrenCache",id:"creating-a-pathchildrencache",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],h={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recipe-path-cache"},"Recipe: Path Cache"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"A Path Cache is used to watch a ZNode. Whenever a child is added, updated or removed, the Path Cache will change its state to contain the current set of children, the children's data and the children's state."),(0,r.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PathChildrenCache"),(0,r.kt)("li",{parentName:"ul"},"PathChildrenCacheEvent"),(0,r.kt)("li",{parentName:"ul"},"PathChildrenCacheListener"),(0,r.kt)("li",{parentName:"ul"},"ChildData")),(0,r.kt)("h2",{id:"creating-a-pathchildrencache"},"Creating a PathChildrenCache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - the client\n// path - path to watch\n// cacheData - if true, node contents are cached in addition to the stat\npublic PathChildrenCache(CuratorFramework client, String path, boolean cacheData);\n")),(0,r.kt)("h2",{id:"general-usage"},"General Usage"),(0,r.kt)("p",null,"The cache must be started by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"start()"),". Call ",(0,r.kt)("inlineCode",{parentName:"p"},"close()")," when you are through with the cache."),(0,r.kt)("p",null,"There are two versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"start()"),". The no-arg version gives default behavior. The other version takes an enumeration that allows you to control how the initial cache is warmed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum StartMode {\n    /**\n     * cache will _not_ be primed. i.e. it will start empty and you will receive\n     * events for all nodes added, etc.\n     */\n    NORMAL,\n\n    /**\n     * rebuild() will be called before this method returns in\n     * order to get an initial view of the node.\n     */\n    BUILD_INITIAL_CACHE,\n\n    /**\n     * After cache is primed with initial values (in the background) a\n     * PathChildrenCacheEvent.Type.INITIALIZED event will be posted\n     */\n    POST_INITIALIZED_EVENT\n}\n")),(0,r.kt)("p",null,"At any time, call ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentData()")," to get the current state of the cache. You can also register to be notified when a change occurs by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getListenable()")," and then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Add a change listener\n// Parameters:\n// listener - the listener\npublic void addListener(PathChildrenCacheListener listener)\n")),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"PathChildrenCache instances internally monitor a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener"),". If the connection state changes, the cache is reset (the ",(0,r.kt)("inlineCode",{parentName:"p"},"PathChildrenCacheListener")," will receive a RESET)."))}d.isMDXComponent=!0}}]);
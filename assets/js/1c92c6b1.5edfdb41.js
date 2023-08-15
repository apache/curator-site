"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[2469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Leader Election"},o="Recipe: Leader Election",l={unversionedId:"recipes-leader-election",id:"recipes-leader-election",title:"Recipe: Leader Election",description:"Description",source:"@site/docs/recipes-leader-election.md",sourceDirName:".",slug:"/recipes-leader-election",permalink:"/docs/recipes-leader-election",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-leader-election.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1692090157,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{sidebar_label:"Leader Election"},sidebar:"docs",previous:{title:"Leader Latch",permalink:"/docs/recipes-leader-latch"},next:{title:"Shared Reentrant Lock",permalink:"/docs/recipes-shared-reentrant-lock"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a LeaderSelector",id:"creating-a-leaderselector",level:3},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-leader-election"},"Recipe: Leader Election"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,'In distributed computing, leader election is the process of designating a single process as the organizer of some task distributed among several computers (nodes). Before the task is begun, all network nodes are unaware which node will serve as the "leader," or coordinator, of the task. After a leader election algorithm has been run, however, each node throughout the network recognizes a particular, unique node as the task leader.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Curator has two leader election recipes. Which one to use depends on your requirements.")),(0,a.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LeaderSelector"),(0,a.kt)("li",{parentName:"ul"},"LeaderSelectorListener"),(0,a.kt)("li",{parentName:"ul"},"LeaderSelectorListenerAdapter"),(0,a.kt)("li",{parentName:"ul"},"CancelLeadershipException")),(0,a.kt)("h3",{id:"creating-a-leaderselector"},"Creating a LeaderSelector"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - the client\n// mutexPath - the path for this leadership group\n// listener - listener\npublic LeaderSelector(CuratorFramework client, String mutexPath, LeaderSelectorListener listener);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Parameters:\n// client - the client\n// mutexPath - the path for this leadership group\n// threadFactory - factory to use for making internal threads\n// executor - the executor to run in\n// listener - listener\npublic LeaderSelector(\n    CuratorFramework client,\n    String mutexPath,\n    ThreadFactory threadFactory,\n    Executor executor,\n    LeaderSelectorListener listener\n);\n")),(0,a.kt)("h2",{id:"general-usage"},"General Usage"),(0,a.kt)("p",null,"LeaderSelectors must be started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"leaderSelector.start();\n")),(0,a.kt)("p",null,"Once started, the ",(0,a.kt)("inlineCode",{parentName:"p"},"takeLeadership()")," of your listener will be called when you have leadership. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"takeLeadership()")," method should only return when leadership is being relinquished."),(0,a.kt)("p",null,"When you are through with the LeaderSelector instance, you should call close:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"leaderSelector.close();\n")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LeaderSelectorListener")," class extends ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener"),". When the LeaderSelector is started, it adds the listener to the Curator instance. Users of the ",(0,a.kt)("inlineCode",{parentName:"p"},"LeaderSelector")," must pay attention to any connection state changes. If an instance becomes the leader, it should respond to notification of being SUSPENDED or LOST. If the SUSPENDED state is reported, the instance must assume that it might no longer be the leader until it receives a RECONNECTED state. If the LOST state is reported, the instance is no longer the leader and its ",(0,a.kt)("inlineCode",{parentName:"p"},"takeLeadership")," method should exit."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The recommended action for receiving SUSPENDED or LOST is to throw ",(0,a.kt)("inlineCode",{parentName:"p"},"CancelLeadershipException"),". This will cause the LeaderSelector instance to attempt to interrupt and cancel the thread that is executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"takeLeadership")," method. Because this is so important, you should consider extending ",(0,a.kt)("inlineCode",{parentName:"p"},"LeaderSelectorListenerAdapter"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"LeaderSelectorListenerAdapter")," has the recommended handling already written for you.")))}u.isMDXComponent=!0}}]);
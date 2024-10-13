"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[2446],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7263),o=(n(9496),n(9613));const a={},s="Tech Note 10",i={unversionedId:"tech-note-10",id:"tech-note-10",title:"Tech Note 10",description:"JVM pauses can cause unexpected client state with improperly chosen session timeouts.",source:"@site/docs/tech-note-10.md",sourceDirName:".",slug:"/tech-note-10",permalink:"/docs/tech-note-10",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/tech-note-10.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1728813389,formattedLastUpdatedAt:"Oct 13, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Tech Note 9",permalink:"/docs/tech-note-09"},next:{title:"Tech Note 11",permalink:"/docs/tech-note-11"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Summary",id:"summary",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tech-note-10"},"Tech Note 10"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JVM pauses can cause unexpected client state with improperly chosen session timeouts.")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Discussions: ",(0,o.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/1q7vhy8p3v3mxq3159w4tr9x15ywbcrr"},"https://lists.apache.org/thread/1q7vhy8p3v3mxq3159w4tr9x15ywbcrr")),(0,o.kt)("p",null,"ZooKeeper/Curator recipes rely on a consistent view of the state of the ensemble. ZooKeeper's clients maintain a session with the server they are connected to. Clients maintain periodic heartbeats to the server to maintain this session. If a heartbeat is missed, the client goes into Disconnected state. When this happens, Curator goes into SUSPENDED via the ConnectionStateListener. Any locks, etc. must be considered temporarily lost while the connection is SUSPENDED (see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/errors"},"Error Handling")," page and the Error Handling section of each recipe's documentation)."),(0,o.kt)("p",null,"The implication of this is that great care must be taken to tune your JVM and choose an appropriate session timeout. Here's an example of what can happen if this is not done:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A session timeout of 3 seconds is used"),(0,o.kt)("li",{parentName:"ul"},"Client A creates a Curator InterProcessMutex and acquires the lock"),(0,o.kt)("li",{parentName:"ul"},"Client B also creates a Curator InterProcessMutex for the same path and is blocked waiting for the lock to release"),(0,o.kt)("li",{parentName:"ul"},"Client A's JVM has a stop-the-world GC for 10 seconds",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Client A's session will have lapsed due to missed heartbeats"),(0,o.kt)("li",{parentName:"ul"},"ZooKeeper will delete Client A's EPHEMERAL node representing its InterProcessMutex lock"),(0,o.kt)("li",{parentName:"ul"},"Client B's watcher will fire, and it will successfully gain the lock"))),(0,o.kt)("li",{parentName:"ul"},"After the GC, Client A will un-pause"),(0,o.kt)("li",{parentName:"ul"},"For a short period of time, ",(0,o.kt)("strong",{parentName:"li"},"BOTH CLIENT A AND CLIENT B WILL BELIEVE THEY ARE THE LOCK HOLDER"))),(0,o.kt)("p",null,"The remedy for this is tune your JVM so that GC pauses (or other kinds of pauses) do not exceed your session timeout. JVM tuning is beyond the scope of this Tech Note. The default Curator session timeout is 60 seconds. Very low session timeouts should be considered risky."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"There is always an edge case where VM pauses might exceed your client heartbeat and cause a client misperception about it\u2019s state for a short period of time once the VM un-pauses. In practice, a tuned VM that has been running within known bounds for a reasonable period will not exhibit this behavior. Session timeout must match this known bounds in order to have consistent client state."))}h.isMDXComponent=!0}}]);
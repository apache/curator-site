"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[4273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},s="Tech Note 14",i={unversionedId:"tech-note-14",id:"tech-note-14",title:"Tech Note 14",description:"Session expiration in Curator",source:"@site/docs/tech-note-14.md",sourceDirName:".",slug:"/tech-note-14",permalink:"/docs/tech-note-14",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/tech-note-14.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698746944,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Tech Note 13",permalink:"/docs/tech-note-13"},next:{title:"Tech Note 15",permalink:"/docs/tech-note-15"}},c={},l=[{value:"Background",id:"background",level:2},{value:"ZooKeeper&#39;s Session Handling",id:"zookeepers-session-handling",level:2},{value:"Curator",id:"curator",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"Changing Curator&#39;s Session Timer",id:"changing-curators-session-timer",level:2}],h={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tech-note-14"},"Tech Note 14"),(0,r.kt)("p",null,"Session expiration in Curator"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"As noted in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tech-note-12"},"Tech Note 12"),", Since 3.x Curator attempts to simulate server side session loss by starting a timer (set to the negotiated session timeout length) upon receiving the SUSPENDED event. This Tech Note expands on this, explains some non-obvious edge cases, and suggests strategies on how to handle them."),(0,r.kt)("h2",{id:"zookeepers-session-handling"},"ZooKeeper's Session Handling"),(0,r.kt)("p",null,"The ZooKeeper client (which Curator wraps) and the ZooKeeper server maintain a session that's used for ephemeral nodes, etc. The session is maintained by the sending of heartbeat events. You can read more details here: ",(0,r.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html#ch_zkSessions"},"ZooKeeper Programmer's Guide"),". If the server doesn't receive a heartbeat from the client within 2/3 of a session length, the server closes the connection which ultimately results in the client sending ",(0,r.kt)("inlineCode",{parentName:"p"},"KeeperState.Disconnected")," to any watchers."),(0,r.kt)("h2",{id:"curator"},"Curator"),(0,r.kt)("p",null,"When Curator receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"KeeperState.Disconnected")," message it changes its state to SUSPENDED (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/tech-note-12"},"Tech Note 12"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/errors"},"Error Handling"),", etc.). As always, our recommendation is to treat SUSPENDED as a complete connection loss. Exit all locks, leaders, etc. That said, since 3.x, Curator tries to simulate session expiration by starting an internal timer when ",(0,r.kt)("inlineCode",{parentName:"p"},"KeeperState.Disconnected"),' is received. If the timer expires before the connection is repaired, Curator changes its state to LOST and injects a session end into the managed ZooKeeper client connection. The duration of the timer is set to the value of the "negotiated session timeout" by calling ',(0,r.kt)("inlineCode",{parentName:"p"},"ZooKeeper#getSessionTimeout()"),"."),(0,r.kt)("p",null,"The astute reader will realize that setting the timer to the full value of the session timeout may not be the correct value. This is due to the fact that the server closes the connection when 2/3 of a session have already elapsed. Thus, the server may close a session well before Curator's timer elapses. This is further complicated by the fact that the client has no way of knowing why the connection was closed. There are at least three possible reasons for a client connection to close:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The server has not received a heartbeat within 2/3 of a session"),(0,r.kt)("li",{parentName:"ol"},"The server crashed"),(0,r.kt)("li",{parentName:"ol"},"Some kind of general TCP error which causes a connection to fail")),(0,r.kt)("p",null,"In situation 1, the correct value for Curator's timer is 1/3 of a session - i.e. Curator should switch to LOST if the connection is not repaired within 1/3 of a session as 2/3 of the session has already lapsed from the server's point of view. In situations 2 and 3 however, Curator's timer should be the full value of the session (possibly plus some \"slop\" value). In truth, there is no way to completely emulate in the client the session timing as managed by the ZooKeeper server. So, again, our recommendation is to treat SUSPENDED as complete connection loss."),(0,r.kt)("h2",{id:"recommendations"},"Recommendations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Treat SUSPENDED as a complete connection loss. This will cause more instability in your application but is the safest option"),(0,r.kt)("li",{parentName:"ul"},"Use Curator's default session simulation which uses an internal timer of 100% of the negotiated session timeout - this is the default in Curator since 3.x"),(0,r.kt)("li",{parentName:"ul"},"If your application demands it, you can instruct Curator's session timer to use 33% of the session timeout (see below). Note: this assumes that connection losses are the result of missed heartbeats with the server which isn't always the case.")),(0,r.kt)("h2",{id:"changing-curators-session-timer"},"Changing Curator's Session Timer"),(0,r.kt)("p",null,"Note: due to ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/CURATOR-460"},"CURATOR-460")," changing the session timer has not worked. This will be fixed when CURATOR-460 is released."),(0,r.kt)("p",null,"Curator's session timer is handled via the ConnectionHandlingPolicy. You can substitute a 33% session timer using the ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardConnectionHandlingPolicy")," when creating Curator instances via the Factory. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"CuratorFramework client = CuratorFrameworkFactory.builder()\n    .connectionHandlingPolicy(new StandardConnectionHandlingPolicy(33))\n        ...other methods...\n    .build();\n")))}p.isMDXComponent=!0}}]);
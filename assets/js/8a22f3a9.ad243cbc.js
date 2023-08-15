"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[6367],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Error Handling",s={unversionedId:"errors",id:"errors",title:"Error Handling",description:"Background",source:"@site/docs/errors.md",sourceDirName:".",slug:"/errors",permalink:"/docs/errors",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/errors.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1692090157,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Client",permalink:"/docs/client"},next:{title:"Logging and Tracing",permalink:"/docs/logging"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Connection Guarantees",id:"connection-guarantees",level:2},{value:"Notifications",id:"notifications",level:2},{value:"Error Policy",id:"error-policy",level:2},{value:"Recipes",id:"recipes",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error Handling"),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"ZooKeeper is a very low level system that requires users to do a lot of housekeeping. See:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER/FAQ"},"https://cwiki.apache.org/confluence/display/ZOOKEEPER/FAQ"))),(0,a.kt)("p",null,"The Curator ",(0,a.kt)("a",{parentName:"p",href:"/docs/framework"},"Framework")," is designed to hide as much of the details/tedium of this housekeeping as is possible."),(0,a.kt)("h2",{id:"connection-guarantees"},"Connection Guarantees"),(0,a.kt)("p",null,"The Curator Framework constantly monitors the connection to the ZooKeeper ensemble. Further every operation is wrapped in a retry mechanism. Thus, the following guarantees can be made:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every Curator operation properly waits until the ZooKeeper connection is established"),(0,a.kt)("li",{parentName:"ul"},"Every Curator Framework operation (create, getData, etc.) is guaranteed to manage connection loss and/or session expiration per the currently set retry policy"),(0,a.kt)("li",{parentName:"ul"},"If the connection is temporarily lost, Curator will attempt to retry the operation until it succeeds per the currently set retry policy"),(0,a.kt)("li",{parentName:"ul"},"All Curator recipes attempt to deal with connection issues in an appropriate way")),(0,a.kt)("h2",{id:"notifications"},"Notifications"),(0,a.kt)("p",null,"Curator exposes several listenable interfaces for clients to monitor the state of the ZooKeeper connection."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConnectionStateListener")," is called when there are connection disruptions. Clients can monitor these changes and take appropriate action. These are the possible state changes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"State Change"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CONNECTED"),(0,a.kt)("td",{parentName:"tr",align:null},"Sent for the first successful connection to the server. NOTE: You will only get one of these messages for any CuratorFramework instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"READONLY"),(0,a.kt)("td",{parentName:"tr",align:null},"The connection has gone into read-only mode. This can only happen if you pass true for CuratorFrameworkFactory.Builder.canBeReadOnly(). See the ZooKeeper doc regarding read only connections: ",(0,a.kt)("a",{parentName:"td",href:"https://cwiki.apache.org/confluence/display/HADOOP2/ZooKeeper+GSoCReadOnlyMode"},"https://cwiki.apache.org/confluence/display/HADOOP2/ZooKeeper+GSoCReadOnlyMode"),". The connection will remain in read only mode until another state change is sent.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SUSPENDED"),(0,a.kt)("td",{parentName:"tr",align:null},"There has been a loss of connection. Leaders, locks, etc. should suspend until the connection is re-established.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RECONNECTED"),(0,a.kt)("td",{parentName:"tr",align:null},"A suspended or lost connection has been re-established.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LOST"),(0,a.kt)("td",{parentName:"tr",align:null},"Curator will set the LOST state when it believes that the ZooKeeper session has expired. ZooKeeper connections have a session. When the session expires, clients must take appropriate action. In Curator, this is complicated by the fact that Curator internally manages the ZooKeeper connection. Curator will set the LOST state when any of the following occurs: a) ZooKeeper returns a Watcher.Event.KeeperState.Expired or KeeperException.Code.SESSIONEXPIRED; b) Curator closes the internally managed ZooKeeper instance; c) The session timeout elapses during a network partition. It is possible to get a RECONNECTED state after this but you should still consider any locks, etc. as dirty/unstable. NOTE: The meaning of LOST has changed since Curator 3.0.0. Prior to 3.0.0 LOST only meant that the retry policy had expired.")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UnhandledErrorListener")," is called when a background task, etc. catches an exception. In general, Curator users shouldn't care about these as they are logged. However, you can listen for them if you choose."),(0,a.kt)("h2",{id:"error-policy"},"Error Policy"),(0,a.kt)("p",null,"Curator has a pluggable error policy. The default policy takes the conservative approach of treating connection states SUSPENDED and LOST the same way. i.e. when a recipe sees the state change to SUSPENDED it will assume that the ZooKeeper session is lost and will clean up any watchers, nodes, etc. You can choose, however, a more aggressive approach by setting the error policy to only treat LOST (i.e. true session loss) as an error state. Do this in the CuratorFrameworkFactory via: ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionStateErrorPolicy(new SessionConnectionStateErrorPolicy())"),"."),(0,a.kt)("h2",{id:"recipes"},"Recipes"),(0,a.kt)("p",null,"In general, the recipes attempt to deal with errors and connection issues. See the doc for each recipe for details on how it deals with errors."))}d.isMDXComponent=!0}}]);
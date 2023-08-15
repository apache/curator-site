"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[6158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Client",i={unversionedId:"client",id:"client",title:"Client",description:"IMPORTANT NOTE",source:"@site/docs/client.md",sourceDirName:".",slug:"/client",permalink:"/docs/client",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/client.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1692090157,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Utilities",permalink:"/docs/utilities"},next:{title:"Error Handling",permalink:"/docs/errors"}},p={},c=[{value:"IMPORTANT NOTE",id:"important-note",level:2},{value:"Background",id:"background",level:2},{value:"Method Documentation",id:"method-documentation",level:2},{value:"Retry Loop",id:"retry-loop",level:2},{value:"Retry Policies",id:"retry-policies",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("h2",{id:"important-note"},"IMPORTANT NOTE"),(0,a.kt)("p",null,"The Curator Client is a low-level API. It is strongly recommended that you use the Curator ",(0,a.kt)("a",{parentName:"p",href:"/docs/framework"},"Framework")," instead of directly using CuratorZookeeperClient."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"CuratorZookeeperClient is a wrapper around ZooKeeper's Java client that makes client access to ZooKeeper much simpler and less error prone. It provides the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Continuous connection management - ZooKeeper has many caveats regarding connection management (see the ZooKeeper FAQ for details). CuratorZookeeperClient takes care of most of them automatically."),(0,a.kt)("li",{parentName:"ul"},"Operation retry utilities - a method for retrying operations is provided"),(0,a.kt)("li",{parentName:"ul"},"Test ZooKeeper server - an in-process, self-contained ZooKeeper test server is provided that can be used for test cases and experimentation")),(0,a.kt)("h2",{id:"method-documentation"},"Method Documentation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Constructor"),(0,a.kt)("td",{parentName:"tr",align:null},"Create a connection to a given ZooKeeper cluster. You can pass in an optional watcher. You must provide a Retry Policy.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getZooKeeper()"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the managed ZooKeeper instance. ",(0,a.kt)("strong",{parentName:"td"},"IMPORTANT NOTES"),": a) It takes time for a connection to complete, you should validate that the connection is complete before using other methods. b) The managed ZooKeeper instance can change due to certain events. Do not hold on to the instance for long periods. Always get a fresh reference from getZooKeeper().")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isConnected()"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns true if the ZooKeeper client is currently connected (this can always change due to errors)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blockUntilConnectedOrTimedOut()"),(0,a.kt)("td",{parentName:"tr",align:null},"A convenience method that blocks until the initial connection is successful or times out")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"close()"),(0,a.kt)("td",{parentName:"tr",align:null},"Close the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setRetryPolicy()"),(0,a.kt)("td",{parentName:"tr",align:null},"Change the retry policy")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"newRetryLoop()"),(0,a.kt)("td",{parentName:"tr",align:null},"Allocate a new Retry Loop - see details below")))),(0,a.kt)("h2",{id:"retry-loop"},"Retry Loop"),(0,a.kt)("p",null,"For a variety of reasons, operations on a ZooKeeper cluster can fail. Best practices dictate that these operations should be retried. The Retry Loop mechanism provides the means to do this. ",(0,a.kt)("strong",{parentName:"p"},"Every operation should be wrapped in a retry loop"),". Here's the canonical usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"RetryLoop retryLoop = client.newRetryLoop();\nwhile (retryLoop.shouldContinue()) {\n   try {\n       // perform your work\n       ...\n       // it's important to re-get the ZK instance as there may have been an error and the instance was re-created\n       ZooKeeper zk = client.getZookeeper();\n       retryLoop.markComplete();\n   } catch (Exception e) {\n       retryLoop.takeException(e);\n   }\n}\n")),(0,a.kt)("p",null,"The Retry Loop maintains a count of retries and determines if a given error is retry-able. If an operation is a candidate for retrying, the Retry Policy is invoked to determine if the retry should proceed."),(0,a.kt)("p",null,"As a convenience, RetryLoop has a static method that takes a Callable to perform a complete retry loop on. E.g.,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"RetryLoop.callWithRetry(client, new Callable<Void>() {\n      @Override\n      public Void call() throws Exception {\n          // do your work here - it will get retried if needed\n          return null;\n      }\n});\n")),(0,a.kt)("h2",{id:"retry-policies"},"Retry Policies"),(0,a.kt)("p",null,"A retry policy is a mechanism to alter retry behavior. It is abstracted by the RetryPolicy interface which has one method: ",(0,a.kt)("inlineCode",{parentName:"p"},"public boolean allowRetry(int retryCount, long elapsedTimeMs);"),". Before a retry is attempted, allowRetry() is called with the current retry count and the elapsed time of the operation. If the policy allows it, the retry is attempted. If not, an exception is thrown."),(0,a.kt)("p",null,"Several retry policy implementations are provided (in the package org.apache.curator.retry):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Policy Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ExponentialBackoffRetry"),(0,a.kt)("td",{parentName:"tr",align:null},"Retry policy that retries a set number of times with increasing sleep time between retries")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RetryNTimes"),(0,a.kt)("td",{parentName:"tr",align:null},"Retry policy that retries a max number of times")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RetryOneTime"),(0,a.kt)("td",{parentName:"tr",align:null},"A retry policy that retries only once")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RetryUntilElapsed"),(0,a.kt)("td",{parentName:"tr",align:null},"A retry policy that retries until a given amount of time elapses")))))}u.isMDXComponent=!0}}]);
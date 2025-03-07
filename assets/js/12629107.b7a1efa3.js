"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[2575],{3881:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>c});var n=a(8101);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},6977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"recipes-leader-latch","title":"Recipe: Leader Latch","description":"Description","source":"@site/docs/recipes-leader-latch.md","sourceDirName":".","slug":"/recipes-leader-latch","permalink":"/docs/recipes-leader-latch","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/curator-site/tree/main/docs/recipes-leader-latch.md","tags":[],"version":"current","lastUpdatedBy":"tison","lastUpdatedAt":1741315398000,"frontMatter":{"sidebar_label":"Leader Latch"},"sidebar":"docs","previous":{"title":"Recipes","permalink":"/docs/recipes"},"next":{"title":"Leader Election","permalink":"/docs/recipes-leader-election"}}');var r=a(5105),i=a(3881);const s={sidebar_label:"Leader Latch"},c="Recipe: Leader Latch",l={},o=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a LeaderLatch",id:"creating-a-leaderlatch",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"recipe-leader-latch",children:"Recipe: Leader Latch"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:'In distributed computing, leader election is the process of designating a single process as the organizer of some task distributed among several computers (nodes). Before the task is begun, all network nodes are unaware which node will serve as the "leader", or coordinator, of the task. After a leader election algorithm has been run, however, each node throughout the network recognizes a particular, unique node as the task leader.'}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Curator has two leader election recipes. Which one to use depends on your requirements."})}),"\n",(0,r.jsx)(t.h2,{id:"participating-classes",children:"Participating Classes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"LeaderLatch"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-leaderlatch",children:"Creating a LeaderLatch"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// Parameters:\n// client - the client\n// latchPath - the path for this leadership group\npublic LeaderLatch(CuratorFramework client, String latchPath);\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// Parameters:\n// client - the client\n// latchPath - the path for this leadership group\n// id - participant ID\npublic LeaderLatch(CuratorFramework client, String latchPath, String id);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,r.jsx)(t.p,{children:"LeaderLatches must be started:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"leaderLatch.start();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Once started, the LeaderLatch will negotiate with any other LeaderLatch participants that use the same latch path and randomly choose one of them to be the leader. At any time, you can determine if a given instance is the leader by calling:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// Return true if leadership is currently held by this instance\npublic boolean hasLeadership();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Similar to the JDK's CountDownLatch, LeaderLatch has methods that block until leadership is acquired:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// Causes the current thread to wait until this instance acquires leadership\n// unless the thread is interrupted or closed.\npublic void await() throws InterruptedException, EOFException;\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// Causes the current thread to wait until this instance acquires leadership unless\n// the thread is interrupted, the specified waiting time elapses or the instance is closed.\n\n// Parameters:\n// timeout - the maximum time to wait\n// unit - the time unit of the timeout argument\n// Returns:\n// true if the count reached zero and false if the waiting time elapsed before the count\n// reached zero or the instances was closed\npublic boolean await(long timeout, TimeUnit unit) throws InterruptedException\n"})}),"\n",(0,r.jsx)(t.p,{children:"When you are through with the LeaderLatch instance, you must call close. This removes the instance from the leader election and releases leadership if the instance has it. Once leadership is released, another participating instance (if any) will be chosen as leader."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"leaderLatch.close();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsx)(t.p,{children:"LeaderLatch instances add a ConnectionStateListener to watch for connection problems. If SUSPENDED or LOST is reported, the LeaderLatch that is the leader will report that it is no longer the leader (i.e. there will not be a leader until the connection is re-established). If a LOST connection is RECONNECTED, the LeaderLatch will delete its previous ZNode and create a new one."}),"\n",(0,r.jsx)(t.p,{children:"Users of LeaderLatch must take account that connection issues can cause leadership to be lost. i.e. hasLeadership() returns true but some time later the connection is SUSPENDED or LOST. At that point hasLeadership() will return false. It is highly recommended that LeaderLatch users register a ConnectionStateListener."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);
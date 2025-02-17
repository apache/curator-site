"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[2150],{6413:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(8101);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}},6663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-note-01","title":"Tech Note 1","description":"ZooKeeper\'s watches are single threaded.","source":"@site/docs/tech-note-01.md","sourceDirName":".","slug":"/tech-note-01","permalink":"/docs/tech-note-01","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/curator-site/tree/main/docs/tech-note-01.md","tags":[],"version":"current","lastUpdatedBy":"tison","lastUpdatedAt":1739752798000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Tech Notes","permalink":"/docs/tech-notes"},"next":{"title":"Tech Note 2","permalink":"/docs/tech-note-02"}}');var s=n(5105),o=n(6413);const c={},a="Tech Note 1",i={},h=[{value:"Details",id:"details",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"tech-note-1",children:"Tech Note 1"})}),"\n",(0,s.jsx)(t.p,{children:"ZooKeeper's watches are single threaded."}),"\n",(0,s.jsx)(t.h2,{id:"details",children:"Details"}),"\n",(0,s.jsxs)(t.p,{children:["When your watcher is called, it should return as quickly as possible. All ZooKeeper watchers are serialized - processed by a single thread. Thus, ",(0,s.jsx)(t.strong,{children:"no other watchers can be processed while your watcher is running"}),". For example, a Curator user had a watcher handler something like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"InterProcessMutex lock = ...;\n\npublic void process(WatchedEvent event) {\n    lock.acquire();\n    // ...\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.strong,{children:"cannot work"}),". Curator's InterProcessMutex relies on ZooKeeper watchers getting notified. The code above, however, is holding on to the ZooKeeper watcher processing thread. The way to fix this is to run the code that needs a lock in a separate thread. e.g."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"InterProcessMutex lock = ...;\nExecutorService service = ...;\n\npublic void process(WatchedEvent event) {\n    service.submit(new Callable<Void>() {\n        @Override\n        public Void call() throws Exception {\n            lock.acquire();\n            // ...\n        }\n    });\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);
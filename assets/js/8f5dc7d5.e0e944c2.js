"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[3509],{2373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"tech-note-02","title":"Tech Note 2","description":"InterProcessMutex acquire() can be used to return immediately if lock can\'t be acquired.","source":"@site/docs/tech-note-02.md","sourceDirName":".","slug":"/tech-note-02","permalink":"/docs/tech-note-02","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/curator-site/tree/main/docs/tech-note-02.md","tags":[],"version":"current","lastUpdatedBy":"tison","lastUpdatedAt":1737531742000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Tech Note 1","permalink":"/docs/tech-note-01"},"next":{"title":"Tech Note 3","permalink":"/docs/tech-note-03"}}');var o=n(5105),r=n(6755);const i={},s="Tech Note 2",a={},d=[{value:"Details",id:"details",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tech-note-2",children:"Tech Note 2"})}),"\n",(0,o.jsx)(t.p,{children:"InterProcessMutex acquire() can be used to return immediately if lock can't be acquired."}),"\n",(0,o.jsx)(t.h2,{id:"details",children:"Details"}),"\n",(0,o.jsx)(t.p,{children:"It's not obvious from the docs, but calling InterProcessMutex.acquire(0, unit) will return immediately (i.e. without any waiting) if the lock cannot be acquired."}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"InterProcessMutex lock = ...;\nboolean didLock = lock.acquire(0, TimeUnit.any);\nif (!didLock) {\n    // comes back immediately\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6755:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var c=n(8101);const o={},r=c.createContext(o);function i(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);
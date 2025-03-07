"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[181],{3881:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(8101);const o={},c=n.createContext(o);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(c.Provider,{value:t},e.children)}},9143:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-note-09","title":"Tech Note 9","description":"NOTE: PathChildrenCache now uses getData() instead of checkExists().","source":"@site/docs/tech-note-09.md","sourceDirName":".","slug":"/tech-note-09","permalink":"/docs/tech-note-09","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/curator-site/tree/main/docs/tech-note-09.md","tags":[],"version":"current","lastUpdatedBy":"tison","lastUpdatedAt":1741315398000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Tech Note 8","permalink":"/docs/tech-note-08"},"next":{"title":"Tech Note 10","permalink":"/docs/tech-note-10"}}');var o=s(5105),c=s(3881);const r={},a="Tech Note 9",i={},h=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tech-note-9",children:"Tech Note 9"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"NOTE: PathChildrenCache now uses getData() instead of checkExists()."})}),"\n",(0,o.jsx)(t.p,{children:'Curator 2.5.0 changes internal behavior for PathChildrenCache. Now, regardless of whether "cacheData" is set to true, PathChildrenCache will always call getData on the nodes.'}),"\n",(0,o.jsxs)(t.p,{children:["This is due to ",(0,o.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/CURATOR-107",children:"CURATOR-107"}),". It's been shown that using ",(0,o.jsx)(t.code,{children:"checkExists()"})," with watchers can cause a type of memory leak as watchers will be left dangling on non-existent ZNodes. Calling ",(0,o.jsx)(t.code,{children:"getData()"})," works around this issue."]}),"\n",(0,o.jsxs)(t.p,{children:["However, it's possible that this change will affect performance. If you would like the old behavior of using ",(0,o.jsx)(t.code,{children:"checkExists()"}),", you can set a system property: add ",(0,o.jsx)(t.code,{children:"-Dcurator-path-children-cache-use-exists=true"})," to your command line or call ",(0,o.jsx)(t.code,{children:'System.setProperty("curator-path-children-cache-use-exists", "true")'}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);
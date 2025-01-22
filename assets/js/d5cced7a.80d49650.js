"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[8763],{6050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>h,default:()=>o,frontMatter:()=>c,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"recipes-path-cache","title":"Recipe: Path Cache","description":"Description","source":"@site/docs/recipes-path-cache.md","sourceDirName":".","slug":"/recipes-path-cache","permalink":"/docs/recipes-path-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/curator-site/tree/main/docs/recipes-path-cache.md","tags":[],"version":"current","lastUpdatedBy":"tison","lastUpdatedAt":1737531742000,"frontMatter":{"sidebar_label":"Path Cache"},"sidebar":"docs","previous":{"title":"Curator Cache","permalink":"/docs/recipes-curator-cache"},"next":{"title":"Node Cache","permalink":"/docs/recipes-node-cache"}}');var i=t(5105),r=t(6755);const c={sidebar_label:"Path Cache"},h="Recipe: Path Cache",s={},l=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a PathChildrenCache",id:"creating-a-pathchildrencache",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"recipe-path-cache",children:"Recipe: Path Cache"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A Path Cache is used to watch a ZNode. Whenever a child is added, updated or removed, the Path Cache will change its state to contain the current set of children, the children's data and the children's state."}),"\n",(0,i.jsx)(n.h2,{id:"participating-classes",children:"Participating Classes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PathChildrenCache"}),"\n",(0,i.jsx)(n.li,{children:"PathChildrenCacheEvent"}),"\n",(0,i.jsx)(n.li,{children:"PathChildrenCacheListener"}),"\n",(0,i.jsx)(n.li,{children:"ChildData"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-pathchildrencache",children:"Creating a PathChildrenCache"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// Parameters:\n// client - the client\n// path - path to watch\n// cacheData - if true, node contents are cached in addition to the stat\npublic PathChildrenCache(CuratorFramework client, String path, boolean cacheData);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The cache must be started by calling ",(0,i.jsx)(n.code,{children:"start()"}),". Call ",(0,i.jsx)(n.code,{children:"close()"})," when you are through with the cache."]}),"\n",(0,i.jsxs)(n.p,{children:["There are two versions of ",(0,i.jsx)(n.code,{children:"start()"}),". The no-arg version gives default behavior. The other version takes an enumeration that allows you to control how the initial cache is warmed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public enum StartMode {\n    /**\n     * cache will _not_ be primed. i.e. it will start empty and you will receive\n     * events for all nodes added, etc.\n     */\n    NORMAL,\n\n    /**\n     * rebuild() will be called before this method returns in\n     * order to get an initial view of the node.\n     */\n    BUILD_INITIAL_CACHE,\n\n    /**\n     * After cache is primed with initial values (in the background) a\n     * PathChildrenCacheEvent.Type.INITIALIZED event will be posted\n     */\n    POST_INITIALIZED_EVENT\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At any time, call ",(0,i.jsx)(n.code,{children:"getCurrentData()"})," to get the current state of the cache. You can also register to be notified when a change occurs by calling ",(0,i.jsx)(n.code,{children:"getListenable()"})," and then:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// Add a change listener\n// Parameters:\n// listener - the listener\npublic void addListener(PathChildrenCacheListener listener)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsxs)(n.p,{children:["PathChildrenCache instances internally monitor a ",(0,i.jsx)(n.code,{children:"ConnectionStateListener"}),". If the connection state changes, the cache is reset (the ",(0,i.jsx)(n.code,{children:"PathChildrenCacheListener"})," will receive a RESET)."]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6755:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>h});var a=t(8101);const i={},r=a.createContext(i);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
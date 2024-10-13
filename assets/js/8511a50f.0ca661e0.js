"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[5431],{9613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4918:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7263),a=(t(9496),t(9613));const o={sidebar_label:"Group Member"},i="Recipe: Group Member",l={unversionedId:"recipes-group-member",id:"recipes-group-member",title:"Recipe: Group Member",description:"Description",source:"@site/docs/recipes-group-member.md",sourceDirName:".",slug:"/recipes-group-member",permalink:"/docs/recipes-group-member",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/recipes-group-member.md",tags:[],version:"current",lastUpdatedBy:"Kezhu Wang",lastUpdatedAt:1728813389,formattedLastUpdatedAt:"Oct 13, 2024",frontMatter:{sidebar_label:"Group Member"},sidebar:"docs",previous:{title:"Persistent TTL Node",permalink:"/docs/recipes-persistent-ttl-node"},next:{title:"Distributed Queue",permalink:"/docs/recipes-distributed-queue"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Participating Classes",id:"participating-classes",level:2},{value:"Creating a GroupMember",id:"creating-a-groupmember",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Error Handling",id:"error-handling",level:2}],c={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-group-member"},"Recipe: Group Member"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Group membership management. Adds this instance into a group and keeps a cache of members in the group."),(0,a.kt)("h2",{id:"participating-classes"},"Participating Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GroupMember"),(0,a.kt)("li",{parentName:"ul"},"PersistentNode"),(0,a.kt)("li",{parentName:"ul"},"PathChildrenCache")),(0,a.kt)("h2",{id:"creating-a-groupmember"},"Creating a GroupMember"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Parameters:\n// client - client instance\n// membershipPath - the path to use for membership\n// thisId - ID of this group member. MUST be unique for the group\n// payload - the payload to write in our member node\npublic GroupMember(\n    CuratorFramework client,\n    String membershipPath,\n    String thisId,\n    byte[] payload\n);\n")),(0,a.kt)("h2",{id:"general-usage"},"General Usage"),(0,a.kt)("p",null,"GroupMember must be started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"group.start();\n")),(0,a.kt)("p",null,"When you are through with the GroupMember instance, you should call close:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"group.close();\n")),(0,a.kt)("p",null,"... this will remove the instance from the group."),(0,a.kt)("p",null,"You can get a current view of the members by calling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"group.getCurrentMembers();\n")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"GroupMember instances internally handle all error states recreating the node as necessary."))}m.isMDXComponent=!0}}]);
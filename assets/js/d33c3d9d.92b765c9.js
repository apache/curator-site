"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[9513],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(f,l(l({ref:t},c),{},{components:r})):o.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>E,default:()=>j,frontMatter:()=>C,metadata:()=>Z,toc:()=>N});var o=r(7263),a=r(9496),n=r(9613),l=r(5924),u=r(984),i=r(3442),s=r(4009),c=r(6660),p=r(9801);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:a}}=e;return{value:t,label:r,attributes:o,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const o=(0,i.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,n=m(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[i,s]=b({queryString:r,groupId:o}),[c,d]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,p.Nk)(r);return[o,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:o}),y=(()=>{const e=i??c;return f({value:e,tabValues:n})?e:null})();(0,a.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),d(e)}),[s,d,n]),tabValues:n}}var h=r(4574);const g={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),o=s[r].value;o!==n&&(p(t),i(o))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",g.tabItem,u?.className,{"tabs__item--active":n===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:o}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function x(e){const t=y(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(v,(0,o.Z)({},e,t)),a.createElement(k,(0,o.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(x,(0,o.Z)({key:String(t)},e))}const I={tabItem:"tabItem_IfE0"};function T(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(I.tabItem,o),hidden:r},t)}const C={sidebar_label:"ZooKeeper 3.4.x"},E="ZooKeeper Version 3.4.x Compatibility",Z={unversionedId:"zk-compatibility-34",id:"zk-compatibility-34",title:"ZooKeeper Version 3.4.x Compatibility",description:"ZooKeeper 3.4.x is now at end-of-life. Consequently, the latest versions of Curator have removed support for it. If you wish to use Curator with ZooKeeper 3.4.x you should pin to version 4.2.x of Curator. Curator 4.2.x supports ZooKeeper 3.4.x ensembles in a soft-compatibility mode. To use this mode you must exclude ZooKeeper when adding Curator to your dependency management tool.",source:"@site/docs/zk-compatibility-34.md",sourceDirName:".",slug:"/zk-compatibility-34",permalink:"/docs/zk-compatibility-34",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/zk-compatibility-34.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1718429330,formattedLastUpdatedAt:"Jun 15, 2024",frontMatter:{sidebar_label:"ZooKeeper 3.4.x"},sidebar:"docs",previous:{title:"Tech Note 15",permalink:"/docs/tech-note-15"},next:{title:"Breaking Changes",permalink:"/docs/breaking-changes"}},O={},N=[{value:"Testing With ZooKeeper 3.4.x",id:"testing-with-zookeeper-34x",level:2}],V={toc:N},K="wrapper";function j(e){let{components:t,...r}=e;return(0,n.kt)(K,(0,o.Z)({},V,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zookeeper-version-34x-compatibility"},"ZooKeeper Version 3.4.x Compatibility"),(0,n.kt)("p",null,"ZooKeeper 3.4.x is now at end-of-life. Consequently, the latest versions of Curator have removed support for it. If you wish to use Curator with ZooKeeper 3.4.x you should pin to version 4.2.x of Curator. Curator 4.2.x supports ZooKeeper 3.4.x ensembles in a soft-compatibility mode. To use this mode you must exclude ZooKeeper when adding Curator to your dependency management tool."),(0,n.kt)(w,{mdxType:"Tabs"},(0,n.kt)(T,{value:"maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.curator</groupId>\n    <artifactId>curator-recipes</artifactId>\n    <version>4.2.0</version>\n    <exclusions>\n        <exclusion>\n            <groupId>org.apache.zookeeper</groupId>\n            <artifactId>zookeeper</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n"))),(0,n.kt)(T,{value:"gradle",label:"Gradle",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"compile('org.apache.curator:curator-recipes:$curatorVersion') {\n  exclude group: 'org.apache.zookeeper', module: 'zookeeper'\n}\n")))),(0,n.kt)("p",null,"You must add a dependency on ZooKeeper 3.4.x also."),(0,n.kt)("p",null,'Curator will detect which ZooKeeper library is in use and automatically set ZooKeeper 3.4 compatibility mode as needed. In this mode, all features not supported by 3.4 are disabled. It is up to your application code to "do the right thing" and not use these features. Use the ',(0,n.kt)("inlineCode",{parentName:"p"},"isZk34CompatibilityMode()")," method to determine which mode Curator is using at runtime."),(0,n.kt)("h2",{id:"testing-with-zookeeper-34x"},"Testing With ZooKeeper 3.4.x"),(0,n.kt)("p",null,"If you wish to use Curator's ",(0,n.kt)("inlineCode",{parentName:"p"},"TestingServer")," with ZooKeeper 3.4.x you must use the older version of it (in addition to the instructions above):"),(0,n.kt)(w,{mdxType:"Tabs"},(0,n.kt)(T,{value:"maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.curator</groupId>\n    <artifactId>curator-test</artifactId>\n    <version>2.12.0</version>\n    <exclusions>\n        <exclusion>\n            <groupId>org.apache.zookeeper</groupId>\n            <artifactId>zookeeper</artifactId>\n        </exclusion>\n    </exclusions>\n    <scope>test</scope>\n</dependency>\n"))),(0,n.kt)(T,{value:"gradle",label:"Gradle",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"testCompile('org.apache.curator:curator-test:2.12.0') {\n  exclude group: 'org.apache.zookeeper', module: 'zookeeper'\n}\n")))))}j.isMDXComponent=!0}}]);
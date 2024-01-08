"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[6535],{9613:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(9496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),s=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=s(a),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,l(l({ref:e},c),{},{components:a})):r.createElement(h,l({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4586:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7263),n=(a(9496),a(9613));const o={sidebar_label:"About"},l="Welcome to Apache Curator",i={unversionedId:"about",id:"about",title:"Welcome to Apache Curator",description:"What is Curator?",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/about.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1704703627,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{sidebar_label:"About"},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/getting-started"}},u={},s=[{value:"What is Curator?",id:"what-is-curator",level:2},{value:"Download",id:"download",level:2},{value:"Important Compatibility Updates",id:"important-compatibility-updates",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Stack Overflow",id:"stack-overflow",level:2},{value:"Maven / Artifacts",id:"maven--artifacts",level:2}],c={toc:s},p="wrapper";function d(t){let{components:e,...o}=t;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-apache-curator"},"Welcome to Apache Curator"),(0,n.kt)("h2",{id:"what-is-curator"},"What is Curator?"),(0,n.kt)("p",null,"Curator is a keeper or custodian of a museum or other collection - A ZooKeeper Keeper."),(0,n.kt)("p",null,"Apache Curator is a Java/JVM client library for ",(0,n.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/"},"Apache ZooKeeper"),", a distributed coordination service. It includes a high level API framework and utilities to make using Apache ZooKeeper much easier and more reliable. It also includes recipes for common use cases and extensions such as service discovery and a Java 8 asynchronous DSL."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Patrick Hunt&#39;s Quote",src:a(8503).Z,width:"537",height:"87"})),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/download"},"Download Apache Curator")," from the release page."),(0,n.kt)("h2",{id:"important-compatibility-updates"},"Important Compatibility Updates"),(0,n.kt)("p",null,"Version 5.0 of Curator has a few breaking changes. Please read the details here: ",(0,n.kt)("a",{parentName:"p",href:"/docs/breaking-changes"},"Curator 5.0 Breaking Changes"),"."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"See the page for quick start: ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started"),"."),(0,n.kt)("h2",{id:"stack-overflow"},"Stack Overflow"),(0,n.kt)("p",null,"There's lots of great help on Stack Overflow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/apache-curator"},'Main "Apache Curator" tag'))),(0,n.kt)("h2",{id:"maven--artifacts"},"Maven / Artifacts"),(0,n.kt)("p",null,"Curator binaries are published to Maven Central. Curator consists of several artifacts. Which artifacts to use depends on your needs. For most users, the only artifact you need is curator-recipes."),(0,n.kt)("p",null,"For OSGi users, there's another set of artifacts of classifier osgi available in Maven Central. These artifacts are not shaded, thus no package relocation is performed inside, so hopefully they could start as bundles when their dependencies are fulfilled by dedicated bundles, e.g. guava."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"GroupID/Org"),(0,n.kt)("th",{parentName:"tr",align:null},"ArtifactID/Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-recipes"),(0,n.kt)("td",{parentName:"tr",align:null},"All of the recipes. Note: this artifact has dependencies on client and framework and, so, Maven (or whatever tool you're using) should pull those in automatically.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-async"),(0,n.kt)("td",{parentName:"tr",align:null},"Asynchronous DSL with O/R modeling, migrations and many other features.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-framework"),(0,n.kt)("td",{parentName:"tr",align:null},"The Curator Framework high level API. This is built on top of the client and  should pull it in automatically.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-client"),(0,n.kt)("td",{parentName:"tr",align:null},"The Curator Client - replacement for the ZooKeeper class in the ZK distribution.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-test"),(0,n.kt)("td",{parentName:"tr",align:null},"Contains the TestingServer, the TestingCluster and a few other tools useful for  testing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-examples"),(0,n.kt)("td",{parentName:"tr",align:null},"Example usages of various Curator features.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-x-discovery"),(0,n.kt)("td",{parentName:"tr",align:null},"A Service Discovery implementation built on the Curator Framework.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"org.apache.curator"),(0,n.kt)("td",{parentName:"tr",align:null},"curator-x-discovery-server"),(0,n.kt)("td",{parentName:"tr",align:null},"A RESTful server that can be used with Curator Discovery.")))))}d.isMDXComponent=!0},8503:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/ph-quote-b60cff879e3f037f4310e265163de9b2.png"}}]);
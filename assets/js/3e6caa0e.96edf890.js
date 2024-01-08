"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[6782],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),s=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(u.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(t),h=n,m=l["".concat(u,".").concat(h)]||l[h]||d[h]||o;return t?a.createElement(m,c(c({ref:r},p),{},{components:t})):a.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6456:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7263),n=(t(9496),t(9613));const o={},c="Tech Note 15",i={unversionedId:"tech-note-15",id:"tech-note-15",title:"Tech Note 15",description:"API Changes in Curator 5.0.0 and how to workaround them if you need binary compatibility.",source:"@site/docs/tech-note-15.md",sourceDirName:".",slug:"/tech-note-15",permalink:"/docs/tech-note-15",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/tech-note-15.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1704703627,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Tech Note 14",permalink:"/docs/tech-note-14"},next:{title:"ZooKeeper 3.4.x",permalink:"/docs/zk-compatibility-34"}},u={},s=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Maven Snippet",id:"maven-snippet",level:2}],p={toc:s},l="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(l,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tech-note-15"},"Tech Note 15"),(0,n.kt)("p",null,"API Changes in Curator 5.0.0 and how to workaround them if you need binary compatibility."),(0,n.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,n.kt)("p",null,"Apache Curator 5.0.0 includes a number of breaking changes that require recompilation. If you are in a situation where you want to use Curator 5.0.0 but must include a third party dependency that was compiled with an earlier version of Curator you can run into the following exception:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"java.lang.NoSuchMethodError: org.apache.curator.framework.recipes.cache.PathChildrenCache.getListenable()Lorg/apache/curator/framework/listen/ListenerContainer;\nat binary.Curator50Test.run(Curator50Test.java:26)\nat test.Test.main(Test.java:9)\nat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\nat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\nat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\nat java.lang.reflect.Method.invoke(Method.java:498)\nat org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)\nat java.lang.Thread.run(Thread.java:748)\n")),(0,n.kt)("p",null,"This occurs because the return value of PathChildrenCache.getListenable() has changed in Curator 5.0.0 (note: the full list of breaking changes can be found ",(0,n.kt)("a",{parentName:"p",href:"/docs/breaking-changes"},"here"),"). You can work around this problem by creating a mini-JAR containing older versions of the changed Curator classes and making sure that that JAR is earlier in your classpath than the Curator 5.0.0 JARs. To create this JAR in Maven see below. If the community needs it, the Apache Curator team will consider publishing a mini-jar in the future. Please engage us via our mailing lists or JIRA."),(0,n.kt)("h2",{id:"maven-snippet"},"Maven Snippet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n<groupId>org.apache.maven.plugins</groupId>\n<artifactId>maven-dependency-plugin</artifactId>\n<version>3.1.2</version>\n<executions>\n    <execution>\n        <id>unpack</id>\n        <phase>compile</phase>\n        <goals>\n            <goal>unpack</goal>\n        </goals>\n        <configuration>\n            <artifactItems>\n                <artifactItem>\n                    <groupId>org.apache.curator</groupId>\n                    <artifactId>curator-recipes</artifactId>\n                    <version>4.3.0</version>\n                    <type>jar</type>\n                    <overWrite>false</overWrite>\n                    <outputDirectory>${project.build.directory}/classes</outputDirectory>\n                    <destFileName>curator-4_0-recipes.jar</destFileName>\n                    <includes>\n                        org/apache/curator/framework/recipes/cache/NodeCache*.*,\n                        org/apache/curator/framework/recipes/cache/PathChildrenCache*.*,\n                        org/apache/curator/framework/recipes/cache/*Operation.*,\n                        org/apache/curator/framework/recipes/locks/ChildReaper*\n                        org/apache/curator/framework/recipes/locks/Reaper*,\n                        org/apache/curator/framework/recipes/nodes/PersistentNode*,\n                        org/apache/curator/framework/recipes/queue/DistributedDelayQueue*,\n                        org/apache/curator/framework/recipes/queue/DistributedIdQueue*,\n                        org/apache/curator/framework/recipes/queue/DistributedPriorityQueue*,\n                        org/apache/curator/framework/recipes/queue/DistributedQueue*,\n                        org/apache/curator/framework/recipes/queue/QueueBase*,\n                        org/apache/curator/framework/recipes/shared/SharedValue*,\n                        org/apache/curator/framework/recipes/shared/SharedValueReader*\n                    </includes>\n                </artifactItem>\n                <artifactItem>\n                    <groupId>org.apache.curator</groupId>\n                    <artifactId>curator-framework</artifactId>\n                    <version>4.3.0</version>\n                    <type>jar</type>\n                    <overWrite>false</overWrite>\n                    <outputDirectory>${project.build.directory}/classes</outputDirectory>\n                    <destFileName>curator-4_0-recipes.jar</destFileName>\n                    <includes>\n                        org/apache/curator/framework/listen/ListenerContainer*\n                    </includes>\n                </artifactItem>\n            </artifactItems>\n        </configuration>\n    </execution>\n</executions>\n</plugin>\n")))}d.isMDXComponent=!0}}]);
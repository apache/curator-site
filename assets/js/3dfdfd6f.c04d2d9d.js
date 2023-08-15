"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),h=n,d=c["".concat(o,".").concat(h)]||c[h]||m[h]||i;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:n,l[1]=u;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},l="Submitting Pull Requests",u={unversionedId:"submitting-pull-requests",id:"submitting-pull-requests",title:"Submitting Pull Requests",description:"Creating A Pull Request",source:"@site/community/submitting-pull-requests.md",sourceDirName:".",slug:"/submitting-pull-requests",permalink:"/community/submitting-pull-requests",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/community/submitting-pull-requests.md",tags:[],version:"current",frontMatter:{},sidebar:"community",previous:{title:"Project History",permalink:"/community/history"},next:{title:"New Committers",permalink:"/community/new-committers"}},o={},s=[{value:"Creating A Pull Request",id:"creating-a-pull-request",level:2},{value:"Apache Contribution Guide",id:"apache-contribution-guide",level:2},{value:"Tools and Libraries",id:"tools-and-libraries",level:2},{value:"Style and Development Guide",id:"style-and-development-guide",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"submitting-pull-requests"},"Submitting Pull Requests"),(0,n.kt)("h2",{id:"creating-a-pull-request"},"Creating A Pull Request"),(0,n.kt)("p",null,"Apache Curator uses the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/set-up-git"},"Git version control system"),"."),(0,n.kt)("p",null,"Curator also uses Apache's GitHub mirroring. All source code/bug fix submissions should be made via GitHub Pull Request."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request"},"Create your Pull Request")," against the latest revision of the files by forking the mirrored project at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/curator"},"https://github.com/apache/curator")," (keep your fork in sync from then on)."),(0,n.kt)("p",null,"You must also create an issue in ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/CURATOR"},"Curator's Issue Tracker")," (reference the Pull Request in the issue) and create a git branch with the same name as the Issue. All discussion, comments, etc. regarding the Pull Request should be in the Issue Tracker and/or GitHub and not by email."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fork the Curator project from GitHub"),(0,n.kt)("li",{parentName:"ul"},"Create a branch with the same name as the JIRA Issue number (e.g. CURATOR-1234) in your fork and push it to GitHub"),(0,n.kt)("li",{parentName:"ul"},"Create a Pull Request in GitHub. The name of the Pull Request should be in the form: ",(0,n.kt)("inlineCode",{parentName:"li"},"[CURATOR-XXX]")," Summary of the Issue"),(0,n.kt)("li",{parentName:"ul"},"The Apache infrastructure tools will automatically add a reference to your PR in the JIRA Issue")),(0,n.kt)("h2",{id:"apache-contribution-guide"},"Apache Contribution Guide"),(0,n.kt)("p",null,"Please read the ",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/foundation/getinvolved.html"},"Apache Contribution Guide"),"."),(0,n.kt)("h2",{id:"tools-and-libraries"},"Tools and Libraries"),(0,n.kt)("p",null,"Curator uses the following tools and libraries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Java 8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://maven.apache.org/"},"Maven")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.atlassian.com/software/jira"},"Jira")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://testng.org/doc/index.html"},"TestNG")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.slf4j.org/"},"SLF4J")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://code.google.com/p/guava-libraries/"},"Google Guava"))),(0,n.kt)("h2",{id:"style-and-development-guide"},"Style and Development Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use spaces not tabs."),(0,n.kt)("li",{parentName:"ul"},"Match the style of the Curator files. Any patches will be re-formatted to match Curator style."),(0,n.kt)("li",{parentName:"ul"},"There must be a JIRA Issue created for your change."),(0,n.kt)("li",{parentName:"ul"},"Create a git branch with the same name as the Issue."),(0,n.kt)("li",{parentName:"ul"},"All submissions must have TestNG tests."),(0,n.kt)("li",{parentName:"ul"},"All submissions must have proper Apache license headers. Run the following command to make sure all files have headers: ",(0,n.kt)("inlineCode",{parentName:"li"},"docker run --rm -v $(pwd):/github/workspace ghcr.io/korandoru/hawkeye-native:v3 format"),"."),(0,n.kt)("li",{parentName:"ul"},"The simpler and smaller the change the more likely it is to be accepted.")))}m.isMDXComponent=!0}}]);
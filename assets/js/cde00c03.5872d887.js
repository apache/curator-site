"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(s,".").concat(u)]||m[u]||h[u]||l;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},o="Releasing Curator",i={unversionedId:"releasing-curator",id:"releasing-curator",title:"Releasing Curator",description:"First of all, read the New Committers guide to set up all necessary configs.",source:"@site/community/releasing-curator.md",sourceDirName:".",slug:"/releasing-curator",permalink:"/community/releasing-curator",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/community/releasing-curator.md",tags:[],version:"current",frontMatter:{},sidebar:"community",previous:{title:"New Committers",permalink:"/community/new-committers"}},s={},p=[{value:"Prepare the Release",id:"prepare-the-release",level:2},{value:"Stage the Apache Release",id:"stage-the-apache-release",level:2},{value:"Initiate a Vote On the Release",id:"initiate-a-vote-on-the-release",level:2},{value:"Promote the Release",id:"promote-the-release",level:2},{value:"Clean Up Old Releases",id:"clean-up-old-releases",level:2},{value:"Example Emails",id:"example-emails",level:2},{value:"Release Vote Email Example",id:"release-vote-email-example",level:3},{value:"Release Vote Result Email",id:"release-vote-result-email",level:3},{value:"Release Announcement Email Example",id:"release-announcement-email-example",level:3},{value:"Cancel Vote Email Example",id:"cancel-vote-email-example",level:3}],c={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"releasing-curator"},"Releasing Curator"),(0,n.kt)("p",null,"First of all, read the ",(0,n.kt)("a",{parentName:"p",href:"/community/new-committers"},"New Committers")," guide to set up all necessary configs."),(0,n.kt)("p",null,"To release Curator, the following steps must be followed:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The binary artifacts must be staged"),(0,n.kt)("li",{parentName:"ol"},"The Apache release must be staged"),(0,n.kt)("li",{parentName:"ol"},"The release must be voted on"),(0,n.kt)("li",{parentName:"ol"},"If the vote succeeds:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Apache release must be promoted"),(0,n.kt)("li",{parentName:"ul"},"The binary artifacts must be released")))),(0,n.kt)("h2",{id:"prepare-the-release"},"Prepare the Release"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Do a dry run of the release/prepare step by executing ",(0,n.kt)("inlineCode",{parentName:"li"},"mvn -P apache-release release:prepare -DdryRun=true"),". The dry run will not commit any changes back to Git and gives you the opportunity to verify that the release process will complete as expected. If you need to cancel, execute ",(0,n.kt)("inlineCode",{parentName:"li"},"mvn release:clean")," and then reset via ",(0,n.kt)("inlineCode",{parentName:"li"},"git reset --hard"),"."),(0,n.kt)("li",{parentName:"ol"},"Verify that the release process completed as expected:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The release plugin will create ",(0,n.kt)("inlineCode",{parentName:"li"},"pom.xml.tag")," files which contain the changes that would have been committed to SVN. The only differences between ",(0,n.kt)("inlineCode",{parentName:"li"},"pom.xml.tag")," and its corresponding ",(0,n.kt)("inlineCode",{parentName:"li"},"pom.xml")," file should be the version number."),(0,n.kt)("li",{parentName:"ul"},"If other formatting changes have been made you should review the changes and then commit and push them."),(0,n.kt)("li",{parentName:"ul"},"Once any failures or required updates have been committed to svn, rollback the release prepare files: ",(0,n.kt)("inlineCode",{parentName:"li"},"mvn release:rollback")))),(0,n.kt)("li",{parentName:"ol"},"Execute the release/prepare step for real this time",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You'll be prompted for the same version information and optionally your GPG"),(0,n.kt)("li",{parentName:"ul"},"passphrase again"),(0,n.kt)("li",{parentName:"ul"},"mvn -P apache-release release:prepare"),(0,n.kt)("li",{parentName:"ul"},"mvn -P apache-release release:perform"),(0,n.kt)("li",{parentName:"ul"},"git push --tags"))),(0,n.kt)("li",{parentName:"ol"},"Verify the staged artifacts in the Apache Nexus repository:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go to: ",(0,n.kt)("a",{parentName:"li",href:"https://repository.apache.org/index.html"},"https://repository.apache.org/index.html")),(0,n.kt)("li",{parentName:"ul"},"Login"),(0,n.kt)("li",{parentName:"ul"},"Select Staging Repositories under the Build Promotion section on the left hand side"),(0,n.kt)("li",{parentName:"ul"},"Select the repository from the main window"),(0,n.kt)("li",{parentName:"ul"},"Select the content tab at the bottom of the screen and navigate through the artifact tree and double check things."))),(0,n.kt)("li",{parentName:"ol"},'Close the Nexus staging repo by clicking on the curator repo and clicking the "Close" button.')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"DO NOT release the binaries yet.")),(0,n.kt)("h2",{id:"stage-the-apache-release"},"Stage the Apache Release"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"At the root of your Curator directory, find the target directory."),(0,n.kt)("li",{parentName:"ol"},"In the directory you will now find 3 files that need to be staged:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"apache-curator-X.X.X-source-release.zip"),(0,n.kt)("li",{parentName:"ul"},"apache-curator-X.X.X-source-release.zip.asc"),(0,n.kt)("li",{parentName:"ul"},"apache-curator-X.X.X-source-release.zip.sha512"))),(0,n.kt)("li",{parentName:"ol"},"These files must be put into the staging directory (svn co ",(0,n.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/curator/"},"https://dist.apache.org/repos/dist/dev/curator/"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Create a directory for the release"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp")," the files to this directory"),(0,n.kt)("li",{parentName:"ul"},"Remove any old release directories via: ",(0,n.kt)("inlineCode",{parentName:"li"},"svn rm")),(0,n.kt)("li",{parentName:"ul"},"Add the new directory via: ",(0,n.kt)("inlineCode",{parentName:"li"},"svn add")),(0,n.kt)("li",{parentName:"ul"},"Commit via: ",(0,n.kt)("inlineCode",{parentName:"li"},"svn commit"))))),(0,n.kt)("h2",{id:"initiate-a-vote-on-the-release"},"Initiate a Vote On the Release"),(0,n.kt)("p",null,"Create a VOTE email thread on ",(0,n.kt)("a",{parentName:"p",href:"mailto:dev@curator.apache.org"},"dev@curator.apache.org")," to record votes as replies (see ",(0,n.kt)("a",{parentName:"p",href:"#example-emails"},"Example Emails"),")."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The release needs 3 +1 votes from the PMC"),(0,n.kt)("li",{parentName:"ul"},"If the Vote succeeds, you can promote the release"),(0,n.kt)("li",{parentName:"ul"},"Regardless of the vote result, send a RESULT VOTE email (see ",(0,n.kt)("a",{parentName:"li",href:"#example-emails"},"Example Emails"),")."),(0,n.kt)("li",{parentName:"ul"},"In the rare case that the release needs to be canceled:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go to: ",(0,n.kt)("a",{parentName:"li",href:"https://repository.apache.org/index.html"},"https://repository.apache.org/index.html"),' and "drop" the build.'),(0,n.kt)("li",{parentName:"ul"},"Send a CANCEL VOTE email (see ",(0,n.kt)("a",{parentName:"li",href:"#example-emails"},"Example Emails"),")."),(0,n.kt)("li",{parentName:"ul"},"If you need to delete the tag, run ",(0,n.kt)("inlineCode",{parentName:"li"},"git tag -d <tag>")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"git push origin :refs/tags/<tag>"),".")))),(0,n.kt)("h2",{id:"promote-the-release"},"Promote the Release"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"These files must be put into the release directory (svn co ",(0,n.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/curator/"},"https://dist.apache.org/repos/dist/release/curator/"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Create a directory for the release"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp")," the files to this directory and then ",(0,n.kt)("inlineCode",{parentName:"li"},"svn commit")))),(0,n.kt)("li",{parentName:"ol"},"Release the binary artifacts",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go to: ",(0,n.kt)("a",{parentName:"li",href:"https://repository.apache.org/index.html"},"https://repository.apache.org/index.html")),(0,n.kt)("li",{parentName:"ul"},'Select the curator release and click the "Release" button.'))),(0,n.kt)("li",{parentName:"ol"},"Announce the release (see ",(0,n.kt)("a",{parentName:"li",href:"#example-emails"},"Example Emails"),") to these mailing lists. Remember to use your apache.org email address to send the email:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:user@curator.apache.org"},"user@curator.apache.org")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:dev@curator.apache.org"},"dev@curator.apache.org")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:announce@apache.org"},"announce@apache.org")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:user@zookeeper.apache.org"},"user@zookeeper.apache.org")))),(0,n.kt)("li",{parentName:"ol"},"Update the Download page: ",(0,n.kt)("a",{parentName:"li",href:"https://curator.apache.org/download"},"https://curator.apache.org/download"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Update the "Current release" section with the new release'),(0,n.kt)("li",{parentName:"ul"},'Add the new release to the "History" section'),(0,n.kt)("li",{parentName:"ul"},'Make sure all links to downloads, release notes, etc. are "https"'))),(0,n.kt)("li",{parentName:"ol"},"You MUST publish the Curator Website (see below) prior to the next step"),(0,n.kt)("li",{parentName:"ol"},"Update the Apache Reporter Tool: ",(0,n.kt)("a",{parentName:"li",href:"https://reporter.apache.org/addrelease.html?curator"},"https://reporter.apache.org/addrelease.html?curator")),(0,n.kt)("li",{parentName:"ol"},"Mark the version as released in JIRA",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Go here: ",(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/CURATOR/?selectedTab=com.atlassian.jira.jira-projects-plugin:versions-panel"},"https://issues.apache.org/jira/browse/CURATOR/?selectedTab=com.atlassian.jira.jira-projects-plugin:versions-panel")),(0,n.kt)("li",{parentName:"ol"},'Click the "Manage Versions" button'),(0,n.kt)("li",{parentName:"ol"},"Set the release date for the version"),(0,n.kt)("li",{parentName:"ol"},"Create a new Version and set the start date"),(0,n.kt)("li",{parentName:"ol"},'Exit administration mode by clicking "Overview" in the near-top-left area')))),(0,n.kt)("h2",{id:"clean-up-old-releases"},"Clean Up Old Releases"),(0,n.kt)("p",null,"Per ",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/dev/release.html#when-to-archive"},"http://www.apache.org/dev/release.html#when-to-archive")," - remove old releases from the ",(0,n.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/curator/"},"https://dist.apache.org/repos/dist/release/curator/")," and ",(0,n.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/curator/"},"https://dist.apache.org/repos/dist/dev/curator/")," repos using ",(0,n.kt)("inlineCode",{parentName:"p"},"svn rm"),"."),(0,n.kt)("h2",{id:"example-emails"},"Example Emails"),(0,n.kt)("h3",{id:"release-vote-email-example"},"Release Vote Email Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"To: dev@curator.apache.org\nSubject: [VOTE] Release Apache Curator version X.X.X\n\nHello,\n\nThis is the vote for Apache Curator version X.X.X\n\n*** Please download, test and vote within approx. 72 hours\n\nNote that we are voting upon the source (tag) and binaries are provided for convenience.\n\nLink to release notes:\nhttps://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12314425&version=12326663\n\nStaging repo:\nhttps://dist.apache.org/repos/dist/dev/curator/X.X.X/\n\nBinary artifacts:\nhttps://repository.apache.org/content/repositories/orgapachecurator-NNNN\n\nThe tag to be voted upon:\nhttps://github.com/apache/curator/releases/tag/apache-curator-X.X.X\n\nCurator's KEYS file containing PGP keys we use to sign the release:\nhttps://www.apache.org/dist/curator/KEYS\n\n[ ] +1  approve\n[ ] +0  no opinion\n[ ] -1  disapprove (and reason why)\n")),(0,n.kt)("h3",{id:"release-vote-result-email"},"Release Vote Result Email"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"To: dev@curator.apache.org\nSubject: [RESULT] [VOTE] Release Apache Curator x.y.z\n\nHello,\n\nThe vote to release Curator x.y.z has passed/failed.\n\n+1 (binding):\n\n    Patrick Hunt\n    John Galt\n\n+1 (non binding):\n\n    Jordan Zimmerman\n    Jay Zarfoss\n\n...if vote was successful..\nI will promote the artifacts to the central repo.\n")),(0,n.kt)("h3",{id:"release-announcement-email-example"},"Release Announcement Email Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"To: announce@apache.org, user@curator.apache.org, dev@curator.apache.org, user@zookeeper.apache.org\nSubject: [ANNOUNCE] Apache Curator x.y.z released\n\nHello,\n\nThe Apache Curator  team is pleased to announce the  release of version x.y.z. Apache  Curator is a Java/JVM client  library for Apache ZooKeeper[1], a distributed  coordination service. Apache Curator includes a  high-level API framework and utilities to  make using Apache ZooKeeper much easier  and more reliable. It also includes  recipes for common use cases and  extensions such as service discovery and a Java 8 asynchronous DSL. For more details, please visit the project website: https://curator.apache.org/\n\nThe download page for Apache Curator is here:\nhttps://curator.apache.org/releases.html\n\nThe binary artifacts for Curator are available from Maven Central and its mirrors.\n\nFor general information on Apache Curator, please visit the project website:\nhttps://curator.apache.org\n\nRelease Notes:\n\n<<PASTE RELEASE NOTES FROM JIRA HERE>>\n\n\nRegards,\n\nThe Curator Team\n\n[1] Apache ZooKeeper https://zookeeper.apache.org/\n")),(0,n.kt)("h3",{id:"cancel-vote-email-example"},"Cancel Vote Email Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"To: dev@curator.apache.org\nSubject: [CANCEL] [VOTE] Release Apache Curator version X.X.X\n\nHello,\n\nThe vote for Apache Curator version X.X.X has been canceled due to [reason].\n\nRegards,\nThe Curator Team\n")))}h.isMDXComponent=!0}}]);
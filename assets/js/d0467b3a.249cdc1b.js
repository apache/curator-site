"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[1299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="Migrations",s={unversionedId:"migrations",id:"migrations",title:"Migrations",description:"Curator Migrations allow you pre-apply transactions in a staged manner so that you can ensure a consistent state for parts of your ZooKeeper node hierarchy in a manner similar to database migration utilities.",source:"@site/docs/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/migrations",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/migrations.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1692086414,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Strongly Typed Models",permalink:"/docs/modeled"},next:{title:"Schema Support",permalink:"/docs/schema"}},l={},p=[{value:"Background and Usage",id:"background-and-usage",level:2},{value:"Details/Reference",id:"detailsreference",level:2},{value:"Migration",id:"migration",level:3},{value:"MigrationSet",id:"migrationset",level:3},{value:"MigrationManager",id:"migrationmanager",level:3}],c={toc:p},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrations"},"Migrations"),(0,r.kt)("p",null,"Curator Migrations allow you pre-apply transactions in a staged manner so that you can ensure a consistent state for parts of your ZooKeeper node hierarchy in a manner similar to database migration utilities."),(0,r.kt)("h2",{id:"background-and-usage"},"Background and Usage"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use Migrations, you should be familiar with Java 8's lambdas, CompletedFuture and CompletionStage.")),(0,r.kt)("p",null,'A "migration" is a set of operations to be performed in a transaction. A "migration set" is a list of migrations. Combined, this can be used to ensure an initial state for your ZooKeeper nodes as well as supporting upgrading/modifying existing state.'),(0,r.kt)("p",null,"For example, given a brand-new ZooKeeper instance you might want to populate a few nodes and data. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'CuratorOp op1 = client.transactionOp().create().forPath("/parent");\nCuratorOp op2 = client.transactionOp().create().forPath("/parent/one");\nCuratorOp op3 = client.transactionOp().create().forPath("/parent/two");\nCuratorOp op4 = client.transactionOp().create().forPath("/parent/three");\nCuratorOp op5 = client.transactionOp().create().forPath("/main", someData);\n')),(0,r.kt)("p",null,"All five of these operations would be combined into a migration and set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Migration migration = () -> Arrays.asList(op1, op2, op3, op4, op5);\nMigrationSet set = MigrationSet.build("main", Collections.singletonList(migration));\n')),(0,r.kt)("p",null,"This set can then be passed to a ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationManager")," for processing. The MigrationManager checks to see if the migration has been applied already and, if not, processes the transaction."),(0,r.kt)("p",null,"At a future date, the migration set could be expanded to update/modify things. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'CuratorOp newOp1 = client.transactionOp().create().forPath("/new");\nCuratorOp newOp2 = client.transactionOp().delete().forPath("/main");    // maybe this is no longer needed\n')),(0,r.kt)("p",null,"This would be combined with the previous migration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Migration initialMigration = () -> Arrays.asList(op1, op2, op3, op4, op5);\nMigration newMigration = () -> Arrays.asList(newOp1, newOp2);\nMigrationSet set = MigrationSet.build("main", Arrays.asList(initialMigration, newMigration));\n')),(0,r.kt)("p",null,'When this set is run, the MigrationManager will perform both migration operations on new ZooKeeper databases but only the second "newMigration" on ZK databases that already have the first migration applied.'),(0,r.kt)("h2",{id:"detailsreference"},"Details/Reference"),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("p",null,"A Migration is a wrapper around a list of operations that constitute one stage in a migration set and are applied as a single transaction."),(0,r.kt)("h3",{id:"migrationset"},"MigrationSet"),(0,r.kt)("p",null,"A MigrationSet is an ordered list of Migrations. Curator keeps track of which migrations in a set have been previously applied and only processes un-applied migrations. Each migration set must have a unique identifier. Create a MigrationSet via its builder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"MigrationSet set = MigrationSet.build(migrationId, migrations);\n")),(0,r.kt)("h3",{id:"migrationmanager"},"MigrationManager"),(0,r.kt)("p",null,"The MigrationManager processes MigrationSets. Usually, you'd run this only on new ZooKeeper databases or as part of a maintenance operation to update the ZooKeeper database. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"MigrationManager manager = new MigrationManager(\n    client,\n    lockPath,       // base path for locks used by the manager\n    metaDataPath,   // base path to store the meta data\n    executor,       // the executor to use\n    lockMax         // max time to wait for locks\n);\nmanager.migrate(set).exceptionally(e -> {\n    if (e instanceof MigrationException) {\n        // migration checksum failed, etc.\n    } else {\n        // some other kind of error\n    }\n    return null;\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each migration in the set is applied in a single transaction i.e. all operations that comprise a migration set (the sum of all individual migration operations) are sent to ZooKeeper as a single transaction."),(0,r.kt)("li",{parentName:"ul"},"MigrationManager stores a hash of all operations in a migration so that it can be compared for future operations. i.e. if, in the future, a migration set is attempted but the hash of one of the previous migrations does not match, the stage completes exceptionally with ",(0,r.kt)("inlineCode",{parentName:"li"},"MigrationException"),".")))}g.isMDXComponent=!0}}]);
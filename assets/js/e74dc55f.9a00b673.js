"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[7466],{3905:(e,r,t)=>{t.d(r,{Zo:()=>v,kt:()=>h});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},v=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,v=c(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,h=d["".concat(o,".").concat(p)]||d[p]||u[p]||a;return t?n.createElement(h,s(s({ref:r},v),{},{components:t})):n.createElement(h,s({ref:r},v))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c[d]="string"==typeof e?e:i,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},317:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const a={},s="Service Discovery",c={unversionedId:"service-discovery",id:"service-discovery",title:"Service Discovery",description:"Packaging",source:"@site/docs/service-discovery.md",sourceDirName:".",slug:"/service-discovery",permalink:"/docs/service-discovery",draft:!1,editUrl:"https://github.com/apache/curator-site/tree/main/docs/service-discovery.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698746944,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Breaking Changes",permalink:"/docs/breaking-changes"},next:{title:"Service Discovery Server",permalink:"/docs/service-discovery-server"}},o={},l=[{value:"Packaging",id:"packaging",level:2},{value:"What Is a Discovery Service?",id:"what-is-a-discovery-service",level:2},{value:"Curator Service Discovery",id:"curator-service-discovery",level:2},{value:"ServiceInstance",id:"serviceinstance",level:3},{value:"ServiceProvider",id:"serviceprovider",level:3},{value:"ServiceDiscovery",id:"servicediscovery",level:3},{value:"Instance Stability",id:"instance-stability",level:3},{value:"Low Level APIs",id:"low-level-apis",level:2},{value:"Registering/Unregistering Services",id:"registeringunregistering-services",level:3},{value:"Querying for Services",id:"querying-for-services",level:3},{value:"Service Cache",id:"service-cache",level:3}],v={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(d,(0,n.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("h2",{id:"packaging"},"Packaging"),(0,i.kt)("p",null,"Curator Service Discovery is in its own package in Maven Central: curator-x-discovery"),(0,i.kt)("h2",{id:"what-is-a-discovery-service"},"What Is a Discovery Service?"),(0,i.kt)("p",null,"In SOA/distributed systems, services need to find each other. i.e. a web service might need to find a caching service, etc. DNS can be used for this but it is nowhere near flexible enough for services that are constantly changing. A Service Discovery system provides a mechanism for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Services to register their availability"),(0,i.kt)("li",{parentName:"ul"},"Locating a single instance of a particular service"),(0,i.kt)("li",{parentName:"ul"},"Notifying when the instances of a service change")),(0,i.kt)("h2",{id:"curator-service-discovery"},"Curator Service Discovery"),(0,i.kt)("h3",{id:"serviceinstance"},"ServiceInstance"),(0,i.kt)("p",null,"A service instance is represented by the class: ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceInstance"),". ServiceInstances have a name, id, address, port and/or ssl port, and an optional payload (user defined). ServiceInstances are serialized and stored in ZooKeeper in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"base path\n       |_______ service A name\n                    |__________ instance 1 id --\x3e (serialized ServiceInstance)\n                    |__________ instance 2 id --\x3e (serialized ServiceInstance)\n                    |__________ ...\n       |_______ service B name\n                    |__________ instance 1 id --\x3e (serialized ServiceInstance)\n                    |__________ instance 2 id --\x3e (serialized ServiceInstance)\n                    |__________ ...\n       |_______ ...\n")),(0,i.kt)("h3",{id:"serviceprovider"},"ServiceProvider"),(0,i.kt)("p",null,"The main abstraction class is ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceProvider"),". It encapsulates the discovery service for a particular named service along with a provider strategy. A provider strategy is a scheme for selecting one instance from a set of instances for a given service. There are three bundled strategies: Round Robin, Random and Sticky (always selects the same one)."),(0,i.kt)("p",null,"ServiceProviders are allocated by using a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceProviderBuilder"),". You obtain a ServiceProviderBuilder from the ServiceDiscovery (see below). The ServiceProviderBuilder allows you to set the service name and several other optional values."),(0,i.kt)("p",null,"The ServiceProvider must be started by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"start()"),". When finished you should call ",(0,i.kt)("inlineCode",{parentName:"p"},"close()"),". The only method in ServiceProvider is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return an instance for a single use. IMPORTANT: users should not hold on to the instance\n// returned. A fresh instance should always be retrieved.\npublic ServiceInstance<T> getInstance() throws Exception;\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When using Curator 2.x (Zookeeper 3.4.x) it's essential that service provider objects are cached by your application and reused. Since the internal NamespaceWatcher objects added by the service provider cannot be removed in Zookeeper 3.4.x, creating a fresh service provider for each call to the same service will eventually exhaust the memory of the JVM.")),(0,i.kt)("h3",{id:"servicediscovery"},"ServiceDiscovery"),(0,i.kt)("p",null,"In order to allocate a ServiceProvider, you must have a ServiceDiscovery. It is created by a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceDiscoveryBuilder"),"."),(0,i.kt)("p",null,"You must call ",(0,i.kt)("inlineCode",{parentName:"p"},"start()")," on the object and, when done with it, call ",(0,i.kt)("inlineCode",{parentName:"p"},"close()"),"."),(0,i.kt)("h3",{id:"instance-stability"},"Instance Stability"),(0,i.kt)("p",null,"If a particular instance has an I/O error, etc. you should call ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceProvider.noteError()"),' passing in the instance. The ServiceProvider will temporarily consider instances that have errors to be "down". The thresholds and timeouts for down instances are set via the ',(0,i.kt)("inlineCode",{parentName:"p"},"DownInstancePolicy")," which can be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceProviderBuilder")," (note: a default DownInstancePolicy is used if you don't specify one)."),(0,i.kt)("h2",{id:"low-level-apis"},"Low Level APIs"),(0,i.kt)("p",null,"The ServiceProvider API is all you should need for most purposes. However, for finer grained control, you can use these methods:"),(0,i.kt)("h3",{id:"registeringunregistering-services"},"Registering/Unregistering Services"),(0,i.kt)("p",null,"Normally, you pass your application's service descriptor to the ServiceDiscovery constructor and it will get registered/unregistered automatically. If, though, you need to manually do this, use these methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Register/re-register/update a service instance\n// Parameters:\n// service - service to add\npublic void registerService(ServiceInstance<T> service) throws Exception;\n\n// Unregister/remove a service instance\n// Parameters:\n// service - the service\npublic void unregisterService(ServiceInstance<T> service) throws Exception;\n")),(0,i.kt)("h3",{id:"querying-for-services"},"Querying for Services"),(0,i.kt)("p",null,"You can query for all service names, all instances of a particular service, or single service instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return the names of all known services\npublic Collection<String> queryForNames() throws Exception;\n\n// Return all known instances for the given service\n// Parameters:\n// name - name of the service\npublic Collection<ServiceInstance<T>> queryForInstances(String name) throws Exception;\n\n// Return the service instance POJO or null if not found\n// Parameters:\n// name - name of the service\n// id - ID of the instance\npublic ServiceInstance<T> queryForInstance(String name, String id) throws Exception;\n")),(0,i.kt)("h3",{id:"service-cache"},"Service Cache"),(0,i.kt)("p",null,"Each of the above query methods calls ZooKeeper directly. If you need more than occasional querying of services you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceCache"),". It caches in memory the list of instances for a particular service. It uses a Watcher to keep the list up to date."),(0,i.kt)("p",null,"You allocate a ServiceCache via the builder returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceDiscovery.serviceCacheBuilder()"),". The ServiceCache object must be started by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"start()")," and, when done, you should call ",(0,i.kt)("inlineCode",{parentName:"p"},"close()"),". You can get the currently known list of instances for the service by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return the current list of instances. NOTE: there is no guarantee of freshness. This is merely\n// the last known list of instances. However, the list is updated via a ZooKeeper watcher so it\n// should be fresh within a window of a second or two.\npublic Collection<ServiceInstance<T>> getInstances();\n")),(0,i.kt)("p",null,"ServiceCache supports a listener that gets notified when Watcher has updated the list of instances:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/** Listener for changes to a service cache */\npublic interface ServiceCacheListener extends ConnectionStateListener {\n    /** Called when the cache has changed (instances added/deleted, etc.) */\n    public void cacheChanged();\n}\n")))}u.isMDXComponent=!0}}]);
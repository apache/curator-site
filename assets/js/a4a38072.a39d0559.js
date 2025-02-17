"use strict";(self.webpackChunkcurator_site=self.webpackChunkcurator_site||[]).push([[847],{6413:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>l});var n=i(8101);const r={},t=n.createContext(r);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:s},e.children)}},8617:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"service-discovery-server","title":"Service Discovery Server","description":"Packaging","source":"@site/docs/service-discovery-server.md","sourceDirName":".","slug":"/service-discovery-server","permalink":"/docs/service-discovery-server","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/curator-site/tree/main/docs/service-discovery-server.md","tags":[],"version":"current","lastUpdatedBy":"tison","lastUpdatedAt":1739752798000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Service Discovery","permalink":"/docs/service-discovery"}}');var r=i(5105),t=i(6413);const c={},l="Service Discovery Server",a={},o=[{value:"Packaging",id:"packaging",level:2},{value:"Description",id:"description",level:2},{value:"Deploying the Server",id:"deploying-the-server",level:2},{value:"REST",id:"rest",level:2},{value:"putService",id:"putservice",level:3},{value:"removeService",id:"removeservice",level:3},{value:"get",id:"get",level:3},{value:"getAllNames",id:"getallnames",level:3},{value:"getAll",id:"getall",level:3},{value:"getAny",id:"getany",level:3},{value:"JSON specs",id:"json-specs",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"service-discovery-server",children:"Service Discovery Server"})}),"\n",(0,r.jsx)(s.h2,{id:"packaging",children:"Packaging"}),"\n",(0,r.jsx)(s.p,{children:"Curator Service Discovery is in its own package in Maven Central: curator-x-discovery-server"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The Service Discovery Server bridges non-Java or legacy applications with the ",(0,r.jsx)(s.a,{href:"/docs/service-discovery",children:"Curator Service Discovery"}),". It exposes RESTful web services to register, remove, query, etc. services."]}),"\n",(0,r.jsx)(s.p,{children:"The Service Discovery Server provides JAX-RS components that can be incorporated into a container of your choice (Tomcat, Jetty, etc.). You can also choose any JAX-RS provider (Jersey, RESTEasy, etc.)."}),"\n",(0,r.jsx)(s.h2,{id:"deploying-the-server",children:"Deploying the Server"}),"\n",(0,r.jsx)(s.p,{children:"The server must be combined with a JAX-RS implementation (Jersey, etc.) and a container (Tomcat, Jetty, etc.)."}),"\n",(0,r.jsx)(s.p,{children:"Several singletons need to be injected:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"ServiceDiscovery"}),"\n",(0,r.jsx)(s.li,{children:"DiscoveryContext"}),"\n",(0,r.jsx)(s.li,{children:"JsonServiceInstanceMarshaller"}),"\n",(0,r.jsx)(s.li,{children:"JsonServiceInstancesMarshaller"}),"\n",(0,r.jsx)(s.li,{children:"JsonServiceNamesMarshaller"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Additionally, the JAX-RS Resource class must be injected. Due to how most JAX-RS implementations are written, you must create a concrete class that extends this using your payload type. The concrete class should have the base path that you'd like to use. Because the JAX-RS implementation can create a new instance of the resource for every request, your concrete class must use a context resolver to access the DiscoveryContext. Or, if you are using an IoC framework, you can access it that way."}),"\n",(0,r.jsxs)(s.p,{children:["Here's a version that has no payload (i.e. a ",(0,r.jsx)(s.code,{children:"Void"})," payload):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'@Path("/")\npublic class MyResource extends DiscoveryResource<Void> {\n   public MyResource(@Context ContextResolver<DiscoveryContext<Void>> resolver) {\n       // note: this may not work with all JAX-RS implementations\n       super(resolver.getContext(DiscoveryContext.class));\n   }\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"rest",children:"REST"}),"\n",(0,r.jsx)(s.p,{children:"Clients must make appropriate REST calls to register themselves and send periodic heartbeats. They can also find services via REST calls:"}),"\n",(0,r.jsx)(s.h3,{id:"putservice",children:"putService"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Method: PUT"}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.code,{children:"v1/service/{name}/{id}"})]}),"\n",(0,r.jsx)(s.li,{children:"Request Entity: ServiceInstance"}),"\n",(0,r.jsx)(s.li,{children:"Response Entity: n/a"}),"\n",(0,r.jsxs)(s.li,{children:["Description: ",(0,r.jsx)(s.code,{children:"{name}"})," is the service name, ",(0,r.jsx)(s.code,{children:"{id}"})," is the instance id. The request entity is a ServiceInstance. This method registers a service instance. If the ServiceType is STATIC, the instance is registered only for the pre-defined period (defined in the DiscoveryContext). STATIC services must call putService at least once per period. PERMANENT services are registered until they are manually deleted."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"removeservice",children:"removeService"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Method: DELETE"}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.code,{children:"v1/service/{name}/{id}"})]}),"\n",(0,r.jsx)(s.li,{children:"Request Entity: n/a"}),"\n",(0,r.jsx)(s.li,{children:"Response Entity: n/a"}),"\n",(0,r.jsxs)(s.li,{children:["Description: ",(0,r.jsx)(s.code,{children:"{name}"})," is the service name, ",(0,r.jsx)(s.code,{children:"{id}"})," is the instance id. The specified service is deleted/unregistered."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Method: GET"}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.code,{children:"v1/service/{name}/{id}"})]}),"\n",(0,r.jsx)(s.li,{children:"Request Entity: n/a"}),"\n",(0,r.jsx)(s.li,{children:"Response Entity: ServiceInstance"}),"\n",(0,r.jsxs)(s.li,{children:["Description: ",(0,r.jsx)(s.code,{children:"{name}"})," is the service name, ",(0,r.jsx)(s.code,{children:"{id}"})," is the instance id. Returns the complete ServiceInstance for the specified service. 404 is returned if not found."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"getallnames",children:"getAllNames"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Method: GET"}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.code,{children:"v1/service"})]}),"\n",(0,r.jsx)(s.li,{children:"Request Entity: n/a"}),"\n",(0,r.jsx)(s.li,{children:"Response Entity: ServiceNames"}),"\n",(0,r.jsx)(s.li,{children:"Description: Returns all currently registered service names."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"getall",children:"getAll"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Method: GET"}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.code,{children:"v1/service/{name}"})]}),"\n",(0,r.jsx)(s.li,{children:"Request Entity: n/a"}),"\n",(0,r.jsx)(s.li,{children:"Response Entity: ServiceInstances"}),"\n",(0,r.jsxs)(s.li,{children:["Description: ",(0,r.jsx)(s.code,{children:"{name}"})," is the service name. Returns all service instances for the named service."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"getany",children:"getAny"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Method: GET"}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.code,{children:"v1/anyservice/{name}"})]}),"\n",(0,r.jsx)(s.li,{children:"Request Entity: n/a"}),"\n",(0,r.jsx)(s.li,{children:"Response Entity: ServiceInstance"}),"\n",(0,r.jsxs)(s.li,{children:["Description: ",(0,r.jsx)(s.code,{children:"{name}"})," is the service name. Return a random instance from the given service or 404."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"json-specs",children:"JSON specs"}),"\n",(0,r.jsxs)(s.p,{children:["The JSON specifications for the REST entities are documented here: ",(0,r.jsx)(s.a,{href:"https://github.com/apache/curator/blob/master/curator-x-discovery-server/README.txt",children:"https://github.com/apache/curator/blob/master/curator-x-discovery-server/README.txt"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);
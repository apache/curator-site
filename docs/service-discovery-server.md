# Service Discovery Server

## Packaging

Curator Service Discovery is in its own package in Maven Central: curator-x-discovery-server

## Description

The Service Discovery Server bridges non-Java or legacy applications with the [Curator Service Discovery](service-discovery.md). It exposes RESTful web services to register, remove, query, etc. services.

The Service Discovery Server provides JAX-RS components that can be incorporated into a container of your choice (Tomcat, Jetty, etc.). You can also choose any JAX-RS provider (Jersey, RESTEasy, etc.).

## Deploying the Server

The server must be combined with a JAX-RS implementation (Jersey, etc.) and a container (Tomcat, Jetty, etc.).

Several singletons need to be injected:

* ServiceDiscovery
* DiscoveryContext
* JsonServiceInstanceMarshaller
* JsonServiceInstancesMarshaller
* JsonServiceNamesMarshaller

Additionally, the JAX-RS Resource class must be injected. Due to how most JAX-RS implementations are written, you must create a concrete class that extends this using your payload type. The concrete class should have the base path that you'd like to use. Because the JAX-RS implementation can create a new instance of the resource for every request, your concrete class must use a context resolver to access the DiscoveryContext. Or, if you are using an IoC framework, you can access it that way.

Here's a version that has no payload (i.e. a `Void` payload):

```java
@Path("/")
public class MyResource extends DiscoveryResource<Void> {
   public MyResource(@Context ContextResolver<DiscoveryContext<Void>> resolver) {
       // note: this may not work with all JAX-RS implementations
       super(resolver.getContext(DiscoveryContext.class));
   }
}
```

## REST

Clients must make appropriate REST calls to register themselves and send periodic heartbeats. They can also find services via REST calls:

### putService

* Method: PUT
* Path: `v1/service/{name}/{id}`
* Request Entity: ServiceInstance
* Response Entity: n/a
* Description: `{name}` is the service name, `{id}` is the instance id. The request entity is a ServiceInstance. This method registers a service instance. If the ServiceType is STATIC, the instance is registered only for the pre-defined period (defined in the DiscoveryContext). STATIC services must call putService at least once per period. PERMANENT services are registered until they are manually deleted.

### removeService

* Method: DELETE
* Path: `v1/service/{name}/{id}`
* Request Entity: n/a
* Response Entity: n/a
* Description: `{name}` is the service name, `{id}` is the instance id. The specified service is deleted/unregistered.

### get

* Method: GET
* Path: `v1/service/{name}/{id}`
* Request Entity: n/a
* Response Entity: ServiceInstance
* Description: `{name}` is the service name, `{id}` is the instance id. Returns the complete ServiceInstance for the specified service. 404 is returned if not found.

### getAllNames

* Method: GET
* Path: `v1/service`
* Request Entity: n/a
* Response Entity: ServiceNames
* Description: Returns all currently registered service names.

### getAll

* Method: GET
* Path: `v1/service/{name}`
* Request Entity: n/a
* Response Entity: ServiceInstances
* Description: `{name}` is the service name. Returns all service instances for the named service.

### getAny

* Method: GET
* Path: `v1/anyservice/{name}`
* Request Entity: n/a
* Response Entity: ServiceInstance
* Description: `{name}` is the service name. Return a random instance from the given service or 404.

## JSON specs

The JSON specifications for the REST entities are documented here: https://github.com/apache/curator/blob/master/curator-x-discovery-server/README.txt.

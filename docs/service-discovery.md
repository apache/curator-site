# Service Discovery

## Packaging

Curator Service Discovery is in its own package in Maven Central: curator-x-discovery

## What Is a Discovery Service?

In SOA/distributed systems, services need to find each other. i.e. a web service might need to find a caching service, etc. DNS can be used for this but it is nowhere near flexible enough for services that are constantly changing. A Service Discovery system provides a mechanism for:

* Services to register their availability
* Locating a single instance of a particular service
* Notifying when the instances of a service change

## Curator Service Discovery

### ServiceInstance

A service instance is represented by the class: `ServiceInstance`. ServiceInstances have a name, id, address, port and/or ssl port, and an optional payload (user defined). ServiceInstances are serialized and stored in ZooKeeper in the following way:

```text
base path
       |_______ service A name
                    |__________ instance 1 id --> (serialized ServiceInstance)
                    |__________ instance 2 id --> (serialized ServiceInstance)
                    |__________ ...
       |_______ service B name
                    |__________ instance 1 id --> (serialized ServiceInstance)
                    |__________ instance 2 id --> (serialized ServiceInstance)
                    |__________ ...
       |_______ ...
```

### ServiceProvider

The main abstraction class is `ServiceProvider`. It encapsulates the discovery service for a particular named service along with a provider strategy. A provider strategy is a scheme for selecting one instance from a set of instances for a given service. There are three bundled strategies: Round Robin, Random and Sticky (always selects the same one).

ServiceProviders are allocated by using a `ServiceProviderBuilder`. You obtain a ServiceProviderBuilder from the ServiceDiscovery (see below). The ServiceProviderBuilder allows you to set the service name and several other optional values.

The ServiceProvider must be started by calling `start()`. When finished you should call `close()`. The only method in ServiceProvider is:

```java
// Return an instance for a single use. IMPORTANT: users should not hold on to the instance
// returned. A fresh instance should always be retrieved.
public ServiceInstance<T> getInstance() throws Exception;
```

:::note

When using Curator 2.x (Zookeeper 3.4.x) it's essential that service provider objects are cached by your application and reused. Since the internal NamespaceWatcher objects added by the service provider cannot be removed in Zookeeper 3.4.x, creating a fresh service provider for each call to the same service will eventually exhaust the memory of the JVM.

:::

### ServiceDiscovery

In order to allocate a ServiceProvider, you must have a ServiceDiscovery. It is created by a `ServiceDiscoveryBuilder`.

You must call `start()` on the object and, when done with it, call `close()`.

### Instance Stability

If a particular instance has an I/O error, etc. you should call `ServiceProvider.noteError()` passing in the instance. The ServiceProvider will temporarily consider instances that have errors to be "down". The thresholds and timeouts for down instances are set via the `DownInstancePolicy` which can be passed to `ServiceProviderBuilder` (note: a default DownInstancePolicy is used if you don't specify one).

## Low Level APIs

The ServiceProvider API is all you should need for most purposes. However, for finer grained control, you can use these methods:

### Registering/Unregistering Services

Normally, you pass your application's service descriptor to the ServiceDiscovery constructor and it will get registered/unregistered automatically. If, though, you need to manually do this, use these methods:

```java
// Register/re-register/update a service instance
// Parameters:
// service - service to add
public void registerService(ServiceInstance<T> service) throws Exception;

// Unregister/remove a service instance
// Parameters:
// service - the service
public void unregisterService(ServiceInstance<T> service) throws Exception;
```

### Querying for Services

You can query for all service names, all instances of a particular service, or single service instance.

```java
// Return the names of all known services
public Collection<String> queryForNames() throws Exception;

// Return all known instances for the given service
// Parameters:
// name - name of the service
public Collection<ServiceInstance<T>> queryForInstances(String name) throws Exception;

// Return the service instance POJO or null if not found
// Parameters:
// name - name of the service
// id - ID of the instance
public ServiceInstance<T> queryForInstance(String name, String id) throws Exception;
```

### Service Cache

Each of the above query methods calls ZooKeeper directly. If you need more than occasional querying of services you can use the `ServiceCache`. It caches in memory the list of instances for a particular service. It uses a Watcher to keep the list up to date.

You allocate a ServiceCache via the builder returned by `ServiceDiscovery.serviceCacheBuilder()`. The ServiceCache object must be started by calling `start()` and, when done, you should call `close()`. You can get the currently known list of instances for the service by calling:

```java
// Return the current list of instances. NOTE: there is no guarantee of freshness. This is merely
// the last known list of instances. However, the list is updated via a ZooKeeper watcher so it
// should be fresh within a window of a second or two.
public Collection<ServiceInstance<T>> getInstances();
```

ServiceCache supports a listener that gets notified when Watcher has updated the list of instances:

```java
/** Listener for changes to a service cache */
public interface ServiceCacheListener extends ConnectionStateListener {
    /** Called when the cache has changed (instances added/deleted, etc.) */
    public void cacheChanged();
}
```

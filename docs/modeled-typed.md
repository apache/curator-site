---
displayed_sidebar: docs
---

# Modeled Curator - Caching, Typed Parameters and Versioning

In addition to its [main features](modeled-components.md) Modeled Curator also supports integrated caching, typed parameters and versioning.

## Caching

`ModeledFramework` instances can be wrapped with a facade that uses a Curator cache internally. All read operations use this cache instead of making direct ZooKeeper calls. You can also listen for node changes. E.g.,

```java
ModeledFramework<MyModel> modeledClient = ModeledFramework.wrap(client, myModelSpec);
CachedModeledFramework<MyModel> cached = modeledClient.cached();
cached.start();

// reads come from the cache
cached.read().whenComplete(...) ...

cached.listenable.addListener((type, path, stat, model) -> {
    // type is NODE_ADDED, NODE_UPDATED, etc.
});
```

### Unresolved Paths and Caching

If the last node in the ModelSpec's path is a parameter, CachedModeledFramework will automatically listen to the parent path. E.g.,

```java
ZPath path = ZPath.parseWithIds("/root/instance/{id}");
ModelSpec<MyModel> modelSpec = ModelSpec.builder(path, serializer);
ModeledFramework<MyModel> modeledClient = ModeledFramework.wrap(modelSpec, client, modelSpec);

CachedModeledFramework<MyModel> cached = modeledClient.cached();
cached.start(); // automatically listens to "/root/instance" and below
```

## Typed Parameters

The "resolve" methods in ZPath et al. consume untyped Objects. Ideally, we should be able to specify parameters in a strongly typed manner. Modeled Curator's "type" templates provide this. You can specify typed parameters for ZPaths, ModelSpecs and ModeledFramework. The [Pub-Sub Example](https://github.com/apache/curator/tree/master/curator-examples/src/main/java/pubsub) shows how to use typed parameters with ModeledFramework.

Typed interfaces are provided for up to 10 parameters and are named `TypedZPath`, `TypedZPath2`, `TypedModelSpec`, `TypedModelSpec2`, `TypedModeledFramework`, `TypedModeledFramework2`, etc.

Here's an example of a TypedModeledFramework that models a Person and uses two parameters to generate the path, a Group and an Organization:

```java
TypedModeledFramework2<Person, Group, Organization> clientTemplate = TypedModeledFramework2.from(
    ModeledFrameworkBuilder.build(),
    personModelSpec
);

...

Group group = ...
Organization organization = ...
ModeledFramework<Person> modeledClient = clientTemplate.resolve(asyncClient, group, organization);
client.set(person);
```

TypedZPath and TypedModelSpec work similarly.

## Versioning

Modeled Curator supports associating a ZNode version with a model object via the `Versioned` interface and the `VersionedModeledFramework` APIs. To read a model along with its ZNode version use:

```java
ModeledFramework<Person> client = ...

client.versioned().read().whenComplete((value, e) -> {
    if ( value != null ) {
        // value's type is Versioned<Person>
        Person personModel = value.model();
        int znodeVersion = value.version();
    }
});
```

`VersionedModeledFramework` has set/update APIs which automatically use the version from the `Versioned` instance.

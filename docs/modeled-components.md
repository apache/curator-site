---
displayed_sidebar: docs
---

# Modeled Curator - Components

Modeled Curator components are intended to allow you to model your ZooKeeper usage early in your application so that the majority of the code that interacts with ZooKeeper doesn't need to be concerned with paths, byte arrays, ACLs, options, etc. The [Pub-Sub Example](https://github.com/apache/curator/tree/master/curator-examples/src/main/java/pubsub) can give you some ideas on how to accomplish this.

## ZPath

Instead of using raw string paths, Modeled Curator defines the `ZPath` interface that abstracts ZooKeeper paths. ZPaths can be simple static paths or can contain parameters that can be replaced as needed.

To build a simple static path, use:

```java
ZPath path = ZPath.parse("/my/static/path");
```

To build a path with parameters, use. `ZPath.parseWithIds()` using the value `"{XXXX}"` to denote a parameter. You can then use the `resolve()` method to replace the parameters. The value between `"{}"` can be any value. E.g.,

```java
ZPath path = ZPath.parseWithIds("/foo/{first param}/bar/{second param}");
ZPath resolvedPath = path.resolve(param1, param2);
```

### NodeName

Parameters are resolved by calling `toString()` on the parameter. You can use `NodeName` to change this behavior. If a parameter implements `NodeName` the `nodeName()` method is used as the parameter value.

### Partial Resolution

ZPaths can be partially resolved. E.g.,

```java
ZPath path = ZPath.parseWithIds("/foo/{type}/bar/{id}");
ZPath partial = path.resolve("standard");
// partial is now "/foo/standard/bar/{id}"
```

[ModeledFramework](#modeledframework) takes advantage of this. See below for details.

## ModelSpec

A `ModelSpec` contains all the metadata needed to operate on a ZooKeeper path:

* A ZPath
* A serializer for the data stored at the path
* Options for how nodes should be created (sequential, compressed data, ttl, etc.)
* ACLs for the nodes at the path
* Options for how to delete nodes (guaranteed, deleting children, etc.)

ModelSpec instances are created via a builder. The builder sets defaults that should be useful for most applications but you can alter any of these as needed.

```java
// a standard model spec for the given path and serializer
// the model spec will have no ACLs and the options:
// * createParentsAsContainers
// * setDataIfExists
// * DeleteOption.guaranteed
ModelSpec<MyModel> spec = ModelSpec.builder(path, JacksonModelSerializer.build(MyModel.class)).build();
```

As a convenience, ModelSpec provides `resolve()` methods in case the ZPath used has parameters. E.g.,

```java
ZPath path = ZPath.parseWithIds("/foo/{id}/bar/{id}");
ModelSpec<MyModel> spec = ModelSpec.builder(path, JacksonModelSerializer.build(MyModel.class)).build();
ModelSpec<MyModel> resolvedSpec = spec.resolve(param1, param2);
```

### JacksonModelSerializer

A Jackson serializer, `JacksonModelSerializer`, is included. However, the Jackson dependency for it is specified as "provided" in the curator-x-async Maven POM file to avoid adding a new dependency to Curator. Therefore, if you wish to use the JacksonModelSerializer you must manually add the dependency to your build system.

E.g., for Maven:

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>${jackson.version}</version>
</dependency>
```

## ModeledFramework

`ModeledFramework` ties together all the metadata into a Curator-style instance that is used to perform ZooKeeper operations. E.g.,

```java
ModeledFramework<MyModel> modeledClient = ModeledFramework.wrap(client, myModelSpec);
MyModel instance = ...;
modeledClient.set(instance);
```

The "set" call in the above example is the equivalent of:

```java
MyModel instance = ...;
String path = "/foo/bar/" + instance.getId();
byte[] data = serializer.serialize(instance);
client.create()
    .withOptions(Sets.newHashSet(CreateOption.createParentsAsContainers, CreateOption.setDataIfExists))
    .forPath(path, data);
```

To get a value:

```java
ModeledFramework<MyModel> modeledClient = ModeledFramework.wrap(client, myModelSpec);
modeledClient.read().whenComplete((value, e) -> {
    if (e != null) {
        // handle the error
    } else {
        // "value" is the MyModel instance
    }
});
```

The "read" call in the above example is the equivalent of:

```java
String path = "/foo/bar/" + instanceId;
client.getData().forPath(path).whenComplete((data, e) -> {
    if (e != null) {
        // handle the error
    } else {
        // NOTE: you must deal with possible deserialization problems
        // caused by clients that write bad data
        // If all of your code uses ModeledFramework you can guarantee that
        // the data is always correctly written
        MyModel model = serializer.deserialize(data);
        // ...
    }
});
```

### Partially Resolved ZPaths and Set/Update

ModeledFramework's various `set` and `update` methods check for unresolved ZPaths. If the current modelSpec has an unresolved ZPath when set/update is called, it is automatically resolved using the model instance being set/updated. E.g.,

```java
ZPath path = ZPath.parseWithIds("/root/{type}/instance/{id}");
ModelSpec<MyModel> modelSpec = ModelSpec.builder(path, serializer);
ModeledFramework<MyModel> modeledClient = ModeledFramework.wrap(modelSpec, client, modelSpec);
String currentType = ...;
MyModel model = ...;
modeledClient.resolved(currentType).set(model); // internally, ModeledFramework calls ZPath.resolved()
                                                // using "model" as the argument to get the actual ZPath

```

## Caching and Typed Parameters

In addition to the above features, Modeled Curator supports Integrated Caching, Typed Parameters and Versioning. See [Caching and Typed Parameters](modeled-typed.md) for details.

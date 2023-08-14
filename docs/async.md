# Curator Async

## Packaging

Curator Async is in its own package in Maven Central: curator-x-async

## What Is Curator Async?

Curator Async is a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) that wraps existing `CuratorFramework` instances. This DSL is entirely asynchronous and uses [Java 8's CompletionStage](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionStage.html) mechanism for chaining, composing, etc. Additionally, Curator's original DSL has been cleaned up and simplified, in particular for operations such as `create()`.

With this DSL you can do asynchronous tasks in a more natural, functional way using [Java 8 lambdas](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html).

The Curator Async package also contains a strongly typed DSL and strongly typed Cache Recipe wrappers that allows you to map a ZooKeeper path to a serializable class as opposed to raw byte arrays.

## [Curator Async](async-details.md)

With this DSL you can do asynchronous tasks in a more natural, functional way using Java 8 lambdas. For example:

```java
// let "client" be a CuratorFramework instance
AsyncCuratorFramework async = AsyncCuratorFramework.wrap(client);
async.checkExists().forPath(somePath).thenAccept(stat -> mySuccessOperation(stat));
```

See [Curator Async](async-details.md) for details.

## [Modeled Curator](modeled.md)

This is a strongly typed DSL that allows you to map a Curator-style client to:

* A ZooKeeper path (supporting parameterized substitutions)
* A serializer for the data stored at the path
* Options for how nodes should be created (sequential, compressed data, ttl, etc.)
* ACLs for the nodes at the path
* Options for how to delete nodes (guaranteed, deleting children, etc.)

For example:

```java
ModeledFramework<Foo> modeled = ModeledFramework.wrap(client, fooModelSpec);
modeled.set(new Foo());
```

See [Modeled Curator](modeled.md) for details.

## [Migrations](migrations.md)

Curator Migrations allow you pre-apply transactions in a staged manner so that you can ensure a consistent state for parts of your ZooKeeper node hierarchy in a manner similar to database migration utilities.

See [Migrations](migrations.md) for details.


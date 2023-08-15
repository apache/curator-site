---
sidebar_label: 'Strongly Typed Models'
---

# Modeled Curator

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

This ModeledFramework instance knows the path to use, how to serialize the "Foo" instance, which create options and ACLs to use, etc.

## Background and Usage

:::note

To use Modeled Curator, you should be familiar with Java 8's lambdas, CompletedFuture and CompletionStage. You should also be familiar with [Curator Async](async.md) as Modeled Curator is based on it.

:::

Modeled Curator consists of the components:

* [ZPath](modeled-components.md#zpath)
* [ModelSpec](modeled-components.md#modelspec)
* [ModeledFramework](modeled-components.md#modeledframework)

Additional functionality is provided by:

* [CachedModeledFramework](modeled-typed.md#caching)
* [Typed Parameter Templates](modeled-typed.md#typed-parameters)
* [Versioning](modeled-typed.md#versioning)

## Example

A complete example usage of Modeled Curator along with CachedModeledFramework and Typed Parameter Templates can be found here: https://github.com/apache/curator/tree/master/curator-examples/src/main/java/pubsub.

## Details

For more details see:

* [Components](modeled-components.md)
* [Caching, Typed Parameters and Versioning](modeled-typed.md)

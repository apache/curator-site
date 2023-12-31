---
sidebar_label: 'Curator Cache'
---

# Recipe: Curator Cache

:::note

CuratorCache requires ZooKeeper 3.6+

:::

## Description

A utility that attempts to keep the data from a node locally cached. Optionally the entire tree of children below the node can also be cached. Will respond to update/create/delete events, pull down the data, etc. You can register listeners that will get notified when changes occur.

## Participating Classes

* CuratorCache
* CuratorCacheListener
* ChildData

## Creating a CuratorCache

```java
// Parameters:
// client - the client
// path - path to watch
// options - empty or one or more options
CuratorCache build(CuratorFramework client, String path, Options... options);
```

There is a builder factory available for additional options when building the cache instance. See `CuratorCacheBuilder` for details.

## General Usage

The cache must be started by calling `start()`. Call `close()` when you are through with the cache.

At any time, call the various accessor methods to get the current state of the cache. You can also register to be notified when a change occurs by calling `listenable()` and then registering a listener for events.

See the examples for an example usage.

## Error Handling

CuratorCache instances internally monitor connection losses, etc. automatically rebuilding the cache on reconnection.

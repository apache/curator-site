---
sidebar_label: 'Tree Cache'
---

# Recipe: Tree Cache

## Description

A utility that attempts to keep all data from all children of a ZK path locally cached. This class will watch the ZK path, respond to update/create/delete events, pull down the data, etc. You can register a listener that will get notified when changes occur.

## Participating Classes

* TreeCache
* TreeCacheListener
* TreeCacheEvent
* ChildData

## Creating a TreeCache

```java
// Parameters:
// client - the client
// path - path to watch
// cacheData - if true, node contents are cached in addition to the stat
public TreeCache(CuratorFramework client, String path, boolean cacheData);
```

## General Usage

The cache must be started by calling `start()`. Call `close()` when you are through with the cache.

At any time, call `getCurrentChildren()` to get the current state of the cache. Alternatively, call `getCurrentData()` to get the data for a given path that's being monitored.

You can also register to be notified when a change occurs by calling `getListenable()` and then:

```java
// Add a change listener
// Parameters:
// listener - the listener
public void addListener(TreeCacheListener listener);
```

## Error Handling

TreeCache instances internally monitor a `ConnectionStateListener`. If the connection state changes, the cache will receive messages detailing the change.

---
sidebar_label: 'Node Cache'
---

# Recipe: Node Cache

## Description

A Node Cache is used to watch a ZNode. Whenever the data is modified or the ZNode is deleted, the Node Cache will change its state to contain the current data (or null if ZNode was deleted).

## Participating Classes

* NodeCache
* NodeCacheListener
* ChildData

## Creating a NodeChildrenCache

```java
// Parameters:
// client - the client
// path - path to cache
public NodeCache(CuratorFramework client, String path);
```

## General Usage

The cache must be started by calling `start()`. Call `close()` when you are through with the cache.

At any time, call `getCurrentData()` to get the current state of the cache. You can also register to be notified when a change occurs by calling `getListenable()` and then:

```java
// Add a change listener
// Parameters:
// listener - the listener
public void addListener(NodeCacheListener listener);
```

## Error Handling

NodeCache instances internally monitor a `ConnectionStateListener`.

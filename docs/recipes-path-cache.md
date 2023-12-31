---
sidebar_label: 'Path Cache'
---

# Recipe: Path Cache

## Description

A Path Cache is used to watch a ZNode. Whenever a child is added, updated or removed, the Path Cache will change its state to contain the current set of children, the children's data and the children's state.

## Participating Classes

* PathChildrenCache
* PathChildrenCacheEvent
* PathChildrenCacheListener
* ChildData

## Creating a PathChildrenCache

```java
// Parameters:
// client - the client
// path - path to watch
// cacheData - if true, node contents are cached in addition to the stat
public PathChildrenCache(CuratorFramework client, String path, boolean cacheData);
```

## General Usage

The cache must be started by calling `start()`. Call `close()` when you are through with the cache.

There are two versions of `start()`. The no-arg version gives default behavior. The other version takes an enumeration that allows you to control how the initial cache is warmed:

```java
public enum StartMode {
    /**
     * cache will _not_ be primed. i.e. it will start empty and you will receive
     * events for all nodes added, etc.
     */
    NORMAL,

    /**
     * rebuild() will be called before this method returns in
     * order to get an initial view of the node.
     */
    BUILD_INITIAL_CACHE,

    /**
     * After cache is primed with initial values (in the background) a
     * PathChildrenCacheEvent.Type.INITIALIZED event will be posted
     */
    POST_INITIALIZED_EVENT
}
```

At any time, call `getCurrentData()` to get the current state of the cache. You can also register to be notified when a change occurs by calling `getListenable()` and then:

```java
// Add a change listener
// Parameters:
// listener - the listener
public void addListener(PathChildrenCacheListener listener)
```

## Error Handling

PathChildrenCache instances internally monitor a `ConnectionStateListener`. If the connection state changes, the cache is reset (the `PathChildrenCacheListener` will receive a RESET).

---
sidebar_label: 'Persistent Recursive Watcher'
---

# Recipe: Persistent Recursive Watcher

:::note

PersistentWatcher requires ZooKeeper 3.6+

:::

## Description

A managed persistent watcher. The watch will be managed such that it stays set through connection lapses, etc.

## Participating Classes

* PersistentWatcher

## Creating a PersistentWatcher

```java
// Parameters:
// client - the client
// basePath - path to set the watch on
// recursive - ZooKeeper persistent watches can optionally be recursive
public PersistentWatcher(CuratorFramework client, String basePath, boolean recursive);
```

## General Usage

The instance must be started by calling `start()`. Call `close()` when you want to remove the watch.

PersistentWatcher presents two listener types:

* `Listenable<Watcher> getListenable()` - Use this to add watchers. These will behave in the same manner that watchers added via `ZooKeeper.addWatch()` behave.
* `Listenable<Runnable> getResetListenable()` - The `Runnable`s added with this get called once the Persistent Watcher has been successfully set(or reset after a connection partition).

## Error Handling

PersistentWatcher instances internally monitor connection losses, etc. automatically resetting on reconnection.

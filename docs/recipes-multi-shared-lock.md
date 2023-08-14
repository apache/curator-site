---
sidebar_label: 'Multi Shared Lock'
---

# Recipe: Multi Shared Lock

## Description

A container that manages multiple locks as a single entity. When acquire() is called, all the locks are acquired. If that fails, any paths that were acquired are released. Similarly, when release() is called, all locks are released (failures are ignored).

## Participating Classes

* InterProcessMultiLock
* InterProcessLock

### Creating a InterProcessMultiLock

```java
// Creates a multi lock of any type of inter process lock
// Parameters:
// locks - the locks
public InterProcessMultiLock(List<InterProcessLock> locks);
```

```java
// Creates a multi lock of InterProcessMutexes
// Parameters:
// client - client
// paths - list of paths to manage in the order that they are to be locked
public InterProcessMultiLock(CuratorFramework client, List<String> paths);
```

## General Usage

The usage is the same as for [Shared Lock](recipes-shared-lock.md). However, When `acquire()` is called, all the locks are acquired. If that fails, any paths that were acquired are released. Similarly, when `release()` is called, all locks are released (failures are ignored).

## Error Handling

It is strongly recommended that you add a `ConnectionStateListener` and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock.

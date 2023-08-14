---
sidebar_label: 'Shared Lock'
---

# Recipe: Shared Lock

## Description

Fully distributed locks that are globally synchronous, meaning at any snapshot in time no two clients think they hold the same lock. Note: unlike InterProcessMutex this lock is *not* reentrant.

## Participating Classes

* InterProcessSemaphoreMutex

## Create an InterProcessSemaphoreMutex

```java
// Parameters:
// client - client
// path - the path to lock
public InterProcessSemaphoreMutex(CuratorFramework client, String path);
```

## General Usage

To acquire the lock, use one of the acquire methods:

```java
// Acquire the mutex - blocking until it's available. Must be balanced by a call to release().
public void acquire();
```

```java
// Acquire the mutex - blocks until it's available or the given time expires. Must be balanced by a call to release().
//
// Parameters:
// time - time to wait
// unit - time unit
// Returns:
// true if the mutex was acquired, false otherwise
public boolean acquire(long time, TimeUnit unit);
```

To release the mutex, call:

```java
// Perform one release of the mutex if the calling thread is the same thread that acquired it.
public void release();
```

## Error Handling

It is strongly recommended that you add a `ConnectionStateListener` and watch for SUSPENDED and LOST state changes.

If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock.

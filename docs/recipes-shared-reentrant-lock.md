---
sidebar_label: 'Shared Reentrant Lock'
---

# Recipe: Shared Reentrant Lock

## Description

Fully distributed locks that are globally synchronous, meaning at any snapshot in time no two clients think they hold the same lock.

## Participating Classes

* InterProcessMutex

## Create an InterProcessMutex

```java
// Parameters:
// client - client
// path - the path to lock
public InterProcessMutex(CuratorFramework client, String path);
```

## General Usage

To acquire the lock, use one of the acquire methods:

```java
Acquire the mutex - blocking until it's available. Note: the same thread can call acquire
re-entrantly. Each call to acquire must be balanced by a call to release()
public void acquire();
```

```java
// Acquire the mutex - blocks until it's available or the given time expires. Note: the same thread can
// call acquire re-entrantly. Each call to acquire that returns true must be balanced by a call to release()
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
// Perform one release of the mutex if the calling thread is the same thread that acquired it. If the
// thread had made multiple calls to acquire, the mutex will still be held when this method returns.
public void release();
```

:::note

A InterProcessMutex instance is reusable. i.e. don't create a new instance every time. Re-use a single instance.

:::

## Revoking

InterProcessMutex supports a cooperative revocation mechanism as described on the ZooKeeper recipes wiki.

To make a mutex revocable, call:

```java
// Make the lock revocable. Your listener will get called when another process/thread wants you to release the lock. Revocation is cooperative.
// Parameters:
// listener - the listener
public void makeRevocable(RevocationListener<T> listener);
```

To ask for a lock to revoke/release, use the static method in the `Revoker` class:

```java
// Utility to mark a lock for revocation. Assuming that the lock has been registered
// with a RevocationListener, it will get called and the lock should be released. Note,
// however, that revocation is cooperative.
// Parameters:
// client - the client
// path - the path of the lock - usually from something like InterProcessMutex.getParticipantNodes()
public static void attemptRevoke(CuratorFramework client, String path) throws Exception;
```

## Error Handling

It is strongly recommended that you add a `ConnectionStateListener` and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock.

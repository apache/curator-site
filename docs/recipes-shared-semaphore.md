---
sidebar_label: 'Shared Semaphore'
---

# Recipe: Shared Semaphore

## Description

A counting semaphore that works across JVMs. All processes in all JVMs that use the same lock path will achieve an inter-process limited set of leases. Further, this semaphore is mostly "fair" - each user will get a lease in the order requested (from ZK's point of view).

There are two modes for determining the max leases for the semaphore. In the first mode the max leases is a convention maintained by the users of a given path. In the second mode a SharedCountReader is used as the method for semaphores of a given path to determine the max leases.

If a SharedCountReader is not used, no internal checks are done to prevent Process A acting as if there are 10 leases and Process B acting as if there are 20. Therefore, make sure that all instances in all processes use the same numberOfLeases value.

The various acquire methods return Lease objects that represent acquired leases. Clients must take care to close lease objects (ideally in a `finally` block) else the lease will be lost. However, if the client session drops (crash, etc.), any leases held by the client are automatically closed and made available to other clients.

## Participating Classes

* InterProcessSemaphoreV2
* Lease
* SharedCountReader

## Creating an InterProcessSemaphoreV2

```java
// Parameters:
// client - client
// path - the path to lock
// numberOfLeases - the number of leases allowed by this semaphore
public InterProcessSemaphoreV2(
    CuratorFramework client,
    String path,
    int numberOfLeases
);
```

```java
// Parameters:
// client - the client
// path - path for the semaphore
// count - the shared count to use for the max leases
public InterProcessSemaphoreV2(
    CuratorFramework client,
    String path,
    SharedCountReader count
);
```

## General Usage

To acquire one lease/usage, use one of the acquire methods:

```java
// Acquire a lease. If no leases are available, this method blocks until either the maximum number of
/ leases is increased or another client/process closes a lease.
// The client must close the lease when it is done with it. You should do this in a finally block.
public Lease acquire();
```

```java
// Acquire qty leases. If there are not enough leases available, this method blocks until either the
// maximum number of leases is increased enough or other clients/processes close enough leases.
// The client must close the leases when it is done with them. You should do this in a finally block.
// NOTE: You can use returnAll(Collection) for this.
// Parameters:
// qty - number of leases to acquire
public Collection<Lease> acquire(int qty);
```

```java
// Acquire a lease. If no leases are available, this method blocks until either the maximum number of
// leases is increased or another client/process closes a lease. However, this method will only block
// to a maximum of the time parameters given.
// The client must close the lease when it is done with it. You should do this in a finally block.
// Parameters:
// time - time to wait
// unit - time unit
// Returns:
// the new lease or null if time ran out
public Lease acquire(long time, TimeUnit unit);
```

```java
// Acquire qty leases. If there are not enough leases available, this method blocks until either the
// maximum number of leases is increased enough or other clients/processes close enough leases. However,
// this method will only block to a maximum of the time parameters given. If time expires before all
// leases are acquired, the subset of acquired leases are automatically closed.
// The client must close the leases when it is done with them. You should do this in a finally block.
// NOTE: You can use returnAll(Collection) for this.
// Parameters:
// qty - number of leases to acquire
// time - time to wait
// unit - time unit
public Collection<Lease> acquire(int qty, long time, TimeUnit unit);
```

`Lease` instances can either be closed directly or you can use these convenience methods:

```java
public void returnAll(Collection<Lease> leases);
public void returnLease(Lease lease);
```

## Error Handling

It is strongly recommended that you add a `ConnectionStateListener` and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock.

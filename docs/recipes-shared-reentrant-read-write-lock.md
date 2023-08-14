---
sidebar_label: 'Shared Reentrant Read Write Lock'
---

# Recipe: Shared Reentrant Read Write Lock

## Description

A re-entrant read/write mutex that works across JVMs. Uses Zookeeper to hold the lock. All processes in all JVMs that use the same lock path will achieve an inter-process critical section. Further, this mutex is "fair" - each user will get the mutex in the order requested (from ZK's point of view).

A read write lock maintains a pair of associated locks, one for read-only operations and one for writing. The read lock may be held simultaneously by multiple reader processes, so long as there are no writers. The write lock is exclusive.

### Reentrancy

This lock allows both readers and writers to reacquire read or write locks in the style of a re-entrant lock. Non-re-entrant readers are not allowed until all write locks held by the writing thread/process have been released. Additionally, a writer can acquire the read lock, but not vice-versa. If a reader tries to acquire the write lock it will never succeed.

### Lock Downgrading

Reentrancy also allows downgrading from the write lock to a read lock, by acquiring the write lock, then the read lock and then releasing the write lock. However, upgrading from a read lock to the write lock is not possible.

## Participating Classes

* InterProcessReadWriteLock
* InterProcessLock

## Create an InterProcessReadWriteLock

```java
// Parameters:
// client - the client
// basePath - path to use for locking
public InterProcessReadWriteLock(CuratorFramework client, String basePath);
```

## General Usage

Access either the read lock or the write lock and then use the methods as described for [Shared lock](recipes-shared-lock.md).

```java
public InterProcessLock readLock();
public InterProcessLock writeLock();
```

## Error Handling

It is strongly recommended that you add a `ConnectionStateListener` and watch for SUSPENDED and LOST state changes. If a SUSPENDED state is reported you cannot be certain that you still hold the lock unless you subsequently receive a RECONNECTED state. If a LOST state is reported it is certain that you no longer hold the lock.

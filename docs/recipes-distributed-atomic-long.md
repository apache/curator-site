---
sidebar_label: 'Distributed Atomic Long'
---

# Recipe: Distributed Atomic Long

## Description

A counter that attempts atomic increments. It first tries using optimistic locking. If that fails, an optional InterProcessMutex is taken. For both optimistic and mutex, a retry policy is used to retry the increment.

##  Participating Classes

* DistributedAtomicLong
* AtomicValue
* PromotedToLock

## Creating a DistributedAtomicLong

### Optimistic mode only

```java
// Creates the counter in optimistic mode only - i.e. the promotion to a mutex is not done
// Parameters:
// client - the client
// counterPath - path to hold the counter value
// retryPolicy - the retry policy to use
public DistributedAtomicLong(CuratorFramework client, String counterPath, RetryPolicy retryPolicy);
```

### Mutex promotion mode

```java
// Creates the counter in mutex promotion mode. The optimistic lock will be tried first using the given retry policy.
// If the increment does not succeed, a InterProcessMutex will be tried with its own retry policy
//
// Parameters:
// client - the client
// counterPath - path to hold the counter value
// retryPolicy - the retry policy to use
// promotedToLock - the arguments for the mutex promotion
public DistributedAtomicLong(
    CuratorFramework client,
    String counterPath,
    RetryPolicy retryPolicy,
    PromotedToLock promotedToLock
);
```

##  General Usage

### Perform an operation on the counter

* `get()`
* `increment()`
* `decrement()`
* `add()`
* `subtract()`

### Examine the result AtomicValue

* You **must** first check `succeeded()` which returns true if the operation succeeded. If false is returned, the operation failed and the atomic was not updated.
* If the operation succeeded, you can get the value prior to the operation via `preValue()` and the value after the operation `postValue()`.

## Error Handling

All the atomic instances access the ZooKeeper server for each method call. Therefore, the standard retry mechanism will be applied and any errors executing the operations will result in an Exception being thrown.

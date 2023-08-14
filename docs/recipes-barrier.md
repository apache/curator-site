---
sidebar_label: 'Barrier'
---

# Recipe: Barrier

##  Description

An implementation of the Distributed Barrier ZK recipe.

Distributed systems use barriers to block processing of a set of nodes until a condition is met at which time all the nodes are allowed to proceed.

##  Participating Classes

* DistributedBarrier

##  Creating a DistributedBarrier

```java
// Parameters:
// client - client
// barrierPath - path to use as the barrier
public DistributedBarrier(CuratorFramework client, String barrierPath);
```

##  General Usage

To wait on the barrier:

```java
public void waitOnBarrier();
```

There are utilities for setting/removing the barrier:

```java
setBarrier();
removeBarrier();
```

## Error Handling

DistributedBarrier instances watch for connection loss and will throw an exception from `waitOnBarrier()`.

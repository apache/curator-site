---
sidebar_label: 'Double Barrier'
---

# Recipe: Double Barrier

##  Description

An implementation of the Distributed Double Barrier ZK recipe.

Double barriers enable clients to synchronize the beginning and the end of a computation. When enough processes have
joined the barrier, processes start their computation and leave the barrier once they have finished.

##  Participating Classes

* DistributedDoubleBarrier

## Creating a DistributedBarrier

```java
// Creates the barrier abstraction. memberQty is the number of members in the barrier. When enter() is called,
// it blocks until all members have entered. When leave() is called, it blocks until all members have left.
// Parameters:
// client - the client
// barrierPath - path to use
// memberQty - the number of members in the barrier
public DistributedDoubleBarrier(CuratorFramework client, String barrierPath, int memberQty);
```

##  General Usage

To enter on the barrier:

```java
public void enter();
```

To leave on the barrier:

```java
public void leave();
```

## Error Handling

DistributedDoubleBarrier instances watch for connection loss and will throw an exception from `enter()` and/or `leave()`.

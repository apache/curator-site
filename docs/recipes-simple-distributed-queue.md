---
sidebar_label: 'Simple Distributed Queue'
---

# Recipe: Simple Distributed Queue

:::caution

We recommend that you do NOT use ZooKeeper for Queues. Please see [Tech Note 4](tech-note-04.md) for details.

:::

## Description

A drop-in replacement for the DistributedQueue that comes with the ZK distribution.

## Participating Classes

* SimpleDistributedQueue

## Usage

### Creating a SimpleDistributedQueue

```java
// Parameters:
// client - the client
// path - path to store queue nodes
public SimpleDistributedQueue(CuratorFramework client, String path);
```

### Add to the queue

```java
// Inserts data into queue.
// Parameters:
// data - the data
// Returns:
// true if data was successfully added
public boolean offer(byte[] data) throws Exception;
```

### Take from the queue

```java
// Removes the head of the queue and returns it, blocks until it succeeds.
// Returns:
// The former head of the queue
public byte[] take() throws Exception;
```

:::note

See also the Javadoc for additional methods.

:::

## Error Handling

It is strongly recommended that you add a `ConnectionStateListener` and watch for SUSPENDED and LOST state changes.

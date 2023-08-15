---
sidebar_label: 'Distributed Delay Queue'
---

# Recipe: Distributed Delay Queue

:::caution

We recommend that you do NOT use ZooKeeper for Queues. Please see [Tech Note 4](tech-note-04.md) for details.

:::

## Description

An implementation of a Distributed Delay Queue. A Delay Queue is similar to a Priority Queue. When items are added to the queue, a delay value is given. The item will not be sent to a consumer until the time elapses.

## Participating Classes

* QueueBuilder
* QueueConsumer
* QueueSerializer
* DistributedDelayQueue

## Creating a DistributedDelayQueue

```java
// Parameters:
// client - the curator client
// consumer - message consumer
// serializer - serializer to use for items
// queuePath - path to store queue
public static <T> QueueBuilder<T> builder(
    CuratorFramework client,
    QueueConsumer<T> consumer,
    QueueSerializer<T> serializer,
    java.lang.String queuePath
);
```

```java
QueueBuilder<MessageType> builder = QueueBuilder.builder(client, consumer, serializer, path);
// ... more builder method calls as needed ...
DistributedDelayQueue<MessageType> queue = builder.buildDelayQueue();
```

## General Usage


The queue must be started via the `start()` method. Call `close()` when you are done with the queue.

To add messages to the queue:

```java
queue.put(aMessage, delayUntilEpoch);
```

The consumer (`QueueConsumer.consumeMessage()`) will get called as messages arrive. `delayUntilEpoch` is a future epoch (milliseconds) when this item will be available to consumers.

## Lock Safety

In the general usage case, the message is removed from the queue prior to the consumer being called. A more atomic mode is provided that removes the item from the queue only after the consumer successfully returns. To enable this mode, call the `lockPath()` method of the Queue Builder. This uses a lock to make the message recoverable. A lock is held while the message is being processed - this prevents other processes from taking the message. The message will not be removed from the queue until the consumer functor returns. Thus, if there is a failure or the process dies, the message will get sent to another process. There is a small performance penalty for this behavior however.

## Data Format

Same as [Distributed Queue](recipes-distributed-queue.md).

## Error Handling

The `QueueConsumer` class extends `ConnectionStateListener`. When the queue is started, it adds the listener to the Curator instance. Users of the `DistributedPriorityQueue` must pay attention to any connection state changes.

If the SUSPENDED state is reported, the instance must assume that, until it receives a RECONNECTED state, the queue is no longer being updated. If the LOST state is reported, the queue is permanently down.



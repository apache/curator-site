---
sidebar_label: 'Distributed Priority Queue'
---

# Recipe: Distributed Priority Queue

:::caution

We recommend that you do NOT use ZooKeeper for Queues. Please see [Tech Note 4](tech-note-04.md) for details.

:::

## Description

An implementation of the Distributed Priority Queue ZK recipe.

## Participating Classes

* QueueBuilder
* QueueConsumer
* QueueSerializer
* DistributedPriorityQueue

## Creating a DistributedPriorityQueue

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
DistributedPriorityQueue<MessageType> queue = builder.buildPriorityQueue(minItemsBeforeRefresh);
```

```java
// Parameters:
// minItemsBeforeRefresh - minimum items to process before refreshing the item list
public DistributedPriorityQueue<T> buildPriorityQueue(int minItemsBeforeRefresh);
```

Build a DistributedPriorityQueue from the current builder values.

When the priority queue detects an item addition/removal, it will stop processing its current list of items and refresh the list. minItemsBeforeRefresh modifies this. It determines the minimum number of items from the active list that will get processed before a refresh.

Due to a quirk in the way ZooKeeper notifies changes, the queue will get an item addition/remove notification after every item is processed. This can lead to poor performance. Set minItemsBeforeRefresh to the value your application can tolerate being out of sync.

For example: if the queue sees 10 items to process, it will end up making 10 calls to ZooKeeper to check status. You can control this by setting minItemsBeforeRefresh to 10 (or more) and the queue will only refresh with ZooKeeper after 10 items are processed

## General Usage

The queue must be started via the `start()` method. Call `close()` when you are done with the queue.

To add messages to the queue:

```java
queue.put(aMessage, priority);
```

The consumer (`QueueConsumer.consumeMessage()`) will get called as messages arrive.

## Lock Safety

In the general usage case, the message is removed from the queue prior to the consumer being called. A more atomic mode is provided that removes the item from the queue only after the consumer successfully returns. To enable this mode, call the `lockPath()` method of the Queue Builder. This uses a lock to make the message recoverable. A lock is held while the message is being processed - this prevents other processes from taking the message. The message will not be removed from the queue until the consumer functor returns. Thus, if there is a failure or the process dies, the message will get sent to another process. There is a small performance penalty for this behavior, however.

## Data Format

Same as [Distributed Queue](recipes-distributed-queue.md#data-format).

## Error Handling

The `QueueConsumer` class extends `ConnectionStateListener`. When the queue is started, it adds the listener to the Curator instance. Users of the `DistributedPriorityQueue` must pay attention to any connection state changes.

If the SUSPENDED state is reported, the instance must assume that, until it receives a RECONNECTED state, the queue is no longer being updated. If the LOST state is reported, the queue is permanently down.

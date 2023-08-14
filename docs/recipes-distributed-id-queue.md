---
sidebar_label: 'Distributed ID Queue'
---

# Recipe: Distributed ID Queue

:::caution

We recommend that you do NOT use ZooKeeper for Queues. Please see [Tech Note 4](tech-note-04.md) for details.

:::

## Description

This is an alternate version of [Distributed Queue](recipes-distributed-queue.md) that supports assigning IDs to the items added to the queue. Items put into the queue are guaranteed to be ordered (by means of ZK's PERSISTENTSEQUENTIAL node). If a single consumer takes items out of the queue, they will be ordered FIFO. If ordering is important, use a LeaderSelector to nominate a single consumer.

## Participating Classes

* QueueBuilder
* QueueConsumer
* QueueSerializer
* DistributedQueue

## Creating a DistributedIdQueue

See [Distributed Queue](recipes-distributed-queue.md) for details of using the builder, the only difference is to use the `buildIdQueue()` method.

## General Usage

The queue must be started via the `start()` method. Call `close()` when you are done with the queue.

To add messages to the queue:

```java
queue.put(aMessage, messageId);
```

To remove messages from the queue:

```java
int numberRemoved = queue.remove(messageId);
```

Your consumer (`QueueConsumer.consumeMessage()`) will get called as messages arrive.

The lock safety and error handling are the same as for [Distributed Queue](recipes-distributed-queue.md).

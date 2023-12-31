---
sidebar_label: 'Distributed Queue'
---

# Recipe: Distributed Queue

:::caution

We recommend that you do NOT use ZooKeeper for Queues. Please see [Tech Note 4](tech-note-04.md) for details.

:::

## Description

An implementation of the Distributed Queue ZK recipe. Items put into the queue are guaranteed to be ordered (by means of ZK's PERSISTENTSEQUENTIAL node). If a single consumer takes items out of the queue, they will be ordered FIFO. If ordering is important, use a LeaderSelector to nominate a single consumer.

## Participating Classes

* QueueBuilder
* QueueConsumer
* QueueSerializer
* DistributedQueue

### Creating a DistributedQueue

```java
// Parameters:
// client - the curator client
// consumer - functor to receive messages
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
QueueBuilder<MessageType>    builder = QueueBuilder.builder(client, consumer, serializer, path);
// ... more builder method calls as needed ...
DistributedQueue<MessageType queue = builder.build();
```

## General Usage

The queue must be started via the `start()` method. Call `close()` when you are done with the queue.

To add messages to the queue:

```java
queue.put(aMessage);
```

Your consumer (`QueueConsumer.consumeMessage()`) will get called as messages arrive.

## Lock Safety

In the general usage case, the message is removed from the queue prior to the consumer being called. A more atomic mode is provided that removes the item from the queue only after the consumer successfully returns. To enable this mode, call the `lockPath()` method of the Queue Builder. This uses a lock to make the message recoverable. A lock is held while the message is being processed - this prevents other processes from taking the message. The message will not be removed from the queue until the consumer functor returns. Thus, if there is a failure or the process dies, the message will get sent to another process. There is a small performance penalty for this behavior however.

## Data Format

The Distributed queue writes messages using this format:

| Offset | Size | Description                                     |
|--------|------|-------------------------------------------------|
| 0      | 4    | Format version. Currently 0x00010001            |
| 4      | 1    | Opcode: 0x01 = message, 0x02 = End of data      |
| 5      | 4    | Message byte length                             |
| 9      | n    | Message: serialized message bytes               |
| 9 + n  | ...  | Next set of opcode-size-bytes until end of data |

## Error Handling

The `QueueConsumer` class extends `ConnectionStateListener`. When the queue is started, it adds the listener to the Curator instance. Users of the `DistributedQueue` must pay attention to any connection state changes.

If the SUSPENDED state is reported, the instance must assume that, until it receives a RECONNECTED state, the queue is no longer being updated. If the LOST state is reported, the queue is permanently down.

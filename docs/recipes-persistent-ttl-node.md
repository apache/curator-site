---
sidebar_label: 'Persistent TTL Node'
---

# Recipe: Persistent TTL Node

## Description

PersistentTtlNode is useful when you need to create a TTL node but don't want to keep it alive manually by periodically setting data - PersistentTtlNode does that for you. Further the keep-alive is done in a way that does not generate watch triggers on the parent node. It also provides similar guarantees that a [Persistent Node](recipes-persistent-node.md) does: the node attempts to stay present in ZooKeeper, even through connection and session interruptions.

## Participating Classes

* PersistentNode
* PersistentTtlNode

## Creating a PersistentTtlNode

```
// Parameters:
// client - client instance
// path path for the parent ZNode
// ttlMs max ttl for the node in milliseconds
// initData - initData for the node
public PersistentTtlNode(CuratorFramework client, String path, long ttlMs, byte[] initData);
```

## General Usage

PersistentTtlNode must be started:

```java
node.start();
```

When you are through with the PersistentTtlNode instance, you should call close:

```java
node.close();
```

... this will NOT delete the node immediately. The node will get deleted based on the ttl.

## Error Handling

PersistentTtlNode instances internally handle all error states recreating the node as necessary.

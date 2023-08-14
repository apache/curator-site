---
sidebar_label: 'Persistent Node'
---

# Recipe: Persistent Node

## Description

A persistent node is a node that attempts to stay present in ZooKeeper, even through connection and session interruptions.

## Participating Classes

* PersistentNode

## Creating a PersistentNode

```java
// Parameters:
// client - client instance
// mode - creation mode
// useProtection - if true, call CreateBuilder.withProtection()
// basePath - the base path for the node
// data - data for the node
// useParentCreation - if true, call CreateBuilder.creatingParentContainersIfNeeded()
public PersistentNode(
    CuratorFramework client,
    CreateMode mode,
    boolean useProtection,
    String basePath,
    byte[] data,
    boolean useParentCreation
);
```

## General Usage

PersistentNodes must be started:

```java
node.start();
```

When you are through with the PersistentNode instance, you should call close:

```java
node.close();
```

... this will delete the node

## Error Handling

PersistentNode instances internally handle all error states recreating the node as necessary.

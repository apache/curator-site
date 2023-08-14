---
sidebar_label: 'Leader Latch'
---

# Recipe: Leader Latch

## Description

In distributed computing, leader election is the process of designating a single process as the organizer of some task distributed among several computers (nodes). Before the task is begun, all network nodes are unaware which node will serve as the "leader", or coordinator, of the task. After a leader election algorithm has been run, however, each node throughout the network recognizes a particular, unique node as the task leader.

:::note

Curator has two leader election recipes. Which one to use depends on your requirements.

:::

## Participating Classes

* LeaderLatch

## Creating a LeaderLatch

```java
// Parameters:
// client - the client
// latchPath - the path for this leadership group
public LeaderLatch(CuratorFramework client, String latchPath);
```

```java
// Parameters:
// client - the client
// latchPath - the path for this leadership group
// id - participant ID
public LeaderLatch(CuratorFramework client, String latchPath, String id);
```

## General Usage

LeaderLatches must be started:

```java
leaderLatch.start();
```

Once started, the LeaderLatch will negotiate with any other LeaderLatch participants that use the same latch path and randomly choose one of them to be the leader. At any time, you can determine if a given instance is the leader by calling:

```java
// Return true if leadership is currently held by this instance
public boolean hasLeadership();
```

Similar to the JDK's CountDownLatch, LeaderLatch has methods that block until leadership is acquired:

```java
// Causes the current thread to wait until this instance acquires leadership
// unless the thread is interrupted or closed.
public void await() throws InterruptedException, EOFException;
```

```java
// Causes the current thread to wait until this instance acquires leadership unless
// the thread is interrupted, the specified waiting time elapses or the instance is closed.

// Parameters:
// timeout - the maximum time to wait
// unit - the time unit of the timeout argument
// Returns:
// true if the count reached zero and false if the waiting time elapsed before the count
// reached zero or the instances was closed
public boolean await(long timeout, TimeUnit unit) throws InterruptedException
```

When you are through with the LeaderLatch instance, you must call close. This removes the instance from the leader election and releases leadership if the instance has it. Once leadership is released, another participating instance (if any) will be chosen as leader.

```java
leaderLatch.close();
```

## Error Handling

LeaderLatch instances add a ConnectionStateListener to watch for connection problems. If SUSPENDED or LOST is reported, the LeaderLatch that is the leader will report that it is no longer the leader (i.e. there will not be a leader until the connection is re-established). If a LOST connection is RECONNECTED, the LeaderLatch will delete its previous ZNode and create a new one.

Users of LeaderLatch must take account that connection issues can cause leadership to be lost. i.e. hasLeadership() returns true but some time later the connection is SUSPENDED or LOST. At that point hasLeadership() will return false. It is highly recommended that LeaderLatch users register a ConnectionStateListener.

---
sidebar_label: 'Leader Election'
---

# Recipe: Leader Election

## Description

In distributed computing, leader election is the process of designating a single process as the organizer of some task distributed among several computers (nodes). Before the task is begun, all network nodes are unaware which node will serve as the "leader," or coordinator, of the task. After a leader election algorithm has been run, however, each node throughout the network recognizes a particular, unique node as the task leader.

:::note

Curator has two leader election recipes. Which one to use depends on your requirements.

:::

## Participating Classes

* LeaderSelector
* LeaderSelectorListener
* LeaderSelectorListenerAdapter
* CancelLeadershipException

### Creating a LeaderSelector

```java
// Parameters:
// client - the client
// mutexPath - the path for this leadership group
// listener - listener
public LeaderSelector(CuratorFramework client, String mutexPath, LeaderSelectorListener listener);
```

```
// Parameters:
// client - the client
// mutexPath - the path for this leadership group
// threadFactory - factory to use for making internal threads
// executor - the executor to run in
// listener - listener
public LeaderSelector(
    CuratorFramework client,
    String mutexPath,
    ThreadFactory threadFactory,
    Executor executor,
    LeaderSelectorListener listener
);
```

## General Usage

LeaderSelectors must be started:

```java
leaderSelector.start();
```

Once started, the `takeLeadership()` of your listener will be called when you have leadership. Your `takeLeadership()` method should only return when leadership is being relinquished.

When you are through with the LeaderSelector instance, you should call close:

```java
leaderSelector.close();
```

## Error Handling

The `LeaderSelectorListener` class extends `ConnectionStateListener`. When the LeaderSelector is started, it adds the listener to the Curator instance. Users of the `LeaderSelector` must pay attention to any connection state changes. If an instance becomes the leader, it should respond to notification of being SUSPENDED or LOST. If the SUSPENDED state is reported, the instance must assume that it might no longer be the leader until it receives a RECONNECTED state. If the LOST state is reported, the instance is no longer the leader and its `takeLeadership` method should exit.

:::caution

The recommended action for receiving SUSPENDED or LOST is to throw `CancelLeadershipException`. This will cause the LeaderSelector instance to attempt to interrupt and cancel the thread that is executing the `takeLeadership` method. Because this is so important, you should consider extending `LeaderSelectorListenerAdapter`. `LeaderSelectorListenerAdapter` has the recommended handling already written for you.

:::

# Utilities

## Test Server

In the curator-test sub-model the `TestingServer` class is provided. This class creates a local, in-process ZooKeeper server that can be used for testing.

## Test Cluster

In the curator-test sub-model the `TestingCluster` class is provided. This class creates an internally running ensemble of ZooKeeper servers.

## ZKPaths

Various static methods to help with using ZooKeeper ZNode paths:

* getNodeFromPath: Given a full path, return the node name. i.e. "/one/two/three" will return "three"
* mkdirs: Make sure all the nodes in the path are created.
* getSortedChildren: Return the children of the given path sorted by sequence number
* makePath: Given a parent path and a child node, create a combined full path

## Circuit Breaking ConnectionStateListener

During network outages ZooKeeper can become very noisy sending connection/disconnection events in rapid succession. Curator recipes respond to these messages by resetting state, etc. E.g. LeaderLatch must delete its lock node and try to recreate it in order to try to re-obtain leadership, etc.

This noisy herding can be avoided by using the circuit breaking listener. When it receives ConnectionState.SUSPENDED, the circuit becomes "open" (based on the provided RetryPolicy) and will ignore future connection state changes until RetryPolicy timeout has elapsed. Note: however, if the connection goes from ConnectionState.SUSPENDED to ConnectionState.LOST the first LOST state is sent.

When the circuit is closed, all connection state changes are forwarded to the managed listener. When the first disconnected state is received, the circuit becomes open. The state change that caused the circuit to open is sent to the managed listener and the RetryPolicy will be used to get a delay amount. While the delay is active, the circuit breaker will store state changes but will not forward them to the managed listener (except, however, the first time the state changes from SUSPENDED to LOST). When the delay elapses, if the connection has been restored, the circuit closes and forwards the new state to the managed listener. If the connection has not been restored, the RetryPolicy is checked again. If the RetryPolicy indicates another retry is allowed the process repeats. If, however, the RetryPolicy indicates that retries are exhausted then the circuit closes - if the current state is different than the state that caused the circuit to open it is forwarded to the managed listener.

You can enable the Circuit Breaking ConnectionStateListener during creation of your CuratorFramework instance. E.g.,

```java
ConnectionStateListenerManagerFactory factory = ConnectionStateListenerManagerFactory.circuitBreaking(...retry policy for circuit breaking...);
CuratorFramework client = CuratorFrameworkFactory.builder()
   .connectionStateListenerManagerFactory(factory)
   ... etc ...
   .build();
// all connection state listeners set for "client" will get circuit breaking behavior
```

## Locker

Curator's Locker uses Java 7's try-with-resources feature to making using Curator locks safer:

```java
InterProcessMutex mutex = new InterProcessMutex(...); // or any InterProcessLock
try (Locker locker = new Locker(mutex, maxTimeout, unit)) {
   // do work
}
```

## BlockingQueueConsumer

See: [DistributedQueue](recipes-distributed-queue.md) and [DistributedPriorityQueue](recipes-distributed-priority-queue.md).

A queue consumer that provides behavior similar to a JDK's BlockingQueue.

## QueueSharder

Due to limitations in ZooKeeper's transport layer, a single queue will break if it has more than 10K-ish items in it. This class provides a facade over multiple distributed queues. It monitors the queues and if any one of them goes over a threshold, a new queue is added. Puts are distributed amongst the queues.

## WatcherRemoveCuratorFramework

Curator has a utility that makes it easy to set watchers and remove them at a later date. It is used for all Curator recipes. From your CuratorFramework instance, call `newWatcherRemoveCuratorFramework()`. When using this proxy instance any watchers that are set are recorded. You can then call `removeWatchers()` to remove those watchers. See the Curator source code for usage details.

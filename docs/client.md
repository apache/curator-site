# Client

## IMPORTANT NOTE

The Curator Client is a low-level API. It is strongly recommended that you use the Curator [Framework](framework.md) instead of directly using CuratorZookeeperClient.

## Background

CuratorZookeeperClient is a wrapper around ZooKeeper's Java client that makes client access to ZooKeeper much simpler and less error prone. It provides the following features:

* Continuous connection management - ZooKeeper has many caveats regarding connection management (see the ZooKeeper FAQ for details). CuratorZookeeperClient takes care of most of them automatically.
* Operation retry utilities - a method for retrying operations is provided
* Test ZooKeeper server - an in-process, self-contained ZooKeeper test server is provided that can be used for test cases and experimentation

## Method Documentation

| Method                          | Description                                                                                                                                                                                                                                                                                                                                                        |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Constructor                     | Create a connection to a given ZooKeeper cluster. You can pass in an optional watcher. You must provide a Retry Policy.                                                                                                                                                                                                                                            |
| getZooKeeper()                  | Returns the managed ZooKeeper instance. **IMPORTANT NOTES**: a) It takes time for a connection to complete, you should validate that the connection is complete before using other methods. b) The managed ZooKeeper instance can change due to certain events. Do not hold on to the instance for long periods. Always get a fresh reference from getZooKeeper(). |
| isConnected()                   | Returns true if the ZooKeeper client is currently connected (this can always change due to errors)                                                                                                                                                                                                                                                                 |
| blockUntilConnectedOrTimedOut() | A convenience method that blocks until the initial connection is successful or times out                                                                                                                                                                                                                                                                           |
| close()                         | Close the connection                                                                                                                                                                                                                                                                                                                                               |
| setRetryPolicy()                | Change the retry policy                                                                                                                                                                                                                                                                                                                                            |
| newRetryLoop()                  | Allocate a new Retry Loop - see details below                                                                                                                                                                                                                                                                                                                      |

## Retry Loop

For a variety of reasons, operations on a ZooKeeper cluster can fail. Best practices dictate that these operations should be retried. The Retry Loop mechanism provides the means to do this. **Every operation should be wrapped in a retry loop**. Here's the canonical usage:

```java
RetryLoop retryLoop = client.newRetryLoop();
while (retryLoop.shouldContinue()) {
   try {
       // perform your work
       ...
       // it's important to re-get the ZK instance as there may have been an error and the instance was re-created
       ZooKeeper zk = client.getZookeeper();
       retryLoop.markComplete();
   } catch (Exception e) {
       retryLoop.takeException(e);
   }
}
```

The Retry Loop maintains a count of retries and determines if a given error is retry-able. If an operation is a candidate for retrying, the Retry Policy is invoked to determine if the retry should proceed.

As a convenience, RetryLoop has a static method that takes a Callable to perform a complete retry loop on. E.g.,

```java
RetryLoop.callWithRetry(client, new Callable<Void>() {
      @Override
      public Void call() throws Exception {
          // do your work here - it will get retried if needed
          return null;
      }
});
```

## Retry Policies

A retry policy is a mechanism to alter retry behavior. It is abstracted by the RetryPolicy interface which has one method: `public boolean allowRetry(int retryCount, long elapsedTimeMs);`. Before a retry is attempted, allowRetry() is called with the current retry count and the elapsed time of the operation. If the policy allows it, the retry is attempted. If not, an exception is thrown.

Several retry policy implementations are provided (in the package org.apache.curator.retry):

| Policy Name             | Description                                                                                |
|-------------------------|--------------------------------------------------------------------------------------------|
| ExponentialBackoffRetry | Retry policy that retries a set number of times with increasing sleep time between retries |
| RetryNTimes             | Retry policy that retries a max number of times                                            |
| RetryOneTime            | A retry policy that retries only once                                                      |
| RetryUntilElapsed       | A retry policy that retries until a given amount of time elapses                           |

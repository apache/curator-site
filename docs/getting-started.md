# Getting Started

## Learn ZooKeeper

Curator users are assumed to know ZooKeeper. A good place to start is here: https://zookeeper.apache.org/doc/current/zookeeperStarted.html

## Using Curator

The Curator JARs are available from Maven Central. The various artifacts are listed on the [main page](about.md). Users of Maven, Gradle, Ant, etc. can easily include Curator into their build script.

Most users will want to use one of Curator's pre-built recipes. So, the curator-recipes is the correct artifact to use. If you only want a wrapper around ZooKeeper that adds connection management and retry policies, use curator-framework.

## Getting a Connection

Curator uses [Fluent Style](https://en.wikipedia.org/wiki/Fluent_interface). If you haven't used this before, it might seem odd, so it's suggested that you familiarize yourself with the style.

Curator connection instances (`CuratorFramework`) are allocated from the `CuratorFrameworkFactory`. You only need **one** `CuratorFramework` object for each ZooKeeper cluster you are connecting to:

```java
CuratorFrameworkFactory.newClient(zookeeperConnectionString, retryPolicy)
```

This will create a connection to a ZooKeeper cluster using default values. The only thing that you need to specify is the retry policy. For most cases, you should use:

```java
RetryPolicy retryPolicy = new ExponentialBackoffRetry(1000, 3)
CuratorFramework client = CuratorFrameworkFactory.newClient(zookeeperConnectionString, retryPolicy);
client.start();
```

The client must be started (and closed when no longer needed).

## Calling ZooKeeper Directly

Once you have a CuratorFramework instance, you can make direct calls to ZooKeeper in a similar way to using the raw ZooKeeper object provided in the ZooKeeper distribution. E.g.:

```java
client.create().forPath("/my/path", myData)
```

The benefit here is that Curator manages the ZooKeeper connection and will retry operations if there are connection problems.

## Recipes

### Distributed Lock

```java
InterProcessMutex lock = new InterProcessMutex(client, lockPath);
if (lock.acquire(maxWait, waitUnit)) {
    try {
        // do some work inside of the critical section here
    } finally {
        lock.release();
    }
}
```

### Leader Election

```java
LeaderSelectorListener listener = new LeaderSelectorListenerAdapter() {
    public void takeLeadership(CuratorFramework client) throws Exception {
        // this callback will get called when you are the leader
        // do whatever leader work you need to and only exit
        // this method when you want to relinquish leadership
    }
}

LeaderSelector selector = new LeaderSelector(client, path, listener);
selector.autoRequeue();  // not required, but this is behavior that you will probably expect
selector.start();
```

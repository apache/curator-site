# Framework

The Curator Framework is a high-level API that greatly simplifies using ZooKeeper. It adds many features that build on ZooKeeper and handles the complexity of managing connections to the ZooKeeper cluster and retrying operations. Some of the features are:

* Automatic connection management:
    * There are potential error cases that require ZooKeeper clients to recreate a connection and/or retry operations. Curator automatically and transparently (mostly) handles these cases.
    * Watches for NodeDataChanged events and calls updateServerList() as needed.
    * Watches are automatically removed by Curator recipes
* Cleaner API:
  * simplifies the raw ZooKeeper methods, events, etc.
  * provides a modern, fluent interface
* Recipe implementations (see [Recipes](recipes.md)):
  * Leader election
  * Shared lock
  * Path cache and watcher
  * Distributed Queue
  * Distributed Priority Queue
  * ...

A Java 8 asynchronous version of CuratorFramework is also available: [Curator Async](async.md).

## Allocating a Curator Framework Instance

CuratorFrameworks are allocated using the CuratorFrameworkFactory which provides both factory methods and a builder for creating instances. IMPORTANT: CuratorFramework instances are fully thread-safe. You should share one CuratorFramework per ZooKeeper cluster in your application.

The factory methods (newClient()) provide a simplified way of creating an instance. The Builder gives control over all parameters. Once you have a CuratorFramework instance, you must call the start() method. At the end of your application, you should call close().

## CuratorFramework API

The CuratorFramework uses a Fluent-style interface. Operations are constructed using builders returned by the CuratorFramework instance. When strung together, the methods form sentence-like statements. e.g.,

```java
client.create().forPath("/head", new byte[0]);
client.delete().inBackground().forPath("/head");
client.create().withMode(CreateMode.EPHEMERAL_SEQUENTIAL).forPath("/head/child", new byte[0]);
client.getData().watched().inBackground().forPath("/test");
```

### Methods

| Method          | Description                                                                                                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| create()        | Begins a create operation. Call additional methods (mode or background) and finalize the operation by calling forPath()                                               |
| delete()        | Begins a delete operation. Call additional methods (version or background) and finalize the operation by calling forPath()                                            |
| checkExists()   | Begins an operation to check that a ZNode exists. Call additional methods (watch or background) and finalize the operation by calling forPath()                       |
| getData()       | Begins an operation to get a ZNode's data. Call additional methods (watch, background or get stat) and finalize the operation by calling forPath()                    |
| setData()       | Begins an operation to set a ZNode's data. Call additional methods (version or background) and finalize the operation by calling forPath()                            |
| getChildren()   | Begins an operation to get a ZNode's list of children ZNodes. Call additional methods (watch, background or get stat) and finalize the operation by calling forPath() |
| transactionOp() | Used to allocate operations to be used with transaction().                                                                                                            |
| transaction()   | Atomically submit a set of operations as a transaction.                                                                                                               |
| getACL()        | Begins an operation to return a ZNode's ACL settings. Call additional methods and finalize the operation by calling forPath()                                         |
| setACL()        | Begins an operation to set a ZNode's ACL settings. Call additional methods and finalize the operation by calling forPath()                                            |
| getConfig()     | Begins an operation to return the last committed configuration. Call additional methods and finalize the operation by calling forEnsemble()                           |
| reconfig()      | Begins an operation to change the configuration. Call additional methods and finalize the operation by calling forEnsemble()                                          |

### Notifications

Notifications for background operations and watches are published via the ClientListener interface. You register listeners with the CuratorFramework instance using the addListener() method. The listener implements two methods:


| Method           | Description                                                                                        |
|------------------|----------------------------------------------------------------------------------------------------|
| eventReceived()  | A background operation has completed or a watch has triggered. Examine the given event for details |

### CuratorEvent

The CuratorEvent object is a super-set POJO that can hold every type of background notification and triggered watch. The useful fields of CuratorEvent depend on the type of event which is exposed via the getType() method.


| Event Type  | Event Methods                                        |
|-------------|------------------------------------------------------|
| CREATE      | getResultCode() and getPath()                        |
| DELETE      | getResultCode() and getPath()                        |
| EXISTS      | getResultCode(), getPath() and getStat()             |
| GET_DATA    | getResultCode(), getPath(), getStat() and getData()  |
| SET_DATA    | getResultCode(), getPath() and getStat()             |
| CHILDREN    | getResultCode(), getPath(), getStat(), getChildren() |
| SYNC        | getResultCode(), getStat()                           |
| GET_ACL     | getResultCode(), getACLList()                        |
| SET_ACL     | getResultCode()                                      |
| TRANSACTION | getResultCode(), getOpResults()                      |
| WATCHED     | getWatchedEvent()                                    |
| GET_CONFIG  | getResultCode(), getData()                           |
| RECONFIG    | getResultCode(), getData()                           |

## Namespaces

Because a ZooKeeper cluster is a shared environment, it's vital that a namespace convention is observed so that various applications that use a given cluster don't use conflicting ZK paths.

The CuratorFramework has a concept of a "namespace". You set the namespace when creating a CuratorFramework instance (via the Builder). The CuratorFramework will then prepend the namespace to all paths when one of its APIs is called. i.e.,

```java
CuratorFramework client = CuratorFrameworkFactory.builder().namespace("MyApp") ... build();
client.create().forPath("/test", data);
// node was actually written to: "/MyApp/test"
```

## Temporary Connections

Temporary CuratorFramework instances are meant for single requests to ZooKeeper ensembles over a failure prone network such as a WAN. The APIs available from CuratorTempFramework are limited. Further, the connection will be closed after a period of inactivity.

This is based on an idea mentioned in a post by Camille Fournier: http://whilefalse.blogspot.com/2012/12/building-global-highly-available.html.

### Creating a CuratorTempFramework

CuratorTempFramework instances are created via the CuratorFrameworkFactory just like normal CuratorFramework instances. However, instead of calling the `build()` method, call `buildTemp()`. `buildTemp()` creates a CuratorTempFramework instance that closes itself after 3 minutes of inactivity. There is an alternate version of `buildTemp()` that allows you to specify the inactivity period.

### Limited API

CuratorTempFramework instances provide the following methods:

```java
/**
 * Stop the client
 */
public void     close();

/**
 * Start a transaction builder
 *
 * @return builder object
 * @throws Exception errors
 */
public CuratorTransaction inTransaction() throws Exception;

/**
 * Start a get data builder
 *
 * @return builder object
 * @throws Exception errors
 */
public TempGetDataBuilder getData() throws Exception;
```



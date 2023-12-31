# Error Handling

## Background

ZooKeeper is a very low level system that requires users to do a lot of housekeeping. See:

* https://cwiki.apache.org/confluence/display/ZOOKEEPER/FAQ

The Curator [Framework](framework.md) is designed to hide as much of the details/tedium of this housekeeping as is possible.

## Connection Guarantees

The Curator Framework constantly monitors the connection to the ZooKeeper ensemble. Further every operation is wrapped in a retry mechanism. Thus, the following guarantees can be made:

* Every Curator operation properly waits until the ZooKeeper connection is established
* Every Curator Framework operation (create, getData, etc.) is guaranteed to manage connection loss and/or session expiration per the currently set retry policy
* If the connection is temporarily lost, Curator will attempt to retry the operation until it succeeds per the currently set retry policy
* All Curator recipes attempt to deal with connection issues in an appropriate way

## Notifications

Curator exposes several listenable interfaces for clients to monitor the state of the ZooKeeper connection.

`ConnectionStateListener` is called when there are connection disruptions. Clients can monitor these changes and take appropriate action. These are the possible state changes:

| State Change | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CONNECTED    | Sent for the first successful connection to the server. NOTE: You will only get one of these messages for any CuratorFramework instance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| READONLY     | The connection has gone into read-only mode. This can only happen if you pass true for CuratorFrameworkFactory.Builder.canBeReadOnly(). See the ZooKeeper doc regarding read only connections: https://cwiki.apache.org/confluence/display/HADOOP2/ZooKeeper+GSoCReadOnlyMode. The connection will remain in read only mode until another state change is sent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| SUSPENDED    | There has been a loss of connection. Leaders, locks, etc. should suspend until the connection is re-established.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| RECONNECTED  | A suspended or lost connection has been re-established.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| LOST         | Curator will set the LOST state when it believes that the ZooKeeper session has expired. ZooKeeper connections have a session. When the session expires, clients must take appropriate action. In Curator, this is complicated by the fact that Curator internally manages the ZooKeeper connection. Curator will set the LOST state when any of the following occurs: a) ZooKeeper returns a Watcher.Event.KeeperState.Expired or KeeperException.Code.SESSIONEXPIRED; b) Curator closes the internally managed ZooKeeper instance; c) The session timeout elapses during a network partition. It is possible to get a RECONNECTED state after this but you should still consider any locks, etc. as dirty/unstable. NOTE: The meaning of LOST has changed since Curator 3.0.0. Prior to 3.0.0 LOST only meant that the retry policy had expired. |

`UnhandledErrorListener` is called when a background task, etc. catches an exception. In general, Curator users shouldn't care about these as they are logged. However, you can listen for them if you choose.

## Error Policy

Curator has a pluggable error policy. The default policy takes the conservative approach of treating connection states SUSPENDED and LOST the same way. i.e. when a recipe sees the state change to SUSPENDED it will assume that the ZooKeeper session is lost and will clean up any watchers, nodes, etc. You can choose, however, a more aggressive approach by setting the error policy to only treat LOST (i.e. true session loss) as an error state. Do this in the CuratorFrameworkFactory via: `connectionStateErrorPolicy(new SessionConnectionStateErrorPolicy())`.

## Recipes

In general, the recipes attempt to deal with errors and connection issues. See the doc for each recipe for details on how it deals with errors.






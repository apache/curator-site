# Tech Note 14

Session expiration in Curator

## Background

As noted in [Tech Note 12](tech-note-12.md), Since 3.x Curator attempts to simulate server side session loss by starting a timer (set to the negotiated session timeout length) upon receiving the SUSPENDED event. This Tech Note expands on this, explains some non-obvious edge cases, and suggests strategies on how to handle them.

## ZooKeeper's Session Handling

The ZooKeeper client (which Curator wraps) and the ZooKeeper server maintain a session that's used for ephemeral nodes, etc. The session is maintained by the sending of heartbeat events. You can read more details here: [ZooKeeper Programmer's Guide](https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html#ch_zkSessions). If the server doesn't receive a heartbeat from the client within 2/3 of a session length, the server closes the connection which ultimately results in the client sending `KeeperState.Disconnected` to any watchers.

## Curator

When Curator receives a `KeeperState.Disconnected` message it changes its state to SUSPENDED (see [Tech Note 12](tech-note-12.md), [Error Handling](errors.md), etc.). As always, our recommendation is to treat SUSPENDED as a complete connection loss. Exit all locks, leaders, etc. That said, since 3.x, Curator tries to simulate session expiration by starting an internal timer when `KeeperState.Disconnected` is received. If the timer expires before the connection is repaired, Curator changes its state to LOST and injects a session end into the managed ZooKeeper client connection. The duration of the timer is set to the value of the "negotiated session timeout" by calling `ZooKeeper#getSessionTimeout()`.

The astute reader will realize that setting the timer to the full value of the session timeout may not be the correct value. This is due to the fact that the server closes the connection when 2/3 of a session have already elapsed. Thus, the server may close a session well before Curator's timer elapses. This is further complicated by the fact that the client has no way of knowing why the connection was closed. There are at least three possible reasons for a client connection to close:

1. The server has not received a heartbeat within 2/3 of a session
2. The server crashed
3. Some kind of general TCP error which causes a connection to fail

In situation 1, the correct value for Curator's timer is 1/3 of a session - i.e. Curator should switch to LOST if the connection is not repaired within 1/3 of a session as 2/3 of the session has already lapsed from the server's point of view. In situations 2 and 3 however, Curator's timer should be the full value of the session (possibly plus some "slop" value). In truth, there is no way to completely emulate in the client the session timing as managed by the ZooKeeper server. So, again, our recommendation is to treat SUSPENDED as complete connection loss.

## Recommendations

* Treat SUSPENDED as a complete connection loss. This will cause more instability in your application but is the safest option
* Use Curator's default session simulation which uses an internal timer of 100% of the negotiated session timeout - this is the default in Curator since 3.x
* If your application demands it, you can instruct Curator's session timer to use 33% of the session timeout (see below). Note: this assumes that connection losses are the result of missed heartbeats with the server which isn't always the case.

## Changing Curator's Session Timer

Note: due to [CURATOR-460](https://issues.apache.org/jira/browse/CURATOR-460) changing the session timer has not worked. This will be fixed when CURATOR-460 is released.

Curator's session timer is handled via the ConnectionHandlingPolicy. You can substitute a 33% session timer using the `StandardConnectionHandlingPolicy` when creating Curator instances via the Factory. E.g.,

```java
CuratorFramework client = CuratorFrameworkFactory.builder()
    .connectionHandlingPolicy(new StandardConnectionHandlingPolicy(33))
        ...other methods...
    .build();
```

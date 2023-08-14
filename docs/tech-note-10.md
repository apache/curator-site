# Tech Note 10

**JVM pauses can cause unexpected client state with improperly chosen session timeouts.**

## Background

Discussions: https://lists.apache.org/thread/1q7vhy8p3v3mxq3159w4tr9x15ywbcrr

ZooKeeper/Curator recipes rely on a consistent view of the state of the ensemble. ZooKeeper's clients maintain a session with the server they are connected to. Clients maintain periodic heartbeats to the server to maintain this session. If a heartbeat is missed, the client goes into Disconnected state. When this happens, Curator goes into SUSPENDED via the ConnectionStateListener. Any locks, etc. must be considered temporarily lost while the connection is SUSPENDED (see the [Error Handling](errors.md) page and the Error Handling section of each recipe's documentation).

The implication of this is that great care must be taken to tune your JVM and choose an appropriate session timeout. Here's an example of what can happen if this is not done:

* A session timeout of 3 seconds is used
* Client A creates a Curator InterProcessMutex and acquires the lock
* Client B also creates a Curator InterProcessMutex for the same path and is blocked waiting for the lock to release
* Client A's JVM has a stop-the-world GC for 10 seconds
  * Client A's session will have lapsed due to missed heartbeats
  * ZooKeeper will delete Client A's EPHEMERAL node representing its InterProcessMutex lock
  * Client B's watcher will fire, and it will successfully gain the lock
* After the GC, Client A will un-pause
* For a short period of time, **BOTH CLIENT A AND CLIENT B WILL BELIEVE THEY ARE THE LOCK HOLDER**

The remedy for this is tune your JVM so that GC pauses (or other kinds of pauses) do not exceed your session timeout. JVM tuning is beyond the scope of this Tech Note. The default Curator session timeout is 60 seconds. Very low session timeouts should be considered risky.

## Summary

There is always an edge case where VM pauses might exceed your client heartbeat and cause a client misperception about it’s state for a short period of time once the VM un-pauses. In practice, a tuned VM that has been running within known bounds for a reasonable period will not exhibit this behavior. Session timeout must match this known bounds in order to have consistent client state.

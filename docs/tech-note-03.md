# Tech Note 3

Dealing with session failure.

## Details

ZooKeeper's clients maintain a session with the server ensemble. Ephemeral nodes are tied to this session. When writing ZooKeeper-based applications you must deal with session expirations (due to network partitions, server crashes, etc.). This ZooKeeper FAQ discusses it: https://cwiki.apache.org/confluence/display/ZOOKEEPER/FAQ

For the most part, Curator shields you from the details of session management. However, Curator's behavior can be modified. By default, Curator treats session failures the same way that it treats connection failures: i.e. the current retry policy is checked and, if permitted, operations are retried.

There are use-cases, though, where a series of operations must be tied to the ZooKeeper session. For example, an ephemeral node is created as a kind of marker then several other ZooKeeper operations are performed. If the session were to fail at any point, the entire operation should fail. Curator's default behavior does not do this. When you need this behavior, use:

```java
SessionFailRetryLoop
```

This is similar to the standard retry loop but if a session fails, any future Curator methods (in the same thread) will also fail.

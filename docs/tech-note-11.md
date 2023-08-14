# Tech Note 11

Curator internally wraps Watchers.

## Details

When you set Watchers using Curator, your Watcher instance is not passed directly to ZooKeeper. Instead, it is wrapped in a special-purpose Curator Watcher (the internal class, NamespaceWatcher). Normally, this is not an issue and is transparent to your client code. However, if you bypass Curator and set a Watcher directly with the ZooKeeper handle, ZooKeeper will not recognize it as the same Watcher set via Curator and that watcher will get called twice when it triggers.

```java
Watcher myWatcher = ...;
curator.getData().usingWatcher(myWatcher).forPath(path);
curator.getZookeeperClient().getZooKeeper().getData(path, myWatcher, stat);
// myWatcher will get called twice when the data for path is changed
```

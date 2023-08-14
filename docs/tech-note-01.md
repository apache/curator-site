# Tech Note 1

ZooKeeper's watches are single threaded.

## Details

When your watcher is called, it should return as quickly as possible. All ZooKeeper watchers are serialized - processed by a single thread. Thus, **no other watchers can be processed while your watcher is running**. For example, a Curator user had a watcher handler something like this:

```java
InterProcessMutex lock = ...;

public void process(WatchedEvent event) {
    lock.acquire();
    // ...
}
```

This **cannot work**. Curator's InterProcessMutex relies on ZooKeeper watchers getting notified. The code above, however, is holding on to the ZooKeeper watcher processing thread. The way to fix this is to run the code that needs a lock in a separate thread. e.g.

```java
InterProcessMutex lock = ...;
ExecutorService service = ...;

public void process(WatchedEvent event) {
    service.submit(new Callable<Void>() {
        @Override
        public Void call() throws Exception {
            lock.acquire();
            // ...
        }
    });
}
```

---
displayed_sidebar: docs
---

# Curator Async Usage

With this DSL you can do asynchronous tasks in a more natural, functional way using [Java 8 lambdas](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html). For example:

```java
// let "client" be a CuratorFramework instance
AsyncCuratorFramework async = AsyncCuratorFramework.wrap(client);
async.checkExists().forPath(somePath).thenAccept(stat -> mySuccessOperation(stat));
```

## Usage

:::note

To use Curator Async, you should be familiar with Java 8's lambdas, CompletedFuture and CompletionStage.

:::

Create a [CuratorFramework](framework.md) instance in the normal way. You then wrap this instance using AsyncCuratorFramework. i.e.,

```java
// let "client" be a CuratorFramework instance
AsyncCuratorFramework async = AsyncCuratorFramework.wrap(client);
```

AsyncCuratorFramework has most of the same builder methods that CuratorFramework does with some important differences:

* AsyncCuratorFramework builders return AsyncStage instances
* AsyncCuratorFramework builders have no checked exceptions
* Many of the builder methods have been simplified/clarified
* All builders invoke the asynchronous versions of ZooKeeper APIs
* Watchers also use CompletionStages - see below for details

### AsyncStage

AsyncStage instances extend Java 8's CompletionStage. CompletionStage objects can be "completed" with a success value or an exception. The parameterized type of the AsyncStage will be whatever the builder used would naturally return as a success value. E.g. the async getData() builder's AsyncStage is parameterized with "byte[]".

### Watchers

ZooKeeper's watchers also get the CompletionStage treatment in Curator Async. To add a watcher, call watched() prior to starting the appropriate builders. E.g.,

```java
async.watched().getData().forPath(path) ...
```

Thus, a data watcher will be set on the specified path. You access the CompletionStage for the watcher by using the event() method of AsyncStage. Here is a complete example:

```java
async.watched().getData().forPath(path).event().thenAccept(watchedEvent -> watchWasTriggered(watchedEvent));
```

ZooKeeper calls watchers when there is a connection loss. This can make using the CompletionStage somewhat complicated (see AsyncEventException below). If you are not interested in watcher connection problems, you can tell Curator Async to not send them by calling:

```java
// only complete the CompletionStage when the watcher is successfully triggered
// i.e. don't complete on connection issues
async.with(WatchMode.successOnly).watched()...
```

### AsyncEventException

When an async watcher fails the exception set in the CompletionStage will be of type `AsyncEventException`. This exception allows you to see the KeeperState that caused the trigger and allows you to reset the completion stage. Reset is needed because ZooKeeper temporarily triggers watchers when there is a connection event (unless `WatchMode.successOnly` is used). However, the watcher stays set for the original operation. Use `AsyncEventException#reset` to start a new completion stage that will wait on the next trigger of the watcher.

E.g.,

```java
AsyncStage stage = ...
stage.event().exceptionally(e -> {
    AsyncEventException asyncEx = (AsyncEventException) e;

    // ... note a connection problem ...

    asyncEx.reset().thenAccept(watchedEvent -> watchWasTriggered(watchedEvent));
});
```

### AsyncResult

As a convenience, you can use `AsyncResult` to combine ZooKeeper method value, the ZooKeeper result code and any exception in one object allowing you to not worry about exceptional completions. i.e. the `CompletionStage` returned by `AsyncResult.of()` always completes successfully with an AsyncResult object.

AsyncResult has methods to get either the method result (a path, Stat, etc.), a KeeperException code or a general exception:

```java
Optional<T> getValue();
KeeperException.Code getCode();
Optional<Throwable> getException();
```

Use AsyncResult by wrapping an `AsyncStage` value. i.e.,

```java
CompletionStage<AsyncResult<Stat>> resultStage = AsyncResult.of(async.checkExists().forPath(path));
resultStage.thenAccept(result -> {
    if ( result.getValue().isPresent() ) {
        // ...
    } else if ( result.getCode() == KeeperException.Code.NOAUTH ) {
        // ...
    }
    // etc.
});
```

## Examples

### Create a sequential ZNode

Create a sequential ZNode and, once successfully completed, set a watcher on the ZNode.

:::caution

This code does not deal with errors. Should a connection problem occur or another exception occur, the completion lambda will never be called.

:::

```java
async.create()
    .withMode(PERSISTENT_SEQUENTIAL)
    .forPath(path)
    .thenCompose(actualPath -> async.watched()
                                .getData()
                                .forPath(actualPath)
                                .thenApply(() -> watchTriggered()));

```

### AsyncStage canonical usage

This is the canonical way to deal with AsyncStage. Use the `handle()` method which provides both the success value and the exception. The exception will be non-null on error.

```java
async.create().withOptions(EnumSet.of(doProtected)).forPath(path).handle((actualPath, exception) -> {
    if (exception != null) {
        // handle problem
    } else {
        // actualPath is the path created
    }
    return null;
});
```

### Simplified usage via AsyncResult

```java
AsyncResult.of(async.create().withOptions(EnumSet.of(doProtected)).forPath(path)).thenAccept(result -> {
    if (result.getRawValue() != null) {
        // result.getRawValue() is the path created
    } else {
        // ...
    }
});
```

### Using executors

Your completion routines can operate in a separate thread if you provide an executor.

```java
async.create()
    .withOptions(EnumSet.of(createParentsIfNeeded))
    .forPath("/a/b/c")
    .thenAcceptAsync(path -> handleCreate(path), executor);
```

### Separate handlers

This example shows specifying separate completion handlers for success and exception.

```java
AsyncStage<byte[]> stage = async.getData().forPath("/my/path");
stage.exceptionally(e -> {
    if (e instanceof KeeperException.NoNodeException) {
        // handle no node
    } else {
        // handle other
    }
    return null;
});
stage.thenAccept(data -> processData(data));
```

### Synchronous usage

CompletionStage provides a blocking method as well so that you can block to get the result of an operation. i.e. this makes it possible to use the async APIs in a synchronous way.

```java
// NOTE: get() specifies a checked exception
async.create().forPath("/foo").toCompletableFuture().get();
```

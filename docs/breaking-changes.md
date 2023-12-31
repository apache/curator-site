# Breaking Changes

## Curator 5.0 Breaking Changes

Curator 5.0 contains a few non-backward compatible/breaking changes from previous versions.

* ZooKeeper 3.4.x is no longer supported (the associated `Compatibility` classes/methods have been removed). If you still need to use Curator with ZooKeeper 3.4.x you will need to use a previous version. [Click here for details](zk-compatibility-34.md).
* The old `ListenerContainer` classes have been removed so as not to leak Guava classes into Curator APIs. Instead, use the new `StandardListenerManager`.
* Exhibitor support has been removed.
* `ConnectionHandlingPolicy` and related classes have been removed.
* The `Reaper` and `ChildReaper` classes/recipes have been removed. You should use ZooKeeper container nodes instead.
* `newPersistentEphemeralNode()` and `newPathChildrenCache()` were removed from `GroupMember`.
* `ServiceCacheBuilder<T> executorService(CloseableExecutorService executorService)` was removed from `ServiceCacheBuilder`.
* `ServiceProviderBuilder<T> executorService(CloseableExecutorService executorService)` was removed from `ServiceProviderBuilder`.
* `static boolean shouldRetry(int rc)` was removed from `RetryLoop`.
* `static boolean isRetryException(Throwable exception)` was removed from `RetryLoop`.

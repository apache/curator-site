# Tech Note 2

InterProcessMutex acquire() can be used to return immediately if lock can't be acquired.

## Details

It's not obvious from the docs, but calling InterProcessMutex.acquire(0, unit) will return immediately (i.e. without any waiting) if the lock cannot be acquired.

For example:

```java
InterProcessMutex lock = ...;
boolean didLock = lock.acquire(0, TimeUnit.any);
if (!didLock) {
    // comes back immediately
}
```

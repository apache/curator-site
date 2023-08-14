---
sidebar_label: 'Shared Counter'
---

# Recipe: Shared Counter

## Description

Manages a shared integer. All clients watching the same path will have the up-to-date value of the shared integer (considering ZK's normal consistency guarantees).

## Participating Classes

* SharedCount
* SharedCountReader
* SharedCountListener

## Creating a SharedCounter

```java
// Parameters:
// client - the client
// path - the shared path - i.e. where the shared count is stored
// seedValue - the initial value for the count iff the path has not yet been created
public SharedCount(CuratorFramework client, String path, int seedValue);
```

## General Usage

SharedCounts must be started:

```java
count.start();
```

When you are through with the instance, you should call close:

```java
count.close();
```

```java
// Return the current value of the count
int getCount();
```

```
// Add a listener for changes to the count
void addListener(SharedCountListener listener);
```

```
// Change the shared count value irrespective of its previous state
public void setCount(int newCount);
```

```
// Changes the shared count only if its value has not changed since this client last read it. If the count
// has changed, the value is not set and this client's view of the value is updated. i.e. if the count is
// not successful you can get the updated value by calling getCount().
// Parameters:
// newCount - the new value to attempt
// Returns:
// true if the change attempt was successful, false if not. If the change was not successful, getCount()
// will return the updated value
public boolean trySetCount(int newCount);
```

## Error Handling

The `SharedCountListener` class extends `ConnectionStateListener`. When the SharedCount is started, it adds the listener to the Curator instance. Users of the `SharedCount` must pay attention to any connection state changes.

If the SUSPENDED state is reported, the instance must assume that, until it receives a RECONNECTED state, the count is no longer accurate and isn't being updated. If the LOST state is reported, the count is permanently down.

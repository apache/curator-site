# Recipes

Curator implements all the recipes listed on the ZooKeeper recipes doc (except two phase commit). Click on the recipe name below for detailed documentation.

:::caution

Curator recipes will automatically create parent nodes of paths given to the recipe as `CreateMode.CONTAINER`. Also, see [Tech Note 7](tech-note-07.md) regarding "Curator Recipes Own Their ZNode/Paths".

:::

## Elections

[Leader Latch](recipes-leader-latch.md) - In distributed computing, leader election is the process of designating a single process as the organizer of some task distributed among several computers (nodes). Before the task is begun, all network nodes are unaware which node will serve as the "leader," or coordinator, of the task. After a leader election algorithm has been run, however, each node throughout the network recognizes a particular, unique node as the task leader.

[Leader Election](recipes-leader-election.md) - Initial Curator leader election recipe.

## Locks

[Shared Reentrant Lock](recipes-shared-reentrant-lock.md) - Fully distributed locks that are globally synchronous, meaning at any snapshot in time no two clients think they hold the same lock.

[Shared Lock](recipes-shared-lock.md) - Similar to Shared Reentrant Lock but not reentrant.

[Shared Reentrant Read Write Lock](recipes-shared-reentrant-read-write-lock.md) - A re-entrant read/write mutex that works across JVMs. A read write lock maintains a pair of associated locks, one for read-only operations and one for writing. The read lock may be held simultaneously by multiple reader processes, so long as there are no writers. The write lock is exclusive.

[Shared Semaphore](recipes-shared-semaphore.md) - A counting semaphore that works across JVMs. All processes in all JVMs that use the same lock path will achieve an inter-process limited set of leases. Further, this semaphore is mostly "fair" - each user will get a lease in the order requested (from ZK's point of view).

[Multi Shared Lock](recipes-multi-shared-lock.md) - A container that manages multiple locks as a single entity. When acquire() is called, all the locks are acquired. If that fails, any paths that were acquired are released. Similarly, when release() is called, all locks are released (failures are ignored).

## Barriers

[Barrier](recipes-barrier.md) - Distributed systems use barriers to block processing of a set of nodes until a condition is met at which time all the nodes are allowed to proceed.

[Double Barrier](recipes-double-barrier.md) - Double barriers enable clients to synchronize the beginning and the end of a computation. When enough processes have joined the barrier, processes start their computation and leave the barrier once they have finished.

## Counters

[Shared Counter](recipes-shared-counter.md) - Manages a shared integer. All clients watching the same path will have the up-to-date value of the shared integer (considering ZK's normal consistency guarantees).

[Distributed Atomic Long](recipes-distributed-atomic-long.md) - A counter that attempts atomic increments. It first tries using optimistic locking. If that fails, an optional InterProcessMutex is taken. For both optimistic and mutex, a retry policy is used to retry the increment.

## Caches

[Curator Cache](recipes-curator-cache.md) - A utility that attempts to keep the data from a node locally cached. Optionally the entire tree of children below the node can also be cached. Will respond to update/create/delete events, pull down the data, etc. You can register listeners that will get notified when changes occur.

[Path Cache](recipes-path-cache.md) - (For preZooKeeper 3.6.x) A Path Cache is used to watch a ZNode. Whenever a child is added, updated or removed, the Path Cache will change its state to contain the current set of children, the children's data and the children's state. Path caches in the Curator Framework are provided by the PathChildrenCache class. Changes to the path are passed to registered PathChildrenCacheListener instances.

[Node Cache](recipes-node-cache.md) - (For preZooKeeper 3.6.x) A utility that attempts to keep the data from a node locally cached. This class will watch the node, respond to update/create/delete events, pull down the data, etc. You can register a listener that will get notified when changes occur.

[Tree Cache](recipes-tree-cache.md) - (For preZooKeeper 3.6.x) A utility that attempts to keep all data from all children of a ZK path locally cached. This class will watch the ZK path, respond to update/create/delete events, pull down the data, etc. You can register a listener that will get notified when changes occur.

## Nodes/Watches

[Persistent Recursive Watcher](recipes-persistent-watcher.md) - A managed persistent recursive watcher. The watch will be managed such that it stays set through connection lapses, etc.

[Persistent Node](recipes-persistent-node.md) - A node that attempts to stay present in ZooKeeper, even through connection and session interruptions.

[Persistent TTL Node](recipes-persistent-ttl-node.md) - Useful when you need to create a TTL node but don't want to keep it alive manually by periodically setting data.

[Group Member](recipes-group-member.md) - Group membership management. Adds this instance into a group and keeps a cache of

## Queues

[Distributed Queue](recipes-distributed-queue.md) - An implementation of the Distributed Queue ZK recipe. Items put into the queue are guaranteed to be ordered (by means of ZK's PERSISTENTSEQUENTIAL node). If a single consumer takes items out of the queue, they will be ordered FIFO. If ordering is important, use a LeaderSelector to nominate a single consumer.

[Distributed ID Queue](recipes-distributed-id-queue.md) - A version of DistributedQueue that allows IDs to be associated with queue items. Items can then be removed from the queue if needed.

[Distributed Priority Queue](recipes-distributed-priority-queue.md) - An implementation of the Distributed Priority Queue ZK recipe.

[Distributed Delay Queue](recipes-distributed-delay-queue.md) - An implementation of a Distributed Delay Queue.

[Simple Distributed Queue](recipes-simple-distributed-queue.md) - A drop-in replacement for the DistributedQueue that comes with the ZK distribution.

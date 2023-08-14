# Migrations

Curator Migrations allow you pre-apply transactions in a staged manner so that you can ensure a consistent state for parts of your ZooKeeper node hierarchy in a manner similar to database migration utilities.

## Background and Usage

:::note

To use Migrations, you should be familiar with Java 8's lambdas, CompletedFuture and CompletionStage.

:::

A "migration" is a set of operations to be performed in a transaction. A "migration set" is a list of migrations. Combined, this can be used to ensure an initial state for your ZooKeeper nodes as well as supporting upgrading/modifying existing state.

For example, given a brand-new ZooKeeper instance you might want to populate a few nodes and data. E.g.,

```java
CuratorOp op1 = client.transactionOp().create().forPath("/parent");
CuratorOp op2 = client.transactionOp().create().forPath("/parent/one");
CuratorOp op3 = client.transactionOp().create().forPath("/parent/two");
CuratorOp op4 = client.transactionOp().create().forPath("/parent/three");
CuratorOp op5 = client.transactionOp().create().forPath("/main", someData);
```

All five of these operations would be combined into a migration and set:

```java
Migration migration = () -> Arrays.asList(op1, op2, op3, op4, op5);
MigrationSet set = MigrationSet.build("main", Collections.singletonList(migration));
```

This set can then be passed to a `MigrationManager` for processing. The MigrationManager checks to see if the migration has been applied already and, if not, processes the transaction.

At a future date, the migration set could be expanded to update/modify things. E.g.,

```java
CuratorOp newOp1 = client.transactionOp().create().forPath("/new");
CuratorOp newOp2 = client.transactionOp().delete().forPath("/main");    // maybe this is no longer needed
```

This would be combined with the previous migration:

```java
Migration initialMigration = () -> Arrays.asList(op1, op2, op3, op4, op5);
Migration newMigration = () -> Arrays.asList(newOp1, newOp2);
MigrationSet set = MigrationSet.build("main", Arrays.asList(initialMigration, newMigration));
```

When this set is run, the MigrationManager will perform both migration operations on new ZooKeeper databases but only the second "newMigration" on ZK databases that already have the first migration applied.

## Details/Reference

### Migration

A Migration is a wrapper around a list of operations that constitute one stage in a migration set and are applied as a single transaction.

### MigrationSet

A MigrationSet is an ordered list of Migrations. Curator keeps track of which migrations in a set have been previously applied and only processes un-applied migrations. Each migration set must have a unique identifier. Create a MigrationSet via its builder:

```java
MigrationSet set = MigrationSet.build(migrationId, migrations);
```

### MigrationManager

The MigrationManager processes MigrationSets. Usually, you'd run this only on new ZooKeeper databases or as part of a maintenance operation to update the ZooKeeper database. E.g.,

```java
MigrationManager manager = new MigrationManager(
    client,
    lockPath,       // base path for locks used by the manager
    metaDataPath,   // base path to store the meta data
    executor,       // the executor to use
    lockMax         // max time to wait for locks
);
manager.migrate(set).exceptionally(e -> {
    if (e instanceof MigrationException) {
        // migration checksum failed, etc.
    } else {
        // some other kind of error
    }
    return null;
});
```

* Each migration in the set is applied in a single transaction i.e. all operations that comprise a migration set (the sum of all individual migration operations) are sent to ZooKeeper as a single transaction.
* MigrationManager stores a hash of all operations in a migration so that it can be compared for future operations. i.e. if, in the future, a migration set is attempted but the hash of one of the previous migrations does not match, the stage completes exceptionally with `MigrationException`.

# Schema Support

In larger ZooKeeper applications you will end with many paths to ZNodes that have specific meanings and uses. E.g. "/myapp/clients/clusters/instances" or "/myapp/writers/locks". These paths can become unwieldy and difficult to reason about. Ideally, you should have a simple way to commonly refer to these paths, a way to validate how they are used, and a way to document what they are used for.

Curator provides a mechanism to:

* Document your ZooKeeper paths
* Validate operations on ZooKeeper paths
* Map a simple string to a ZooKeeper path

When a Curator operation violates a schema, `SchemaViolation` is thrown.

## Schema and SchemaSet

The basic specification is the Schema class:

| Field           | Type            | Required | Description                                           |
|-----------------|-----------------|----------|-------------------------------------------------------|
| name            | String          | Y        | A unique name for this schema                         |
| path            | String          | Y        | A full path to a ZNode or a regex pattern to a ZNode  |
| documentation   | String          | N        | User displayable documentation for this schema        |
| schemaValidator | SchemaValidator | N        | see below                                             |
| ephemeral       | can/must/cannot | N        | Whether the schema allows for ephemerals at the path  |
| sequential      | can/must/cannot | N        | Whether the schema allows for sequentials at the path |
| watched         | can/must/cannot | N        | Whether the schema allows for watchers at the path    |
| canBeDeleted    | true/false      | N        | Whether the schema allows the path to be deleted      |
| metadata        | map             | N        | Any fields-to-values you want                         |

All the Schema instances are combined into a SchemaSet and this can be set in the CuratorFrameworkFactory when creating a CuratorFramework instance. Schemas in a SchemaSet are applied in the following order:

1. Exact match on full path (i.e. nonregex)
2. Match on the first regex path, searched in the order given to the SchemaSet constructor

### SchemaValidator

SchemaValidators are used to optionally validate a ZNode operation when the node is created or modified. It is a functor of the form:

```java
boolean isValid(Schema schema, String path, byte[] data, List<ACL> acl);
```

## Getting ZNode paths/schemas by name

Use SchemaSets to access ZNode paths by a simple name. E.g.,

```java
CuratorFramework client = ...;
String path = SchemaSet.getNamedPath(client, "locks");
client.create().forPath(path);
```

## Loading JSON Schema from a file/stream

An optional utility is provided to load SchemaSets from a JSON file or stream: SchemaSetLoader.

:::note

To avoid adding a new dependency to Curator, the Jackson library has been used with "provided" scope. You will need to add a dependency to jackson-core and jackson-databind to your project.

:::

The JSON stream should be an array of schemas:

```json
[
   {
       "name": "name",                       // required - name of the schema
       "path": "path or pattern",            // required - full path or regex pattern
       "isRegex": true/false,                // optional - true if path is a regular expression - default is false
       "schemaValidator": "name",            // optional - name of a schema validator - default is no validator
       "documentation": "docs",              // optional - user displayable docs - default is ""
       "ephemeral": "allowance",             // optional - "can", "must" or "cannot" - default is "can"
       "sequential": "allowance",            // optional - "can", "must" or "cannot" - default is "can"
       "watched": "allowance",               // optional - "can", "must" or "cannot" - default is "can"
       "canBeDeleted": true/false,           // optional - true if ZNode at path can be deleted - default is true
       "metadata": {                         // optional - any fields -> values that you want
           "field1": "value1",
           "field2": "value2"
       }
   }
]
```

## Examples

### Example 1

```json
[
    {
        "name": "test",
        "path": "/a/b/c",
        "ephemeral": "must",
        "sequential": "cannot",
        "metadata": {
            "origin": "outside",
            "type": "large"
        }
    }
]
```

* This SchemaSet has only 1 schema
* The schema applies only to the path "/a/b/c"
* The ZNode "/a/b/c" must be ephemeral, cannot be sequential, can be watched, and can be deleted

### Example 2

```json
[
    {
        "name": "test",
        "path": "/a/b/c",
        "ephemeral": "must",
        "sequential": "cannot"
    },

    {
        "name": "test2",
        "path": "/a/.*",
        "isRegex": true,
        "schemaValidator": "test",
        "ephemeral": "cannot",
        "canBeDeleted": false
    }
]
```

* This SchemaSet has 2 schemas
* The first schema applies only to the path "/a/b/c"
* The ZNode "/a/b/c" must be ephemeral, cannot be sequential, can be watched, and can be deleted
* The second schema is regex and applies to any path that matches the expression "/a/.*"
* The ZNodes that match "/a/.*" cannot be ephemeral, can be sequential, can be watched, and cannot be deleted
* The second schema also has a schema validator. The schema validator named "test" (configured when constructing the SchemaSetLoader) will be called to validate ZNodes that match "/a/.*".

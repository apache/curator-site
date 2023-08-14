---
sidebar_label: 'Group Member'
---

# Recipe: Group Member

## Description

Group membership management. Adds this instance into a group and keeps a cache of members in the group.

## Participating Classes

* GroupMember
* PersistentNode
* PathChildrenCache

## Creating a GroupMember

```java
// Parameters:
// client - client instance
// membershipPath - the path to use for membership
// thisId - ID of this group member. MUST be unique for the group
// payload - the payload to write in our member node
public GroupMember(
    CuratorFramework client,
    String membershipPath,
    String thisId,
    byte[] payload
);
```

## General Usage

GroupMember must be started:

```java
group.start();
```

When you are through with the GroupMember instance, you should call close:

```java
group.close();
```

... this will remove the instance from the group.

You can get a current view of the members by calling:

```java
group.getCurrentMembers();
```

## Error Handling

GroupMember instances internally handle all error states recreating the node as necessary.

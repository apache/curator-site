---
sidebar_label: 'About'
---

# Welcome to Apache Curator

## What is Curator?

Curator is a keeper or custodian of a museum or other collection - A ZooKeeper Keeper.

Apache Curator is a Java/JVM client library for [Apache ZooKeeper](https://zookeeper.apache.org/), a distributed coordination service. It includes a high level API framework and utilities to make using Apache ZooKeeper much easier and more reliable. It also includes recipes for common use cases and extensions such as service discovery and a Java 8 asynchronous DSL.

![Patrick Hunt's Quote](assets/ph-quote.png)

## Download

[Download Apache Curator](/download) from the release page.

## Important Compatibility Updates

Version 5.0 of Curator has a few breaking changes. Please read the details here: [Curator 5.0 Breaking Changes](breaking-changes.md).

## Getting Started

See the page for quick start: [Getting Started](getting-started.md).

## Stack Overflow

There's lots of great help on Stack Overflow:

* [Main "Apache Curator" tag](https://stackoverflow.com/questions/tagged/apache-curator)

## Maven / Artifacts

Curator binaries are published to Maven Central. Curator consists of several artifacts. Which artifacts to use depends on your needs. For most users, the only artifact you need is curator-recipes.

For OSGi users, there's another set of artifacts of classifier osgi available in Maven Central. These artifacts are not shaded, thus no package relocation is performed inside, so hopefully they could start as bundles when their dependencies are fulfilled by dedicated bundles, e.g. guava.

| GroupID/Org        | ArtifactID/Name            | Description                                                                                                                                                         |
|--------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| org.apache.curator | curator-recipes            | All of the recipes. Note: this artifact has dependencies on client and framework and, so, Maven (or whatever tool you're using) should pull those in automatically. |
| org.apache.curator | curator-async              | Asynchronous DSL with O/R modeling, migrations and many other features.                                                                                             |
| org.apache.curator | curator-framework          | The Curator Framework high level API. This is built on top of the client and  should pull it in automatically.                                                      |
| org.apache.curator | curator-client             | The Curator Client - replacement for the ZooKeeper class in the ZK distribution.                                                                                    |
| org.apache.curator | curator-test               | Contains the TestingServer, the TestingCluster and a few other tools useful for  testing.                                                                           |
| org.apache.curator | curator-examples           | Example usages of various Curator features.                                                                                                                         |
| org.apache.curator | curator-x-discovery	       | A Service Discovery implementation built on the Curator Framework.                                                                                                  |
| org.apache.curator | curator-x-discovery-server | A RESTful server that can be used with Curator Discovery.                                                                                                           |

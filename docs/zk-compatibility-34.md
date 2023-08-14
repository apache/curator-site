---
sidebar_label: 'ZooKeeper 3.4.x'
---

# ZooKeeper Version 3.4.x Compatibility

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
````

ZooKeeper 3.4.x is now at end-of-life. Consequently, the latest versions of Curator have removed support for it. If you wish to use Curator with ZooKeeper 3.4.x you should pin to version 4.2.x of Curator. Curator 4.2.x supports ZooKeeper 3.4.x ensembles in a soft-compatibility mode. To use this mode you must exclude ZooKeeper when adding Curator to your dependency management tool.

<Tabs>
<TabItem value="maven" label="Maven" default>

```xml
<dependency>
    <groupId>org.apache.curator</groupId>
    <artifactId>curator-recipes</artifactId>
    <version>4.2.0</version>
    <exclusions>
        <exclusion>
            <groupId>org.apache.zookeeper</groupId>
            <artifactId>zookeeper</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

</TabItem>
<TabItem value="gradle" label="Gradle" default>

```groovy
compile('org.apache.curator:curator-recipes:$curatorVersion') {
  exclude group: 'org.apache.zookeeper', module: 'zookeeper'
}
```

</TabItem>
</Tabs>

You must add a dependency on ZooKeeper 3.4.x also.

Curator will detect which ZooKeeper library is in use and automatically set ZooKeeper 3.4 compatibility mode as needed. In this mode, all features not supported by 3.4 are disabled. It is up to your application code to "do the right thing" and not use these features. Use the `isZk34CompatibilityMode()` method to determine which mode Curator is using at runtime.

## Testing With ZooKeeper 3.4.x

If you wish to use Curator's `TestingServer` with ZooKeeper 3.4.x you must use the older version of it (in addition to the instructions above):

<Tabs>
<TabItem value="maven" label="Maven" default>

```xml
<dependency>
    <groupId>org.apache.curator</groupId>
    <artifactId>curator-test</artifactId>
    <version>2.12.0</version>
    <exclusions>
        <exclusion>
            <groupId>org.apache.zookeeper</groupId>
            <artifactId>zookeeper</artifactId>
        </exclusion>
    </exclusions>
    <scope>test</scope>
</dependency>
```

</TabItem>
<TabItem value="gradle" label="Gradle" default>

```groovy
testCompile('org.apache.curator:curator-test:2.12.0') {
  exclude group: 'org.apache.zookeeper', module: 'zookeeper'
}
```

</TabItem>
</Tabs>

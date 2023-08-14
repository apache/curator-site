# Tech Note 15

API Changes in Curator 5.0.0 and how to workaround them if you need binary compatibility.

## Breaking Changes

Apache Curator 5.0.0 includes a number of breaking changes that require recompilation. If you are in a situation where you want to use Curator 5.0.0 but must include a third party dependency that was compiled with an earlier version of Curator you can run into the following exception:

```text
java.lang.NoSuchMethodError: org.apache.curator.framework.recipes.cache.PathChildrenCache.getListenable()Lorg/apache/curator/framework/listen/ListenerContainer;
at binary.Curator50Test.run(Curator50Test.java:26)
at test.Test.main(Test.java:9)
at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
at java.lang.reflect.Method.invoke(Method.java:498)
at org.codehaus.mojo.exec.ExecJavaMojo$1.run(ExecJavaMojo.java:297)
at java.lang.Thread.run(Thread.java:748)
```

This occurs because the return value of PathChildrenCache.getListenable() has changed in Curator 5.0.0 (note: the full list of breaking changes can be found [here](breaking-changes.md)). You can work around this problem by creating a mini-JAR containing older versions of the changed Curator classes and making sure that that JAR is earlier in your classpath than the Curator 5.0.0 JARs. To create this JAR in Maven see below. If the community needs it, the Apache Curator team will consider publishing a mini-jar in the future. Please engage us via our mailing lists or JIRA.

## Maven Snippet

```xml
<plugin>
<groupId>org.apache.maven.plugins</groupId>
<artifactId>maven-dependency-plugin</artifactId>
<version>3.1.2</version>
<executions>
    <execution>
        <id>unpack</id>
        <phase>compile</phase>
        <goals>
            <goal>unpack</goal>
        </goals>
        <configuration>
            <artifactItems>
                <artifactItem>
                    <groupId>org.apache.curator</groupId>
                    <artifactId>curator-recipes</artifactId>
                    <version>4.3.0</version>
                    <type>jar</type>
                    <overWrite>false</overWrite>
                    <outputDirectory>${project.build.directory}/classes</outputDirectory>
                    <destFileName>curator-4_0-recipes.jar</destFileName>
                    <includes>
                        org/apache/curator/framework/recipes/cache/NodeCache*.*,
                        org/apache/curator/framework/recipes/cache/PathChildrenCache*.*,
                        org/apache/curator/framework/recipes/cache/*Operation.*,
                        org/apache/curator/framework/recipes/locks/ChildReaper*
                        org/apache/curator/framework/recipes/locks/Reaper*,
                        org/apache/curator/framework/recipes/nodes/PersistentNode*,
                        org/apache/curator/framework/recipes/queue/DistributedDelayQueue*,
                        org/apache/curator/framework/recipes/queue/DistributedIdQueue*,
                        org/apache/curator/framework/recipes/queue/DistributedPriorityQueue*,
                        org/apache/curator/framework/recipes/queue/DistributedQueue*,
                        org/apache/curator/framework/recipes/queue/QueueBase*,
                        org/apache/curator/framework/recipes/shared/SharedValue*,
                        org/apache/curator/framework/recipes/shared/SharedValueReader*
                    </includes>
                </artifactItem>
                <artifactItem>
                    <groupId>org.apache.curator</groupId>
                    <artifactId>curator-framework</artifactId>
                    <version>4.3.0</version>
                    <type>jar</type>
                    <overWrite>false</overWrite>
                    <outputDirectory>${project.build.directory}/classes</outputDirectory>
                    <destFileName>curator-4_0-recipes.jar</destFileName>
                    <includes>
                        org/apache/curator/framework/listen/ListenerContainer*
                    </includes>
                </artifactItem>
            </artifactItems>
        </configuration>
    </execution>
</executions>
</plugin>
```

# Tech Note 4

ZooKeeper makes a very bad Queue source.

## Details

The ZooKeeper recipes page lists Queues as a possible use-case for ZooKeeper. Curator includes several Queue recipes. In our experience, however, it is a bad idea to use ZooKeeper as a Queue:

ZooKeeper has a 1MB transport limitation. In practice this means that ZNodes must be relatively small. Typically, queues can contain many thousands of messages.

ZooKeeper can slow down considerably on startup if there are many large ZNodes. This will be common if you are using ZooKeeper for queues. You will need to significantly increase initLimit and syncLimit.

If a ZNode gets too big it can be extremely difficult to clean. getChildren() will fail on the node. At Netflix, we had to create a special-purpose program that had a huge value for `jute.maxbuffer` in order to get the nodes and delete them. ZooKeeper can start to perform badly if there are many nodes with thousands of children.

The ZooKeeper database is kept entirely in memory. So, you can never have more messages than can fit in memory.

# Tech Note 7

Curator Recipes Own Their ZNode/Paths

## Details

Do not use paths passed to Curator recipes. Curator recipes rely on owning those paths and the ZNodes in those paths. For example, do not add your own ZNodes to the path passed to LeaderSelector, etc.

```java
selector = new LeaderSelector(client, "/leader", listener);
client.create().forPath("/leader/mynode");   // THIS IS NOT SUPPORTED!
```

Also, do not delete nodes that have been "given" to a Curator recipe.

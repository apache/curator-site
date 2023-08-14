# Tech Note 9

**NOTE: PathChildrenCache now uses getData() instead of checkExists().**

Curator 2.5.0 changes internal behavior for PathChildrenCache. Now, regardless of whether "cacheData" is set to true, PathChildrenCache will always call getData on the nodes.

This is due to [CURATOR-107](https://issues.apache.org/jira/browse/CURATOR-107). It's been shown that using `checkExists()` with watchers can cause a type of memory leak as watchers will be left dangling on non-existent ZNodes. Calling `getData()` works around this issue.

However, it's possible that this change will affect performance. If you would like the old behavior of using `checkExists()`, you can set a system property: add `-Dcurator-path-children-cache-use-exists=true` to your command line or call `System.setProperty("curator-path-children-cache-use-exists", "true")`.

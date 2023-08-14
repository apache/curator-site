# Tech Note 13

Guava usage in Curator

## Details

Since Curator was created at Netflix it has used Google's popular Guava library. Due to the many versions of Guava used in projects that also use Curator there has always been the potential for conflicts. Recent versions of Guava removed some APIs that Curator uses internally and Curator users were getting ClassNotFoundException, etc. [CURATOR-200](https://issues.apache.org/jira/browse/CURATOR-200) addresses these issues by shading Guava into Curator.

### Shaded But Not Gone

Unfortunately, a few of Curator's public APIs use Guava classes (e.g. ListenerContainer's use of Guava's Function). Breaking public APIs would cause as much harm as solving the Guava problem. So, it was decided to shade all Guava except for these three classes:

* com.google.common.base.Function
* com.google.common.base.Predicate
* com.google.common.reflect.TypeToken

The implication of this is that Curator still has a hard dependency on Guava but only for these three classes. What this means for Curator users is that you can use whatever version of Guava your project needs without concern about ClassNotFoundException, NoSuchMethodException, etc.

## Summary

* All but three Guava classes are completed shaded into Curator
* Curator still has a hard dependency on Guava, but you should be able to use whatever version of Guava your project needs

## Test

Note, this project proves the shaded version of Guava: https://github.com/Randgalt/curator-guava-example

## Comment

For those still not convinced. Here's a disassembly of ListenerContainer.class from Curator 3.3.0. You can see that various Guava classes like MoreExecutors are shaded.

Disassembly: https://gist.github.com/Randgalt/3fcdca337a2f8527a3f7ee871852f456

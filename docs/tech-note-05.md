# Tech Note 5

Porting Netflix Curator code to Apache Curator.

The APIs in Apache Curator are exactly the same as Netflix Curator. The only difference is the package names. Simply replace `com.netflix.curator*` with `org.apache.curator.*`.

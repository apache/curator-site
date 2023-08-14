# Tech Note 12

Curator connection semantics

:::tip

Note: Please see [Tech Note 14](tech-note-14.md) as well.

:::

## Details

The following events occur in the life cycle of a connection between Curator and Zookeeper.

CONNECTED: This occurs when Curator initially connects to Zookeeper. It will only ever be seen once per Curator instance.

SUSPENDED: This occurs as soon as Curator determines that it has lost its connection to Zookeeper

LOST: The meaning of a LOST even varies between Curator 2.X and Curator 3.X.

In all versions of Curator, a LOST event may be explicitly received from Zookeeper if Curator attempts to use a session that has been timed out by Zookeeper.

In Curator 2.X a LOST event will occur when Curator gives up retrying an operation. The number of retries is determined by the specified retry policy. A LOST event of this type does not necessarily mean that the session on the server has been lost, but it must be assumed to be so.

In Curator 3.x, Curator attempts to simulate server side session loss, by starting a timer (set to the negotiated session timeout length) upon receiving the SUSPENDED event. If the timer expires before Curator re-establishes a connection to Zookeeper then Curator will publish a LOST event. It can be assumed that if this LOST event is received that the session has timed out on the server (though this is not guaranteed as Curator has no connection to the server at this point to confirm this).

RECONNECTED: This occurs once a connection has been reestablished to Zookeeper.

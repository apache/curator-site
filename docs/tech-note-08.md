# Tech Note 8

Controlling Curator Logging

## Details

Curator logging can be customized. Use the following switches via the command line (`-D`) or via `System.setProperty()`:

| Switch                                                      | Description                                                                                                                                                              |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| curator-dont-log-connection-problems=true                   | Normally, connection issues are logged as the warning "Connection attempt unsuccessful..." or the error "Connection timed out...". This switch turns these messages off. |
| curator-log-events=true                                     | All ZooKeeper events will be logged as DEBUG.                                                                                                                            |
| curator-log-only-first-connection-issue-as-error-level=true | When this switch is enabled, the first connection issue is logged as ERROR. Additional connection issues are logged as DEBUG until the connection is restored.           |

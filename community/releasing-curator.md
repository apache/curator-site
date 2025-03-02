# Releasing Curator

First of all, read the [New Committers](new-committers.md) guide to set up all necessary configs.

To release Curator, the following steps must be followed:

1. The binary artifacts must be staged
2. The Apache release must be staged
3. The release must be voted on
4. If the vote succeeds:
   * The Apache release must be promoted
   * The binary artifacts must be released

## Prepare the Release

1. Do a dry run of the release/prepare step by executing `./mvnw -P apache-release release:prepare -DdryRun=true`. The dry run will not commit any changes back to Git and will allow you to verify that the release process will be completed as expected. If you need to cancel, execute `./mvnw release:clean` and then reset via `git reset --hard`.
2. Verify that the release process completed as expected:
   * The release plugin will create `pom.xml.tag` files, which contain the changes that would have been committed to SVN. The only difference between `pom.xml.tag` and its corresponding `pom.xml` file should be the version number.
   * If other formatting changes have been made, you should review the changes and then commit and push them.
   * Once any failures or required updates have been committed to svn, rollback the release prepare files: `./mvnw release:rollback`
3. Execute the release/prepare step for real this time
   * You'll be prompted for the same version information and optionally your GPG
   * passphrase again
   * `./mvnw -P apache-release release:prepare`
   * `./mvnw -P apache-release release:perform`
   * `git push --tags`
4. Verify the staged artifacts in the Apache Nexus repository:
   * Go to: https://repository.apache.org/index.html
   * Login
   * Select Staging Repositories under the Build Promotion section on the left-hand side
   * Select the repository from the main window
   * Select the content tab at the bottom of the screen and navigate through the artifact tree and double-check things.
5. Close the Nexus staging repo by clicking on the curator repo and clicking the "Close" button.

:::caution

DO NOT release the binaries yet.

:::

## Stage the Apache Release

1. At the root of your Curator directory, find the `target` directory.
2. In the directory, you will now find 3 files that need to be staged:
   * apache-curator-X.X.X-source-release.zip
   * apache-curator-X.X.X-source-release.zip.asc
   * apache-curator-X.X.X-source-release.zip.sha512
3. These files must be put into the staging directory (`svn co https://dist.apache.org/repos/dist/dev/curator/`)
   * Create a directory for the release
   * `cp` the files to this directory
   * Remove any old release directories via: `svn rm`
   * Add the new directory via: `svn add`
   * Commit via: `svn commit`

## Initiate a Vote On the Release

Create a VOTE email thread on dev@curator.apache.org to record votes as replies (see [Example Emails](#example-emails)).

* The release needs 3 +1 votes from the PMC
* If the Vote succeeds, you can promote the release
* Regardless of the vote result, send a RESULT VOTE email (see [Example Emails](#example-emails)).
* In the rare case that the release needs to be canceled:
  * Go to: https://repository.apache.org/index.html and "drop" the build.
  * Send a CANCEL VOTE email (see [Example Emails](#example-emails)).
  * If you need to delete the tag, run `git tag -d <tag>` and `git push origin :refs/tags/<tag>`.

## Promote the Release

1. These files must be put into the release directory (svn co https://dist.apache.org/repos/dist/release/curator/)
   * Create a directory for the release
   * `cp` the files to this directory and then `svn commit`
2. Release the binary artifacts
   * Go to: https://repository.apache.org/index.html
   * Select the curator release and click the "Release" button.
3. Announce the release (see [Example Emails](#example-emails)) to these mailing lists. Remember to use your apache.org email address to send the email:
   * user@curator.apache.org
   * dev@curator.apache.org
   * announce@apache.org
   * user@zookeeper.apache.org
4. Update the Download page: https://curator.apache.org/download
   * Update the "Current release" section with the new release
   * Add the new release to the "History" section
   * Make sure all links to downloads, release notes, etc. are "https"
5. You MUST publish the Curator Website (see below) prior to the next step
6. Update the Apache Reporter Tool: https://reporter.apache.org/addrelease.html?curator
7. Mark the version as released in JIRA
   1. Go here: https://issues.apache.org/jira/browse/CURATOR/?selectedTab=com.atlassian.jira.jira-projects-plugin:versions-panel
   2. Click the "Manage Versions" button
   3. Set the release date for the version
   4. Create a new Version and set the start date
   5. Exit administration mode by clicking "Overview" in the near-top-left area

## Clean Up Old Releases

Per http://www.apache.org/dev/release.html#when-to-archive - remove old releases from the https://dist.apache.org/repos/dist/release/curator/ and https://dist.apache.org/repos/dist/dev/curator/ repos using `svn rm`.

## Example Emails

### Release Vote Email Example

```text
To: dev@curator.apache.org
Subject: [VOTE] Release Apache Curator version X.X.X

Hello,

This is the vote for Apache Curator version X.X.X

*** Please download, test and vote within approx. 72 hours

Note that we are voting upon the source (tag) and binaries are provided for convenience.

Link to release notes:
https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12314425&version=12326663

Staging repo:
https://dist.apache.org/repos/dist/dev/curator/X.X.X/

Binary artifacts:
https://repository.apache.org/content/repositories/orgapachecurator-NNNN

The tag to be voted upon:
https://github.com/apache/curator/releases/tag/apache-curator-X.X.X

Curator's KEYS file containing PGP keys we use to sign the release:
https://downloads.apache.org/curator/KEYS

[ ] +1  approve
[ ] +0  no opinion
[ ] -1  disapprove (and reason why)
```

### Release Vote Result Email

```text
To: dev@curator.apache.org
Subject: [RESULT] [VOTE] Release Apache Curator X.Y.Z

Hello,

The vote to release Curator X.Y.Z has passed.

+1 (binding):

    Patrick Hunt
    John Galt

+1 (non binding):

    Jordan Zimmerman
    Jay Zarfoss

I will promote the artifacts to the central repo.
```

### Release Announcement Email Example

```text
To: announce@apache.org, user@curator.apache.org, dev@curator.apache.org, user@zookeeper.apache.org
Subject: [ANNOUNCE] Apache Curator X.Y.Z released

Hello,

The Apache Curator team is pleased to announce the release of version <<PASTE X.Y.Z>>. Apache  Curator is a Java/JVM client library for Apache ZooKeeper[1], a distributed coordination service. Apache Curator includes a high-level API framework and utilities to make using Apache ZooKeeper much easier and more reliable. It also includes recipes for common use cases and extensions such as service discovery and a Java 8 asynchronous DSL. For more details, please visit the project website: https://curator.apache.org/

The download page for Apache Curator is here:
https://curator.apache.org/download/

The binary artifacts for Curator are available from Maven Central and its mirrors.

For general information on Apache Curator, please visit the project website:
https://curator.apache.org

Release Notes:

<<PASTE RELEASE NOTES FROM JIRA HERE>>

Regards,

The Curator Team

[1] Apache ZooKeeper https://zookeeper.apache.org/
```

### Cancel Vote Email Example

```text
To: dev@curator.apache.org
Subject: [CANCEL] [VOTE] Release Apache Curator version X.Y.Z

Hello,

The vote for Apache Curator version X.Y.Z has been canceled due to [reason].

Regards,
The Curator Team
```

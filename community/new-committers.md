# New Committers

## Onboarding

Welcome to Apache Curator!

For new committers,

* An Apache account will have been set up for you. Subscribe to all the Curator mailing lists by going [here](index.md#mailing-list)
* Have a look at the general information on the Apache committers' page: http://www.apache.org/dev/#committers
* Make sure to `svn checkout` the ASF committers repository: https://svn.apache.org/repos/private/committers
* Add an entry for yourself to https://svn.apache.org/repos/private/committers/info/. The information there is used to generate the public information about ASF committers on the people.apache.org home page: http://people.apache.org/
* Prepare for being a committer. See the next section.

As your first commit, add yourself to the committers list in [the site source file](https://github.com/apache/curator-site/blob/main/src/components/Committers/index.tsx). This will make your name show up in the "team list" when the website is generated triggered by new commit.

As always, do not hesitate to ask if you have any questions or have problems with your account.

## Setting up

Curator is built using Maven and Git. You should be familiar with both of these tools. For publishing, you also need to install GPG and create a key that is available from a well known public site.

### GPG

Download GPG from http://www.gnupg.org/download/.

* Generate [PGP code signing keys](http://www.apache.org/dev/release-signing.html#generate)
* Ensure that your [PGP signing keys](http://www.apache.org/dev/release-signing.html#generate) are available in the KEYS file that is in the release directory (see [SVN Setup](#svn-setup)).

If you are not already a member of the [Web Of Trust](http://www.apache.org/dev/release-signing.html#web-of-trust) (WOT) it would be a good idea to do so. You can read more about key signing [here](http://people.apache.org/~henkp/sig/pgp-key-signing.txt).

Ensure that you have set up your ssh keys on people.apache.org, otherwise you'll have to enter your login password a number of times (best use ssh-agent for this as well). A good overview of this process can be found [here](http://www.thegeekstuff.com/2008/11/3-steps-to-perform-ssh-login-without-password-using-ssh-keygen-ssh-copy-id/) (ssh-copy-id and ssh-agent in particular).

:::note

When doing a release you will be asked for your PGP password multiple times unless you set up the gpg-agent. Mac users have reported trouble getting gpg-agent to work. You can also set your gpg-password in the Maven settings file (see below).

:::

### Maven Settings

Your Maven settings (`~/.m2/settings.xml`) file should have the following:

```xml
<settings>
    ...
    <servers>
        ...
        <server>
            <id>apache.website.svnpub</id>
            <username>Your Apache Username</username>
            <privateKey>${user.home}/.ssh/id_rsa</privateKey>
        </server>

        <server>
            <id>apache.releases.https</id>
            <username>Your Apache Username</username>
            <password>APACHE-PASSWORD-ENCODED</password>
        </server>

        <server>
            <id>apache.snapshots.https</id>
            <username>Your Apache Username</username>
            <password>APACHE-PASSWORD-ENCODED</password>
        </server>
        ...
    </servers>

    <profiles>
        <profile>
            <properties>
                ...
    	        <gpg.keyname>id-of-your-pgp-key</gpg.keyname>
                <gpg.passphrase>your-pgp-password</gpg.passphrase> <!-- use this if pgp-agent doesn't work for you -->
                ...
            </properties>
            ...
        </profile>
        ...
    </profiles>
    ...
</settings>
```

:::note

You can store encrypted passwords your settings.xml if you want. Read the details here: http://maven.apache.org/guides/mini/guide-encryption.html

:::

### SVN Setup

While Curator mainly uses git for source control, certain components required by Apache use SVN. You should check out the following SVN projects into unique local directories:

* Staging directory: svn co https://dist.apache.org/repos/dist/dev/curator/
* Release directory: svn co https://dist.apache.org/repos/dist/release/curator/

You must add your GPG key to the KEYS file in "repos/dist/release/curator/" and commit the changes. E.g. (replace NAME with the username you used to generate the keys):

```shell
cd DIST RELEASE CURATOR directory
(gpg --list-sigs NAME && gpg --armor --export NAME) >> KEYS
svn commit -m "Added my keys"
```

## Development

### GitHub Flow

Curator loosely uses [GitHub Flow](http://scottchacon.com/2011/08/31/github-flow.html). The short form:

* Anything in the master branch is deployable
* The upcoming release is always "master"
* To work on something new, create a descriptively named branch off of the upcoming release - usually the ID of the GitHub issue (e.g. CURATOR-16)
  * Commit to that branch locally and regularly push your work to the same named branch on the server
  * When you need feedback or help, or you think the branch is ready for merging, send an email on dev@curator.apache.org and ask for the branch to be reviewed
  * After someone else has reviewed and signed off on the feature, merge it into "master"

#### Code Style

Curator uses [Spotless](https://github.com/diffplug/spotless) to automatically apply code style. The configured style is derived from the [Palantir](https://github.com/palantir/palantir-java-format) style.

You can run the following command to automatically apply code style:

```shell
./mvnw spotless:apply
```

### Versioning

Curator uses [semantic versioning](http://semver.org/). The best description of this is from Curator committer [Eric Tschetter](http://www.quora.com/What-is-semantic-versioning):

:::info

Essentially, it tells you the API compatibility between multiple dependencies. For example,

If you have version 1.0.0 and 1.0.1, you can use either one and you will not run into errors due to API conflicts (i.e. in Java, no ClassNotFound or NoSuchMethod type exceptions)

If you have 1.0.0 and 1.1.0, you can replace 1.0.0 with 1.1.0, and you will not have errors due to API conflicts. If you try to swap 1.0.0 in place of something that depends on 1.1.0, however, you *might* have errors due to API conflicts. I.e. you can go forward without errors, but not backwards

If you have 1.0.0 and 2.0.0, you will likely have errors due to API conflicts if you replace either one with the other.

:::

Make sure you choose an appropriate version for each release. The Maven build will output messages if there are API compatibility issues (look for the "clirr-maven-plugin" messages).

### GitHub Mirror and Pull Requests

Curator's source is mirrored on GitHub at: https://github.com/apache/curator. Non-committers are [asked to fork this repository and submit pull requests](submitting-pull-requests.md) (PR) for changes. When a PR is received, a Curator committer can test and possibly merge it by:

* Create a branch for the PR: `git checkout -b <branch name>` - the branch name is usually the ID of the GitHub issue
* Pull the changes from the PR: `git pull https://github.com/<users-name>/curator.git <branch>` (or you can use `gh pr checkout <pr-number>` with [GitHub CLI](https://cli.github.com/)).
* Test, updated, etc. the change. Periodically push the change to the main repo. For the initial push: `git push -u origin <branch name>`
* If the change is accepted, merge it into the master branch and push the master branch. This will automatically close the GitHub PR. NOTE: Please use `git merge --squash` as this makes it easier to read the history and do cherry-pick.

### Maven Checks

Regardless of which IDE you use, you should periodically perform a `mvn clean install` to validate that the various configured checks are passing as well as the unit tests.

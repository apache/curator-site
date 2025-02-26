# Submitting Pull Requests

## Creating A Pull Request

Apache Curator uses the [Git version control system](https://docs.github.com/en/get-started/quickstart/set-up-git).

Curator also uses Apache's GitHub mirroring. All source code/bug fix submissions should be made via GitHub Pull Request.

[Create your Pull Request](https://help.github.com/articles/creating-a-pull-request) against the latest revision of the files by forking the mirrored project at https://github.com/apache/curator (keep your fork in sync from then on).

You must also create an issue in [Curator's Issue Tracker](https://github.com/apache/curator/issues) (reference the Pull Request in the issue) and create a git branch with the same name as the Issue. All discussions, comments, etc. regarding the Pull Request should be in the Issue Tracker and/or GitHub and not by email.

* Fork the Curator project from GitHub.
* Create a branch with the same name as the GitHub Issue number (e.g. GH-1234) in your fork and push it to GitHub.
* Create a Pull Request in GitHub. The name of the Pull Request should be in the form: `GH-XXX. Summary of the Issue` where XXX is the issue number.
* The Pull Request should include a description with the issue number associated.

## Apache Contribution Guide

Please read the [Apache Contribution Guide](http://www.apache.org/foundation/getinvolved.html).

## Tools and Libraries

Curator uses the following tools and libraries:

* Java 8
* [Maven](http://maven.apache.org/)
* [TestNG](http://testng.org/doc/index.html)
* [SLF4J](http://www.slf4j.org/)
* [Google Guava](https://code.google.com/p/guava-libraries/)

## Style and Development Guide

* Use spaces, not tabs.
* Match the style of the Curator files. Any patches will be re-formatted to match Curator's style.
* There must be a GitHub Issue created for your change.
* Create a git branch with the same name as the Issue.
* All submissions must have TestNG tests.
* All submissions must have proper Apache license headers. Run the following command to make sure all files have headers: `docker run --rm -v $(pwd):/github/workspace ghcr.io/korandoru/hawkeye:v6 format`.
* The simpler and smaller the change the more likely it is to be accepted.

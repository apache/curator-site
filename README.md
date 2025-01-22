# Apache Curator Official Website

This project keeps all sources used for building the Apache Curator official website, which is served at https://curator.apache.org/.

## Prerequisite

The Apache Curator website is powered by [Docusaurus 2](https://docusaurus.io/) and is built with Node 19 and the latest pnpm. Check the [deployment workflow](.github/workflows/deploy.yml) for concrete requirements and instructions.

## Installation

```shell
pnpm install
```

## Local Development

```shell
pnpm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
pnpm build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Contact information

* Submit [an issue](https://github.com/apache/curator/issues/new) on the [main apache/curator repo](http://github.com/apache/curator)
* Subscribe to the dev@curator.apache.org mailing list and start a discussion.

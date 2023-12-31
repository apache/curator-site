# Logging and Tracing

## Details

Curator is logging and tracing neutral. The Curator code is instrumented with logging and tracers but uses a driver mechanism that allows easy integration into your preferred logging and tracing frameworks.

## Logging

Curator uses SLF4J (https://www.slf4j.org/) for logging. SLF4J is a facade over logging that allows you to plug in any (or no) logging framework. See the SLF4J website for details.

## Tracing

Connect Curator tracing to your tracing framework via an instance of `TracerDriver` or `AdvancedTracerDriver`. Curator calls the various methods (e.g. `addTrace()` or `addCount()`) and your instance proxies the calls to your tracing framework. Inform Curator of your tracing driver instance by calling `CuratorZookeeperClient.setTracerDriver()`.

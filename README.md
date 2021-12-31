
In an effort to stabilize flaky tests written for WebdriverIO v3.3 (which is promise-based), a rewrite of the test suites using version `4+`
of WebdriverIO is needed for synchronous testing support.

## Quickstart Guide

### Before you Begin

1. Change into the `quality-assurance-engineer-test` directory
2. Make sure the web-test repo is up-to-date
3. Make sure you have all the dependencies installed

You can do all by running this one command:

```
$ cd ~/StuDocu/quality-assurance-engineer-test && git pull origin master && npm install
```

### Run just one test locally

```
$ npm run test
```

**Example:** `npm run test -- --spec=e2e/specs/ui/test.spec.js`

## Retry Reporter

There is a custom reporter called the `RetryReporter` to help us keep track of all the tests that failed during the last run. This reporter's job is to print a command at the end of any test run (that ended with failed tests), and generate a command you can use to replay all of the tests that failed.

![](media/RetryReporter.png)
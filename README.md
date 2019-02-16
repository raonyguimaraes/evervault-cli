evervault-cli
=============

CLI interface for managing Evervault Lambdas

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/evervault-cli.svg)](https://npmjs.org/package/evervault-cli)
[![CircleCI](https://circleci.com/gh/evervault/evervault-cli/tree/master.svg?style=shield)](https://circleci.com/gh/evervault/evervault-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/evervault-cli.svg)](https://npmjs.org/package/evervault-cli)
[![License](https://img.shields.io/npm/l/evervault-cli.svg)](https://github.com/evervault/evervault-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g evervault-cli
$ evervault COMMAND
running command...
$ evervault (-v|--version|version)
evervault-cli/0.0.1 darwin-x64 node-v9.8.0
$ evervault --help [COMMAND]
USAGE
  $ evervault COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`evervault help [COMMAND]`](#evervault-help-command)
* [`evervault lambda:deploy`](#evervault-lambdadeploy)
* [`evervault lambda:list`](#evervault-lambdalist)
* [`evervault lambda:remove`](#evervault-lambdaremove)
* [`evervault login`](#evervault-login)

## `evervault help [COMMAND]`

display help for evervault

```
USAGE
  $ evervault help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `evervault lambda:deploy`

Deploy a lambda to the Evervault network

```
USAGE
  $ evervault lambda:deploy

DESCRIPTION
  ...
  Provide the filename as a parameter and the command will return a unique ID and access URL to run your lambda
```

_See code: [src/commands/lambda/deploy.js](https://github.com/evervault/evervault-cli/blob/v0.0.1/src/commands/lambda/deploy.js)_

## `evervault lambda:list`

List the Evervault Lambdas you have deployed

```
USAGE
  $ evervault lambda:list

DESCRIPTION
  ...
  Returns a list of all the deployed lambdas including their hashes and access URLs
```

_See code: [src/commands/lambda/list.js](https://github.com/evervault/evervault-cli/blob/v0.0.1/src/commands/lambda/list.js)_

## `evervault lambda:remove`

Describe the command here

```
USAGE
  $ evervault lambda:remove

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/lambda/remove.js](https://github.com/evervault/evervault-cli/blob/v0.0.1/src/commands/lambda/remove.js)_

## `evervault login`

Authenticate with your Evervault Account to retrieve your API keys

```
USAGE
  $ evervault login

DESCRIPTION
  ...
  Use your Evervault email and password to generate a JWT auth token
```

_See code: [src/commands/login.js](https://github.com/evervault/evervault-cli/blob/v0.0.1/src/commands/login.js)_
<!-- commandsstop -->

evervault-cli
=============

CLI interface for managing evervault cages

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
evervault-cli/0.1.3 darwin-x64 node-v12.9.1
$ evervault --help [COMMAND]
USAGE
  $ evervault COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`evervault help [COMMAND]`](#evervault-help-command)
* [`evervault cage:deploy FILE`](#evervault-cagedeploy-file)
* [`evervault cage:list`](#evervault-cagelist)
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

## `evervault cage:deploy FILE`

Deploy a cage to the evervault network

```
USAGE
  $ evervault cage:deploy FILE

ARGUMENTS
  FILE  file name to deploy

DESCRIPTION
  ...
  Provide the filename as a parameter and the command will return a unique ID and access URL to run your cage
```

_See code: [src/commands/cage/deploy.js](https://github.com/evervault/evervault-cli/blob/v0.1.3/src/commands/cage/deploy.js)_

## `evervault cage:list`

List the evervault cages you have deployed

```
USAGE
  $ evervault cage:list

DESCRIPTION
  ...
  Returns a list of all the deployed cages including their hashes and access URLs
```

_See code: [src/commands/cage/list.js](https://github.com/evervault/evervault-cli/blob/v0.1.3/src/commands/cage/list.js)_

## `evervault login`

Authenticate with your evervault Account to retrieve your API keys

```
USAGE
  $ evervault login

DESCRIPTION
  ...
  Use your evervault email and password to generate a Bearer auth token
```

_See code: [src/commands/login.js](https://github.com/evervault/evervault-cli/blob/v0.1.3/src/commands/login.js)_
<!-- commandsstop -->

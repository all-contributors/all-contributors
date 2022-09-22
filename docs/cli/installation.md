---
id: installation
title: CLI Installation
sidebar_label: Installation
---


## 1. Install the CLI tool

<a href="https://www.npmjs.com/package/all-contributors-cli">
    <img src="https://img.shields.io/npm/v/all-contributors-cli.svg" alt="NPM Version" />
</a>
<a href="https://aur.archlinux.org/packages/all-contributors-cli">
    <img src="https://img.shields.io/aur/version/all-contributors-cli.svg" alt="AUR Version" />
</a>

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/) and
should be installed as one of your project's `devDependencies`:

```console
yarn add --dev all-contributors-cli # or npm i -D all-contributors-cli
```

Alternatively, Arch Linux users can install the [`all-contributors-cli`](https://aur.archlinux.org/packages/all-contributors-cli) package from the AUR.

> The CLI is node-based, if you don't wish to add a node dependency use the [@all-contributors bot 🤖](../bot/overview)

## 2. Init the Project

Init the project using `init` and answer a few questions

```console
yarn all-contributors init # or npx all-contributors init 

# Or directly execute the bin
./node_modules/.bin/all-contributors init
```

## 3. Add some contributors

```console
yarn all-contributors add jfmengels doc
yarn all-contributors generate
```

For more on the commands see [CLI usage](usage)

## 4. Update your Contributing documentation

Consider updating your `CONTRIBUTING.md` or similar with steps on how your contributors can add themselves. You can even link to the [cli usage documentation](usage).

## 5. *Optionally* add shortcut scripts to your `package.json`

You can optionally add shortcuts to your commands in your `package.json` `scripts` field.

For example:

```json
{
  "scripts": {
    "contributors:add": "all-contributors add",
    "contributors:generate": "all-contributors generate"
  }
}
```

To allow shortcuts such as

```console
yarn contributors:add jfmengels doc
```

## What's next

- [Using the CLI](usage)
- [Configuring the CLI](configuration)

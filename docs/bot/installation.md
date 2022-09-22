---
id: installation
title: Bot Installation
sidebar_label: Installation
---


## 1. Install the AllContributors GitHub App

[Install the GitHub App](https://github.com/apps/allcontributors/installations/new)

<a href="https://github.com/apps/allcontributors/installations/new">
    <img alt="App Install Screenshot" src="../../assets/app-install.png" width="500px">
</a>

## 2. Configure your repositories

<img alt="Configure Repositories Screenshot" src="../../assets/configure-repositories.png" width="500px">

## 3. Create a `README.md`

Ensure you have a `README.md` file at the root of the project (it can be empty).

If you prefer your contributors table in a place other than the `README.md`; After merging your first bot PR, you can move your contributors table,
see `files` in the [bot configuration](configuration)

Make sure to add this in the markdown:

For the list:

```markdown
## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
```

Note: Extra line is very important in order to make it work properly.

For the badge:

```markdown
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
```

## 4. Update your Contributing documentation

Consider updating your `CONTRIBUTING.md` or similar with steps on how contributors can add themselves. You can even link to the [bot usage documentation](usage).

## What's next

- [Using the Bot](usage)
- [Configuring the Bot](configuration)

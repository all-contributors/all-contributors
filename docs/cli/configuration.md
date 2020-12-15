---
id: configuration
title: CLI Configuration
sidebar_label: Configuration
---

You can configure all-contributors by updating the `.all-contributorsrc` JSON file.
The data used to generate the contributors list will be stored in there, and you
can configure how you want `all-contributors-cli` to generate the list.

> You are viewing the CLI Configuration, are you looking for the [Bot Configuration](../bot/configuration)?

These are the keys you can specify:

| Option                           | Description                                                                                         | Example/Default                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `projectName`                    | Mandatory, name of the project.                                                                     | Example: `all-contributors-cli`                                                                             |
| `projectOwner`                   | Mandatory, name of the user the project is hosted by.                                               | Example: `jfmengels`                                                                                        |
| `repoType`                       | Type of repository. Must be either `github` or `gitlab`.                                            | Default: `github`                                                                                           |
| `repoHost`                       | Points to the repository hostname. Change it if you use a self-hosted repository.                   | Default: `https://github.com` if `repoType` is `github`, and `https://gitlab.com` if `repoType` is `gitlab` |
| `files`                          | Array of files to update.                                                                           | Default: `['README.md']`                                                                                    |
| `imageSize`                      | Size (in px) of the user's avatar.                                                                  | Default: `100`                                                                                              |
| `commit`                         | Auto-commit badge when adding contributors.                                                         | `true` or `false`                                                                                           |
| `commitConvention`               | Commit convention ([`angular`](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines), [`atom`](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages), [`ember`](https://guides.emberjs.com/v1.10.0/contributing/#toc_commits), [`eslint`](https://eslint.org/docs/1.0.0/developer-guide/contributing#step-2-make-your-changes), [`jshint`](https://jshint.com/contribute/) or [`gitmoji`](https://gitmoji.carloscuesta.me/)).                                                         | Default: `none`                                                                                           |
| `contributorsPerLine`            | Maximum number of columns for the contributors table.                                               | Default: `7`                                                                                                |
| `contributorsSortAlphabetically` | `true`: Sort alphabetically. `false`: Display in order of addition.                                 | Default: `false`                                                                                                |
| `badgeTemplate`                  | Define your own lodash template to generate the badge.                                              | |
| `contributorTemplate`            | Define your own lodash template to generate the contributor.                                        | |
| `types`                          | Specify custom symbols or link templates for contribution types. Can override the documented types. | |
| `contributors`                   | List of contributors for this project, this is updated by [all-contributors add](usage#all-contributors-add) | |
```json
{
  "projectName": "all-contributors-cli",
  "projectOwner": "jfmengels",
  "repoType": "github",
  "repoHost": "https://github.com",
  "files": ["README.md"],
  "imageSize": 100,
  "commit": false,
  "contributorsPerLine": 7,
  "badgeTemplate": "[![All Contributors](https://img.shields.io/badge/all_contributors-<%= contributors.length %>-orange.svg?style=flat-square)](#contributors)",
  "contributorTemplate": "<a href=\"<%= contributor.profile %>\"><img src=\"<%= contributor.avatar_url %>\" width=\"<%= options.imageSize %>px;\" alt=\"\"/><br /><sub><b><%= contributor.name %></b></sub></a>",
  "types": {
    "custom": {
      "symbol": "🔭",
      "description": "A custom contribution type.",
      "link": "[<%= symbol %>](<%= url %> \"<%= description %>\"),"
    }
  },
  "contributors": []
}
```

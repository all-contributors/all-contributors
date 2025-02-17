---
id: configuration
title: Bot Configuration
sidebar_label: Configuration
---

You can configure the all-contributors bot behaviour by updating the `.all-contributorsrc` JSON file.
The data used to generate the contributors list will be stored there, and you
can configure how you want `@all-contributors` to generate the list.

> You are viewing the 🤖Bot Configuration, which is similar to the [CLI Configuration](../cli/configuration)

These are the keys you can specify:

| Option                           | Description                                                                                         | Example/Default                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `projectName`                    | Mandatory, name of the project.                                                                     | Example: `all-contributors-cli`                                                                             |
| `projectOwner`                   | Mandatory, name of the user the project is hosted by.                                               | Example: `tenshiAMD`                                                                                        |
| `repoType`                       | Type of repository. Must be either `github` or `gitlab`.                                            | Default: `github`                                                                                           |
| `repoHost`                       | Points to the repository hostname. Change it if you use a self-hosted repository.                   | Default: `https://github.com` if `repoType` is `github`, and `https://gitlab.com` if `repoType` is `gitlab` |
| `files`                          | Array of files to update.                                                                           | Default: `['README.md']`                                                                                    |
| `imageSize`                      | Size (in px) of the user's avatar.                                                                  | Default: `100`                                                                                              |
| `commit`                         | Auto-commit badge when adding contributors.                                                         | Default: `false`                                                                                           |
| `commitConvention`               | Commit convention ([`angular`](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines), [`atom`](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages), [`ember`](https://guides.emberjs.com/v1.10.0/contributing/#toc_commits), [`eslint`](https://eslint.org/docs/1.0.0/developer-guide/contributing#step-2-make-your-changes), [`jshint`](https://jshint.com/contribute/), [`gitmoji`](https://gitmoji.carloscuesta.me/), or `none`).                                                         | Default: `angular`                                                                                           |
| `contributorsPerLine`            | Maximum number of columns for the contributors table.                                               | Default: `7`                                                                                                |
| `contributorsSortAlphabetically` | `true`: Sort alphabetically. `false`: Display in order of addition.                       | Default: `false`                                                                                            |
| `customContributions`            | Define custom contribution types with their associated emojis.                                      | Example: `{"mentoring": "👨‍🏫", "funding": "💵"}`                                                            |
| `badgeTemplate`                  | Define your own lodash template to generate the badge.                                              | |
| `contributorTemplate`            | Define your own lodash template to generate the contributor.                                        | |
| `wrapperTemplate`                | Define your own lodash template to wrap the list of contributors                                    | |
| `types`                          | Specify custom symbols or link templates for contribution types. Can override the documented types. | |
| `linkToUsage`                    | Adds a footer with link to usage (either `true` or `false`)                                         | Default: `true` |
| `skipCi`                         | Makes the CI ignore the commit. (either `true` or `false`)                                          | Default: `true` |
| `contributors`                   | List of contributors for this project, this is updated by [@all-contributors add](usage#all-contributors-add) | |

```json
{
  "projectName": "all-contributors",
  "projectOwner": "all-contributors",
  "repoType": "github",
  "repoHost": "https://github.com",
  "files": ["README.md"],
  "imageSize": 100,
  "commit": false,
  "contributorsPerLine": 7,
  "contributorsSortAlphabetically": false,
  "customContributions": {
    "mentoring": "👨‍🏫",
    "funding": "💵",
    "translation": "🌍"
  },
  "badgeTemplate": "[![All Contributors](https://img.shields.io/github/all-contributors/<%= projectOwner %>/<%= projectName %>?color=ee8449&style=flat-square)](#contributors)",
  "contributorTemplate": "<a href=\"<%= contributor.profile %>\"><img src=\"<%= contributor.avatar_url %>\" width=\"<%= options.imageSize %>px;\" alt=\"\"/><br /><sub><b><%= contributor.name %></b></sub></a>",
  "wrapperTemplate": "\n<table>\n  <tbody><%= bodyContent %>  </tbody>\n<%= tableFooterContent %></table>\n\n",
  "types": {
    "custom": {
      "symbol": "🔭",
      "description": "A custom contribution type.",
      "link": "[<%= symbol %>](<%= url %> \"<%= description %>\"),"
    }
  },
  "linkToUsage": true,
  "skipCi": true,
  "contributors": []
}
```
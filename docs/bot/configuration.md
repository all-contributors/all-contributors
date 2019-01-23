---
id: configuration
title: Bot Configuration
sidebar_label: Configuration
---

You can configure the all-contributors bot behaviour by updating the `.all-contributorsrc` JSON file.
The data used to generate the contributors list will be stored in there, and you
can configure how you want `@all-contributors` to generate the list.

> You are viewing the 🤖Bot Configuration, which is similar to the [CLI Configuration](/docs/cli/configuration)

These are the keys you can specify:

| Option                | Description                                                                                         | Example/Default                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `files`               | Array of files to update.                                                                           | Default: `['README.md']`                                                                                    |
| `imageSize`           | Size (in px) of the user's avatar.                                                                  | Default: `100`                                                                                            |
| `contributorsPerLine` | Maximum number of columns for the contributors table.                                               | Default: `7`                                                                                                |
| `badgeTemplate`       | Define your own lodash template to generate the badge.                                              | |
| `contributorTemplate` | Define your own lodash template to generate the contributor.                                        | |
| `types`               | Specify custom symbols or link templates for contribution types. Can override the documented types. | |
| `contributors`        | List of contributors for this project, this is updated by [@all-contributors add](/docs/bot/usage#all-contributors-add) | |

```json
{
  "files": ["README.md"],
  "imageSize": 100,
  "contributorsPerLine": 7,
  "badgeTemplate": "[![All Contributors](https://img.shields.io/badge/all_contributors-<%= contributors.length %>-orange.svg?style=flat-square)](#contributors)",
  "contributorTemplate": "<%= avatarBlock %><br /><%= contributions %>",
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



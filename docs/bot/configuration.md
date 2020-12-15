---
id: configuration
title: Bot Configuration
sidebar_label: Configuration
---

You can configure the all-contributors bot behaviour by updating the `.all-contributorsrc` JSON file.
The data used to generate the contributors list will be stored in there, and you
can configure how you want `@all-contributors` to generate the list.

> You are viewing the 🤖Bot Configuration, which is similar to the [CLI Configuration](../cli/configuration)

These are the keys you can specify:

| Option                           | Description                                                                                         | Example/Default                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `files`                          | Array of files to update.                                                                           | Default: `['README.md']`                                                                                    |
| `imageSize`                      | Size (in px) of the user's avatar.                                                                  | Default: `100`                                                                                              |
| `contributorsPerLine`            | Maximum number of columns for the contributors table.                                               | Default: `7`                                                                                                |
| `contributorsSortAlphabetically` | `true`: Sort alphabetically. `false`: Display in order of addition.                       | Default: `false`                                                                                            |
| `badgeTemplate`                  | Define your own lodash template to generate the badge.                                              | |
| `contributorTemplate`            | Define your own lodash template to generate the contributor.                                        | |
| `types`                          | Specify custom symbols or link templates for contribution types. Can override the documented types. | |
| `skipCi`                         | Makes the CI ignore the commit. (either `true` or `false`)                                          | Default: `true` |
| `contributors`                   | List of contributors for this project, this is updated by [@all-contributors add](usage#all-contributors-add) | |

```json
{
  "files": ["README.md"],
  "imageSize": 100,
  "contributorsPerLine": 7,
  "contributorsSortAlphabetically": false,
  "badgeTemplate": "[![All Contributors](https://img.shields.io/badge/all_contributors-<%= contributors.length %>-orange.svg?style=flat-square)](#contributors)",
  "contributorTemplate": "<a href=\"<%= contributor.profile %>\"><img src=\"<%= contributor.avatar_url %>\" width=\"<%= options.imageSize %>px;\" alt=\"\"/><br /><sub><b><%= contributor.name %></b></sub></a>",
  "types": {
    "custom": {
      "symbol": "🔭",
      "description": "A custom contribution type.",
      "link": "[<%= symbol %>](<%= url %> \"<%= description %>\"),"
    }
  },
  "skipCi": "true",
  "contributors": []
}
```

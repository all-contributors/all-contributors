---
id: emoji-key
title: Emoji Key ✨ (and Contribution Types)
sidebar_label: Emoji Key ✨
---

## About the Emoji Table

To have a contribution added when using the [Bot](bot/overview) or [CLI](cli/overview) use the keyword in the `Type` column. 

For example if you add a comment in an issue or Pull Request on GitHub like this:

`@all-contributors add @usernamehere for a11y`

Then the bot will add the user (usernamehere) as a contributor with the `Accessibility` contribution type to your project's README file.
You can also use multiple contribution types like this:

`@all-contributors add @usernamehere for a11y, docs, infra`

And the bot will add those contribution types to the user's existing contribution types. If the user is not already a contributor, the bot will add them as a new contributor with those contribution types.

### Natural Language Processing

The bot will use [basic Natural Language Parsing](https://github.com/all-contributors/app/blob/main/lib/parse-comment.js) to determine your contribution intent.

Emoji/Type | Represents | Comments |
:---: | :---: | :---: |
🔊 <br /> `audio` | Audio | Podcasts, background music or sound effects |
♿️ <br /> `a11y` | Accessibility | Reporting or working on accessibility issues |
🐛 <br /> `bug` | Bug reports | Links to issues reported by the user on this project |
📝 <br /> `blog` | Blogposts | Links to the blogpost |
💼 <br /> `business` | Business Development | People who execute on the business end |
💻 <br /> `code` | Code | Links to commits by the user on this project |
🖋 <br /> `content` | Content | e.g. website copy, blog posts are separate |
🔣 <br /> `data` | Data | Links to contributed data for the project (both tests and datasets) |
📖 <br /> `doc` | Documentation | Links to commits by the user on this project, Wiki, or other source of documentation |
🎨 <br /> `design` | Design | Links to the logo/iconography/visual design/etc. |
💡 <br /> `example` | Examples | Links to the examples |
📋 <br /> `eventOrganizing` | Event Organizers | Links to event page |
💵 <br /> `financial` | Financial Support | People or orgs who provide financial support, links to relevant page |
🔍 <br /> `fundingFinding` | Funding/Grant Finders | People who help find financial support |
🤔 <br /> `ideas` | Ideas & Planning | |
🚇 <br /> `infra` | Infrastructure | Hosting, Build-Tools, etc. Links to source file (like `travis.yml`) in repo, if applicable |
🚧 <br /> `maintenance` | Maintenance | People who help in maintaining the repo, links to commits by the user on this project |
🧑‍🏫 <br /> `mentoring` | Mentoring | People who mentor new contributors, links to the repo home |
📦 <br /> `platform` | Packaging | Porting to support a new platform |
🔌 <br /> `plugin` | Plugin/utility libraries | Links to the repo home |
📆 <br /> `projectManagement` | Project Management | |
📣 <br /> `promotion` | Promotion | |
💬 <br /> `question` | Answering Questions | Answering Questions in Issues, Stack Overflow, Gitter, Slack, etc. |
🔬 <br /> `research` | Research | Literature review. |
👀 <br /> `review` | Reviewed Pull Requests | |
🛡️ <br /> `security` | Security | Identify and/or reduce security threats, GDPR, Privacy, etc |
🔧 <br /> `tool` | Tools | Links to the repo home |
🌍 <br /> `translation` | Translation | Links to the translated content |
⚠️ <br /> `test` | Tests | Links to commits by the user on this project |
✅ <br /> `tutorial` | Tutorials | Links to the tutorial |
📢 <br /> `talk` | Talks | Links to the slides/recording/repo/etc |
📓 <br /> `userTesting` | User Testing | Links to user test notes |
📹 <br /> `video` | Videos | Links to the video |

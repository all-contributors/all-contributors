# ✨ All Contributors ✨

[![chat][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]

[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

This is a specification for recognizing contributors to an open source project in a way that rewards each and every contribution, not just code.

The basic idea is this:

> Use the project README (or other prominent public documentation page in the project) to recognize the contributions of members of the project community.

People are giving of themselves and their free time to contribute to open source projects in so many ways. It can be a real
time sink sometimes and so they should be praised for all their contributions (code or not).

Use this project as an example implementation of the all-contributors specification (see the [Contributors](#contributors) section below).

## Tools

If you find maintaining the list of contributors tedious, try using the [CLI tool](https://www.npmjs.com/package/all-contributors-cli) to lighten your load.

If you use Atom, try out [allcontributors](https://atom.io/packages/allcontributors), an atom package for the all-contributors-spec implementation.

## Specification

### Mandatory
Open source projects should include the following mandatory items in order to support the All Contributors specification:

1. A "Contributors" section in a prominent site of the project repository documentation that includes a list of all project contributors
  - The goal should be to use the most prominent site of the project documentation when feasible.  In many cases, this is the project README file
  - Consider use of a CONTRIBUTORS file in the top level of the repository when the number of project contributors exceeds a level at which it is feasible to use the README file to acknowledge contributions.  In this case, a prominent link to the CONTRIBUTORS file should be included on the README page under the "Contributors" heading
2. The listings should be formatted as a table with the following information about the project contributors:
  - Name
  - URL link to a site where more information can be learned about the contributor.  This URL may be determined by the contributor at the project's discretion.
  - Indication of the Contribution Category in text or icon image format using the defined Contribution Categories and/or Contribution Categories emoji images (see below).
  - A link to the Contribution Category in text or emoji format using the defined Contribution Categories and/or [Contribution Categories emoji](#emoji-key).
    - The list of contributors can be spread across multiple lines (each technically being its own table) as needed.
    - The order of contributors is immaterial to the spec. Order them how you wish.
3. Projects should define contributors as those who contribute to a project in any of the Contribution Categories at any level of contribution.  This specification is, by definition, inclusive of all contributions.  In cases where projects deviate from the Contribution Categories or require a specific contribution level in order to meet criteria as a project contributor, the project should provide explicit documentation of the definitions that satisfy the project contributor criteria in the CONTRIBUTING document or a similar prominent public document at the top level of the project repository.  This specification recommends against exclusion of an individual from the Contributor list based upon perceived level of contribution.  Instead, projects should use indicators of effort within a list that remains inclusive of all contributors to the project at any level of effort.  If used, these effort indicators are at the discretion of the project and are not currently specified.

### Optional
Projects should consider the following optional items as part of their commitment to the All Contributors specification:

1. The user's avatar can be included and is recommended.
3. An optional link from the Contribution Category indicator to the category-specific contribution(s) can be included to provide additional information about the project contribution(s) as detailed in the section below.

## Emoji key

Emoji | Represents | Links to | Comment
:---: | --- | --- | ---
💻 | Code | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
🔌 | Plugin/utility libraries | the repo home
🔧 | Tools | the repo home
🚇 | Infrastructure (Hosting, Build-Tools, etc) | link to source file (like `travis.yml`) in repo, if applicable
📖 | Documentation | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`, Wiki, or other source of documentation
🌍 | Translation | the translated content
💁 | Answering Questions (in Issues, Stack Overflow, Gitter, Slack, etc.) | | previously: ❓
⚠️ | Tests | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
🐛 | Bug reports | `https://github.com/${ownerName}/${repoName}/issues?q=author%3A${username}`
💡 | Examples | the examples
📝 | Blogposts | the blogpost
✅ | Tutorials | the tutorial
📹 | Videos | the video
📢 | Talks | the slides/recording/repo/etc.
🎨 | Design | the logo/iconography/visual design/etc.
👀 | Reviewed Pull Requests
💵 | Financial Support | relevant page | people or orgs who provide financial support
🔍 | Funding/Grant Finders | | people who help find financial support
📋 | Event Organizers | event page

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />💁 [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds) 👀 📢 | [<img src="https://avatars.githubusercontent.com/u/6177621?v=3" width="100px;"/><br /><sub>Divjot Singh</sub>](http://bogas04.github.io)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=bogas04) 👀 | [<img src="https://avatars.githubusercontent.com/u/1282980?v=3" width="100px;"/><br /><sub>Ben Briggs</sub>](http://beneb.info)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=ben-eb) 👀 | [<img src="https://avatars.githubusercontent.com/u/2037007?v=3" width="100px;"/><br /><sub>James Monger</sub>](https://github.com/Jameskmonger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jameskmonger) | [<img src="https://avatars.githubusercontent.com/u/3869412?v=3" width="100px;"/><br /><sub>Jeroen Engels</sub>](https://github.com/jfmengels)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels) 👀 🔧 | [<img src="https://avatars.githubusercontent.com/u/4249591?v=3" width="100px;"/><br /><sub>Chris Simpkins</sub>](https://github.com/chrissimpkins)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=chrissimpkins) 👀 | [<img src="https://avatars.githubusercontent.com/u/153481?v=3" width="100px;"/><br /><sub>F. Hemberger</sub>](https://github.com/fhemberger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=fhemberger) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/3982200?v=3" width="100px;"/><br /><sub>Daniel Kraft</sub>](https://github.com/frigginglorious)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=frigginglorious) | [<img src="https://avatars.githubusercontent.com/u/8503331?v=3" width="100px;"/><br /><sub>Mayank Badola</sub>](https://github.com/mbad0la)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mbad0la) 🔧 |
<!-- ALL-CONTRIBUTORS-LIST:END -->
Thanks goes to these wonderful people ([emoji key][emojis]):

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[chat-badge]: https://img.shields.io/badge/chat-on%20gitter-46BC99.svg?style=flat-square
[chat]: https://gitter.im/kentcdodds/all-contributors?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[build-badge]: https://img.shields.io/travis/kentcdodds/all-contributors.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/all-contributors
[version-badge]: https://img.shields.io/npm/v/all-contributors.svg?style=flat-square
[package]: https://www.npmjs.com/package/all-contributors
[license-badge]: https://img.shields.io/npm/l/all-contributors.svg?style=flat-square
[license]: https://github.com/kentcdodds/all-contributors/blob/master/other/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/all-contributors/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/all-contributors.svg?style=social
[github-watch]: https://github.com/kentcdodds/all-contributors/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/all-contributors.svg?style=social
[github-star]: https://github.com/kentcdodds/all-contributors/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20all-contributors!%20%E2%9C%A8%20Recognize%20all%20contributors,%20not%20just%20the%20ones%20who%20commit%20code%20%E2%9C%A8%20https://github.com/kentcdodds/all-contributors%20%F0%9F%A4%97
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/all-contributors.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors

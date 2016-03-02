# :sparkles: All Contributors v1.0.0-beta.0 :sparkles:

This is a specification for recognizing contributors to an open source project in a way that rewards any and every contribution
whether or not it be code.

The basic idea is this:

> Use the project README (or other prominent public documentation page in the project) to recognize the contributions of members of the project community.

People are giving of themselves and their free time to contribute to open source projects in so many ways. It can be a real
time sink sometimes and so they should be praised for all their contributions (code or not).

Use this project as an example implementation of the all-contributors specification (see the [Contributors](#contributors) section below).

If you find maintaining the list of contributors tedious, try using the [CLI tool](https://www.npmjs.com/package/all-contributors-cli) to lighten your load.

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

Emoji | Represents | Links to
:---: | --- | ---
💻 | Code | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
🔌 | Plugin/utility libraries | the repo home
🔧 | Tools | the repo home
📖 | Documentation | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`, Wiki, or other source of documentation
🌍 | Translation | the translated content
❓ | Answering Questions (in Issues, Stack Overflow, Gitter, Slack, etc.)
⚠️ | Tests | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
🐛 | Bug reports | `https://github.com/${ownerName}/${repoName}/issues?q=author%3A${username}`
💡 | Examples | the examples
📝 | Blogposts | the blogpost
✅ | Tutorials | the tutorial
📹 | Videos | the video
📢 | Talks | the slides/recording/repo/etc.
🎨 | Design | the logo/iconography/visual design/etc.
👀 | Reviewed Pull Requests

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

| [![Kent C. Dodds](https://avatars1.githubusercontent.com/u/1500684?s=100)<br /><sub>Kent C. Dodds</sub>](http://kentcdodds.com)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds) 👀 ❓ | [![Divjot Singh](https://avatars1.githubusercontent.com/u/6177621?s=100)<br /><sub>Divjot Singh</sub>](http://bogas04.github.io)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=bogas04) 👀 | [![Ben Briggs](https://avatars1.githubusercontent.com/u/1282980?v=3&s=100)<br /><sub>Ben Briggs</sub>](http://beneb.info)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=ben-eb) 👀 | [![James Monger](https://avatars1.githubusercontent.com/u/2037007?v=3&s=100)<br /><sub>James Monger</sub>](http://github.com/Jameskmonger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jameskmonger) | [![Jeroen Engels](https://avatars.githubusercontent.com/u/3869412?v=3&s=100)<br /><sub>Jeroen Engels</sub>](https://github.com/jfmengels)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels) [🔧](https://www.npmjs.com/package/all-contributors-cli) 👀 | [![Chris Simpkins](https://avatars0.githubusercontent.com/u/4249591?v=3&s=100)<br /><sub>Chris Simpkins</sub>](http://github.com/chrissimpkins)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=chrissimpkins) 👀 | [![Frederic Hemberger](https://avatars0.githubusercontent.com/u/153481?v=3&s=100)<br /><sub>F. Hemberger</sub>](http://github.com/fhemberger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=fhemberger) | 
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind welcome!

## LICENSE

MIT

---
id: overview
title: Overview ✨
---

> There is [now a GitHub Bot](https://github.com/all-contributors/all-contributors-bot) for automating the maintenance of your contributors table ✨<br />Say goodbye to command line tool dependencies and hello to the [@all-contributors bot 🤖](https://github.com/all-contributors/all-contributors-bot)

<div align="center">
    <img src="/img/icons/logo-full-transparent.png" alt="✨ All Contributors ✨" width="800px" />
</div>


This is a specification for recognizing contributors to an open source project in a way that rewards each and every contribution, not just code.

The basic idea is this:

> Use the project README (or other prominent public documentation page in the project) to recognize the contributions of members of the project community.

People are giving of themselves and their free time to contribute to open source projects in so many ways. It can be a real
time sink sometimes and so they should be praised for all their contributions (code or not).

Use this project as an example implementation of the all-contributors specification.

## Tools for updating your all-contributors table

If you find maintaining the list of contributors tedious, say hello to the [@all-contributors bot 🤖](https://github.com/all-contributors/all-contributors-bot)

If you prefer command line tools, there is also the [all-contributors CLI tool](https://www.npmjs.com/package/all-contributors-cli)

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
💬 | Answering Questions (in Issues, Stack Overflow, Gitter, Slack, etc.)
🐛 | Bug reports | `https://github.com/${ownerName}/${repoName}/issues?q=author%3A${username}`
📝 | Blogposts | the blogpost
💼 | Business Development | | people who execute on the business end
💻 | Code | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
🖋 | Content (e.g. website copy) | where the content is used | blog posts are separate
📖 | Documentation | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`, Wiki, or other source of documentation
🎨 | Design | the logo/iconography/visual design/etc.
💡 | Examples | the examples
📋 | Event Organizers | event page
💵 | Financial Support | relevant page | people or orgs who provide financial support
🔍 | Funding/Grant Finders | | people who help find financial support
🤔 | Ideas & Planning |
🚇 | Infrastructure (Hosting, Build-Tools, etc) | link to source file (like `travis.yml`) in repo, if applicable
🚧 | Maintenance | `https://github.com/${ownerName}/${repoName}/commits?author=${username}` | people who help in maintaining the repo
📦 | Packaging/porting to support a new platform
🔌 | Plugin/utility libraries | the repo home
👀 | Reviewed Pull Requests
🛡️ | Security | | identify and/or reduce security threats, GDPR, Privacy, etc
🔧 | Tools | the repo home
🌍 | Translation | the translated content
⚠️ | Tests | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
✅ | Tutorials | the tutorial
📢 | Talks | the slides/recording/repo/etc.
📓 | User Testing | user test notes
📹 | Videos | the video

## Notes for repository maintainers
Contributors should be recognised as soon as the contribution is discovered to help ensure their efforts are not overlooked when the list gets updated at a later date. This can be difficult for contributions that are not the result of a commit to repository but do your best to minimise the time between the contribution and updating the list.

Being the owner or a maintainer of the repository does not mean you are solely responsible for keeping the list of contributors up to date. You should encourage contributors to add themselves to the list as much as possible. This can be in the form of a comment on the issue, blog or answer, or through more direct forms of communication where appropriate.

Many contributors may not realise that their efforts are sufficient for recognition in the contributors list. This might be because they have not read or understood the definition of a contributor as set out in this specification, or because they do not feel like it is significant enough. In these cases, you should still encourage them to add themselves, but it may be necessary for you to add the contributor yourself (though it's a good idea to do so in the form of a pull request to make sure they're ok with being added).

In the end, there are no hard and fast rules for when a contribution has to be added to the list, just do your best to be fair and to ensure all contributors are recognised.

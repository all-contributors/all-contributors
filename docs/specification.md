---
id: specification
title: Specification
sidebar_label: Specification
---

An example of how using the all-contributors spec table can recognize all contributors
<div align="center">
    <img src="../assets/contributors-table-small.png" alt="Contributors Table Screenshot" width="800px" />
</div>

## Mandatory
Open source projects should include the following mandatory items in order to support the All Contributors specification:

1. A "Contributors" section in a prominent site of the project repository documentation that includes a list of all project contributors
    - The goal should be to use the most prominent site of the project documentation when feasible.  In many cases, this is the project README file
    - Consider using a CONTRIBUTORS file in the top level of the repository when the number of project contributors exceeds a level at which it is unfeasible to use the README file to acknowledge contributions.  In this case, a prominent link to the CONTRIBUTORS file should be included on the README page under the "Contributors" heading
2. The listings should be formatted as a table with the following information about the project contributors:
    - Name
    - URL link to a site where more information can be learned about the contributor.  This URL may be determined by the contributor at the project's discretion.
    - An indication of the Contribution Category in text or icon image format using the defined Contribution Categories and/or Contribution Categories emoji images (see below).
    - A link to the Contribution Category in text or emoji format using the defined Contribution Categories and/or [Contribution Categories emoji](emoji-key).
        - The list of contributors can be spread across multiple lines (each technically being its own table) as needed.
        - The order of contributors is immaterial to the spec. Order them how you wish.
3. Projects should define contributors as those who contribute to a project in any of the Contribution Categories at any level of contribution.  This specification is, by definition, inclusive of all contributions.  In cases where projects deviate from the Contribution Categories or require a specific contribution level in order to meet criteria as a project contributor, the project should provide explicit documentation of the definitions that satisfy the project contributor criteria in the CONTRIBUTING document or a similar prominent public document at the top level of the project repository.  This specification recommends against the exclusion of an individual from the Contributor list based upon the perceived level of contribution.  Instead, projects should use indicators of effort within a list that remains inclusive of all contributors to the project at any level of effort.  If used, these effort indicators are at the discretion of the project and are not currently specified.

> **Pro tip:** You can use [the @all-contributors bot 🤖](bot/overview) to automate acknowledging contributors to your open source projects ✨

## Optional
Projects should consider the following optional items as part of their commitment to the All Contributors specification:

1. The user's avatar can be included and is recommended.
3. An optional link from the Contribution Category indicator to the category-specific contribution(s) can be included to provide additional information about the project contribution(s) as detailed in the section below.

## What's next
- [Emoji Key (Contribution Types Reference)](emoji-key)
- [Notes for repository maintainers](repository-maintainers)
- [Automating the process using tools](tooling)


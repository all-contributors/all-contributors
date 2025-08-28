---
id: contribute
title: Contribute, and help us improve
sidebar_label: Help us Improve
---

> Call for translators! [We're looking for translators](https://github.com/all-contributors/all-contributors/issues/143) to help translate this spec for everyone!

## Help improve the all-contributors documentation!

Thanks for your interest in the project!
Pull Requests welcome for any level of improvement, from a small typo to a new section, help us make the project better

All the source code is available at [github.com/all-contributors/all-contributors](https://github.com/all-contributors/all-contributors/tree/master/docs)

## Committing to an all-contributors repo

We use the [angular commit convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) for commits that are used for an automated changelog generation, so it would be advisable to respect that.
If you're not used to it or are afraid to mistype a commit, you can run `npm run commit` or `git cz` (if you have installed `commitizen`) which would take you through a few questions and write the commit for you.

## Editing Content

> **Pro Tip**: Every page has an _Edit_ button up the top, clicking this will take you straight to the GitHub source code for that page

Once on a file, click the 'pencil' icon to [easily edit the file inline](https://help.github.com/articles/editing-files-in-your-repository/)
<div align="center">
    <img src="../../assets/edit-this-page.png" alt="Example on how to edit a page" width="800px" />
</div>

## Translations

[![Crowdin](https://d322cqt584bo4o.cloudfront.net/all-contributors/localized.svg)](https://crowdin.com/project/all-contributors)

Our translations are managed through crowdin. You can help contribute by heading to [the crowdin project] and suggesting translations.
If you like, [comment on this issue](https://github.com/all-contributors/all-contributors/issues/143) to let us know you're helping or if you have any queries!

> When translating, anything that has the [XPATH](https://developer.mozilla.org/en-US/docs/Web/XPath) `@href`, `@src` etc mustn't be translated. Things like `code` should not be either. This will cause the project to 404. See the below image for an example:
<img src="../../assets/translating-xpath.png" alt="Contribute to translating" />

> However, it's recommended to translate any content that would contribute to a better comprehension like the comments in `code` tags _as long as_ it doesn't change the actual code since it only understands English.

### How to's

#### Login to Crowdin

1. Go to [the crowdin project], then [sign up](https://crowdin.com/join) and/or [log in](https://crowdin.com/login).
2. Join the "All Contributors" project and voila!

#### Translate strings

1. Go to [the crowdin project].
2. Click on the flag of the language you want to translate the documentation to.
3. Click on any `*.md` files that aren't completely translated (read showing 100% on the right-hand side)
4. Write your translation in the _"Enter translation here"_ field (which would correspond to the translation of the text in the _"SOURCE STRING"_ field above) then click "SAVE"
5. For **proofreaders** only: You can either approve translation suggestions (whether it's done by you or someone else), which you will find in the _"[LANGUAGE] TRANSLATIONS"_ section, by clicking on the :ballot_box_with_check: or delete them by clicking on the :wastebasket: icon.

### Change deployments

After you translate strings in any given language, you won't see those changes appearing live until the `master` branch was updated followed by a successful deployment.

## Search

Search is by algolia, the configuration is at <https://github.com/algolia/docsearch-configs/blob/master/configs/all-contributors.json>

## Run the website locally:

All Contributors currently uses [Docusaurus 1.x](https://docusaurus.io) for our documentation website.

To build the docs locally:


* https://tutorial.docusaurus.io/docs/intro

1. Make sure `npm` is installed on your machine. Use the [nodejs documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you aren't sure how to install `npm`.

To check that npm is installed run the following in your favorite shell:

`npm -v`

Next, make sure you have at least node version 0.22 (LTS) or higher. To check the version,
use:

`node -v`

If you don't have atleast version `.22` or higher, please install node or upgrade your current version.
Install docusaurus v1 (1.14.7) and all of the project dependencies using `npm install`. *Note: This project does not yet support docusaurus v2 or v3; though, we hope to do so in the future.*
**`npm i` is shorthand for `npm install`)**:

`npm i`

Once you have completed the above, you can launch a server locally that will build and run the docs locally. In your favorite shell run:

`npm run start`

* Then, go to `http://localhost:3000` and you will see the all contributors website there!
* Refresh the browser page as needed when editing markdown pages.

### Make changes - linting your contribution

If you make changes to a markdown file in the site, then our linting action will
check those changes. To run the linter yourself on a file locally:

First install markdownlint-cli:

`npm i -g markdownlint-cli`

Then run markdownlint on the file (or files) that you wish to check:

`markdownlint --fix "docs/project/contribute.md"`

Or you can run it on all files in the docs directory, like this:

`markdownlint --fix "docs/**.md"`

## Add yourself as a contributor

To add yourself to the table of contributors, follow the [bot usage instructions](../bot/usage) ;).

[the crowdin project]: https://crowdin.com/project/all-contributors

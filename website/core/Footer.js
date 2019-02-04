/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
    render() {
        return (
            <footer className="docs-footer">
                <a href="/">
                    <img
                        className="docs-footer__logo"
                        src="/img/icons/logo-square-transparent.png"
                        alt="All Contributors"
                    />
                </a>
                <a
                    className="github-button docs-footer__github-stars"
                    href="https://github.com/all-contributors/all-contributors"
                    data-icon="octicon-star"
                    data-count-href="/facebook/docusaurus/stargazers"
                    data-show-count="true"
                    data-count-aria-label="# stargazers on GitHub"
                    aria-label="Star All Contributors on GitHub"
                >
                    Star All Contributors
                </a>
            </footer>
        )
    }
}

module.exports = Footer

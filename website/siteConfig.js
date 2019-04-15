const siteConfig = {
    title: 'All Contributors',
    tagline: '✨ Recognize all contributors, not just the ones who push code ✨',
    // For deploy
    url: 'https://allcontributors.org',
    baseUrl: '/',
    projectName: 'all-contributors',
    organizationName: 'all-contributors',
    // End deploy options
    editUrl: 'https://github.com/all-contributors/all-contributors/tree/master/docs/',
    headerLinks: [
        { doc: 'overview', label: 'Docs' },
        { href: "https://github.com/all-contributors/all-contributors", label: "GitHub" },
    ],
    headerIcon: 'img/icons/logo-square-transparent.png',
    favicon: 'img/icons/favicon-32x32.png',
    colors: {
        primaryColor: '#0e0c33',
        secondaryColor: '#008DF9',
    },
    customDocsPath: 'docs',
    gaTrackingId: 'UA-131821931-1',
    copyright: 'All Contributors',

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],
    onPageNav: 'separate', // On page navigation for the current documentation page.
    cleanUrl: true, // No .html extensions for paths.

    // Open Graph and Twitter card images.
    // ogImage: 'img/all-contributors.png',
    // twitterImage: 'img/all-contributors.png',

    // Show documentation's last contributor's name.
    enableUpdateBy: true,
    enableUpdateTime: true,

    // Search
    algolia: {
        apiKey: 'df11e55c8bba69bfec12fca22be89831',
        indexName: 'all-contributors',
        algoliaOptions: {
            facetFilters: [ "language:LANGUAGE" ]
        }
    },
}

module.exports = siteConfig

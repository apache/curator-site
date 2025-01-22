// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Apache Curator',
    tagline: 'A Java/JVM client library for Apache ZooKeeper',
    url: 'https://curator.apache.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'docs',
                    routeBasePath: "/docs",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/apache/curator-site/tree/main/',
                },
                // FIXME - uncomment once we write the first blog
                // blog: {
                //     showReadingTime: true,
                //     editUrl: 'https://github.com/apache/curator-site/tree/main/',
                // },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/curator-highres.png',
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true
            },
            navbar: {
                logo: {
                    alt: 'Apache Curator',
                    src: 'img/curator-logo.svg',
                },
                items: [
                    { type: 'doc', docId: 'about', position: 'right', label: 'Documentation' },
                    { type: 'doc', docId: 'community', position: 'right', label: 'Community', docsPluginId: 'community' },
                    { to: '/download', label: 'Download', position: 'right' },
                    // FIXME - uncomment once we write the first blog
                    // {to: '/blog', label: 'Blog', position: 'right'},
                    {
                        href: 'https://github.com/apache/curator',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                    { type: 'search', position: 'right' },
                    {
                        type: 'dropdown',
                        label: 'ASF',
                        position: 'right',
                        items: [
                            { label: 'Foundation', to: 'https://www.apache.org/' },
                            { label: 'License', to: 'https://www.apache.org/licenses/' },
                            { label: 'Events', to: 'https://www.apache.org/events/current-event.html' },
                            { label: 'Security', to: 'https://www.apache.org/security/' },
                            { label: 'Sponsorship', to: 'https://www.apache.org/foundation/sponsorship.html' },
                            { label: 'Privacy', to: 'https://privacy.apache.org/policies/privacy-policy-public.html' },
                            { label: 'Thanks', to: 'https://www.apache.org/foundation/thanks.html' }
                        ],
                    },
                ],
            },
            footer: {
                style: 'dark',
                logo: {
                    height: '128px',
                    alt: 'Apache logo',
                    src: 'img/asf-logo.svg',
                    href: 'https://www.apache.org/'
                },
                copyright: 'Apache Curator, the Apache feather logo, and the Apache Curator project logos are trademarks of The Apache Software Foundation. All other marks mentioned may be trademarks or registered trademarks of their respective owners.',
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: [
                    'groovy',
                    'java',
                    'properties',
                ],
            },
        }),

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                routeBasePath: 'community',
                sidebarPath: './sidebarsCommunity.js',
                editUrl: 'https://github.com/apache/curator-site/tree/main/',
            },
        ],
        [require.resolve("docusaurus-plugin-image-zoom"), {}],
    ],

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                indexDocs: true,
                indexPages: true,
                language: ["en"],
            }
        ],
    ]
};

export default config;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    community: [
        'community',
        'team',
        'history',
        'submitting-pull-requests',
        {
            type: 'category',
            label: 'Committers',
            collapsed: false,
            items: [
                'new-committers',
                'releasing-curator',
            ]
        }
    ],
};

module.exports = sidebars;

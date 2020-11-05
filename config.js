const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://mait.pluto.app',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://pluto.app/img/logo.png',
    logoLink: 'https://pluto.app/',
    title: 'Multi App Integration Toolbox',
    githubUrl: 'https://github.com/PlutoVR/MAIT/',
    helpUrl: 'https://pluto.app',
    tweetText: '',
    // social: `<li>
    //     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
    //       <div class="twitterBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>
    // 	<li>
    //     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
    //       <div class="discordBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>`,
    links: [{ text: '', link: '' }],
    // search: {
    //   enabled: false,
    //   indexName: '',
    //   algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
    //   algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    //   algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    // },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/tools',
      '/getting_started',
      '/advanced_tutorials',

    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Pluto', link: 'https://pluto.app' }],
    frontline: false,
    ignoreIndex: true,
    title: 'Multi App Integration Toolbox',
  },
  siteMetadata: {
    title: 'Pluto MAIT',
    description: 'Pluto Multi App Integration Toolbox',
    ogImage: null,
    docsLocation: 'https://github.com/PlutoVR/MAIT/tree/main/content',
    // favicon:
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Pluto MAIT',
      short_name: 'PlutoMAIT',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

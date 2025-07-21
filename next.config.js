const withNextra = require('nextra');

const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  async redirects() {
    return [
      {
        source: '/team-projects/:slug*',
        destination: '/work/:slug*',
        permanent: true,
      },
      {
        source: '/self-started-projects/:slug*', 
        destination: '/work/:slug*',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextra(nextraConfig);

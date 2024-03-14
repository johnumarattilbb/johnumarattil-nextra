const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/projects/coins', // Assuming you want to redirect to this path
        permanent: true, // If this is a permanent redirect, set to true. Change to false if temporary.
      },
    ];
  },
});

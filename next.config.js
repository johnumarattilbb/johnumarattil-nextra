const withNextra = require('nextra');

const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
};

module.exports = withNextra(nextraConfig);

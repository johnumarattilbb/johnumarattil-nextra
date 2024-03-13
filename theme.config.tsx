import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Johnu Marattil</span>,
  project: {
    link: 'https://github.com/johnumarattilbb/johnumarattil-me',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/johnumarattilbb/johnumarattil-me',
  footer: {
    text: 'Johnu Marattil',
  },
  search: { placeholder: 'Search here' },
  editLink: {
    text: 'Suggest changes →'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  }

}

export default config

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
  search: { placeholder: 'Search in Johnu Marattil' },
  editLink: {
    text: 'Suggest changes here →'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  }

}

export default config

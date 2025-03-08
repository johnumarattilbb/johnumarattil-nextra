export default {
  logo: <span><strong>johnu</strong>marattil.me</span>,
  project: {
    link: 'https://github.com/johnumarattilbb',
  },
  docsRepositoryBase: 'https://github.com/yourusername/your-repo/tree/main',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://johnumarattil.me" target="_blank">
          Your Name
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Your Project Name'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Your project description" />
      <meta name="og:title" content="Your Project Name" />
    </>
  ),
} 
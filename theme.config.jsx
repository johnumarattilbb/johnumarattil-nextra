export default {
    logo: <span><strong>johnu</strong>marattil</span>,
    project: {
        link: 'https://github.com/johnumarattilbb',
    },
    docsRepositoryBase: 'https://github.com/johnumarattilbb',
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
            titleTemplate: '%s'
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="description" content="Johnu Marattil is a UI/UX Engineer from Toronto with 7 years of experience in designing and developing intuitive solutions for enterprise-scale web and mobile applications" />
            <meta name="og:title" content="Portfolio - Johnu Marattil" />
        </>
    ),
    search: {
        placeholder: 'Search'
    },
    sidebar: {
        defaultMenuCollapseLevel: 1
    },
} 
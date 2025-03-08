export default {
    logo: <span><strong>johnu</strong>marattil.me</span>,
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
            <meta name="description" content="Your project description" />
            <meta name="og:title" content="Your Project Name" />
        </>
    ),
} 
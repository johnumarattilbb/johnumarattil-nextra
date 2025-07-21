export default {
    logo: <span className="nx-text-black dark:nx-text-white"><strong>johnu</strong>marattil</span>,
    
    header: false,
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href="https://johnumarattil.me" target="_blank">
                    Johnu Marattil
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
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <meta name="description" content="Johnu Marattil is a UI/UX Engineer from Toronto with 7 years of experience in designing and developing intuitive solutions for enterprise-scale web and mobile applications" />
            <meta name="og:title" content="Portfolio - Johnu Marattil" />
        </>
    ),
    search: false,
    navbar: {
        links: [
          // { href: '/contact', children: 'Contact' },
        ]
      },
      feedback: {
        content: null  // 👈 this hides the feedback link/button
      },
      editLink: {
        component: null  // ⛔ completely disables the link
      },
    timestamp: false,
    pagination: false,
      
    sidebar: {
        defaultMenuCollapseLevel: 1
    },
} 
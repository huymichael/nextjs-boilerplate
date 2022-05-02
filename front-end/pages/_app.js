import Head from 'next/head';
import React from 'react';
import '../public/styles/global.styles.scss';

function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Head>
                <title>
                    <meta name="viewport"
                          content="initial-scale=1.0, width=device-width"/>
                </title>
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;

import BasicLayout from '@/containers/layout/BasicLayout';
import '@/styles/global.styles.scss';
import {customTheme} from '@/utils/themes';
import {ThemeProvider} from '@mui/material/styles';
import Head from 'next/head';
import React from 'react';

function MyApp({Component, pageProps}) {
    // const Layout = Component.layout || BasicLayout;
    const Layout = Component.layout || BasicLayout;
    return (
        <React.Fragment>
            <Head>
                <meta name="viewport"
                      content="initial-scale=1.0, width=device-width"/>
                <title>
                    Michael Boilerplate
                </title>
            </Head>
            <ThemeProvider theme={customTheme}>
                <div id='rendered-content'>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default MyApp;

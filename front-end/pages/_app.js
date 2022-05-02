import React from 'react';
import '../public/styles/global.styles.scss';

function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;

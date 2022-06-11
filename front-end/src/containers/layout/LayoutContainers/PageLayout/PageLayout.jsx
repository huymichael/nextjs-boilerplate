import React from 'react';

const PageLayout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                {children}
            </main>
        </>
    );
};

export default PageLayout;

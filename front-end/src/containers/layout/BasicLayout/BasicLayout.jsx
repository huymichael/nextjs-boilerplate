import Footer from '@/containers/layout/components/Footer';
import Header from '@/containers/layout/components/Header';
import PageLayout from '@/containers/layout/LayoutContainers/PageLayout';
import {Container} from '@mui/material';
import React from 'react';

const BasicLayout = ({children}) => {
    return (
        <>
            <PageLayout>
                <Header/>
                <Container disableGutters={true} className="page-content">
                    {children}
                </Container>
                <Footer/>
            </PageLayout>

        </>
    );
};

export default BasicLayout;

import {Container} from '@mui/material';
import React from 'react';

const Footer = ({children}) => {
    return (
        <>
            <footer className='page-footer'>
                <Container disableGutters={true}>
                    test footer
                </Container>
            </footer>
        </>
    );
};

export default Footer;

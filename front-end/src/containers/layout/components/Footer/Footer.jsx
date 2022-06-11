import {Container, Divider, Stack} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import LogoNoText from '@/assets/images/logo-no-text.svg';

const Footer = ({children}) => {
    return (
        <>
            <footer className="page-footer">
                <Container disableGutters={true}
                           className="footer-container">
                    <Container className="sub-content">
                        <Image src={LogoNoText}
                               width={60}
                               height={60}
                               className="brand-logo"/>

                        <Stack direction="row"
                               justifyContent="space-between"
                               alignItems="center"
                               divider={<Divider orientation="vertical"
                                                 flexItem/>}
                               spacing={6}>
                            <section>Section 1</section>
                            <section>Section 2</section>
                            <section>Section 3</section>
                        </Stack>
                    </Container>
                    <Container className='sub-content'>
                        © 2022 Michael Thai. All rights reserved.
                    </Container>

                </Container>
            </footer>
        </>
    );
};

export default Footer;

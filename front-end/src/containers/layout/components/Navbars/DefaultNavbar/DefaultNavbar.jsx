import {AppBar, Container, Link, Stack, Toolbar} from '@mui/material';
import React from 'react';
import Logo from '@/assets/images/logo.svg'
import Image from 'next/image'

const DefaultNavbar = ({children}) => {
    return (
        <>
            <AppBar position="static"
                    color={'transparent'}
                    // elevation={0} //remove box shadow
                    className="navbar-wrapper">
                <Toolbar>
                    <Container disableGutters={true}
                               className="navbar-container">
                        <Stack direction="row"
                               justifyContent="space-between"
                               alignItems="center"
                               spacing={2}>
                            <Container disableGutters={true}
                                       className="nav-left-wrapper">
                                <Stack direction="row"
                                       alignItems="center"
                                       spacing={6}>
                                    <Image src={Logo} width={120} height={64}/>
                                    <Link underline={'hover'}>Home</Link>
                                    <Link underline={'hover'}>About us</Link>
                                    <Link underline={'hover'}>Blog</Link>
                                    <Link underline={'hover'}>Contact</Link>
                                </Stack>
                            </Container>
                            <Container disableGutters={true}
                                       className="nav-right-wrapper">
                                {/*Action*/}
                            </Container>
                        </Stack>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default DefaultNavbar;

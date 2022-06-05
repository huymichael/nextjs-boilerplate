import {AppBar, Container, Link, Stack, Toolbar} from '@mui/material';
import React from 'react';
import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import {NavLinks} from '@/routes/navRoutes';

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
                                    <Image src={Logo}
                                           width={120}
                                           height={64}/>
                                    {NavLinks.map((item, index) => (
                                        <Link key={index}
                                              underline={'hover'}
                                              href={item.path}>
                                            {item.name}
                                        </Link>
                                    ))}
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

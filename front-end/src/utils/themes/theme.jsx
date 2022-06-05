import {createTheme} from '@mui/material/styles';

const fonts = {
    courier: 'Courier Prime',
    montserrat: 'Montserrat',
};
const typos = {
    rootSize: 10,
    bodySize: 16,
    bodyFonts: `fonts.courier, "-apple-system", "Segoe UI","sans-serif", "Apple Color Emoji", "Segoe UI Emoji"`,
    fontWeightNormal: 400,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,


};

const colorPalette = {
    primary: {
        main: '#007CC7',
        light: '#5babfa',
        dark: '#005096',
    },
    secondary: {
        main: '#009CFA',
        light: '#68cdff',
        dark: '#006ec6',
    },
    accent: '#00AADE',
    error: '#D24646',
    success: '#008C3B',
    warning: '#DEA01E',
    black: '#000000',
    white: '#ffffff',
    gray: '#1A1A1A1A',
    background: '#f9f9f9',
};

// MUI Configuration
// ===============================

const paletteConfig = {
    common: {
        black: colorPalette.black,
        white: colorPalette.white,
    },
    primary: colorPalette.primary,
    secondary: colorPalette.secondary,
    error: {
        main: colorPalette.error,
    },
    waring: {
        main: colorPalette.warning,
    },
    success: {
        main: colorPalette.success,
    },
    background: {
        default: colorPalette.background,
    },
};
const typoConfig = {
    htmlFontSize: typos.rootSize,
    fontSize: typos.bodySize,
    fontFamily: typos.bodyFonts,
    fontWeightRegular: typos.fontWeightNormal,
    fontWeightLight: typos.fontWeightLight,
    fontWeightMedium: typos.fontWeightMedium,
    fontWeightBold: typos.fontWeightBold,
    h1: {
        fontFamily: fonts.montserrat + ' Bold',
    },
    h2: {
        fontFamily: fonts.montserrat + ' Bold',
    },
    h3: {
        fontFamily: fonts.montserrat + ' Medium',
    },
    h5: {
        fontFamily: fonts.montserrat + ' Medium',
    },
    h6: {
        fontFamily: fonts.montserrat,
    },
    subtitle1: {
        fontFamily: fonts.montserrat,
    },
    button: {
        fontFamily: fonts.montserrat + ' Semibold',
    },
};

export const customTheme = createTheme({
    palette: paletteConfig,
    typography: typoConfig,
});


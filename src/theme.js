import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        gradient:
            'linear-gradient(90deg, rgba(255,163,153,1) 0%, rgba(255,77,151,1) 90%)',
        paleBlue: 'rgb(221, 219, 255)',
        grayishBlue: 'rgb(132, 135, 148)',
        darkBlue: 'rgb(29, 44, 103)',
        veryDarkBlue: 'rgb(12, 18, 44)',
    },
    breakpoints: {
        xsDevices: 'max-width: 35.9375rem',
        sDevices: 'min-width: 36rem',
        mDevices: 'min-width: 48rem',
        lDevices: 'min-width: 62rem',
        xlDevices: 'min-width: 90rem',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

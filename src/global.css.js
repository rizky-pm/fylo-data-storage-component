import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 87.75%;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    body {
        color: ${(props) => props.theme.colors.paleBlue};
        font-family: 'Raleway', sans-serif;
    }
`;

export default GlobalStyles;

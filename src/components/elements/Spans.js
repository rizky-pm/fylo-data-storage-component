import styled from 'styled-components';

export const BoldedSpan = styled.span`
    color: ${(props) =>
        props.lightColor ? `rgb(221, 219, 255)` : `rgb(12, 18, 44)`};
    font-weight: 700;
    font-size: ${(props) => (props.smallerFontSize ? '.875rem' : '2.5rem')};
    height: 3.125rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        font-size: ${(props) =>
            props.smallerFontSize ? '.875rem' : '2.25rem'};
        height: 2.5rem;
    }
`;

export const DimmedSpan = styled.span`
    font-weight: 700;
    font-size: 0.875rem;
    height: 0.625rem;
    color: ${(props) => props.theme.colors.grayishBlue};

    margin-left: ${(props) => props.marginLeft};
`;

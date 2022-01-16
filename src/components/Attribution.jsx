import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    /* margin-top: 30px; */
    width: 65%;
    text-align: center;
    color: ${(props) => props.theme.colors.paleBlue};
`;

const AttributionLink = styled.a`
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease;
    font-weight: 700;

    &:hover {
        color: ${(props) => props.theme.colors.grayishBlue};
    }
`;

const Attribution = () => {
    return (
        <Container>
            Challenge by{' '}
            <AttributionLink
                href='https://www.frontendmentor.io?ref=challenge'
                target='_blank'
                rel='noopener noreferrer'
            >
                Frontend Mentor
            </AttributionLink>
            . Coded by{' '}
            <AttributionLink href='https://github.com/rizky-pm'>
                Rizky Putra Mahendra
            </AttributionLink>
            🔥
        </Container>
    );
};

export default Attribution;

import React from 'react';
import styled from 'styled-components';
import Attribution from './components/Attribution';

import FirstCard from './components/FirstCard';
import SecondCard from './components/SecondCard';

import MobileBackground from './images/bg-mobile.png';
import DesktopBackground from './images/bg-desktop.png';

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;

    background: url(${MobileBackground});
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        background: url(${DesktopBackground}),
            ${(props) => props.theme.colors.veryDarkBlue};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 0 150%;
    }
`;

const CardsContainer = styled.div`
    padding: 0 1.25rem;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 1.875rem;
    }
`;

function App() {
    return (
        <Container>
            <CardsContainer>
                <FirstCard />
                <SecondCard />
            </CardsContainer>
            <Attribution />
        </Container>
    );
}

export default App;

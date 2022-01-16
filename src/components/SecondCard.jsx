import React, { useEffect } from 'react';
import styled from 'styled-components';

import { BoldedSpan, DimmedSpan } from './elements/Spans';

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.darkBlue};
    padding: 2.1875rem 2.1875rem 3.4375rem 2.1875rem;
    border-radius: 0.625rem;
    margin-top: 0.9375rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        width: 540px;
        height: 150px;
        padding: 2.5rem;
        margin-top: 0;
        align-self: flex-end;
    }
`;

const Text = styled.p``;

const ProgressBarWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.veryDarkBlue};
    border-radius: 1.25rem;
    /* position: relative; */
    margin: 0.9375rem 0;
    height: 1.0625rem;
    width: 100%;
    border: 0.125rem solid ${(props) => props.theme.colors.veryDarkBlue};
`;

const ProgressBar = styled.div.attrs({
    className: 'progress',
    value: 815,
})`
    background: ${(props) => props.theme.colors.gradient};
    border-radius: 1.25rem;
    color: #fff;
    height: 100%;
    width: 0%;
    transition: 1s ease 0.3s;
    position: relative;

    :after {
        content: '';
        width: 0.75rem;
        height: 0.75rem;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-45%);
        right: 0;
        margin-right: 0.125rem;
    }
`;

const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const Label = styled.p`
    font-weight: 700;
`;

const RemainingValue = styled.div`
    width: 170px;
    height: 80px;
    border-radius: 0.625rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.paleBlue};
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, 100%);

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        bottom: 100%;
        left: 100%;
        /* right: 0; */
        transform: translate(-100%, -100%);
        border-radius: 0.625rem 0.625rem 0 0.625rem;
        height: 70px;

        &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 100%;
            width: 0;
            height: 0;
            border-left: 1.25rem solid transparent;
            border-right: 0 solid transparent;
            border-top: 1.25rem solid #e8e8e8;
            clear: both;
        }
    }
`;

const SecondCard = () => {
    useEffect(() => {
        const progress = document.querySelector('.progress');
        let progressValue = parseFloat(
            (progress.getAttribute('value') / 1000) * 100
        );
        progress.style.width = `${progressValue}%`;
    }, []);

    return (
        <Container>
            <Text>
                You've used 815{' '}
                <BoldedSpan lightColor smallerFontSize>
                    815 GB
                </BoldedSpan>{' '}
                of your storage
            </Text>
            <ProgressBarWrapper>
                <ProgressBar />
            </ProgressBarWrapper>
            <LabelContainer>
                <Label>0 GB</Label>
                <Label>1000 GB</Label>

                <RemainingValue>
                    <BoldedSpan>185</BoldedSpan>
                    <DimmedSpan marginLeft='.625rem'>GB LEFT</DimmedSpan>
                </RemainingValue>
            </LabelContainer>
        </Container>
    );
};

export default SecondCard;

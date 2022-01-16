import React from 'react';
import styled from 'styled-components';

import IconLogo from '../images/logo.svg';
import IconDocument from '../images/icon-document.svg';
import IconFolder from '../images/icon-folder.svg';
import IconUpload from '../images/icon-upload.svg';

const Container = styled.div`
    padding: 2.5rem;
    border-radius: 0.625rem 6.25rem 0.625rem 0.625rem;
    background-color: ${(props) => props.theme.colors.darkBlue};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        width: 350px;
        height: 200px;
    }
`;

const Image = styled.img``;

const Icons = styled.div`
    display: flex;
`;

const IconContainer = styled.div`
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 0.625rem;
    margin-top: 1.875rem;
    background-color: ${(props) => props.theme.colors.veryDarkBlue};
    display: flex;
    justify-content: center;
    align-items: center;

    :not(:last-child) {
        margin-right: 0.9375rem;
    }

    &:hover {
        cursor: pointer;
    }
`;

const FirstCard = () => {
    return (
        <Container>
            <Image src={IconLogo} alt='Fylo Logo' />
            <Icons>
                {/* <Image src={IconDocument} alt='Document' />
                <Image src={IconFolder} alt='Folder' />
                <Image src={IconUpload} alt='Upload' /> */}
                <IconContainer>
                    <Image src={IconDocument} alt='Document' />
                </IconContainer>
                <IconContainer>
                    <Image src={IconFolder} alt='Folder' />
                </IconContainer>
                <IconContainer>
                    <Image src={IconUpload} alt='Upload' />
                </IconContainer>
            </Icons>
        </Container>
    );
};

export default FirstCard;

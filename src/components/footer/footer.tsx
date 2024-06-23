import React from 'react';

import {
    FooterContainer,
    FootLink,
    Logo,
} from '../../assets/styles/footerStyle';

import { FooterProps } from '../../types/footerType/footerProps';

export const Footer: React.FC<FooterProps> = React.memo(({ currentLanguage }) => {

    return (

        <FooterContainer>

            <FootLink to={'/'}>

                <Logo
                    src={require('../../assets/img/logo.jpeg')}
                    alt="Логотип"
                />

            </FootLink>

        </FooterContainer>

    );

});

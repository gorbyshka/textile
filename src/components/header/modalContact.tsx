import React, { useMemo } from 'react';

import {
    FaTiktok,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa';

import {
    Overlay,
    ContactPopup,
    ContactPopupContent,
    SocialNetworks,
    HeadLink,
    CloseButton,
    ContactLi,
    ContactName,
    ContactUl
} from '../../assets/styles/headerStyle';

import { ModalType } from '../../types/headerType/modalType';

import { translations } from '../../translation/translation';

export const ModalContact: React.FC<ModalType> = React.memo(({ isOpen, onClose, currentLanguage }) => {

    const translation = useMemo(() => translations[currentLanguage], [currentLanguage]);

    return (

        <>

            {isOpen && (

                <>

                    <Overlay onClick={onClose} />

                    <ContactPopup>

                        <ContactPopupContent>

                            <ContactName>

                                {translation.contacts}

                            </ContactName>

                            <ContactUl>

                                <ContactLi>

                                    {translation.alexander}

                                </ContactLi>

                                <ContactLi>

                                    {translation.olga}

                                </ContactLi>

                            </ContactUl>

                            <ContactName>

                                {translation.socialNetworks}

                            </ContactName>

                            <SocialNetworks>

                                <ContactLi>

                                    <HeadLink to="/tiktok">

                                        <FaTiktok />

                                    </HeadLink>

                                </ContactLi>

                                <ContactLi>

                                    <HeadLink to="/instagram">

                                        <FaInstagram />

                                    </HeadLink>

                                </ContactLi>

                                <ContactLi>

                                    <HeadLink to="/youtube">

                                        <FaYoutube />

                                    </HeadLink>

                                </ContactLi>

                            </SocialNetworks>

                            <ContactUl>

                                <ContactName>

                                    {translation.address}

                                </ContactName>

                            </ContactUl>

                            <CloseButton onClick={onClose} />

                        </ContactPopupContent>

                    </ContactPopup>

                </>

            )}

        </>

    );
});

import React, {
    useState,
    useCallback
} from 'react';

import {
    HeaderContainer,
    Logo,
    Menu,
    MenuItem,
    SubMenu,
    HeadLink,
    ColumnList,
    ColumnListItem
} from '../../assets/styles/headerStyle';

import { ModalContact } from './modalContact';
import { PhotoPopup } from './photoPopup';

import { UkIcon } from '../../assets/icons/ukIcon';

import { menuItems } from '../../constants/headConst/menuItems';

import { HeaderProps } from '../../types/headerType/headerProps';

export const Header: React.FC<HeaderProps> = React.memo(({ currentLanguage, handleLanguageChange }) => {

    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    const [isPhotoPopupOpen, setIsPhotoPopupOpen] = useState(false);

    const toggleContactPopup = useCallback(() => setIsContactPopupOpen((prevIsOpen) => !prevIsOpen), []);
    const togglePhotoPopup = useCallback(() => setIsPhotoPopupOpen((prevIsOpen) => !prevIsOpen), []);

    const handleMenuItemClick = useCallback((item: { title: { [x: string]: any; }; }) => {

        const itemTitle = item.title[currentLanguage as keyof typeof item.title];

        if (itemTitle === 'Контакты' || itemTitle === 'Контакти') toggleContactPopup();
        else if (itemTitle === 'Доставка/Оплата') togglePhotoPopup();

    }, [currentLanguage, toggleContactPopup, togglePhotoPopup]);

    return (

        <HeaderContainer>

            <HeadLink to={'/'}>

                <Logo
                    src={require('../../assets/img/logo.jpeg')}
                    alt="Логотип"
                />

            </HeadLink>

            <Menu>

                {menuItems.map((item) => (

                    <MenuItem
                        key={item.id}
                        onClick={() => handleMenuItemClick(item)}
                    >

                        {item.icon && <item.icon />}
                        {item.title[currentLanguage as keyof typeof item.title]}

                        {item.fabrics && (

                            <SubMenu>

                                <ColumnList
                                    style={{ gridTemplateColumns: `repeat(${2}, 1fr)` }}
                                >

                                    {item.fabrics[currentLanguage as keyof typeof item.fabrics]
                                        .map((fabric: string, index: number) => (

                                            <ColumnListItem key={index}>

                                                <HeadLink
                                                    to={`/${fabric}`}>

                                                    {fabric}

                                                </HeadLink>

                                            </ColumnListItem>

                                        ))}

                                </ColumnList>

                            </SubMenu>

                        )}

                    </MenuItem>

                ))}

                <MenuItem
                    onClick={handleLanguageChange}
                >

                    <UkIcon />

                    {currentLanguage === 'ru' ? 'UA|RU' : 'RU|UA'}

                </MenuItem>

            </Menu>

            {isContactPopupOpen &&

                <ModalContact
                    isOpen={isContactPopupOpen}
                    onClose={toggleContactPopup}
                    currentLanguage={currentLanguage}
                />

            }

            {isPhotoPopupOpen &&

                <PhotoPopup
                    isOpen={isPhotoPopupOpen}
                    onClose={togglePhotoPopup}
                />

            }

        </HeaderContainer>

    );

});

import React, { useMemo } from 'react';

import {
    CatalogContainer,
    Block,
    ImageContent,
    Image,
    ImageText
} from '../../../assets/styles/catalogStyle';

import { NavLink } from 'react-router-dom';
import { translations } from '../../../translation/translation';
import { catalogData } from '../../../constants/mainConst/catalogData';

import { Translations } from '../../../types/translateType/translationType';
import { CatalogItemType } from '../../../types/mainType/catalogItemType';
import { MainProps } from '../../../types/mainType/catalogProps';

export const Catalog: React.FC<MainProps> = React.memo(({ currentLanguage }) => {

    const currentTranslations: Translations = useMemo(() => translations[currentLanguage], [currentLanguage]);

    const rows: CatalogItemType[][] = catalogData.reduce((result: CatalogItemType[][], item: CatalogItemType, index: number) => {

        const chunkIndex = Math.floor(index / 3);

        if (!result[chunkIndex]) result[chunkIndex] = [];

        result[chunkIndex].push(item);

        return result;

    }, []);

    return (

        <CatalogContainer>

            {rows.map((row: CatalogItemType[], rowIndex: number) => (

                <Block key={rowIndex}>

                    {row.map((item: CatalogItemType) => (

                        <NavLink
                            key={item.id}
                            to={item.link}
                        >

                            <ImageContent>

                                <Image
                                    src={item.imageSrc}
                                    alt={item.id.toString()}
                                />

                                <ImageText>

                                    {currentTranslations[item.nameKey]}

                                </ImageText>

                            </ImageContent>

                        </NavLink>

                    ))}

                </Block>

            ))}

        </CatalogContainer>

    );

});

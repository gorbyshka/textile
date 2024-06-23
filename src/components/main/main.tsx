import React from 'react';

import { Slider } from './slider/slider';
import { Catalog } from './catalog/catalog';
import { Sale } from './sale/sale';
import { WhyAreWe } from './whyAreWe/whyAreWe';

import { MainProps } from '../../types/mainType/mainType';

export const Main: React.FC<MainProps> = React.memo(({ currentLanguage }) => {

    return (

        <>

            <Slider />
            <Catalog currentLanguage={currentLanguage} />
            <Sale />
            <WhyAreWe currentLanguage={currentLanguage} />

        </>

    );

});

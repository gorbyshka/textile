import React, { useMemo } from 'react';

import { WarningText } from '../../assets/styles/warningStyle';

import { translations } from '../../translation/translation';

import { WarningType } from '../../types/warningType/warningType';

export const Warning: React.FC<WarningType> = React.memo(({ currentLanguage }) => {

    const translation = useMemo(() => translations[currentLanguage], [currentLanguage]);

    return (

        <WarningText>

            {translation.warning}

        </WarningText>

    );
});

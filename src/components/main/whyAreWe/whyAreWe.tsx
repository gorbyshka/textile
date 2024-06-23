import React, { useMemo } from "react";

import {
    Container,
    Title,
    Text,
    SubTitle
} from "../../../assets/styles/whyAreWeStyle";

import { translations } from "../../../translation/translation";

import { WhyType } from "../../../types/mainType/whyAreWeType";

export const WhyAreWe: React.FC<WhyType> = React.memo(({ currentLanguage }) => {

    const translation = useMemo(() => translations[currentLanguage], [currentLanguage]);

    return (

        <Container>

            <Title>

                {translation.shop}

            </Title>

            <Text>

                {translation.firstPart}

            </Text>

            <SubTitle>

                {translation.why}

            </SubTitle>

            <Text>

                {translation.secondPart}

            </Text>

        </Container>

    );

});

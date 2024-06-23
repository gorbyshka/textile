import React from "react";

import {
    Overlay,
    PhotoPopupContainer,
    PhotoImage,
    CloseButton
} from "../../assets/styles/headerStyle";

import { PhotoPopupProps } from "../../types/headerType/photoPopupProps";

export const PhotoPopup: React.FC<PhotoPopupProps> = React.memo(({ isOpen, onClose }) => {

    return (

        <>

            {isOpen && (

                <>

                    <Overlay onClick={onClose} />

                    <PhotoPopupContainer>

                        <PhotoImage
                            src={require('../../assets/img/payment.jpeg')}
                            alt="Payment"
                        />

                        <CloseButton onClick={onClose} />

                    </PhotoPopupContainer>

                </>

            )}

        </>

    );

});

import React from 'react'

import {
    Svg,
    Path
} from '../styles/headerStyle';

export const UkIcon: React.FC = () => {

    return (

        <Svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

            <Path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8H16Z" fill="#005BBB" />
            <Path d="M0 8C-3.86258e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8L0 8Z" fill="#FFD500" />
            
        </Svg>

    );
}

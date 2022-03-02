import React from 'react';
import {Buttons} from './Styled'


export function ButtonPrevious({previousClick}) {
    return (
        <Buttons onClick={previousClick}>Anterior</Buttons>
    );
}
import React from 'react';
import {BorderText} from './Styled'

export function FraseEscena({text, isActive}) {
    return (
        <>
            <BorderText isActive={isActive}>{text}</BorderText>
        </>
    );
}

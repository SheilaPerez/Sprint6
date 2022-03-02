import React from 'react';
import {StartBtn, TextTutorial} from './Styled'

export function Welcome({ welcomeBtn }) {
    return (
        <>
            <TextTutorial>Aquí tens el teu tutorial, en la qual mitjançant dos botons podràs avançar i retrocedir en els consells.</TextTutorial>
            <StartBtn onClick={welcomeBtn}>Start!</StartBtn>
        </>
    )  
} 
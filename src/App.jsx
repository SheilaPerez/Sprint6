import React, { useState } from "react";
import { FraseEscena } from "./components/escena/Escena";
import { ButtonPrevious } from "./components/escena/ButtonPrevious"
import { ButtonNext } from "./components/escena/ButtonNext"
import { Welcome } from "./components/escena/Welcome"
import primera from "./assets/img/primera.jpg"
import segunda from "./assets/img/segunda.jpg"
import tercera from "./assets/img/tercera.jpg"
import cuarta from "./assets/img/cuarta.jpg"
import { Background } from "./components/escena/Styled"

export function App() {
    const [activeText, setActiveText] = useState(0);
    const [isLoggin, setIsLoggin] = useState(false);

    const texts = [{
        text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        img: primera
    }, {
        text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
        img: segunda
    }, {
        text: "L'heroi va decidir travessar la porta que el portava a casa",
        img: tercera
    }, {
        text: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
        img: cuarta
    }];

    const handleNextClickedNext = () => {
        if (activeText < texts.length-1) {
            setActiveText(activeText + 1);
        }
    }

    const handleNextClickedPrevious = () => {
        if (activeText <= texts.length-1 && activeText > 0) {
            setActiveText(activeText - 1);

        }
    }

    const handleClickWelcome = () => {
        setIsLoggin(true);
    }



    return (
        <>

            {isLoggin   ?   <Background activeBackground={texts[activeText].img}>
                                <ButtonPrevious previousClick={handleNextClickedPrevious}></ButtonPrevious>
                                <ButtonNext nextClick={handleNextClickedNext}></ButtonNext>
                                {texts.map((text, index) => <FraseEscena text={text.text} isActive={index === activeText} />)}
                            </Background>
                        :   <Welcome welcomeBtn={handleClickWelcome}></Welcome>
            }
        </>    
    )
}
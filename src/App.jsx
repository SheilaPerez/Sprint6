import React, { useState } from "react";
import { FraseEscena } from "./components/escena/Escena";
import { ButtonPrevious } from "./components/escena/ButtonPrevious"
import { ButtonNext } from "./components/escena/ButtonNext"

export function App() {
    const [activeText, setActiveText] = useState(0);

    const texts = [
        "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
        "L'heroi va decidir travessar la porta que el portava a casa",
        "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
    ];

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

    return (
        <>
            <ButtonPrevious previousClick={handleNextClickedPrevious}/>
            <ButtonNext nextClick={handleNextClickedNext}></ButtonNext>
            {texts.map((text, index) => <FraseEscena text={text} isActive={index===activeText}/> )}
        </> 
    )
}
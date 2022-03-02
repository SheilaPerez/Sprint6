import styled from 'styled-components';

export const BorderText = styled.p`
    border: 2px solid black;
    padding: 8px;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    background-color: ${props => props.isActive === true ? "#FFB2A6" : "white"};
`

export const Buttons = styled.button`
    text-align: center;
    padding: 10px 220px;
    background-color: white;
`

export const StartBtn = styled.button`
    margin: 0;
    position: absolute;
    top: 27%;
    left: 45%;
    padding: 30px;
    background-color: #54BAB9;
`

export const TextTutorial = styled.p` 
    margin-top: 47px;
    text-align: center;
    color: #54BAB9;
`
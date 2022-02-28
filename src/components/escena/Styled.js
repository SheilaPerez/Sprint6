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
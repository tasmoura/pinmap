import Image from 'next/image'
import { ReactNode, useRef, useState, useEffect } from 'react';
import styled from 'styled-components'

interface PinProps {
    number: number;
    color: string;
    title?: string;
    text?: string;
    posY: number;
    posX: number;
}

const Pin: React.FC<PinProps> = ({ number, color, title, text, posY, posX }) => {

    return (
        <PinWrapperST $top={posY} $left={posX} >
            <PinST $color={color} >
                {number}
            </PinST>
        </PinWrapperST>
    )
}

export default Pin;

const PinWrapperST = styled.div<{ $top: number, $left: number }>`
    position:absolute;
    top: ${({ $top }) => $top + '%'};
    left: ${({ $left }) => $left + '%'};
`;

const PinST = styled.div<{ $color: string }>`
    display:flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    background-color: ${({ $color }) => $color};
    position: relative;
    box-sizing: border-box;
    border: 2px solid white;
    border-radius:40px;
    cursor: pointer;
`;
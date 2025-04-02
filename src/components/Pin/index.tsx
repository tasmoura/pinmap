import { ReactNode } from 'react';
import styled from 'styled-components'

interface PinProps {
    number: number;
    color: string;
    posY: number;
    posX: number;
    children?: ReactNode;
    handler?: any;
}

const Pin: React.FC<PinProps> = ({ number, color, posY, posX, handler, children }) => {

    return (
        <PinWrapperST $top={posY} $left={posX} onClick={handler} >
            <PinST $color={color} >
                {number}
            </PinST>
            {children}
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
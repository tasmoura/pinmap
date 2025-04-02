import * as React from "react"
import styled from 'styled-components'

interface IconProp {
  size?: number;
} 

const CloseIcon: React.FC<IconProp> = ({ size = 32 }) => {

  return (
    <IconST $size={size}>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Camada_1"
            data-name="Camada 1"
            viewBox="0 0 34.43 34.43"
        >
            <defs>
            <style>
                {
                `.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px}`
                }
            </style>
            </defs>
            <path d="m3.89 3.89 26.65 26.65M30.54 3.89 3.89 30.54" className="cls-1" />
        </svg>
    </IconST>
  )
  
}
export default CloseIcon

const IconST = styled.div<{ $size: number }>`
    display:flex;
    justify-content:center;
    align-items:center;
    width: ${({$size}) => $size }px;
    height: ${({$size}) => $size }px;

    svg {
      width: 100%;
    }
`;
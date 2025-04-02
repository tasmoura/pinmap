import * as React from "react"
import styled from 'styled-components'

interface IconProp {
  size?: number;
} 

const EditIcon: React.FC<IconProp> = ({ size = 32 }) => {

  return (
    <IconST $size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Camada_1"
        data-name="Camada 1"
        viewBox="0 0 32 32"
      >
        <defs>
          <style>{`.cls-1{fill:currentColor}`}</style>
        </defs>
        <path
          d="M11.86 27.37H7.15a1.83 1.83 0 0 1-1.83-1.83V4.65c0-1.01.82-1.83 1.83-1.83h15c1.01 0 1.83.82 1.83 1.83v8.18c0 .38.3.68.68.68s.68-.3.68-.68V4.65c0-1.76-1.43-3.2-3.2-3.2h-15c-1.76 0-3.2 1.43-3.2 3.2v20.89c0 1.76 1.43 3.2 3.2 3.2h4.71c.38 0 .68-.3.68-.68s-.3-.68-.68-.68Z"
          className="cls-1"
        />
        <path
          d="M20.89 7.84H8.06c-.38 0-.68.3-.68.68s.3.68.68.68h12.83c.38 0 .68-.3.68-.68s-.3-.68-.68-.68ZM21.57 13.05c0-.38-.3-.68-.68-.68H8.06c-.38 0-.68.3-.68.68s.3.68.68.68h12.83c.38 0 .68-.3.68-.68ZM8.06 16.89c-.38 0-.68.3-.68.68s.3.68.68.68h7.59c.38 0 .68-.3.68-.68s-.3-.68-.68-.68H8.06ZM27.78 16.98c-1.14-1.15-3.14-1.15-4.29 0l-7.72 7.72c-.07.07-.13.16-.16.26l-1.62 4.69c-.08.24-.03.5.15.69.13.14.31.22.5.22.06 0 .12 0 .18-.02l4.95-1.36c.11-.03.22-.09.3-.18l7.72-7.72c.57-.57.89-1.33.89-2.14s-.32-1.57-.89-2.14ZM19.22 27.9l-3.53.97 1.15-3.32 6.21-6.21 2.33 2.4-6.16 6.16Zm7.59-7.59-.47.47-2.33-2.4.44-.44c.63-.63 1.73-.63 2.36 0 .32.32.49.74.49 1.18s-.17.87-.49 1.18Z"
          className="cls-1"
        />
      </svg>
    </IconST>
  )
  
}
export default EditIcon

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
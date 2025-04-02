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
        viewBox="0 0 34.43 34.43"
      >
        <defs>
          <style>{".cls-1{fill:currentColor}"}</style>
        </defs>
        <path className="cls-1" d="M12.8,31.07h-5.14c-1.93,0-3.49-1.57-3.49-3.49V4.81c0-1.93,1.57-3.49,3.49-3.49h16.35c1.93,0,3.49,1.57,3.49,3.49v8.92c0,.41-.34.75-.75.75s-.75-.34-.75-.75V4.81c0-1.1-.89-1.99-1.99-1.99H7.67c-1.1,0-1.99.89-1.99,1.99v22.77c0,1.1.89,1.99,1.99,1.99h5.14c.41,0,.75.34.75.75s-.34.75-.75.75Z"/>
        <path className="cls-1" d="M22.65,9.78h-13.98c-.41,0-.75-.34-.75-.75s.34-.75.75-.75h13.98c.41,0,.75.34.75.75s-.34.75-.75.75Z"/>
        <path className="cls-1" d="M22.65,14.72h-13.98c-.41,0-.75-.34-.75-.75s.34-.75.75-.75h13.98c.41,0,.75.34.75.75s-.34.75-.75.75Z"/>
        <path className="cls-1" d="M16.94,19.65h-8.27c-.41,0-.75-.34-.75-.75s.34-.75.75-.75h8.27c.41,0,.75.34.75.75s-.34.75-.75.75Z"/>
        <path className="cls-1" d="M15.83,33.05c-.2,0-.4-.08-.55-.24-.19-.2-.25-.5-.16-.76l1.77-5.11c.04-.11.1-.21.18-.29l8.41-8.41c1.25-1.25,3.43-1.25,4.69,0,1.29,1.29,1.29,3.4,0,4.69l-8.41,8.41c-.09.09-.21.16-.33.19l-5.39,1.49c-.07.02-.13.03-.2.03ZM18.25,27.6l-1.25,3.6,3.83-1.05,8.27-8.27c.71-.71.71-1.86,0-2.57-.69-.69-1.88-.69-2.57,0l-8.29,8.29ZM21.22,30.82h0,0Z"/>
        <path className="cls-1" d="M28.59,24.19c-.2,0-.39-.08-.54-.23l-3.58-3.67c-.29-.3-.28-.77.01-1.06.3-.29.77-.28,1.06.01l3.58,3.67c.29.3.28.77-.01,1.06-.15.14-.33.21-.52.21Z"/>
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
import Image from 'next/image'
import { ReactNode, useRef, useState, useEffect } from 'react';
import styled from 'styled-components'

interface ImageWrapperProps {
    url?: string;
    alt?: string;
    children?: ReactNode;
    shrink?: boolean;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ url="/mountain.jpg", alt="background image", shrink=false, children }) => {


    return (
        <WrapperST $shrink={shrink ? "calc(100% - 300px)" : "100%"} >
            <img src={url} alt={alt} style={{width:"100%"}} />
            <ElementsST>
                {children}
            </ElementsST>
        </WrapperST>
    )
}

export default ImageWrapper;

const WrapperST = styled.div<{ $shrink: string }>`
    display:flex;
    width: ${({ $shrink }) => $shrink};
    height: 'auto';
    background-color: gray;
    position: relative;
    box-sizing: border-box;
    transition: all 0.5s;
`;

const ElementsST = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    box-sizing:border-box;
    z-index:10;
`
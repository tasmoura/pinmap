import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { TitleST } from '../sharedstyles';
import CardPinInfo from '../CardPinInfo';
import dynamic from 'next/dynamic';

const EditorBlock = dynamic(() => import('../EditorBlock'), { ssr: false });

interface PinProps {
    title: string;
    text: string;
    posX: number;
    posY: number;
}

interface Data {
    name: string;
    color: string;
    pinList: PinProps[];
}

interface ContentBlockProps {
    pinList?: PinProps[];
}

function ContentBlock({ pinList }: ContentBlockProps) {
    return (
        <>
            {pinList && pinList.map((pin, index) => (
                <CardPinInfo key={index} name={pin.title} text={pin.text} />
            ))}
        </>
    );
}

interface SideMenuProps {
    url?: string;
    alt?: string;
    isOpen?: boolean;
    handler: any;
    data?: Data;
}

const SideMenu: React.FC<SideMenuProps> = ({ url = '/mountain.jpg', alt = 'background image', isOpen = false, handler, data }) => {
    return (
        <>
            {isOpen ? (
                <>
                    <SideMenuST>
                        <SideMenuButtonST onClick={handler} $invert={isOpen}>
                            <EditIconST />
                        </SideMenuButtonST>
                        <TitleST>{data ? data.name : null}</TitleST>
                        <WorkAreaST>
                            {data && <ContentBlock pinList={data.pinList} />}
                        </WorkAreaST>
                    </SideMenuST>
                    <EditorBlock />
                </>
            ) : (
                <SideMenuButtonST onClick={handler} $invert={isOpen}>
                    <EditIconST />
                </SideMenuButtonST>
            )}
        </>
    );
};

export default SideMenu;

const SideMenuButtonST = styled.button<{ $invert: boolean }>`
    position: absolute;
    top: 10px;
    ${({ $invert }) => ($invert ? 'left:0;' : 'right:0;')}
    right: 0;
    height: 60px;
    width: 40px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    z-index: 10000;
    transform: ${({ $invert }) => ($invert ? 'rotate(180deg)' : 'rotate(0deg)')};
    box-shadow: -2px -2px 5px 2px ${({ theme }) => theme.colors.gray1};
    ${({ $invert }) => ($invert ? '' : 'box-shadow: none')}
`;

const EditIconST = styled.div`
    border-left: 4px solid ${({ theme }) => theme.colors.gray1};
    border-top: 4px solid ${({ theme }) => theme.colors.gray1};
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
    transform: rotate(-45deg);
    width: 18px;
    height: 18px;
    margin-left: 10px;
`;

const SideMenuST = styled.div`
    width: 300px;
    position: absolute;
    right: 0;
    top: 0;
    height: calc(100% - 2px);
    overflow: hidden;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all 0.5s;
`;

const WorkAreaST = styled.div`
    height: 92%;
    width: 100%;
    padding: 6px;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
`;
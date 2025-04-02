import Image from 'next/image'
import styled from 'styled-components'
import EditIcon from '../Icons/EditIcon';

interface CardPinInfoProps {
    name?: string;
    text?: string;
    selected?: boolean;
}

const CardPinInfo: React.FC<CardPinInfoProps> = ({ name, text, selected = false }) => {

    return (
        <CardST $selected={selected} >
            <TextContent>
                <FloatIconST>
                    <EditIcon size={32} />
                </FloatIconST>
                <PinNameST>{name}</PinNameST>
                <PinContentST>{text}</PinContentST>
            </TextContent>
        </CardST>
    )
}

export default CardPinInfo;

const CardST = styled.div<{ $selected: boolean }>`
    display:flex;
    position:relative;
    gap: 8px;
    width: calc(100% - 10px);
    padding: 1rem 0.5rem;
    background-color: ${({theme}) => theme.colors.white};
    margin: 0.25rem;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow:0px 4px 10px 2px ${({theme}) => theme.colors.gray};
    color: ${({theme}) => theme.colors.text};
    cursor:pointer;
    transition: all 0.5s;
    border: ${({ $selected }) => $selected ? 'solid 1px #CCCCCC' : '' };
`;

const TextContent = styled.div`
    height: 100px;
    overflow:hidden;
`

const PinNameST = styled.h2`
    font-size: 1rem;
    margin: 0;
    box-sizing: border-box;
    width: calc(100% - 36px);
`

const PinContentST = styled.p`
    font-size: 0.75rem;
    box-sizing: border-box;
`

const FloatIconST =styled.span`
    position:absolute;
    right: 8px;
    top:8px;
    color: ${({theme}) => theme.colors.gray1};
    border:none;
`
import styled from 'styled-components'
import CloseIcon from '../Icons/CloseIcon';

interface PinProps {
    active?: boolean;
    title: string;
    text: string;
    posX: number;
    posY: number;
    handler?: any;
}

const PinBox: React.FC<PinProps> = ({ active, title, text, posX, posY, handler }) => {

    function boxY (posX: number): string {
        if(posX < 55) {
            return '50px'
        } else {
            return '-330px'
        }

        return '45px';
    }

    return (
        <BoxWrapperST $zindex={active ? "10000" : "0"} $top={0} $left={boxY(posX)} $display={active ? 'block' : 'none'} onClick = {handler} >
            <PinNameST>{title}</PinNameST>
            <FloatIconST>
                <CloseIcon size={16} />
            </FloatIconST>
            <InnerST>
                <PinContentST>{text}</PinContentST>
            </InnerST>
        </BoxWrapperST>
    )
}

export default PinBox;

const BoxWrapperST = styled.div<{ $zindex:string, $top: number, $left: string, $display: string }>`
    display: ${({ $display }) => $display};
    position:absolute;
    top: ${({ $top }) => $top + '%'};
    left: ${({ $left }) => $left };
    width: 320px;
    min-height: 50px;
    background-color: ${({theme}) => theme.colors.white};
    padding: 10px;
    border-radius:10px;
    box-sizing: border-box;
    cursor:pointer;
    z-index: ${({ $zindex }) => $zindex};
`;

const InnerST = styled.div`
    height: 100%;
    max-height: 300px;
    width:100%;
    overflow-y:auto;
`

const FloatIconST =styled.div`
    position:absolute;
    right: 8px;
    top:8px;
    color: ${({theme}) => theme.colors.gray1};
`

const PinNameST = styled.h2`
    font-size: 1.25rem;
    margin: 0;
    box-sizing: border-box;
    max-width: 280px;
`

const PinContentST = styled.p`
    font-size: 1rem;
    box-sizing: border-box;
`

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        padding:0;
        margin:0;
        scroll-behavior:smooth;
    }

    body {
        padding:0;
        margin:0;
        font-family:sans-serif;
        font-size: 18px;
        background-color: ${({theme}) => theme.colors.gray}
    }
        
`

export default GlobalStyle;
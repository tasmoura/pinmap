import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        padding:0;
        margin:0;
    }
    html {
        scroll-behavior:smooth;
    }
`

export default GlobalStyle;
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/globalstyles";


const theme = {
  colors: {
    primary:'#07528F',
    secondary:'#8cc342',
    white:'#fff',
    gray1:'#ccc',
  }
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

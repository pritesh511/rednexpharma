import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #4747f3;
    --success: #24dfa1;
    --warning: #ffe200;
    --danger: #ed1c24;
    --white: #fff;
    --light-gray: #6d6e70;
  }`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

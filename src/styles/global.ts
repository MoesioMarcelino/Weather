import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: #fff;
    color: #025159;
    -webkit-font-smoothing: antialised;
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

`;

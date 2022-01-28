import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    width: 100vw;
    height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%;
  }
`;

export default global;

import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;

    transition-property: background, color;
    transition-duration: .2s;
    transition-timing-function: ease-out;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
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

    @media (max-width: 768px){
      font-size: 9px;
    }

    @media (max-width: 468px) {
      font-size: 8px;
    }

    @media (max-width: 340px) {
      font-size: 7px;
    }
  }
`;

export default global;

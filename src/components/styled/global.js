import { createGlobalStyle } from "styled-components";
import theme from "./defaultTheme";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 12px;
  }

  body {
    margin: 0;
    color: ${theme.colors.primaryTextColor};
    background: ${theme.colors.background};
    font-family: "Open Sans", sans-serif;
  }

  main {
    display: block;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
  }
`;

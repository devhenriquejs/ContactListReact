import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f9fafb;
    color: #2c2f33;
  }

  input {
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    &:focus {
      border-color: #00ffff;
      box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.2);
      outline: none;
    }
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyles;

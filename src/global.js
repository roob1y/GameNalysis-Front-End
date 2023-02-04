import { createGlobalStyle } from "styled-components";
import background from "./assets/background.jpg";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background-attachment: fixed;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    color: ${({ theme }) => theme.primaryDark};
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 3em;
    font-weight: 400;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2em;

      }
  }
  a {
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  p {
    font-size: 16px;
  }

  textarea {
    font-size: 16px;
  }
  `;

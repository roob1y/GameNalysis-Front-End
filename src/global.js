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
  a {
    text-decoration: none;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  `;

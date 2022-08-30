import { createGlobalStyle } from 'styled-components';

const primaryTheme = {
  // Background Colors
  primaryBackgroundColor: "#060f2f",
  secondaryBackgroundColor: "#1b2240",

  // Text Colors
  titleTextColor: "#96c3e0",
  headerTextColor: "#b0bef7",
  regularTextColor: "white",

  // Fonts
  titleFontFamily: "fnl",
  regularTextFontFamily: "Roboto",
};

export const theme = primaryTheme;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    // Styles
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #1b2240;

    // Push content at top of page below the NavBar
    padding-top: 50px;

    h1 {
      font-family: ${theme.titleFontFamily};
      color: ${theme.titleTextColor};
      font-size: 90px;
    }
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

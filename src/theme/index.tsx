import React from "react";
import buttons from "./button";
import colors from "./color";
import typography from "./typography";

const deviceSizes = {
  mobile: "360px",
  tablet: "768px",
};

const devices = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  ...buttons,
  ...colors,
  ...typography,
  devices,
};

import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";

const BemypetTheme = createGlobalStyle`
  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo"), local("AppleSDGothicNeo-Regular"),
      url("./assets/fonts/AppleSDGothicNeo-Regular.woff2") format("woff2"),
      url("./assets/fonts/AppleSDGothicNeo-Regular.woff") format("woff"),
      url("./assets/fonts/AppleSDGothicNeo-Regular.ttf") format("truetype")
        url("./assets/fonts/AppleSDGothicNeo-Regular.svg") format("svg");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: "Apple SD Gothic Neo";
    src: local("Apple SD Gothic Neo"), local("AppleSDGothicNeo-Bold"),
      url("./assets/fonts/AppleSDGothicNeo-Bold.woff2") format("woff2"),
      url("./assets/fonts/AppleSDGothicNeo-Bold.woff") format("woff"),
      url("./assets/fonts/AppleSDGothicNeo-Bold.ttf") format("truetype")
        url("./assets/fonts/AppleSDGothicNeo-Bold.svg") format("svg");
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Apple SD Gothic Neo", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: ${({ theme }: any) =>
      theme.colors.primary100}; /* WebKit/Blink Browsers */
    color: inherit;
  }

  ::-moz-selection {
    background: ${({ theme }: any) =>
      theme.colors.primary100}; /* Gecko Browsers */
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const ThemeProvider = ({ children }: any) => {
  return (
    <StyledThemeProvider theme={theme}>
      <BemypetTheme />
      {children}
    </StyledThemeProvider>
  );
};

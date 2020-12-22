import React from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";

import theme from "lib/theme";

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
`;

export const ThemeProvider = ({ children }: any) => {
  return (
    <StyledThemeProvider theme={theme}>
      <BemypetTheme />
      {children}
    </StyledThemeProvider>
  );
};

// export { default as theme } from "lib/theme";
export { Typography } from "components/Typography";

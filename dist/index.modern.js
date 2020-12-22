import React from 'react';
import styled, { createGlobalStyle, ThemeProvider as ThemeProvider$1 } from 'styled-components';
import Color from 'color';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const calcRem = size => `${size / 16}rem`;
const calcHeight = (size, height) => `${height / size}`;

const buttonBase = `
  font-size: ${calcRem(13)};
  font-weight: bold;
  line-height: ${calcHeight(13, 20)};
`;
const buttonSizes = {
  small: `
    ${buttonBase}
    padding: 6px 8px;
  `,
  medium: `
    ${buttonBase}
    padding: 10px 8px;
  `,
  large: `
    ${buttonBase}
    padding: 14px 8px;
  `
};
const buttonColors = {
  default: `
    ${buttonBase}
    padding: 10px 8px;
  `,
  primary: `
    ${buttonBase}
    padding: 14px 8px;
  `,
  disabled: `
    ${buttonBase}
    padding: 6px 8px;
  `
};
var buttons = {
  buttonSizes,
  buttonColors
};

const colors = {
  grey100: "#ffffff",
  grey200: "#f6f6f9",
  grey300: "#e4e4e6",
  grey400: "#cfcece",
  grey500: "#868688",
  grey600: "#090909",
  primary100: "#fcd11e",
  primary200: "#ffeb99",
  secondary100: "#6d2cb6",
  secondary200: "#f0e9f7",
  green: "#13bd7f",
  red: "#f24147",
  opacityBlack10: "rgba(9, 9, 9, 0.1)",
  opacityBlack50: "rgba(9, 9, 9, 0.5)"
};
var colors$1 = {
  colors
};

const fontSizes = {
  heading1: calcRem(36),
  heading2: calcRem(26),
  heading3: calcRem(20),
  body1: calcRem(16),
  body2: calcRem(13),
  caption: calcRem(12),
  article1: calcRem(16),
  article2: calcRem(14)
};
const lineHeights = {
  heading1: calcHeight(36, 48),
  heading2: calcHeight(26, 38),
  heading3: calcHeight(20, 32),
  body1: calcHeight(16, 24),
  body2: calcHeight(13, 20),
  caption: calcHeight(12, 18),
  article1: calcHeight(16, 32),
  article2: calcHeight(14, 24)
};
var typography = {
  fontSizes,
  lineHeights
};

const deviceSizes = {
  mobile: "360px",
  tablet: "768px"
};
const devices = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`
};
const theme = { ...buttons,
  ...colors$1,
  ...typography,
  devices
};

let _ = t => t,
    _t;
const Button = styled(({
  color,
  size,
  type: _type = "button",
  ...rest
}) => React.createElement("button", Object.assign({}, rest)))(_t || (_t = _`
  width: ${0};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 50px;

  ${0}

  ${0}
`), ({
  width
}) => width ? typeof width === "string" ? width : `${width}px` : "100%", ({
  theme,
  color: _color = "default"
}) => `
    color: ${_color == "primary" ? theme.colors.grey600 : theme.colors.grey500};
    background-color: ${_color == "primary" ? theme.colors.primary100 : theme.colors.grey200};

    :hover {
      cursor: pointer;
      background-color: ${Color(_color == "primary" ? theme.colors.primary100 : theme.colors.grey200).darken(0.2).toString()};
  
    }
  `, ({
  theme,
  size: _size = "medium"
}) => `
    ${theme.buttonSizes[_size]};
  `);

let _$1 = t => t,
    _t$1,
    _t2,
    _t3,
    _t4;
const Layout = ({
  helmetProps,
  children,
  loading,
  footer
}) => {
  return React.createElement(Wrapper, null, React.createElement(Header, Object.assign({}, helmetProps)), React.createElement(Main, null, !!loading ? loading : children), !!footer ? footer : null);
};
const Wrapper = styled.div(_t$1 || (_t$1 = _$1`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`));
const Main = styled.main(_t2 || (_t2 = _$1`
  flex: 1;
`));
const Header = props => {
  return React.createElement(HelmetProvider, null, React.createElement(Helmet, Object.assign({}, props)));
};
const Column = styled.div(_t3 || (_t3 = _$1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`));
const Row = styled.div(_t4 || (_t4 = _$1`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`));

let _$2 = t => t,
    _t$2;
const Typography = styled(({
  color,
  variant,
  ...rest
}) => React.createElement("p", Object.assign({}, rest)))(_t$2 || (_t$2 = _$2`
  width: ${0};

  ${0}

  color: ${0};
`), ({
  width
}) => width ? typeof width === "string" ? width : `${width}px` : "100%", ({
  theme,
  variant: _variant = "body2"
}) => `
  font-size: ${theme.fontSizes[_variant]};
  line-height: ${theme.lineHeights[_variant]};
  `, ({
  theme,
  color: _color = "grey600"
}) => theme.colors[_color]);

let _$3 = t => t,
    _t$3;
const BemypetTheme = createGlobalStyle(_t$3 || (_t$3 = _$3`
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

  p, ul {
    margin: 0;
    padding: 0;
  }
`));
const ThemeProvider = ({
  children
}) => {
  return React.createElement(ThemeProvider$1, {
    theme: theme
  }, React.createElement(BemypetTheme, null), children);
};

export { Button, Column, Header, Layout, Row, ThemeProvider, Typography };
//# sourceMappingURL=index.modern.js.map

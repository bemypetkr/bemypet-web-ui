import React from 'react';
import styled, { createGlobalStyle, ThemeProvider as ThemeProvider$1 } from 'styled-components';
import { HelmetProvider, Helmet } from 'react-helmet-async';

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

const buttonSizes = {
  small: `
    padding: 6px 8px;
  `,
  medium: `
    padding: 10px 8px;
  `,
  large: `
    padding: 14px 8px;
  `
};
const buttonColors = {
  default: `
    color: ${colors.grey500};
    background-color: ${colors.grey200};

    :hover {
      background-color: ${colors.grey300};
    }
  `,
  primary: `
    color: ${colors.grey600};
    background-color: ${colors.primary100};

    :hover {
      background-color: ${colors.primary200};
    }
  `
};
var buttons = {
  buttonSizes,
  buttonColors
};

const getPixel = value => typeof value === "string" ? value : `${value}px`;
const calcRem = size => `${size / 16}rem`;
const calcHeight = (size, height) => `${height / size}`;

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
const typography = {
  heading1: `
    font-size: ${fontSizes.heading1};
    line-height: ${lineHeights.heading1};
    font-weight: normal;
  `,
  heading2: `
    font-size: ${fontSizes.heading2};
    line-height: ${lineHeights.heading2};
    font-weight: normal;
  `,
  heading3: `
    font-size: ${fontSizes.heading3};
    line-height: ${lineHeights.heading3};
    font-weight: normal;
  `,
  body1: `
    font-size: ${fontSizes.body1};
    line-height: ${lineHeights.body1};
    font-weight: normal;
  `,
  body2: `
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    font-weight: normal;
  `,
  caption: `
    font-size: ${fontSizes.caption};
    line-height: ${lineHeights.caption};
    font-weight: normal;
  `,
  article1: `
    font-size: ${fontSizes.article1};
    line-height: ${lineHeights.article1};
    font-weight: normal;
  `,
  article2: `
    font-size: ${fontSizes.article2};
    line-height: ${lineHeights.article2};
    font-weight: normal;
  `
};
var typography$1 = {
  fontSizes,
  lineHeights,
  typography
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
  ...typography$1,
  devices
};

let _ = t => t,
    _t;
const Button = styled(({
  color,
  size,
  type: _type = "button",
  positive,
  negative,
  ...rest
}) => React.createElement("button", Object.assign({}, rest)))(_t || (_t = _`
  width: ${0};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 50px;

  font-size: 13px;
  font-weight: bold;
  line-height: 20px;

  ${0}

  // positive will be green colored text
  ${0};

  // negative will be red colored text
  ${0};

  ${0}
`), ({
  width
}) => width ? typeof width === "string" ? width : `${width}px` : "100%", ({
  theme,
  color: _color = "default"
}) => `
    ${theme.buttonColors[_color]}

    :hover {
      cursor: pointer;
    }

    :disabled {
      color: ${theme.colors.grey400};
      background-color: ${theme.colors.grey200};
      cursor: not-allowed;
    }
  `, ({
  theme,
  positive
}) => positive ? `color: ${theme.colors.green}` : "", ({
  theme,
  negative
}) => negative ? `color: ${theme.colors.red}` : "", ({
  theme,
  size: _size = "medium"
}) => `
    ${theme.buttonSizes[_size]};
  `);

let _$1 = t => t,
    _t$1,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;
const Layout = ({
  helmetProps,
  children,
  loading,
  header,
  footer
}) => {
  return React.createElement(Wrapper, null, React.createElement(HelmetComponent, Object.assign({}, helmetProps)), !!header ? header : null, React.createElement(Main, null, !!loading ? loading : children), !!footer ? footer : null);
};
const Wrapper = styled.div(_t$1 || (_t$1 = _$1`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`));
const Main = styled.main(_t2 || (_t2 = _$1`
  flex: 1;
`));
const PageBody = styled.div(_t3 || (_t3 = _$1`
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
`));

const HelmetComponent = ({ ...props
}) => React.createElement(HelmetProvider, null, React.createElement(Helmet, Object.assign({}, props)));

const Header = styled.div(_t4 || (_t4 = _$1`
  padding: 0 30px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${0};
  color: ${0};
`), ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.colors.grey100);
const Column = styled.div(_t5 || (_t5 = _$1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${0};
  margin-bottom: ${0};
  margin-left: ${0};
  margin-right: ${0};
`), ({
  marginTop: _marginTop = 0
}) => getPixel(_marginTop), ({
  marginBottom: _marginBottom = 0
}) => getPixel(_marginBottom), ({
  marginLeft: _marginLeft = 0
}) => getPixel(_marginLeft), ({
  marginRight: _marginRight = 0
}) => getPixel(_marginRight));
const Row = styled.div(_t6 || (_t6 = _$1`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${0};
  align-items: ${0};
  margin-top: ${0};
  margin-bottom: ${0};
  margin-left: ${0};
  margin-right: ${0};
`), ({
  justifyContent: _justifyContent = "flex-start"
}) => _justifyContent, ({
  alignItems: _alignItems = "flex-start"
}) => _alignItems, ({
  marginTop: _marginTop2 = 0
}) => getPixel(_marginTop2), ({
  marginBottom: _marginBottom2 = 0
}) => getPixel(_marginBottom2), ({
  marginLeft: _marginLeft2 = 0
}) => getPixel(_marginLeft2), ({
  marginRight: _marginRight2 = 0
}) => getPixel(_marginRight2));

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
}) => theme.typography[_variant], ({
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

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: ${0}; /* WebKit/Blink Browsers */
    color: inherit;
  }

  ::-moz-selection {
    background: ${0}; /* Gecko Browsers */
    color: inherit;
  }
  
`), ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.colors.primary100);
const ThemeProvider = ({
  children
}) => {
  return React.createElement(ThemeProvider$1, {
    theme: theme
  }, React.createElement(BemypetTheme, null), children);
};

export { Button, Column, Header, Layout, PageBody, Row, ThemeProvider, Typography };
//# sourceMappingURL=index.modern.js.map

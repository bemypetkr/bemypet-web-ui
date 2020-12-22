import React from 'react';
import styled, { createGlobalStyle, ThemeProvider as ThemeProvider$1 } from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var colors = {
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

var calcRem = function calcRem(size) {
  return size / 16 + "rem";
};

var calcHeight = function calcHeight(size, height) {
  return "" + height / size;
};

var fontSizes = {
  heading1: calcRem(36),
  heading2: calcRem(26),
  heading3: calcRem(20),
  body1: calcRem(16),
  body2: calcRem(13),
  caption: calcRem(12),
  article1: calcRem(16),
  article2: calcRem(14)
};
var lineHeights = {
  heading1: calcHeight(36, 48),
  heading2: calcHeight(26, 38),
  heading3: calcHeight(20, 32),
  body1: calcHeight(16, 24),
  body2: calcHeight(13, 20),
  caption: calcHeight(12, 18),
  article1: calcHeight(16, 32),
  article2: calcHeight(14, 24)
};
var deviceSizes = {
  mobile: "360px",
  tablet: "768px"
};
var device = {
  mobile: "only screen and (max-width: " + deviceSizes.mobile + ")",
  tablet: "only screen and (max-width: " + deviceSizes.tablet + ")"
};
var theme = {
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  colors: colors,
  deviceSizes: deviceSizes,
  device: device
};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: \"Apple SD Gothic Neo\", san-serif;\n  font-size: ", ";\n  line-height: ", ";\n\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Typography = function Typography(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      color = _ref.color;
  return React.createElement(TypographyWrapper, {
    variant: variant,
    color: color
  }, children);
};
var TypographyWrapper = styled.div(_templateObject(), function (_ref2) {
  var theme = _ref2.theme,
      variant = _ref2.variant;
  return theme.fontSizes[variant != null ? variant : "body2"];
}, function (_ref3) {
  var theme = _ref3.theme,
      variant = _ref3.variant;
  return theme.lineHeights[variant != null ? variant : "body2"];
}, function (_ref4) {
  var theme = _ref4.theme,
      color = _ref4.color;
  return theme.colors[color != null ? color : "grey600"];
});

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Regular\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Regular.svg\") format(\"svg\");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Bold\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Bold.svg\") format(\"svg\");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \"Apple SD Gothic Neo\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var BemypetTheme = createGlobalStyle(_templateObject$1());
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider$1, {
    theme: theme
  }, React.createElement(BemypetTheme, null), children);
};

export { ThemeProvider, Typography };
//# sourceMappingURL=index.modern.js.map

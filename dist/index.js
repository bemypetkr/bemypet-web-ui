function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactHelmetAsync = require('react-helmet-async');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

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
var colors$1 = {
  colors: colors
};

var buttonSizes = {
  small: "\n    padding: 6px 8px;\n  ",
  medium: "\n    padding: 10px 8px;\n  ",
  large: "\n    padding: 14px 8px;\n  "
};
var buttonColors = {
  "default": "\n    color: " + colors.grey500 + ";\n    background-color: " + colors.grey200 + ";\n\n    :hover {\n      background-color: " + colors.grey300 + ";\n    }\n  ",
  primary: "\n    color: " + colors.grey600 + ";\n    background-color: " + colors.primary100 + ";\n\n    :hover {\n      background-color: " + colors.primary200 + ";\n    }\n  "
};
var buttons = {
  buttonSizes: buttonSizes,
  buttonColors: buttonColors
};

var getPixel = function getPixel(value) {
  return typeof value === "string" ? value : value + "px";
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
var typography = {
  heading1: "\n    font-size: " + fontSizes.heading1 + ";\n    line-height: " + lineHeights.heading1 + ";\n    font-weight: normal;\n  ",
  heading2: "\n    font-size: " + fontSizes.heading2 + ";\n    line-height: " + lineHeights.heading2 + ";\n    font-weight: normal;\n  ",
  heading3: "\n    font-size: " + fontSizes.heading3 + ";\n    line-height: " + lineHeights.heading3 + ";\n    font-weight: normal;\n  ",
  body1: "\n    font-size: " + fontSizes.body1 + ";\n    line-height: " + lineHeights.body1 + ";\n    font-weight: normal;\n  ",
  body2: "\n    font-size: " + fontSizes.body2 + ";\n    line-height: " + lineHeights.body2 + ";\n    font-weight: normal;\n  ",
  caption: "\n    font-size: " + fontSizes.caption + ";\n    line-height: " + lineHeights.caption + ";\n    font-weight: normal;\n  ",
  article1: "\n    font-size: " + fontSizes.article1 + ";\n    line-height: " + lineHeights.article1 + ";\n    font-weight: normal;\n  ",
  article2: "\n    font-size: " + fontSizes.article2 + ";\n    line-height: " + lineHeights.article2 + ";\n    font-weight: normal;\n  "
};
var typography$1 = {
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  typography: typography
};

var deviceSizes = {
  mobile: "360px",
  tablet: "768px"
};
var devices = {
  mobile: "only screen and (max-width: " + deviceSizes.mobile + ")",
  tablet: "only screen and (max-width: " + deviceSizes.tablet + ")"
};

var theme = _extends({}, buttons, colors$1, typography$1, {
  devices: devices
});

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  white-space: nowrap;\n  outline: none;\n  border: none;\n  border-radius: 50px;\n\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 20px;\n\n  ", "\n\n  // positive will be green colored text\n  ", ";\n\n  // negative will be red colored text\n  ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled__default(function (_ref) {
  var rest = _objectWithoutPropertiesLoose(_ref, ["color", "size", "type", "positive", "negative"]);

  return React.createElement("button", Object.assign({}, rest));
})(_templateObject(), function (_ref2) {
  var width = _ref2.width;
  return width ? typeof width === "string" ? width : width + "px" : "100%";
}, function (_ref3) {
  var theme = _ref3.theme,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? "default" : _ref3$color;
  return "\n    " + theme.buttonColors[color] + "\n\n    :hover {\n      cursor: pointer;\n    }\n\n    :disabled {\n      color: " + theme.colors.grey400 + ";\n      background-color: " + theme.colors.grey200 + ";\n      cursor: not-allowed;\n    }\n  ";
}, function (_ref4) {
  var theme = _ref4.theme,
      positive = _ref4.positive;
  return positive ? "color: " + theme.colors.green : "";
}, function (_ref5) {
  var theme = _ref5.theme,
      negative = _ref5.negative;
  return negative ? "color: " + theme.colors.red : "";
}, function (_ref6) {
  var theme = _ref6.theme,
      _ref6$size = _ref6.size,
      size = _ref6$size === void 0 ? "medium" : _ref6$size;
  return "\n    " + theme.buttonSizes[size] + ";\n  ";
});

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: ", ";\n  align-items: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 30px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  box-sizing: border-box;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 700px;\n  max-width: 100%;\n  margin: 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Layout = function Layout(_ref) {
  var helmetProps = _ref.helmetProps,
      children = _ref.children,
      loading = _ref.loading,
      header = _ref.header,
      footer = _ref.footer;
  return React.createElement(Wrapper, null, React.createElement(HelmetComponent, Object.assign({}, helmetProps)), !!header ? header : null, React.createElement(Main, null, !!loading ? loading : children), !!footer ? footer : null);
};
var Wrapper = styled__default.div(_templateObject$1());
var Main = styled__default.main(_templateObject2());
var PageBody = styled__default.div(_templateObject3());

var HelmetComponent = function HelmetComponent(_ref2) {
  var props = _extends({}, _ref2);

  return React.createElement(reactHelmetAsync.HelmetProvider, null, React.createElement(reactHelmetAsync.Helmet, Object.assign({}, props)));
};

var Header = styled__default.div(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary100;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.grey100;
});
var Column = styled__default.div(_templateObject5(), function (_ref5) {
  var _ref5$marginTop = _ref5.marginTop,
      marginTop = _ref5$marginTop === void 0 ? 0 : _ref5$marginTop;
  return getPixel(marginTop);
}, function (_ref6) {
  var _ref6$marginBottom = _ref6.marginBottom,
      marginBottom = _ref6$marginBottom === void 0 ? 0 : _ref6$marginBottom;
  return getPixel(marginBottom);
}, function (_ref7) {
  var _ref7$marginLeft = _ref7.marginLeft,
      marginLeft = _ref7$marginLeft === void 0 ? 0 : _ref7$marginLeft;
  return getPixel(marginLeft);
}, function (_ref8) {
  var _ref8$marginRight = _ref8.marginRight,
      marginRight = _ref8$marginRight === void 0 ? 0 : _ref8$marginRight;
  return getPixel(marginRight);
});
var Row = styled__default.div(_templateObject6(), function (_ref9) {
  var _ref9$justifyContent = _ref9.justifyContent,
      justifyContent = _ref9$justifyContent === void 0 ? "flex-start" : _ref9$justifyContent;
  return justifyContent;
}, function (_ref10) {
  var _ref10$alignItems = _ref10.alignItems,
      alignItems = _ref10$alignItems === void 0 ? "flex-start" : _ref10$alignItems;
  return alignItems;
}, function (_ref11) {
  var _ref11$marginTop = _ref11.marginTop,
      marginTop = _ref11$marginTop === void 0 ? 0 : _ref11$marginTop;
  return getPixel(marginTop);
}, function (_ref12) {
  var _ref12$marginBottom = _ref12.marginBottom,
      marginBottom = _ref12$marginBottom === void 0 ? 0 : _ref12$marginBottom;
  return getPixel(marginBottom);
}, function (_ref13) {
  var _ref13$marginLeft = _ref13.marginLeft,
      marginLeft = _ref13$marginLeft === void 0 ? 0 : _ref13$marginLeft;
  return getPixel(marginLeft);
}, function (_ref14) {
  var _ref14$marginRight = _ref14.marginRight,
      marginRight = _ref14$marginRight === void 0 ? 0 : _ref14$marginRight;
  return getPixel(marginRight);
});

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n\n  ", "\n\n  color: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Typography = styled__default(function (_ref) {
  var rest = _objectWithoutPropertiesLoose(_ref, ["color", "variant"]);

  return React.createElement("p", Object.assign({}, rest));
})(_templateObject$2(), function (_ref2) {
  var width = _ref2.width;
  return width ? typeof width === "string" ? width : width + "px" : "100%";
}, function (_ref3) {
  var theme = _ref3.theme,
      _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? "body2" : _ref3$variant;
  return theme.typography[variant];
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? "grey600" : _ref4$color;
  return theme.colors[color];
});

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Regular\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Regular.svg\") format(\"svg\");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Bold\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Bold.svg\") format(\"svg\");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \"Apple SD Gothic Neo\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1, h2, h3, h4, h5, h6, p, ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  ::selection {\n    background: ", "; /* WebKit/Blink Browsers */\n    color: inherit;\n  }\n\n  ::-moz-selection {\n    background: ", "; /* Gecko Browsers */\n    color: inherit;\n  }\n  \n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var BemypetTheme = styled.createGlobalStyle(_templateObject$3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary100;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary100;
});
var ThemeProvider = function ThemeProvider(_ref3) {
  var children = _ref3.children;
  return React.createElement(styled.ThemeProvider, {
    theme: theme
  }, React.createElement(BemypetTheme, null), children);
};

exports.Button = Button;
exports.Column = Column;
exports.Header = Header;
exports.Layout = Layout;
exports.PageBody = PageBody;
exports.Row = Row;
exports.ThemeProvider = ThemeProvider;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map

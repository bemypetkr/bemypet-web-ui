function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var Color = _interopDefault(require('color'));
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

var calcRem = function calcRem(size) {
  return size / 16 + "rem";
};
var calcHeight = function calcHeight(size, height) {
  return "" + height / size;
};

var buttonBase = "\n  font-size: " + calcRem(13) + ";\n  font-weight: bold;\n  line-height: " + calcHeight(13, 20) + ";\n";
var buttonSizes = {
  small: "\n    " + buttonBase + "\n    padding: 6px 8px;\n  ",
  medium: "\n    " + buttonBase + "\n    padding: 10px 8px;\n  ",
  large: "\n    " + buttonBase + "\n    padding: 14px 8px;\n  "
};
var buttonColors = {
  "default": "\n    " + buttonBase + "\n    padding: 10px 8px;\n  ",
  primary: "\n    " + buttonBase + "\n    padding: 14px 8px;\n  ",
  disabled: "\n    " + buttonBase + "\n    padding: 6px 8px;\n  "
};
var buttons = {
  buttonSizes: buttonSizes,
  buttonColors: buttonColors
};

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
  fontSizes: fontSizes,
  lineHeights: lineHeights
};

var deviceSizes = {
  mobile: "360px",
  tablet: "768px"
};
var devices = {
  mobile: "only screen and (max-width: " + deviceSizes.mobile + ")",
  tablet: "only screen and (max-width: " + deviceSizes.tablet + ")"
};

var theme = _extends({}, buttons, colors$1, typography, {
  devices: devices
});

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  white-space: nowrap;\n  outline: none;\n  border: none;\n  border-radius: 50px;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled__default(function (_ref) {
  var rest = _objectWithoutPropertiesLoose(_ref, ["color", "size", "type"]);

  return React.createElement("button", Object.assign({}, rest));
})(_templateObject(), function (_ref2) {
  var width = _ref2.width;
  return width ? typeof width === "string" ? width : width + "px" : "100%";
}, function (_ref3) {
  var theme = _ref3.theme,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? "default" : _ref3$color;
  return "\n    color: " + (color == "primary" ? theme.colors.grey600 : theme.colors.grey500) + ";\n    background-color: " + (color == "primary" ? theme.colors.primary100 : theme.colors.grey200) + ";\n\n    :hover {\n      cursor: pointer;\n      background-color: " + Color(color == "primary" ? theme.colors.primary100 : theme.colors.grey200).darken(0.2).toString() + ";\n  \n    }\n  ";
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? "medium" : _ref4$size;
  return "\n    " + theme.buttonSizes[size] + ";\n  ";
});

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]);

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
      footer = _ref.footer;
  return React.createElement(Wrapper, null, React.createElement(Header, Object.assign({}, helmetProps)), React.createElement(Main, null, !!loading ? loading : children), !!footer ? footer : null);
};
var Wrapper = styled__default.div(_templateObject$1());
var Main = styled__default.main(_templateObject2());
var Header = function Header(props) {
  return React.createElement(reactHelmetAsync.HelmetProvider, null, React.createElement(reactHelmetAsync.Helmet, Object.assign({}, props)));
};
var Column = styled__default.div(_templateObject3());
var Row = styled__default.div(_templateObject4());

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
  return "\n  font-size: " + theme.fontSizes[variant] + ";\n  line-height: " + theme.lineHeights[variant] + ";\n  ";
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? "grey600" : _ref4$color;
  return theme.colors[color];
});

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Regular\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Regular.svg\") format(\"svg\");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Bold\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Bold.svg\") format(\"svg\");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \"Apple SD Gothic Neo\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  p, ul {\n    margin: 0;\n    padding: 0;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var BemypetTheme = styled.createGlobalStyle(_templateObject$3());
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(styled.ThemeProvider, {
    theme: theme
  }, React.createElement(BemypetTheme, null), children);
};

exports.Button = Button;
exports.Column = Column;
exports.Header = Header;
exports.Layout = Layout;
exports.Row = Row;
exports.ThemeProvider = ThemeProvider;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map

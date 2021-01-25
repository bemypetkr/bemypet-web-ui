function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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
  primary: "\n    color: " + colors.grey600 + ";\n    background-color: " + colors.primary100 + ";\n\n    :hover {\n      background-color: " + colors.primary200 + ";\n    }\n  ",
  secondary: "\n    color: " + colors.grey100 + ";\n    background-color: " + colors.secondary100 + ";\n\n    :hover {\n      background-color: " + colors.secondary200 + ";\n    }\n  "
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

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Regular\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Regular.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Regular.svg\") format(\"svg\");\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  @font-face {\n    font-family: \"Apple SD Gothic Neo\";\n    src: local(\"Apple SD Gothic Neo\"), local(\"AppleSDGothicNeo-Bold\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff2\") format(\"woff2\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.woff\") format(\"woff\"),\n      url(\"./assets/fonts/AppleSDGothicNeo-Bold.ttf\") format(\"truetype\")\n        url(\"./assets/fonts/AppleSDGothicNeo-Bold.svg\") format(\"svg\");\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \"Apple SD Gothic Neo\", sans-serif;\n    font-size: 13px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1, h2, h3, h4, h5, h6, p, ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  ::selection {\n    background: ", "; /* WebKit/Blink Browsers */\n    color: inherit;\n  }\n\n  ::-moz-selection {\n    background: ", "; /* Gecko Browsers */\n    color: inherit;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n\n    :hover {\n      text-decoration: underline;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
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

var BemypetTheme = styled.createGlobalStyle(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary100;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary100;
});
var ThemeProvider = function ThemeProvider(_ref3) {
  var children = _ref3.children;
  return React__default.createElement(styled.ThemeProvider, {
    theme: theme
  }, React__default.createElement(BemypetTheme, null), children);
};

var Urls = /*#__PURE__*/function () {
  function Urls() {}

  _createClass(Urls, null, [{
    key: "homepage",
    get: function get() {
      return "https://accounts.mypetlife.co.kr";
    }
  }, {
    key: "bemypetlife",
    get: function get() {
      return "https://mypetlife.co.kr";
    }
  }, {
    key: "creators",
    get: function get() {
      return "https://creators.mypetlife.co.kr";
    }
  }, {
    key: "facebook",
    get: function get() {
      return "https://www.facebook.com/bemypetkr";
    }
  }, {
    key: "youtube",
    get: function get() {
      return "https://www.youtube.com/channel/UClljZ2pw3YZFVGq6EQgJVyQ";
    }
  }, {
    key: "instagram",
    get: function get() {
      return "https://www.instagram.com/bemypet.official/";
    }
  }, {
    key: "playStore",
    get: function get() {
      return "https://play.google.com/store/apps/details?id=kr.bemypet.bemypet_main_app";
    }
  }, {
    key: "appStore",
    get: function get() {
      return "https://apps.apple.com/app/id1506523332";
    }
  }, {
    key: "placeholderImgSrc",
    get: function get() {
      return "https://dev-bff-images.mypetlife.co.kr/common/userpic.png";
    }
  }]);

  return Urls;
}();

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n\n  ", "\n\n  color: ", ";\n\n  text-align: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Typography = styled__default(function (_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["color", "variant", "textAlign", "className", "children"]);

  return React__default.createElement("p", Object.assign({
    className: "bui-typography " + className
  }, rest), children);
})(_templateObject$1(), function (_ref2) {
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
}, function (_ref5) {
  var _ref5$textAlign = _ref5.textAlign,
      textAlign = _ref5$textAlign === void 0 ? "inherit" : _ref5$textAlign;
  return textAlign;
});

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  height: ", "px;\n  background-repeat: no-repeat;\n  background-position: top left;\n  background-image: url(", ");\n  background-size: ", "px ", "px;\n\n  display: flex;\n  align-items: center;\n\n  // default align is vertical\n  flex-direction: column;\n  min-height: ", "px;\n  height: auto;\n\n  .bui-typography {\n    padding-top: ", "px;\n    white-space: nowrap;\n    text-align: center;\n  }\n\n  // when it displayed horizontally\n  ", "\n\n  img {\n    width: ", "px;\n    height: ", "px;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Avatar = styled__default(function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 96 : _ref$size,
      label = _ref.label,
      src = _ref.src,
      typographyProps = _ref.typographyProps,
      rest = _objectWithoutPropertiesLoose(_ref, ["size", "label", "axis", "src", "typographyProps"]);

  return React__default.createElement("div", Object.assign({}, rest), src ? React__default.createElement("img", {
    width: size,
    height: size,
    src: src
  }) : null, label ? typeof label == "string" ? React__default.createElement(Typography, Object.assign({}, typographyProps), label) : label : null);
})(_templateObject$2(), function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 96 : _ref2$size;
  return size;
}, function (_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 96 : _ref3$size;
  return size;
}, Urls.placeholderImgSrc, function (_ref4) {
  var _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 96 : _ref4$size;
  return size;
}, function (_ref5) {
  var _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 96 : _ref5$size;
  return size;
}, function (_ref6) {
  var _ref6$size = _ref6.size,
      size = _ref6$size === void 0 ? 96 : _ref6$size;
  return size;
}, function (_ref7) {
  var _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? 96 : _ref7$size;
  return size + 14;
}, function (_ref8) {
  var axis = _ref8.axis,
      _ref8$size = _ref8.size,
      size = _ref8$size === void 0 ? 96 : _ref8$size;
  return axis === "horizontal" ? "\n      flex-direction: row;\n      min-width: " + function (_ref9) {
    var _ref9$size = _ref9.size,
        size = _ref9$size === void 0 ? 96 : _ref9$size;
    return size;
  } + "px;\n      width: auto;\n      \n      .bui-typography  {\n        padding-top: 0;\n        padding-left: " + (size + 14) + "px;\n        text-align: left;\n      }\n  " : "";
}, function (_ref10) {
  var _ref10$size = _ref10.size,
      size = _ref10$size === void 0 ? 96 : _ref10$size;
  return size;
}, function (_ref11) {
  var _ref11$size = _ref11.size,
      size = _ref11$size === void 0 ? 96 : _ref11$size;
  return size;
});

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  width: ", ";\n  border-radius: 50px;\n\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 20px;\n\n  ", "\n\n  // positive will be green colored text\n  ", ";\n\n  // negative will be red colored text\n  ", ";\n\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var buttonBaseStyles = "\n  outline: none;\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  white-space: nowrap;\n\n  :hover {\n    cursor: pointer;\n  }\n\n  :disabled {\n    cursor: not-allowed;\n  }\n";
var Button = styled__default(function (_ref) {
  var rest = _objectWithoutPropertiesLoose(_ref, ["color", "size", "type", "positive", "negative"]);

  return React__default.createElement("button", Object.assign({}, rest));
})(_templateObject$3(), buttonBaseStyles, function (_ref2) {
  var width = _ref2.width;
  return width ? typeof width === "string" ? width : width + "px" : "100%";
}, function (_ref3) {
  var theme = _ref3.theme,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? "default" : _ref3$color;
  return "\n    " + theme.buttonColors[color] + "\n\n    :disabled {\n      color: " + theme.colors.grey400 + ";\n      background-color: " + theme.colors.grey200 + ";\n    }\n  ";
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
var IconButton = styled__default(function (_ref7) {
  var icon = _ref7.icon,
      rest = _objectWithoutPropertiesLoose(_ref7, ["icon", "type"]);

  return React__default.createElement("button", Object.assign({}, rest, {
    children: icon
  }));
})(_templateObject2(), buttonBaseStyles);

var Logo = function Logo(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#080405" : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 80 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 120 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2929.35 1662.66",
    style: {
      width: width,
      height: height
    }
  }, React__default.createElement("path", {
    d: "M966,1184.71c49.9-32.84,98.21-85.24,126.06-136.74,20.86-38.53,28.94-70,26.45-103-1.7-22.06,1.72-159.59-252.62-151.61-99.71,4-213.59,27.65-301.62,62.48-39.72,15.67-81.44,39.12-107.79,60.58-23.66,19.26-44.52,43.72-55.3,65.08a138.77,138.77,0,0,0-13.47,79.24c1.4,11.78,3.49,19.17,7.79,28.45,8.18,17.27,31.86,34,51.1,16.77,5.29-5,19.73-21.78,9-52.6-5.19-16.37-6.49-24.95-6.49-42.52-.1-13.77,0-14.77,2.7-20.36,4-8.68,10.38-17,20.86-27.25,10.88-10.68,17.06-15.77,31.54-26,45.21-31.74,113.38-62.08,154.2-68.77,5.89-.89,11-1.49,11.28-1.09s-.4,2.69-1.6,5.39c-6.69,14.77-7,20.56-6,100.3,1.2,90.53,1.2,300,0,345.14-1.49,57.19-2.3,50.85-8.08,107.59s102.47,108.71,244.63,81.25c29.34-5.69,61.38-15.85,91.69-28.84,23.15-11.08,43.85-26.06,59-41.83,53.57-62.1,14.6-144.38-36-181-23.66-17.37-50.8-31-82.14-41.62l-13.08-4.39,4.49-1.7C932.47,1204,954.73,1192.19,966,1184.71Zm-40.64,81.35c47.64,30.31,69.24,70.29,56.3,108.26-7.54,26.61-24.13,58.08-121.25,69.29-42.74,5.19-66.08-3.1-75.46-12.38-11.08-11.18-17.47-25.65-20.66-47.31-1.4-9.68-1.6-16.86-1.1-51.2.9-52.4,3.19-85.73,6.29-88.83,3-2.89,13-8.14,52-8.14C873.41,1235.75,910.2,1256,925.37,1266.06Zm-102.59-97.52c-17.16,3.49-51.1,2.39-56.89-1.9l-2.49-1.8-.6-129.65c-.6-135-.6-134.64-5-151.9-2.7-10.58-6-17.37-11.48-23.16-3.19-3.39-4.19-5.09-3.29-5.49,7.28-2.59,143.36-30.29,234.3,8.69,52,21.65,53.24,52.89,53.24,75.65-.1,26.35-6.88,50.7-22.35,79.85-13.18,24.65-28.65,44.91-52.7,68.86C912.81,1130.51,864.2,1160.15,822.78,1168.54Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M3307.12,993.24c-17.32-21.65-156.7-19-155.9-26,.1-3.1,3.5-42.37,6.49-78.9q2.1-25.53,4.08-51.08c.8-10.46,5-25.07-5.43-31.77-12.71-8.19-27.4-12.91-42.12-15.94-7.5-1.54-15.1-2.63-22.72-3.42-5.91-.61-14.29-2.8-19.69.47-2.84,1.73-4.82,4.76-5.85,9.08-4.06,17.09-6.53,173.39-10,175.89-1.09.8-14.21-.89-33.28-.79-62,.3-81.44,3.1-87,12.38-4.19,6.78-1.86,29,7.72,31.71,30.32,8.66,108.26,13,108.26,13s-1.3,49.82-5.19,132.66c-2,42.41-2.92,85.83-2.76,120.52a14.28,14.28,0,0,0-9.59,3.58c-4.29,3.79-6.48,10.08-10.48,29.94-7.58,37.73-15.27,60.78-26.84,81.14-14.83,26-38.05,45.78-67.59,52.52-30.2,6.89-62.43-.15-84-23-19-20.1-27.39-46.63-28.27-75.37-.31-10.07.2-18.36.4-18.36s3.49.79,7.29,1.69c10.58,2.6,33.23,2.3,44.51-.5,34.24-8.48,66.17-38.42,87-81.54,14.08-29.14,22.86-61.08,25.06-90.82.79-11.28-1.7-34.24-5.19-47.41-10.09-38.83-43.32-71-79.85-77.35-10.28-1.8-26.15-1.8-35.93,0-23.16,4.19-40.92,14.07-60.78,33.93-21.26,21.16-34.84,43.12-48.91,79.35-13.67,35.13-22.26,71.06-27.15,114.18-2.59,23.25-2.39,68.77.5,90.22,4.29,31.74,10.18,52.5,21.16,74.56,20.76,41.92,55.49,68.77,99.91,77.45,29.94,5.79,67,3.89,90.92-4.69,51.88-18.59,90.32-63.22,109.62-113.88q2.72-7.15,5-14.47c12.33,68.86,37.74,114.35,75,134,33.31,17.54,68.1,9.09,94.79-16.08s44.53-58.61,57.12-92.86a487.16,487.16,0,0,0,15.88-53.19c4.4-18.13,9.54-37.23,9.24-56a59,59,0,0,0-2.06-15.41c-2.65-9.18-14-15.9-23.3-13.22-7,2-11,8.85-13.76,15.07-6.26,14.28-6.71,29.94-10.37,44.88-3.09,12.57-5.9,25.34-9.76,37.71-8.32,26.69-17.19,57.56-40.44,75.43-7.87,6.06-18.29,9.64-27.88,7.05-14-3.79-21.12-18.59-25-31.38-9.3-30.51-9.32-62.22-9.54-93.8-.2-29.94.13-59.89.68-89.83,1.05-56.88,7.14-171.53,7.17-171.89,1.6-17,3-20.53,3-20.53s60.63,0,147.81,3.5c7.51,1.88,12.56,3.48,15.88-4.71S3313.35,999,3307.12,993.24Zm-473.65,215c11.28-45.11,24.65-74.15,42-91.72,9.68-9.78,16.17-12.68,27.25-12.38,6.68.3,8,.6,12.27,3.7a23.48,23.48,0,0,1,7.49,9c2.69,5.49,2.69,5.79,2.59,25.05,0,16.87-.4,21.56-2.79,34.93-6.49,35.93-17.27,63.38-33.24,84.54-11.87,15.77-24,23.56-39.72,25.35-11.18,1.3-18.07.4-21.06-2.59C2822.09,1278,2824.39,1244.41,2833.47,1208.28Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M2642,1058.07c-13.67-14.27-27.34-22.85-43.41-27-11.88-3.19-30-3.19-41.22,0-32.24,9-54.4,36.13-72.17,88.43-2.39,7.09-7.28,22.86-10.78,34.94-10.28,35.63-9.28,41.82-9.68-60.39-.4-79-.6-90.12-2.09-96.11-3.11-12.43-11.56-23.91-23.58-28.94-8.89-3.72-19-2.52-28.29-.19-1.75.43-3.46.91-5.13,1.41-8.45,2.48-21.76,5.26-25.24,14.54-.3.8.59,5.89,2.09,11.18s3.3,13.78,4.29,18.77c1.7,8.48,1.8,28.44,2.3,353.32q.14,87.45.32,174.9.13,53.53.38,107.08c.1,17.54.17,35.08.49,52.61.17,9.3.44,15.86,9.66,20.39,20.27,9.94,47.52,7.37,69.26,5.29,14.24-1.36,39.66-6.88,39.66-25.12,0-5.79-1.5-7.88-9.18-12.67l-5.59-3.5-2.2-9.28a573,573,0,0,1-12.67-76.65c-3.11-30.29-1.78-61.2-1.79-91.58,0-42.64-.59-85.36.92-128,.63-17.74,2-35.44,3.56-53.12,7.49-84,22.56-156.9,40.22-194.62,9.28-19.86,21.06-34.83,31.74-40.32,34.11-17.55,51.61,28.37,56.21,53.25,9.3,50.23,9.45,101.73,6,152.55-1.77,25.88-2.63,52.46-7.44,78.22-4.2,22.46-11.07,51.07-29.35,66.56a31.67,31.67,0,0,1-17.49,7.71c-13.52,1.25-22.92-8.54-29.95-18.85-7.28-10.58-10.18-13-16.76-14.07-14.55-2.3-26,14-26.36,26.68-1.5,53.83,71.66,60.94,109.22,47.54,58.79-21,83.19-88.75,93.54-145,9.84-53.48,9.64-109.15,2.61-163C2688.28,1140.93,2673.72,1091.19,2642,1058.07Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M2309.88,1419.37l-8.49-1.3-.3-167.08-.2-167.08,3.5-3.19c4-3.59,4.49-7.39,1.89-12.88-3.69-7.78-21.06-15.17-44.31-19-9.28-1.4-37-3.79-37.63-3.09-.4.29-2.69,14.57-10.28,63-17.07,109-35.23,188.84-52.5,231.26-15.67,38.63-32.54,58.69-49.2,58.69s-24.76-17.37-29.55-62.48c-6.91-65.14-4.08-131.12-.3-196.38,1.85-32-.1-87.08,26.35-111.23,2.3-2.1,5.29-4.69,6.79-5.89,3.29-2.7,3.49-8.68.6-14.77-6.89-14.17-35.43-28.05-68.07-32.94-13.57-2.09-17.57-1.89-22.06.8-22.75,13.77-34.73,94.12-35.53,236.74-.2,42.52-.2,43-2.5,48.91a99.44,99.44,0,0,0-4.09,14.47c-13,66-26.15,99.91-46.41,119.17-10.48,10-26,15-36.53,11.58-11.18-3.59-19.56-19.16-24.85-46.31-4-20.46-5-35.33-4.89-74.46,0-48.3,2.2-76,9-112.59,2.39-13.2,5.63-25.95,11.48-38.09,3-6.27,9.59-14.23,8.58-21.68-1.19-11.08-11.87-25.36-28-37.43-10.08-7.49-31.54-18.07-41.92-20.76-12.78-3.2-38-2.4-45.71,1.59-2.5,1.3-4.4,4.4-10.28,16.67-9.79,20.46-35.34,85-47.41,120-13.38,38.53-42.32,117.08-45.22,122.77-1.79,3.49-2.09,3.79-2.79,2-.4-1.1-.8-46.61-.8-101.2-.1-98.32-.1-99.31-2.2-103.6-3.79-7.79-16.86-15.38-34.33-19.77-13.57-3.49-30.54-3-45.81,1.2-9.58,2.7-18.47,13.18-28.45,33.74-14.37,29.44-25.35,62.88-43.91,133.24-4.49,16.77-8.49,31.74-9,33.44-.6,1.89-1-47.91-1-132.45l-.1-135.54-3.7-1.6c-5.78-2.39-32.53-9-46.21-11.27-15.47-2.6-29.14-2.8-33.83-.3a16.64,16.64,0,0,0-5.39,4.39c-3.74,5.09-.84,15-.85,20.59-.06,62.27-2.33,119-3.44,178.52l-.7,29.25H1414c-10.38,0-13.38,5.19-19.36,34.13-6.54,31.6-14.69,65.38-34.19,91.94-12.4,16.87-29.35,30.5-49.21,37.47-28,9.84-61.82,7-85.65-11.62a96.23,96.23,0,0,1-25.47-30.81,103.69,103.69,0,0,1-9-23.46,122.3,122.3,0,0,1-3.12-29.48c0-10,.3-18.27.8-18.27s3.39.7,6.69,1.5c10.28,2.5,26.65,2.89,37.43,1.1,12.57-2.2,17.66-3.89,28.94-9.78,17.37-8.89,32-21.76,45.31-39.73,23.86-31.94,41-78,44.62-119.37,2.65-30.52-3.46-62.81-21.36-88.13-13.48-19.06-34.34-33.93-56.09-40.12-9.29-2.6-28.45-3.59-39.43-2-44.71,6.59-83.34,43-108.59,102.41-25,59.08-38,136.43-33.13,197.72,6.38,79.24,34.43,131.14,84.83,157.09,36.53,18.67,90.63,22,130.65,7.79,25.35-9,49.9-25.75,68.77-46.91,14-15.67,30.34-42.82,38.23-63.18a65.77,65.77,0,0,1,3.09-7c.4-.5.8,3.3.8,8.29,0,23.15,3.49,63.78,7.08,81.54,2.7,13.48,4.79,17.67,9.89,21,9.48,6,28.84,11.38,50.1,14,22.06,2.7,44.51-.4,50.6-6.88,3.2-3.4,4.09-7.79,4.09-21.06,0-22.26,5.49-74.76,11.58-110.79,6.29-37.43,16.17-82.14,22.56-102.2,6.09-19.17,12.17-31.14,14.77-29.55,2.89,1.8,3.29,9.79,4,88.83.8,84.74,1.2,92.92,5.59,110.09,6,23.86,18.37,36.73,40.13,41.82,15,3.45,38.82,4.87,53-1.82,12-5.66,10.14-18.27,11.85-29.38,2.42-15.75,6-31.37,9.71-46.85,4.59-19.16,19.26-70.66,24.45-86.13,7.39-22.06,30.35-77,40.13-96.12,4.39-8.78,5.29-10,5.59-7.68.2,1.49-1.1,22-2.8,45.41-4.24,56.17-6.13,117.14,12,171.27,14,41.82,39,68.37,72.16,76.65,46.7,11.68,82.67-13.54,106.59-52,5.49-8.78,17.07-32.44,23-46.61,1.9-4.59,3.59-8.28,3.89-8.28s1.3,3.49,2.3,7.69c4.25,17.39,13.6,37.18,23.54,52.48,31.71,48.85,100.91,64,137.51,12.8,17.71-24.8,26.63-55.06,35.5-83.82,2.68-8.66,5.21-17.36,7.66-26.08l5-17.47v70.87l.1,70.86-5.39,3.79c-27.85,19.27-59.89,51.9-85.54,87-52.9,72.36-84.84,157.79-88.33,236.84-2,45.14,5,94.3,43.13,123.83,52.83,41,127.2,16,164.09-33.95,41.32-55.89,51.1-129.46,57.64-196.79q3.87-39.88,3.92-80c.1-65.87.5-121.17.8-122.86.7-3.9,3-4.89,14-6.39,5.14-.7,11-1.59,15.26-4.86,7.07-5.46,7.11-18,2.5-25C2329.44,1425.16,2321.25,1421.16,2309.88,1419.37Zm-1101.19-260.7c5.89-20.46,9.29-29.44,16.37-44.12,7.69-15.77,15.47-26.94,24.65-35.43,9.55-8.81,25.31-13,36-5.94a21.7,21.7,0,0,1,6.87,7.48c6.94,12.17,5.27,26.83,3.91,40.16-3.61,35.26-16,71.62-32,99.87-6.2,11-16.45,21.56-28.1,27-11.08,5.19-29.84,6.68-36,2.79C1192.12,1245.3,1196,1202.58,1208.69,1158.67Zm1001.38,496.54c-1.9,53.3-8.59,98.91-19,130-7.58,22.76-19.66,42.12-31,49.91-15.77,10.88-38.22,8.08-49.4-6-10-12.68-14.07-25.65-15.37-49.11-5-88.83,47.11-222.07,107.29-274.67l8-7,.3,63.77C2211.07,1597.13,2210.67,1639,2210.07,1655.21Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M1838.74,260.47c-12.4,4.4-23.2,12.3-32.9,24.2-12.2,14.9-21.8,34.4-25.6,52-2.2,10.1-1.6,26.9,1.4,37.1,9.2,31.3,35.9,54.6,62.6,54.7,16.6.1,31.3-6.4,44.7-19.6,18.4-18.1,26.3-42.3,23.7-73s-15.5-56.2-34.8-69c-8.6-5.7-14.8-7.8-24.6-8.3C1846.74,258.27,1844,258.67,1838.74,260.47Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M1682.74,311c-12.7,2.4-28.1,16.1-36.7,32.8-15.7,30.5-18.2,66.9-6.2,90.6,8.7,17.3,22.1,30.9,38,38.4,10,4.6,17.8,6.6,27.4,6.7,27.3.3,51.2-21,59.6-53,3-11.4,2.8-28.6-.4-41.2-10-38.6-32.7-66.3-60.3-73.4A61.89,61.89,0,0,0,1682.74,311Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M2004.84,327.37c-18.6,3.6-39,15.2-55.5,31.6-19.4,19.1-27.6,38.9-26.3,63.3,1.7,32.8,20.6,58.7,46.7,64.1,9.4,2,25.1.7,35.2-2.8,24-8.3,41.3-26.1,51.9-53.1,6.1-15.7,8.2-26.2,8.2-42.2.1-15-1.3-22-6.3-32.9-8.9-18.9-24-29.3-42.4-29A83.4,83.4,0,0,0,2004.84,327.37Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M1836.24,454.87c-42.7,4.5-84.8,21.5-116.6,47.1-10.2,8.3-25.3,24.2-31.7,33.6-19.5,28.3-24.4,59.9-14.1,91.7,5.2,16,16.9,34.6,31.1,49.6,28,29.5,72.8,51.7,116.7,57.8,14.6,2.1,46.4,2.1,63.6.1,33.7-4,60.9-14.6,79.6-31.3,10.4-9.2,21.2-26.7,25.7-41.2,3.5-11.7,4.7-20.9,4.6-38-.2-45.8-17.4-92.2-45.9-124-20.6-22.9-43.5-36.7-71.5-43.1C1869.34,455.27,1845.34,454,1836.24,454.87Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }), React__default.createElement("path", {
    d: "M2071.74,481.37c-10.6,2.3-25,7.6-32.5,12.1-29.9,18.1-43.6,58.7-29.7,88.1,13.5,28.5,54.4,37.9,87.2,20,17.5-9.5,33.8-27.1,42.9-46.4,6-12.5,7.4-19.2,6.9-32.9-.4-10.5-.7-12.1-3.7-18.4-5.7-11.8-14.9-18.8-29.7-22.6C2102.74,478.57,2084.84,478.67,2071.74,481.37Z",
    transform: "translate(-386.65 -258.48)",
    style: {
      fill: color,
      fillRule: "evenodd"
    }
  }));
};

var ArrowRight = function ArrowRight(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    fill: color,
    d: "M9.22 16.22c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0l5-5c.293-.293.293-.767 0-1.06l-5-5c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l4.47 4.47-4.47 4.47z",
    transform: "translate(-260 -1617) translate(260 1617)"
  }));
};

var Blockquote = function Blockquote(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M11 18v-3.686c0-1.105-.895-2-2-2H6.76c0-1.36.293-2.497.88-3.412s1.573-1.608 2.96-2.078L9 4c-2.133.732-3.667 1.922-4.6 3.569C3.467 9.216 3 11.268 3 13.725V18c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2zm10 0v-3.686c0-1.105-.895-2-2-2h-2.24c0-1.36.293-2.497.88-3.412s1.573-1.608 2.96-2.078L19 4c-2.133.732-3.667 1.922-4.6 3.569-.933 1.647-1.4 3.699-1.4 6.156V18c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2z",
    transform: "translate(-340 -1617) translate(340 1617)"
  })));
};

var Calendar = function Calendar(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M17.657 3c.39 0 .713.29.765.667l.007.104V5.07C19.87 5.199 21 6.41 21 7.886V18.17C21 19.734 19.734 21 18.171 21H5.83C4.266 21 3 19.734 3 18.171V7.886C3 6.41 4.13 5.199 5.571 5.069V3.77c0-.426.346-.771.772-.771.39 0 .713.29.764.667l.007.104v1.286h4.114V3.771c0-.39.29-.713.667-.764L12 3c.39 0 .713.29.764.667l.007.104v1.286h4.114V3.771c0-.39.29-.713.667-.764L17.657 3zm1.8 8.228H4.542v6.943c0 .71.576 1.286 1.287 1.286H18.17c.71 0 1.286-.575 1.286-1.286v-6.943zM18.171 6.6H5.83c-.71 0-1.286.576-1.286 1.286l-.001 1.799h14.915v-1.8c0-.71-.575-1.285-1.286-1.285z",
    transform: "translate(-100 -1617) translate(100 1617)"
  }), " "));
};

var Camera = function Camera(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color,
    fillRule: "nonzero"
  }, React__default.createElement("path", {
    d: "M11 0c1.105 0 2 .895 2 2h2c1.657 0 3 1.343 3 3v7c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V5c0-1.657 1.343-3 3-3h2c0-1.105.895-2 2-2h4zm0 1.5H7c-.245 0-.45.177-.492.41L6.5 2v.5c0 .552-.448 1-1 1H3c-.78 0-1.42.595-1.493 1.356L1.5 5v7c0 .78.595 1.42 1.356 1.493L3 13.5h12c.78 0 1.42-.595 1.493-1.356L16.5 12V5c0-.78-.595-1.42-1.356-1.493L15 3.5h-2.5c-.552 0-1-.448-1-1V2c0-.245-.177-.45-.41-.492L11 1.5z",
    transform: "translate(3 4)"
  }), React__default.createElement("path", {
    d: "M9 5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 1.5c-.828 0-1.5.672-1.5 1.5S8.172 9.5 9 9.5s1.5-.672 1.5-1.5S9.828 6.5 9 6.5z",
    transform: "translate(3 4)"
  })));
};

var Check = function Check(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    fill: color,
    d: "M865.502 1140.578c-.312-.356-.853-.392-1.21-.08-.356.312-.392.853-.08 1.21l3 3.428c.333.38.921.392 1.268.024l7.286-7.714c.325-.344.31-.887-.035-1.212-.344-.325-.886-.31-1.211.035l-6.639 7.028-2.379-2.719z",
    transform: "translate(-858 -1129)"
  }));
};

var Clear = function Clear(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    fill: color,
    d: "M5.29 5.29c.389-.387 1.018-.387 1.406 0L12 10.596l5.304-5.304c.358-.358.922-.386 1.312-.083l.093.083c.388.388.388 1.017 0 1.405L13.405 12l5.304 5.304c.358.358.386.922.083 1.312l-.083.093c-.388.388-1.017.388-1.405 0L12 13.405l-5.304 5.304c-.358.358-.922.386-1.312.083l-.093-.083c-.388-.388-.388-1.017 0-1.405L10.595 12 5.291 6.696c-.358-.358-.386-.922-.083-1.312z",
    transform: "translate(-580 -1617) translate(580 1617)"
  }));
};

var ClearCircle = function ClearCircle(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M11.75 2c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2 17.135 2 11.75 6.365 2 11.75 2zm3.446 6.147c-.26-.194-.619-.196-.882-.007l-.094.08-2.47 2.469-2.47-2.47c-.293-.292-.767-.292-1.06 0-.267.267-.29.684-.073.977l.073.084 2.469 2.47-2.47 2.47-.072.084c-.194.26-.196.619-.007.882l.08.094.084.073c.26.194.619.196.882.007l.094-.08 2.47-2.469 2.47 2.47c.293.292.767.292 1.06 0 .267-.267.29-.684.073-.977l-.073-.084-2.469-2.47 2.47-2.47.072-.084c.194-.26.196-.619.007-.882l-.08-.094-.084-.073z",
    transform: "translate(-380 -1617) translate(380 1617)"
  })));
};

var Comment = function Comment(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React__default.createElement("g", {
    stroke: color,
    strokeWidth: "1.5",
    transform: "translate(2 2)"
  }, React__default.createElement("path", {
    d: "M10.057 0C6.547-.014 3.286 1.807 1.46 4.8c-1.826 2.994-1.948 6.722-.323 9.829l.2.39c.164.307.198.667.095 1-.286.76-.525 1.535-.715 2.324 0 .4.114.628.544.619.76-.168 1.509-.384 2.241-.648.316-.087.651-.066.954.057.277.134.84.477.859.477 3.676 1.932 8.165 1.4 11.284-1.34 3.119-2.74 4.22-7.118 2.768-11.004C17.915 2.618 14.21.031 10.057 0h0z"
  }), React__default.createElement("circle", {
    cx: "5.287",
    cy: "10",
    r: "1",
    fill: color
  }), React__default.createElement("circle", {
    cx: "10.057",
    cy: "10",
    r: "1",
    fill: color
  }), React__default.createElement("circle", {
    cx: "14.826",
    cy: "10",
    r: "1",
    fill: color
  }))));
};

var HeartFilled = function HeartFilled(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M12.002 4.44c2.452-2.091 5.986-1.883 8.207.485 2.247 2.398 2.434 6.263.252 8.798-1.35 1.568-2.952 3.34-4.417 4.727-.732.692-1.448 1.305-2.096 1.753-.604.417-1.3.797-1.948.797-.649 0-1.344-.38-1.948-.797-.648-.448-1.364-1.06-2.096-1.753-1.465-1.386-3.068-3.159-4.417-4.727-2.182-2.535-1.995-6.4.252-8.798 2.22-2.368 5.755-2.576 8.207-.485l.002.002.002-.002z",
    transform: "translate(-700 -1617) translate(700 1617)"
  })));
};

var HeartOutline = function HeartOutline(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M19.008 6.206c-1.608-1.715-4.17-1.867-5.945-.351L12 6.762l-1.063-.907C9.16 4.339 6.6 4.49 4.992 6.206c-1.638 1.747-1.737 4.51-.202 6.292 1.336 1.552 2.892 3.271 4.293 4.596.702.664 1.346 1.211 1.89 1.587.588.405.917.507 1.027.507.11 0 .439-.102 1.027-.507.544-.376 1.188-.923 1.89-1.587 1.4-1.325 2.957-3.044 4.293-4.596 1.534-1.783 1.436-4.545-.202-6.292zM12.002 4.44c2.452-2.091 5.986-1.883 8.207.485 2.247 2.398 2.434 6.263.252 8.798-1.35 1.568-2.952 3.34-4.417 4.727-.732.692-1.448 1.305-2.096 1.753-.604.417-1.3.797-1.948.797-.649 0-1.344-.38-1.948-.797-.648-.448-1.364-1.06-2.096-1.753-1.465-1.386-3.068-3.159-4.417-4.727-2.182-2.535-1.995-6.4.252-8.798 2.22-2.368 5.755-2.576 8.207-.485l.002.002.002-.002z",
    transform: "translate(-660 -1617) translate(660 1617)"
  })));
};

var Hide = function Hide(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fillRule: "evenodd",
    fill: "none"
  }, React__default.createElement("path", {
    fill: color,
    d: "M5.28,5.28a.47.47,0,0,0-.35-.14.46.46,0,0,0-.35.14.49.49,0,0,0-.15.36A.49.49,0,0,0,4.58,6L18,19.42a.49.49,0,0,0,.35.15h0a.49.49,0,0,0,.36-.15.5.5,0,0,0,0-.7Z",
    transform: "translate(0 -0.5)"
  }), React__default.createElement("path", {
    fill: color,
    d: "M8.91,12.4A3.09,3.09,0,0,0,12,15.49a2.91,2.91,0,0,0,.6-.06L9,11.8A4.07,4.07,0,0,0,8.91,12.4Z",
    transform: "translate(0 -0.5)"
  }), React__default.createElement("path", {
    fill: color,
    d: "M13.51,12.1l1.38,1.37a3.13,3.13,0,0,0,.2-1.07A3.09,3.09,0,0,0,12,9.32a3,3,0,0,0-1.07.2l1.38,1.37A1.54,1.54,0,0,1,13.51,12.1Z",
    transform: "translate(0 -0.5)"
  }), React__default.createElement("path", {
    fill: color,
    d: "M20.57,13.62a1.94,1.94,0,0,0,0-2.43A10.92,10.92,0,0,0,8.87,7.45l1.29,1.29A9.6,9.6,0,0,1,12,8.54a9.34,9.34,0,0,1,7.36,3.61.38.38,0,0,1,0,.51,10,10,0,0,1-2.86,2.42l1.14,1.14A11.56,11.56,0,0,0,20.57,13.62Z",
    transform: "translate(0 -0.5)"
  }), React__default.createElement("path", {
    fill: color,
    d: "M12,16.26a9.34,9.34,0,0,1-7.36-3.6.38.38,0,0,1,0-.51A9.8,9.8,0,0,1,7.11,9.94L6,8.82a11.53,11.53,0,0,0-2.57,2.37,1.94,1.94,0,0,0,0,2.43A10.89,10.89,0,0,0,12,17.81a11,11,0,0,0,2.65-.33l-1.32-1.32A9.33,9.33,0,0,1,12,16.26Z",
    transform: "translate(0 -0.5)"
  })));
};

var Image = function Image(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M5.455 3h13.09C19.901 3 21 4.099 21 5.455v13.09C21 19.901 19.901 21 18.545 21H5.455C4.099 21 3 19.901 3 18.545V5.455C3 4.099 4.099 3 5.455 3zm4.745 9.9l-3.6 4.5h10.8l-2.7-3.6-1.827 2.439L10.2 12.9zm6.3-4.05c0-.747-.603-1.35-1.35-1.35-.747 0-1.35.603-1.35 1.35 0 .747.603 1.35 1.35 1.35.747 0 1.35-.603 1.35-1.35z",
    transform: "translate(-300 -1617) translate(300 1617)"
  })));
};

var Menu = function Menu(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M5.043 16h13.914c.576 0 1.043.448 1.043 1 0 .506-.393.925-.902.99l-.141.01H5.043C4.467 18 4 17.552 4 17c0-.506.393-.925.902-.99l.141-.01zm0-5h13.914c.576 0 1.043.448 1.043 1 0 .506-.393.925-.902.99l-.141.01H5.043C4.467 13 4 12.552 4 12c0-.506.393-.925.902-.99l.141-.01zm13.914-5C19.533 6 20 6.448 20 7c0 .506-.393.925-.902.99l-.141.01H5.043C4.467 8 4 7.552 4 7c0-.506.393-.925.902-.99L5.043 6h13.914z",
    transform: "translate(-540 -1617) translate(540 1617)"
  })));
};

var More = function More(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M12.5 11c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-12 0c.828 0 1.5.672 1.5 1.5S7.328 14 6.5 14 5 13.328 5 12.5 5.672 11 6.5 11z",
    transform: "translate(-220 -1617) translate(220 1617)"
  })));
};

var Pencil = function Pencil(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M14.738 4.634c.845-.845 2.216-.845 3.06 0L19.367 6.2c.845.845.845 2.216 0 3.061L9.263 19.366c-.406.406-.957.634-1.531.634h-3.01C4.323 20 4 19.677 4 19.278v-3.01c0-.574.228-1.125.634-1.531L14.738 4.634zm2.04 1.02c-.282-.281-.738-.281-1.02 0L14.402 7.01l2.588 2.588 1.356-1.356c.281-.282.281-.738 0-1.02l-1.568-1.568zm-.809 4.964l-2.587-2.587-7.727 7.726c-.136.136-.212.32-.212.51v2.29h2.289c.192 0 .375-.076.51-.212l7.727-7.727z",
    transform: "translate(-140 -1617) translate(140 1617)"
  })));
};

var Plus = function Plus(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    fill: color,
    fillRule: "nonzero",
    d: "M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
  }));
};

var Profile = function Profile(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5.641c-1.527 0-2.82 1.25-2.82 2.992 0 1.013.328 1.673 1.026 2.332.25.208.446.448.585.713.28.53.312 1.077.203 1.577-.022.102-.046.183-.046.174-.242.9-.869 1.286-2.243 1.755l-.457.155c-.178.06-.317.109-.45.157-.651.241-1.119.487-1.458.793 1.5 1.351 3.484 2.173 5.66 2.173 2.175 0 4.159-.821 5.658-2.17-.335-.299-.8-.536-1.46-.773-.115-.042-.235-.083-.387-.134l-.396-.133c-1.43-.483-2.075-.873-2.352-1.787-.018-.054-.038-.132-.057-.23-.086-.454-.066-.947.142-1.432.135-.316.343-.6.604-.816.733-.662 1.069-1.34 1.069-2.354 0-1.711-1.314-2.992-2.821-2.992zm0-4.103c-4.673 0-8.462 3.789-8.462 8.462 0 1.942.655 3.731 1.755 5.16.502-.462 1.143-.8 1.973-1.107.147-.054.298-.107.487-.171l.454-.153c.886-.303 1.2-.497 1.277-.766l.007-.034c.038-.176.027-.368-.06-.533-.045-.086-.112-.167-.243-.278-1.025-.965-1.547-2.015-1.547-3.485 0-2.603 1.994-4.53 4.359-4.53 2.349 0 4.359 1.96 4.359 4.53 0 1.474-.536 2.556-1.598 3.515-.095.079-.158.165-.2.261-.07.164-.077.36-.043.54.006.032.01.048.013.057.079.26.418.465 1.376.789l.394.131c.162.055.292.1.418.145.844.304 1.486.633 1.988 1.089 1.1-1.428 1.755-3.217 1.755-5.16 0-4.673-3.789-8.462-8.462-8.462z",
    transform: "translate(-500 -1617) translate(500 1617)"
  })));
};

var Search = function Search(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M13.946 3C17.842 3 21 6.158 21 10.054c0 3.896-3.158 7.054-7.054 7.054-1.685 0-3.232-.59-4.445-1.577l-5.255 5.255c-.285.285-.747.285-1.032 0-.285-.285-.285-.747 0-1.032L8.469 14.5c-.986-1.213-1.577-2.76-1.577-4.445C6.892 6.158 10.05 3 13.946 3zm0 1.46c-3.09 0-5.595 2.504-5.595 5.594 0 3.09 2.505 5.595 5.595 5.595s5.595-2.505 5.595-5.595-2.505-5.595-5.595-5.595z",
    transform: "translate(-180 -1617) translate(180 1617) matrix(-1 0 0 1 24 0)"
  }), " "));
};

var Share = function Share(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: color
  }, React__default.createElement("path", {
    d: "M17.91 5.545c-.854 0-1.546.693-1.546 1.546 0 .25.058.484.162.69.255.51.779.855 1.383.855.853 0 1.546-.692 1.546-1.545s-.693-1.546-1.546-1.546zm-3.092 1.546C14.818 5.384 16.202 4 17.91 4 19.616 4 21 5.384 21 7.09c0 1.708-1.384 3.092-3.09 3.092-.932 0-1.766-.412-2.332-1.062l-5.464 2.732c.045.21.068.426.068.648 0 .222-.023.438-.068.648l5.464 2.732c.566-.65 1.4-1.062 2.331-1.062 1.707 0 3.091 1.384 3.091 3.091C21 19.616 19.616 21 17.91 21c-1.708 0-3.092-1.384-3.092-3.09 0-.223.023-.439.068-.648l-5.464-2.733c-.566.65-1.4 1.062-2.331 1.062C5.384 15.59 4 14.207 4 12.5c0-1.707 1.384-3.09 3.09-3.09.932 0 1.766.411 2.332 1.06l5.464-2.732c-.045-.209-.068-.425-.068-.647zm-7.727 3.864c-.853 0-1.546.692-1.546 1.545s.693 1.545 1.546 1.545c.603 0 1.128-.346 1.383-.854.104-.207.162-.441.162-.691 0-.25-.058-.484-.162-.69-.255-.51-.78-.855-1.383-.855zm10.818 5.409c-.604 0-1.128.346-1.383.854-.104.207-.162.442-.162.691 0 .853.692 1.546 1.545 1.546s1.546-.693 1.546-1.546c0-.853-.693-1.545-1.546-1.545z",
    transform: "translate(-740 -1617) translate(740 1617)"
  })));
};

var Show = function Show(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    fill: color,
    d: "M762 1053.544c-3.992 0-6.396 2.384-7.364 3.604-.124.155-.124.353 0 .508.968 1.22 3.372 3.605 7.364 3.605s6.396-2.385 7.364-3.605c.124-.155.124-.353 0-.508-.968-1.22-3.372-3.604-7.364-3.604zm-8.573 2.645c1.104-1.39 3.905-4.189 8.573-4.189 4.668 0 7.47 2.798 8.573 4.19.57.716.57 1.709 0 2.425-1.103 1.391-3.905 4.19-8.573 4.19-4.668 0-7.469-2.799-8.573-4.19-.57-.716-.57-1.709 0-2.426zm8.573-.33c-.852 0-1.544.691-1.544 1.543s.692 1.544 1.544 1.544c.852 0 1.544-.692 1.544-1.544 0-.852-.692-1.543-1.544-1.543zm-3.087 1.543c0-1.705 1.382-3.087 3.087-3.087 1.705 0 3.087 1.382 3.087 3.087 0 1.705-1.382 3.087-3.087 3.087-1.705 0-3.087-1.382-3.087-3.087z",
    transform: "translate(-750 -1045)"
  }));
};

var StarFilled = function StarFilled(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    d: "M19.71,8.49l-4.38-.66-2-4a1.52,1.52,0,0,0-2.72,0l-2,4-4.38.66a1.51,1.51,0,0,0-.84,2.57l3.17,3.13L5.89,18.6a1.52,1.52,0,0,0,2.2,1.59L12,18.13l3.92,2.06a1.52,1.52,0,0,0,2.2-1.59l-.74-4.41,3.17-3.13A1.51,1.51,0,0,0,19.71,8.49ZM12,4.51Z",
    fill: color,
    fillRule: "evenodd"
  }));
};

var StarHalf = function StarHalf(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    fill: color,
    d: "M19.71,8.49l-4.38-.66-2-4a1.51,1.51,0,0,0-2.72,0l-2,4-4.38.66a1.47,1.47,0,0,0-1.21,1,1.5,1.5,0,0,0,.37,1.55L6.62,14.2l-.74,4.41a1.52,1.52,0,0,0,2.2,1.59L12,18.13l3.91,2.06A1.52,1.52,0,0,0,18,19.45a1.5,1.5,0,0,0,.09-.85l-.73-4.41h0l3.17-3.13a1.41,1.41,0,0,0,.41-.74A1.51,1.51,0,0,0,19.71,8.49Zm-4,5.18.87,5.18L12,16.42h0V4.52h0l2.32,4.7,5.16.77Z"
  }));
};

var StarOutline = function StarOutline(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.grey500 : _ref$color;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("path", {
    fill: color,
    d: "M650.64 1048.846c.556-1.128 2.164-1.128 2.72 0l1.965 3.987 4.381.654c1.236.184 1.73 1.7.842 2.577l-3.17 3.13.737 4.405c.208 1.237-1.091 2.176-2.2 1.592l-3.915-2.06-3.915 2.06c-1.109.584-2.408-.355-2.2-1.592l.737-4.404-3.17-3.13c-.889-.878-.394-2.394.842-2.578l4.38-.654 1.966-3.987zm1.36.67l-2.317 4.699-5.166.77 3.73 3.685-.867 5.18 4.62-2.433 4.62 2.432-.867-5.18 3.73-3.683-5.166-.771-2.317-4.7z",
    transform: "translate(-640 -1045)"
  }));
};

var AppleIcon = function AppleIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 40 40"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    fill: "#090909",
    d: "M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z",
    transform: "translate(-436 -1738) translate(436 1738)"
  }), React__default.createElement("path", {
    fill: "#FFF",
    d: "M27.797 23.895c-.052.144-.103.298-.161.45-.483 1.272-1.217 2.401-2.107 3.437-.172.201-.372.384-.579.553-.409.336-.879.539-1.423.558-.408.012-.8-.06-1.178-.21-.274-.108-.544-.23-.821-.328-.901-.318-1.797-.276-2.684.065-.32.123-.635.258-.96.365-.378.123-.77.173-1.168.1-.348-.063-.653-.221-.935-.424-.35-.253-.645-.56-.92-.886-1.305-1.546-2.18-3.294-2.603-5.253-.182-.842-.27-1.691-.216-2.552.063-1.032.31-2.014.876-2.9.712-1.113 1.716-1.842 3.037-2.143.795-.182 1.568-.108 2.326.176.398.149.798.296 1.199.441.368.135.735.135 1.105-.002.408-.152.817-.303 1.228-.451.42-.149.848-.271 1.294-.305.668-.053 1.319.031 1.953.238.898.292 1.629.809 2.18 1.562.016.02.032.043.043.06-1.392.943-2.185 2.19-2.07 3.877.117 1.688 1.052 2.83 2.584 3.572zm-7.808-9.518c.41.01.806-.067 1.186-.214 1.734-.669 2.64-2.452 2.613-3.816-.002-.11-.01-.22-.015-.347-.178.026-.34.038-.496.076-1.266.302-2.24.989-2.881 2.1-.375.652-.583 1.344-.52 2.1.005.08.035.1.113.1z",
    transform: "translate(-436 -1738) translate(436 1738)"
  })));
};

var AppStoreIcon = function AppStoreIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    fill: "#FFF",
    d: "M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z",
    transform: "translate(-990 -2658) translate(0 2650) translate(990 8)"
  }), React__default.createElement("path", {
    fill: "#0B0B0A",
    d: "M13.954 7.08c.458-.59.805-1.427.68-2.28-.75.052-1.625.531-2.135 1.156-.466.565-.849 1.407-.7 2.224.82.026 1.664-.465 2.155-1.1zM18 15.108c-.328.73-.485 1.057-.907 1.704-.59.903-1.42 2.027-2.449 2.035-.914.01-1.15-.599-2.39-.591-1.24.006-1.5.603-2.415.594-1.029-.01-1.815-1.024-2.404-1.927-1.647-2.522-1.82-5.484-.805-7.06.723-1.118 1.862-1.772 2.933-1.772 1.09 0 1.775.602 2.678.602.875 0 1.408-.603 2.668-.603.954 0 1.965.522 2.685 1.424-2.359 1.3-1.977 4.688.406 5.594z",
    transform: "translate(-990 -2658) translate(0 2650) translate(990 8)"
  })));
};

var FacebookIcon = function FacebookIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 40 40"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    fill: "#3B5998",
    d: "M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z",
    transform: "translate(-324 -1738) translate(324 1738)"
  }), React__default.createElement("path", {
    fill: "#FFF",
    d: "M21.418 31.093V20.212h3.004l.398-3.75h-3.402l.005-1.877c0-.978.093-1.502 1.498-1.502h1.877v-3.75h-3.004c-3.608 0-4.878 1.82-4.878 4.878v2.252h-2.25v3.75h2.25v10.88h4.502z",
    transform: "translate(-324 -1738) translate(324 1738)"
  })));
};

var GoogleIcon = function GoogleIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 44 44"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    fill: "#FFF",
    d: "M0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22S0 34.15 0 22z",
    transform: "translate(-530 -763) translate(370 719) translate(160 44)"
  }), React__default.createElement("path", {
    fill: "#EA4335",
    d: "M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",
    transform: "translate(-530 -763) translate(370 719) translate(160 44) translate(13 13)"
  }), React__default.createElement("path", {
    fill: "#4285F4",
    d: "M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",
    transform: "translate(-530 -763) translate(370 719) translate(160 44) translate(13 13)"
  }), React__default.createElement("path", {
    fill: "#FBBC05",
    d: "M3.88 10.78c-.19-.56-.3-1.16-.3-1.78 0-.62.11-1.22.29-1.78L.96 4.96C.35 6.18 0 7.55 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",
    transform: "translate(-530 -763) translate(370 719) translate(160 44) translate(13 13)"
  }), React__default.createElement("path", {
    fill: "#34A853",
    d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",
    transform: "translate(-530 -763) translate(370 719) translate(160 44) translate(13 13)"
  }), React__default.createElement("path", {
    d: "M0 0L18 0 18 18 0 18z",
    transform: "translate(-530 -763) translate(370 719) translate(160 44) translate(13 13)"
  })));
};

var InstagramIcon = function InstagramIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 40 40"
  }, React__default.createElement("defs", null, React__default.createElement("radialGradient", {
    id: "a",
    cx: 20,
    cy: 20,
    fx: 6.800878328840668,
    fy: 41.02381018910563,
    r: 24.82,
    gradientUnits: "userSpaceOnUse"
  }, React__default.createElement("stop", {
    offset: 0.1,
    stopColor: "#f37238"
  }), React__default.createElement("stop", {
    offset: 0.39,
    stopColor: "#d7525f"
  }), React__default.createElement("stop", {
    offset: 0.63,
    stopColor: "#be3583"
  }), React__default.createElement("stop", {
    offset: 1,
    stopColor: "#5466af"
  }))), React__default.createElement("circle", {
    cx: 20,
    cy: 20,
    r: 20,
    style: {
      fill: "url(#a)"
    }
  }), React__default.createElement("path", {
    d: "M683.5,374.82c2.94,0,3.29,0,4.44.06a6.15,6.15,0,0,1,2,.38,3.44,3.44,0,0,1,1.26.82,3.38,3.38,0,0,1,.83,1.27,6.14,6.14,0,0,1,.37,2c.06,1.16.07,1.51.07,4.44s0,3.29-.07,4.45a6.2,6.2,0,0,1-.37,2,3.67,3.67,0,0,1-2.09,2.09,6.15,6.15,0,0,1-2,.38c-1.15,0-1.5.06-4.44.06s-3.29,0-4.44-.06a6.15,6.15,0,0,1-2-.38,3.67,3.67,0,0,1-2.09-2.09,6.2,6.2,0,0,1-.37-2c-.06-1.16-.07-1.51-.07-4.45s0-3.28.07-4.44a6.14,6.14,0,0,1,.37-2,3.38,3.38,0,0,1,.83-1.27,3.44,3.44,0,0,1,1.26-.82,6.15,6.15,0,0,1,2-.38c1.15-.05,1.5-.06,4.44-.06m0-2c-3,0-3.36,0-4.54.07a8,8,0,0,0-2.67.51,5.39,5.39,0,0,0-1.94,1.27,5.21,5.21,0,0,0-1.27,1.95,8,8,0,0,0-.51,2.67c-.06,1.17-.07,1.55-.07,4.53s0,3.37.07,4.54a8,8,0,0,0,.51,2.67,5.29,5.29,0,0,0,1.27,1.95,5.52,5.52,0,0,0,1.94,1.27,8.31,8.31,0,0,0,2.67.51c1.18.05,1.55.06,4.54.06s3.36,0,4.54-.06a8.31,8.31,0,0,0,2.67-.51,5.52,5.52,0,0,0,1.94-1.27,5.29,5.29,0,0,0,1.27-1.95,8,8,0,0,0,.51-2.67c.06-1.17.07-1.55.07-4.54s0-3.36-.07-4.53a8,8,0,0,0-.51-2.67,5.21,5.21,0,0,0-1.27-1.95,5.39,5.39,0,0,0-1.94-1.27,8,8,0,0,0-2.67-.51c-1.18,0-1.55-.07-4.54-.07Z",
    transform: "translate(-663.5 -363.83)",
    style: {
      fill: "#fff"
    }
  }), React__default.createElement("path", {
    d: "M683.5,378.18a5.65,5.65,0,1,0,5.65,5.65A5.65,5.65,0,0,0,683.5,378.18Zm0,9.32a3.67,3.67,0,1,1,3.67-3.67A3.67,3.67,0,0,1,683.5,387.5Z",
    transform: "translate(-663.5 -363.83)",
    style: {
      fill: "#fff"
    }
  }), React__default.createElement("circle", {
    cx: 25.87,
    cy: 14.13,
    r: 1.32,
    style: {
      fill: "#fff"
    }
  }));
};

var NaverIcon = function NaverIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 40 40"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    fill: "#2DB400"
  }, React__default.createElement("path", {
    d: "M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z",
    transform: "translate(-548 -1738) translate(548 1738)"
  })), React__default.createElement("path", {
    fill: "#FEFEFE",
    d: "M22.311 13.636L22.311 20.16 17.706 13.636 12.727 13.636 12.727 26.566 17.69 26.566 17.69 20.043 22.295 26.566 27.273 26.566 27.273 13.636z",
    transform: "translate(-548 -1738) translate(548 1738)"
  })));
};

var PlayStoreIcon = function PlayStoreIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 40 40"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "20",
    fill: "#F6F7F8"
  }), React__default.createElement("path", {
    fill: "#FFC100",
    fillRule: "nonzero",
    d: "M14.444 11.916v16.168c0 .849.93 1.37 1.653.926l13.262-8.14c.693-.426.69-1.434-.006-1.855l-13.261-8.028c-.724-.438-1.648.083-1.648.929z"
  }), React__default.createElement("path", {
    fill: "#D8E86D",
    fillRule: "nonzero",
    d: "M15.265 29.138L26.33 17.185 16.09 10.987c-.723-.438-1.647.083-1.647.929v16.168c0 .534.368.938.82 1.054z"
  }), React__default.createElement("path", {
    fill: "#F52B2B",
    fillRule: "nonzero",
    d: "M16.097 29.01l9.104-5.589 1.129-.692-11.07-11.865c-.451.117-.816.52-.816 1.052v16.168c0 .849.93 1.37 1.653.926z"
  }), React__default.createElement("path", {
    fill: "#00B7AD",
    fillRule: "nonzero",
    d: "M15.265 29.138l8.489-9.17-8.495-9.104c-.45.117-.816.52-.816 1.052v16.168c0 .534.369.938.822 1.054z"
  })));
};

var YoutubeIcon = function YoutubeIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 40 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 40 40"
  }, React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("path", {
    fill: "#CE1312",
    d: "M0 20C0 8.954 8.82 0 19.7 0c10.88 0 19.701 8.954 19.701 20s-8.82 20-19.7 20C8.82 40 0 31.046 0 20z",
    transform: "translate(-212 -1738) translate(212 1738)"
  }), React__default.createElement("path", {
    fill: "#FFF",
    d: "M29.954 15.974s-.205-1.502-.834-2.163c-.798-.87-1.692-.873-2.102-.924-2.937-.22-7.341-.22-7.341-.22h-.01s-4.404 0-7.34.22c-.41.05-1.305.055-2.103.924-.63.661-.834 2.163-.834 2.163s-.21 1.765-.21 3.529v1.654c0 1.764.21 3.528.21 3.528s.205 1.502.834 2.164c.798.868 1.847.841 2.314.932 1.678.167 7.134.219 7.134.219s4.41-.007 7.346-.228c.41-.05 1.304-.055 2.102-.923.629-.662.834-2.164.834-2.164s.21-1.764.21-3.528v-1.654c0-1.764-.21-3.529-.21-3.529z",
    transform: "translate(-212 -1738) translate(212 1738)"
  }), React__default.createElement("path", {
    fill: "#CE1312",
    d: "M17.506 23.161L17.505 17.036 23.174 20.109z",
    transform: "translate(-212 -1738) translate(212 1738)"
  })));
};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 4px 16px 0;\n  font-size: 13px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  margin-bottom: 8px;\n  font-size: 13px;\n  line-height: 1.54;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n\n    :checked + div {\n      background-color: ", ";\n      border-color: ", ";\n\n      path {\n        fill: ", ";\n        stroke: none;\n      }\n    }\n  }\n\n  div {\n    position: relative;\n    margin-right: 8px;\n    width: 18px;\n    height: 18px;\n    border: 1px solid ", ";\n    border-radius: 2px;\n  }\n\n  :hover {\n    div {\n      border-color: ", ";\n    }\n\n    svg {\n      path {\n        stroke-dashoffset: 0;\n      }\n    }\n  }\n\n  svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    path {\n      fill: none;\n      stroke: ", ";\n      stroke-width: 2px;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: 71px;\n      stroke-dashoffset: 71px;\n      transition: all 0.6s ease;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n\n  width: ", ";\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  outline: none;\n\n  :disabled {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

function renderCheckColor(theme, color, checked) {
  if (color === void 0) {
    color = "default";
  }

  if (checked === void 0) {
    checked = false;
  }

  switch (color) {
    case "primary":
      if (checked) {
        return theme.colors.grey600;
      }

      return theme.colors.primary100;

    case "secondary":
      if (checked) {
        return theme.colors.grey100;
      }

      return theme.colors.secondary100;

    case "default":
    default:
      return theme.colors.grey600;
  }
}

function renderBgColor(theme, color, checked) {
  if (color === void 0) {
    color = "default";
  }

  if (checked === void 0) {
    checked = false;
  }

  switch (color) {
    case "secondary":
      if (checked) {
        return theme.colors.secondary100;
      }

    case "primary":
    case "default":
    default:
      if (checked) {
        return theme.colors.primary100;
      }

      return theme.colors.grey100;
  }
}

var Checkbox = styled__default(function (_ref) {
  var label = _ref.label,
      helperText = _ref.helperText,
      color = _ref.color,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["type", "label", "helperText", "color", "innerRef"]);

  return React__default.createElement(CheckboxWrapper, {
    className: "bui-checkbox"
  }, React__default.createElement(CheckboxLabel, {
    color: color
  }, React__default.createElement("input", Object.assign({
    ref: innerRef,
    type: "checkbox"
  }, rest)), React__default.createElement("div", null, React__default.createElement(Check, {
    width: 18,
    height: 18
  })), label ? typeof label === "string" ? React__default.createElement("span", null, label) : label : null), helperText ? typeof helperText === "string" ? React__default.createElement(CheckboxHelperText, null, helperText) : helperText : null);
})(_templateObject$4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grey500;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.grey200;
}, function (_ref4) {
  var theme = _ref4.theme,
      error = _ref4.error;
  return error ? "\n      color: " + theme.colors.red + ";\n      border-color:  " + theme.colors.red + ";\n\n      :focus {\n        border-color:  " + theme.colors.red + ";\n      }\n      " : "";
});
var CheckboxWrapper = styled__default.div(_templateObject2$1(), function (_ref5) {
  var width = _ref5.width;
  return width ? typeof width === "string" ? width : width + "px" : "100%";
});
var CheckboxLabel = styled__default.label(_templateObject3(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.grey600;
}, function (_ref7) {
  var theme = _ref7.theme,
      color = _ref7.color;
  return renderBgColor(theme, color, true);
}, function (_ref8) {
  var theme = _ref8.theme,
      color = _ref8.color;
  return renderBgColor(theme, color, true);
}, function (_ref9) {
  var theme = _ref9.theme,
      color = _ref9.color;
  return renderCheckColor(theme, color, true);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.grey300;
}, function (_ref11) {
  var theme = _ref11.theme,
      color = _ref11.color;
  return renderCheckColor(theme, color);
}, function (_ref12) {
  var theme = _ref12.theme,
      color = _ref12.color;
  return renderCheckColor(theme, color);
});
var CheckboxHelperText = styled__default.p(_templateObject4(), function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.grey500;
});

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  white-space: nowrap;\n  outline: none;\n  padding: 14px 16px;\n  border-radius: 6px;\n  border: solid 1px ", ";\n  background-color: ", ";\n  font-size: 13px;\n  line-height: 20px;\n  box-sizing: border-box;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  :read-only {\n    color: ", ";\n  }\n\n  :focus {\n    border-width: 2px;\n    border-color: ", ";\n    padding: 13px 15px;\n  }\n\n  :disabled {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 4px 16px 0;\n  font-size: 13px;\n  color: ", ";\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  margin-bottom: 8px;\n  font-size: 13px;\n  line-height: 1.54;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n\n  .bui-input-inner {\n    position: relative;\n  }\n\n  svg {\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    top: 12px;\n    bottom: 12px;\n    right: 16px;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var InputWrapper = styled__default.div(_templateObject$5());
var InputLabel = styled__default.label(_templateObject2$2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey600;
});
var InputHelperText = styled__default.p(_templateObject3$1(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grey500;
});
var Input = styled__default(function (_ref3) {
  var _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? "text" : _ref3$type,
      label = _ref3.label,
      helperText = _ref3.helperText,
      trailing = _ref3.trailing,
      innerRef = _ref3.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref3, ["type", "error", "label", "helperText", "trailing", "innerRef"]);

  var _useState = React.useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var inputType = type;
  var showOrHideButton;

  if (type === "password" && !trailing) {
    var handleOnToggleVisible = function handleOnToggleVisible() {
      return setVisible(!visible);
    };

    showOrHideButton = React__default.createElement(IconButton, {
      icon: visible ? React__default.createElement(Show, null) : React__default.createElement(Hide, null),
      onClick: handleOnToggleVisible
    });
    inputType = visible ? "text" : "password";
  }

  return React__default.createElement(InputWrapper, {
    className: "bui-input"
  }, label ? typeof label === "string" ? React__default.createElement(InputLabel, null, label) : label : null, React__default.createElement("div", {
    className: "bui-input-inner"
  }, React__default.createElement("input", Object.assign({
    type: inputType,
    ref: innerRef
  }, rest)), trailing ? trailing : showOrHideButton ? showOrHideButton : null), helperText ? typeof helperText === "string" ? React__default.createElement(InputHelperText, null, helperText) : helperText : null);
})(_templateObject4$1(), function (_ref4) {
  var width = _ref4.width;
  return width ? typeof width === "string" ? width : width + "px" : "100%";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.grey300;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.grey100;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.grey400;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.grey600;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.primary100;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.grey500;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.grey200;
}, function (_ref12) {
  var theme = _ref12.theme,
      error = _ref12.error;
  return error ? "\n      color: " + theme.colors.red + ";\n      border-color:  " + theme.colors.red + ";\n\n      :focus {\n        border-color:  " + theme.colors.red + ";\n      }\n      " : "";
});

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  list-style: none;\n  padding: 16px 0;\n  border-bottom: 1px solid ", ";\n  box-sizing: border-box;\n\n  :last-child {\n    border-bottom: none;\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var List = styled__default(function (_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement("ul", Object.assign({}, rest), children);
})(_templateObject$6());
var ListItem = styled__default(function (_ref2) {
  var primary = _ref2.primary,
      secondary = _ref2.secondary,
      trailing = _ref2.trailing,
      rest = _objectWithoutPropertiesLoose(_ref2, ["primary", "secondary", "trailing", "button"]);

  return React__default.createElement("li", Object.assign({}, rest), React__default.createElement(Typography, {
    variant: "body1"
  }, primary), React__default.createElement(Typography, {
    variant: "caption",
    color: "grey500"
  }, secondary), trailing ? trailing : null);
})(_templateObject2$3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.grey300;
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$button = _ref4.button,
      button = _ref4$button === void 0 ? false : _ref4$button;
  return button ? "\n    :hover {\n      background-color: " + theme.colors.grey200 + ";\n      cursor: pointer;\n    }\n  " : "";
}, function (_ref5) {
  var trailing = _ref5.trailing;
  return !!trailing ? "\n      svg {\n        position: absolute;\n        right: 0;\n        top: 16px;\n      }\n    " : "";
});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var browser = invariant;

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

function a(){return (a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;}function c$1(e,t){if(null==e)return {};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},l$1=Object.keys(u).map(function(e){return u[e]}),p$1={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},f$1=Object.keys(p$1).reduce(function(e,t){return e[p$1[t]]=t,e},{}),d$1=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},h$1=function(e){var t=d$1(e,u.TITLE),r=d$1(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,function(){return t});var n=d$1(e,"defaultTitle");return t||n||void 0},m$1=function(e){return d$1(e,"onChangeClientState")||function(){}},y$1=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[u.BASE]}).map(function(e){return e[u.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t},[])},b$1=function(e,t,r){var n={};return r.filter(function(t){return !!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var i={};r.filter(function(e){for(var r,o=Object.keys(e),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s);}if(!r||!e[r])return !1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(i),s=0;s<o.length;s+=1){var c=o[s],u=a({},n[c],i[c]);n[c]=u;}return e},[]).reverse()},g$1=function(e){return Array.isArray(e)?e.join(""):e},v$1=[u.NOSCRIPT,u.SCRIPT,u.STYLE],A$1=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},C=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},O=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce(function(t,r){return t[p$1[r]||r]=e[r],t},t)},E=function(t,r,n){switch(t){case u.TITLE:return {toComponent:function(){return n=r.titleAttributes,(i={key:t=r.title})["data-rh"]=!0,o=O(n,i),[React__default.createElement(u.TITLE,o,t)];var t,n,i,o;},toString:function(){return function(e,t,r,n){var i=C(r),o=g$1(t);return i?"<"+e+' data-rh="true" '+i+">"+A$1(o,n)+"</"+e+">":"<"+e+' data-rh="true">'+A$1(o,n)+"</"+e+">"}(t,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return {toComponent:function(){return O(r)},toString:function(){return C(r)}};default:return {toComponent:function(){return function(t,r){return r.map(function(r,n){var i,o=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(e){var t=p$1[e]||e;"innerHTML"===t||"cssText"===t?o.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:o[t]=r[e];}),React__default.createElement(t,o)})}(t,r)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var i=Object.keys(n).filter(function(e){return !("innerHTML"===e||"cssText"===e)}).reduce(function(e,t){var i=void 0===n[t]?t:t+'="'+A$1(n[t],r)+'"';return e?e+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===v$1.indexOf(e);return t+"<"+e+' data-rh="true" '+i+(a?"/>":">"+o+"</"+e+">")},"")}(t,r,n)}}}},S=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.scriptTags,c=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return {base:E(u.BASE,e.baseTag,r),bodyAttributes:E("bodyAttributes",t,r),htmlAttributes:E("htmlAttributes",n,r),link:E(u.LINK,i,r),meta:E(u.META,o,r),noscript:E(u.NOSCRIPT,a,r),script:E(u.SCRIPT,s,r),style:E(u.STYLE,c,r),title:E(u.TITLE,{title:p,titleAttributes:f},r)}},I=React__default.createContext({}),P=propTypes.shape({setHelmet:propTypes.func,helmetInstances:propTypes.shape({get:propTypes.func,add:propTypes.func,remove:propTypes.func})}),L="undefined"!=typeof document,x$1=function(t){function r(e){var n;return (n=t.call(this,e)||this).instances=[],n.value={setHelmet:function(e){n.props.context.helmet=e;},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e);},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1);}}},r.canUseDOM||(e.context.helmet=S({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n}return s(r,t),r.prototype.render=function(){return React__default.createElement(I.Provider,{value:this.value},this.props.children)},r}(React.Component);x$1.canUseDOM=L,x$1.propTypes={context:propTypes.shape({helmet:propTypes.shape()}),children:propTypes.node.isRequired},x$1.defaultProps={context:{}},x$1.displayName="HelmetProvider";var j=function(e,t){var r,n=document.head||document.querySelector(u.HEAD),i=n.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),a=[];return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&("innerHTML"===i?n.innerHTML=t.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(i,void 0===t[i]?"":t[i]));n.setAttribute("data-rh","true"),o.some(function(e,t){return r=t,n.isEqualNode(e)})?o.splice(r,1):a.push(n);}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},w$1=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s+=1){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1);}for(var p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","));}},H=function(e,t){var r=e.baseTag,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;w$1(u.BODY,e.bodyAttributes),w$1(u.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=g$1(e)),w$1(u.TITLE,t);}(p,f);var d={baseTag:j(u.BASE,r),linkTags:j(u.LINK,i),metaTags:j(u.META,o),noscriptTags:j(u.NOSCRIPT,a),scriptTags:j(u.SCRIPT,c),styleTags:j(u.STYLE,l)},h={},m={};Object.keys(d).forEach(function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=d[e].oldTags);}),t&&t(),s(e,h,m);},k$1=null,M=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return (t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}s(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return !shallowequal(e,this.props)},r.componentDidUpdate=function(){this.emitChange();},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange();},r.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,i=null,o=(e=r.helmetInstances.get().map(function(e){var t=a({},e.props);return delete t.context,t}),{baseTag:T(["href"],e),bodyAttributes:y$1("bodyAttributes",e),defer:d$1(e,"defer"),encode:d$1(e,"encodeSpecialCharacters"),htmlAttributes:y$1("htmlAttributes",e),linkTags:b$1(u.LINK,["rel","href"],e),metaTags:b$1(u.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:b$1(u.NOSCRIPT,["innerHTML"],e),onChangeClientState:m$1(e),scriptTags:b$1(u.SCRIPT,["src","innerHTML"],e),styleTags:b$1(u.STYLE,["cssText"],e),title:h$1(e),titleAttributes:y$1("titleAttributes",e)});x$1.canUseDOM?(t=o,k$1&&cancelAnimationFrame(k$1),t.defer?k$1=requestAnimationFrame(function(){H(t,function(){k$1=null;});}):(H(t),k$1=null)):S&&(i=S(o)),n(i);},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange());},r.render=function(){return this.init(),null},t}(React.Component);M.propTypes={context:P.isRequired},M.displayName="HelmetDispatcher";var N=function(t){function r(){return t.apply(this,arguments)||this}s(r,t);var o=r.prototype;return o.shouldComponentUpdate=function(e){return !reactFastCompare(this.props,e)},o.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.SCRIPT:case u.NOSCRIPT:return {innerHTML:t};case u.STYLE:return {cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},o.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return a({},n,((t={})[r.type]=[].concat(n[r.type]||[],[a({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},o.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(n.type){case u.TITLE:return a({},i,((t={})[n.type]=s,t.titleAttributes=a({},o),t));case u.BODY:return a({},i,{bodyAttributes:a({},o)});case u.HTML:return a({},i,{htmlAttributes:a({},o)});default:return a({},i,((r={})[n.type]=a({},o),r))}},o.mapArrayTypeChildrenToProps=function(e,t){var r=a({},t);return Object.keys(e).forEach(function(t){var n;r=a({},r,((n={})[t]=e[t],n));}),r},o.warnOnInvalidChildren=function(e,t){return browser(l$1.some(function(t){return e.type===t}),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+l$1.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),browser(!t||"string"==typeof t||Array.isArray(t)&&!t.some(function(e){return "string"!=typeof e}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},o.mapChildrenToProps=function(t,r){var n=this,i={};return React__default.Children.forEach(t,function(e){if(e&&e.props){var t=e.props,o=t.children,a=c$1(t,["children"]),s=Object.keys(a).reduce(function(e,t){return e[f$1[t]||t]=a[t],e},{}),l=e.type;switch("symbol"==typeof l?l=l.toString():n.warnOnInvalidChildren(e,o),l){case u.FRAGMENT:r=n.mapChildrenToProps(o,r);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:i=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:r=n.mapObjectTypeChildren({child:e,newProps:r,newChildProps:s,nestedChildren:o});}}}),this.mapArrayTypeChildrenToProps(i,r)},o.render=function(){var t=this.props,r=t.children,n=a({},c$1(t,["children"]));return r&&(n=this.mapChildrenToProps(r,n)),React__default.createElement(I.Consumer,null,function(t){return React__default.createElement(M,a({},n,{context:t}))})},r}(React.Component);N.propTypes={base:propTypes.object,bodyAttributes:propTypes.object,children:propTypes.oneOfType([propTypes.arrayOf(propTypes.node),propTypes.node]),defaultTitle:propTypes.string,defer:propTypes.bool,encodeSpecialCharacters:propTypes.bool,htmlAttributes:propTypes.object,link:propTypes.arrayOf(propTypes.object),meta:propTypes.arrayOf(propTypes.object),noscript:propTypes.arrayOf(propTypes.object),onChangeClientState:propTypes.func,script:propTypes.arrayOf(propTypes.object),style:propTypes.arrayOf(propTypes.object),title:propTypes.string,titleAttributes:propTypes.object,titleTemplate:propTypes.string},N.defaultProps={defer:!0,encodeSpecialCharacters:!0},N.displayName="Helmet";

function _templateObject4$2() {
  var data = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  padding: 0 10px;\n\n  button {\n    margin-right: 16px;\n\n    :last-child {\n      margin-right: 0px;\n    }\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  padding: 12px 10px;\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  border-right: 1px solid ", ";\n  height: 100%;\n  box-sizing: border-box;\n  font-size: 11px;\n  padding: 0px 10px;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 40px;\n  font-size: 11px;\n  color: ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n\n  > button {\n    border-right: 1px solid ", ";\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Footer = styled__default(function (_ref) {
  var version = _ref.version,
      _ref$outlinks = _ref.outlinks,
      outlinks = _ref$outlinks === void 0 ? "instagram|youtube|facebook|playStore|appStore" : _ref$outlinks,
      _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? [] : _ref$buttons,
      rest = _objectWithoutPropertiesLoose(_ref, ["version", "outlinks", "buttons"]);

  var outlinkProviders = outlinks.split("|");

  var handleOnOutlinkClick = function handleOnOutlinkClick(providerId) {
    return function () {
      window.open(Urls[providerId], "_blank");
    };
  };

  return React__default.createElement("footer", Object.assign({}, rest), React__default.createElement(FooterInfo, null, "\uC0C1\uD638\uBA85 : \uBE44\uB9C8\uC774\uD3AB\xA9 Copyright 2020, All Rights Reserved \uC8FC\uC18C : \uC11C\uC6B8\uC2DC \uC11C\uCD08\uAD6C \uC11C\uCD08\uC911\uC559\uB85C 24\uAE38 55, 401\uD638 \uB300\uD45C\uC790 : \uC131\uD604\uC9C4 \uBB38\uC758:", " ", React__default.createElement("a", {
    href: "tel:050-7724-6399"
  }, "050-7724-6399"), ",", " ", React__default.createElement("a", {
    href: "mailto:business@bemypet.kr"
  }, "business@bemypet.kr"), version ? React__default.createElement("span", null, "version: ", version) : null), buttons.map(function (_ref2) {
    var label = _ref2.label,
        onClick = _ref2.onClick;
    return React__default.createElement(FooterButton, {
      key: "footer-button-" + label,
      onClick: onClick
    }, label);
  }), React__default.createElement(FooterIconButtons, null, outlinkProviders.map(function (providerId) {
    switch (providerId) {
      case "instagram":
        return React__default.createElement(IconButton, {
          key: "provider-" + providerId,
          icon: React__default.createElement(InstagramIcon, {
            width: 24,
            height: 24
          }),
          onClick: handleOnOutlinkClick(providerId)
        });

      case "youtube":
        return React__default.createElement(IconButton, {
          key: "provider-" + providerId,
          icon: React__default.createElement(YoutubeIcon, {
            width: 24,
            height: 24
          }),
          onClick: handleOnOutlinkClick(providerId)
        });

      case "facebook":
        return React__default.createElement(IconButton, {
          key: "provider-" + providerId,
          icon: React__default.createElement(FacebookIcon, {
            width: 24,
            height: 24
          }),
          onClick: handleOnOutlinkClick(providerId)
        });

      case "playStore":
        return React__default.createElement(IconButton, {
          key: "provider-" + providerId,
          icon: React__default.createElement(PlayStoreIcon, {
            width: 24,
            height: 24
          }),
          onClick: handleOnOutlinkClick(providerId)
        });

      case "appStore":
        return React__default.createElement(IconButton, {
          key: "provider-" + providerId,
          icon: React__default.createElement(AppStoreIcon, {
            width: 24,
            height: 24
          }),
          onClick: handleOnOutlinkClick(providerId)
        });

      default:
        return null;
    }
  })));
})(_templateObject$7(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.grey500;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.grey100;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.grey300;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.grey300;
});
var FooterInfo = styled__default.div(_templateObject2$4(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.grey300;
});
var FooterButton = styled__default.button(_templateObject3$2(), buttonBaseStyles, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.grey500;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.grey100;
});
var FooterIconButtons = styled__default.div(_templateObject4$2());

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: -1;\n  position: absolute;\n  top: -3px;\n  right: -5px;\n  width: 12px;\n  height: 12px;\n  background-color: ", ";\n  border-radius: 50%;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 1;\n  position: relative;\n  font-size: 16px;\n  text-decoration: none;\n  color: ", ";\n\n  :hover {\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  li {\n    list-style: none;\n    min-width: 60px;\n    margin-left: 30px;\n    text-align: center;\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Menu$1 = function Menu(_ref) {
  var _ref$menus = _ref.menus,
      menus = _ref$menus === void 0 ? [] : _ref$menus;
  return React__default.createElement(MenuWrapper, null, menus.map(function (_ref2) {
    var label = _ref2.label,
        to = _ref2.to,
        selected = _ref2.selected;
    return React__default.createElement("li", {
      key: label
    }, React__default.createElement(MenuItem, {
      href: to,
      selected: selected
    }, label, selected ? React__default.createElement(SelectedCircle, null) : null));
  }));
};
var MenuWrapper = styled__default.ul(_templateObject$8());
var MenuItem = styled__default.a(_templateObject2$5(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.grey500;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.grey600;
}, function (_ref5) {
  var theme = _ref5.theme,
      selected = _ref5.selected;
  return !!selected && "\n    color: " + theme.colors.grey600 + ";\n    font-weight: bold;\n  ";
});
var SelectedCircle = styled__default.span(_templateObject3$3(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary100;
});

function _templateObject4$3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 140px;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 42px;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  overflow: hidden;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 80px;\n  height: 100%;\n  list-style: none;\n  text-align: center;\n  box-sizing: border-box;\n\n  a {\n    font-size: 13px;\n    height: 100%;\n    padding: 12px 0;\n    display: block;\n    text-decoration: none;\n    color: ", ";\n\n    :hover {\n      color: ", ";\n      cursor: pointer;\n      background-color: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 30px;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  box-sizing: border-box;\n  overflow: hidden;\n\n  ul {\n    display: flex;\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var HeaderNav = styled__default.div(_templateObject$9(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary100;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grey100;
});
var HeaderNavItem = styled__default.li(_templateObject2$6(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.grey100;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.grey500;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary200;
}, function (_ref6) {
  var theme = _ref6.theme,
      selected = _ref6.selected;
  return selected ? "\n      a {\n      font-weight: bold;\n      color: " + theme.colors.grey600 + ";\n      background-color: " + theme.colors.grey100 + ";\n    }  \n  " : "";
});
var HeaderMenu = styled__default.div(_templateObject3$4());
var leftMenus = [{
  label: "라이프",
  to: "https://mypetlife.co.kr/"
}, {
  label: "크리에이터즈",
  to: "https://creators.mypetlife.co.kr/"
}, {
  label: "툴즈",
  to: "https://tools.mypetlife.co.kr/"
}];
var accountBaseUrl = "https://accounts.mypetlife.co.kr";
var rightMenus = [{
  label: "로그인",
  to: accountBaseUrl + "/login"
}, {
  label: "회원가입",
  to: accountBaseUrl + "/registration"
}];
var Header = styled__default(function (_ref7) {
  var menus = _ref7.menus,
      locationPath = _ref7.locationPath;
  return React__default.createElement("div", null, React__default.createElement(HeaderNav, null, React__default.createElement("ul", null, leftMenus.map(function (_ref8) {
    var label = _ref8.label,
        to = _ref8.to;
    return React__default.createElement(HeaderNavItem, {
      key: "header-nav-" + label,
      selected: locationPath === null || locationPath === void 0 ? void 0 : locationPath.startsWith(to)
    }, React__default.createElement("a", {
      href: to
    }, label));
  })), React__default.createElement("ul", null, rightMenus.map(function (_ref9) {
    var label = _ref9.label,
        to = _ref9.to;
    return React__default.createElement(HeaderNavItem, {
      key: "header-nav-" + label,
      selected: locationPath === null || locationPath === void 0 ? void 0 : locationPath.startsWith(to)
    }, React__default.createElement("a", {
      href: to
    }, label));
  }))), React__default.createElement(HeaderMenu, null, React__default.createElement(Logo, null), React__default.createElement(Menu$1, {
    menus: menus
  })));
})(_templateObject4$3());

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n  align-items: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: ", ";\n  align-items: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 700px;\n  max-width: 100%;\n  margin: 0 auto;\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var Layout = function Layout(_ref) {
  var helmetProps = _ref.helmetProps,
      footerProps = _ref.footerProps,
      children = _ref.children,
      loading = _ref.loading;
  return React__default.createElement(Wrapper, null, React__default.createElement(HelmetComponent, Object.assign({
    titleTemplate: "%s :: \uBE44\uB9C8\uC774\uD3AB",
    defaultTitle: "\uBE44\uB9C8\uC774\uD3AB"
  }, helmetProps)), React__default.createElement(Main, null, !!loading ? loading : children), React__default.createElement(Footer, Object.assign({}, footerProps)));
};
var Wrapper = styled__default.div(_templateObject$a());
var Main = styled__default.main(_templateObject2$7());
var PageBody = styled__default.div(_templateObject3$5());

var HelmetComponent = function HelmetComponent(_ref2) {
  var props = _extends({}, _ref2);

  return React__default.createElement(x$1, null, React__default.createElement(N, Object.assign({}, props)));
};

var Column = styled__default.div(_templateObject4$4(), function (_ref3) {
  var _ref3$justifyContent = _ref3.justifyContent,
      justifyContent = _ref3$justifyContent === void 0 ? "flex-start" : _ref3$justifyContent;
  return justifyContent;
}, function (_ref4) {
  var _ref4$alignItems = _ref4.alignItems,
      alignItems = _ref4$alignItems === void 0 ? "flex-start" : _ref4$alignItems;
  return alignItems;
}, function (_ref5) {
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
var Row = styled__default.div(_templateObject5(), function (_ref9) {
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

function _templateObject$b() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid ", ";\n  border-left: 4px solid\n    ", ";\n  border-radius: 6px;\n  color: ", ";\n  padding: 12px;\n  margin-left: 0;\n  margin-bottom: 16px;\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}

function renderBorderColor(theme, color) {
  if (color === void 0) {
    color = "default";
  }

  switch (color) {
    case "primary":
      return theme.colors.primary100;

    case "secondary":
      return theme.colors.secondary100;

    case "red":
      return theme.colors.red;

    case "green":
      return theme.colors.green;

    case "default":
    default:
      return theme.colors.grey600;
  }
}

function renderColor(theme, color) {
  if (color === void 0) {
    color = "default";
  }

  switch (color) {
    case "primary":
      return theme.colors.primary100;

    case "secondary":
      return theme.colors.secondary100;

    case "red":
      return theme.colors.red;

    case "green":
      return theme.colors.green;

    case "default":
    default:
      return theme.colors.grey600;
  }
}

var MessageBox = styled__default.div(_templateObject$b(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return renderBorderColor(theme, color);
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return renderBorderColor(theme, color);
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return renderColor(theme, color);
});

exports.AppStoreIcon = AppStoreIcon;
exports.AppleIcon = AppleIcon;
exports.ArrowRight = ArrowRight;
exports.Avatar = Avatar;
exports.Blockquote = Blockquote;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Camera = Camera;
exports.Check = Check;
exports.Checkbox = Checkbox;
exports.Clear = Clear;
exports.ClearCircle = ClearCircle;
exports.Column = Column;
exports.Comment = Comment;
exports.FacebookIcon = FacebookIcon;
exports.Footer = Footer;
exports.GoogleIcon = GoogleIcon;
exports.Header = Header;
exports.HeartFilled = HeartFilled;
exports.HeartOutline = HeartOutline;
exports.Hide = Hide;
exports.Image = Image;
exports.Input = Input;
exports.InstagramIcon = InstagramIcon;
exports.Layout = Layout;
exports.List = List;
exports.ListItem = ListItem;
exports.Logo = Logo;
exports.Menu = Menu;
exports.MessageBox = MessageBox;
exports.More = More;
exports.NaverIcon = NaverIcon;
exports.PageBody = PageBody;
exports.Pencil = Pencil;
exports.PlayStoreIcon = PlayStoreIcon;
exports.Plus = Plus;
exports.Profile = Profile;
exports.Row = Row;
exports.Search = Search;
exports.Share = Share;
exports.Show = Show;
exports.StarFilled = StarFilled;
exports.StarHalf = StarHalf;
exports.StarOutline = StarOutline;
exports.ThemeProvider = ThemeProvider;
exports.Typography = Typography;
exports.YoutubeIcon = YoutubeIcon;
//# sourceMappingURL=index.js.map

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

export default theme;

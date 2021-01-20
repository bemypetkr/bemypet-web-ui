import { colors } from "./color";
import { ButtonSizeTheme, ButtonColorTheme } from "./interfaces";

const buttonSizes: ButtonSizeTheme = {
  small: `
    padding: 6px 8px;
  `,
  medium: `
    padding: 10px 8px;
  `,
  large: `
    padding: 14px 8px;
  `,
};

const buttonColors: ButtonColorTheme = {
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
  `,
  secondary: `
    color: ${colors.grey100};
    background-color: ${colors.secondary100};

    :hover {
      background-color: ${colors.secondary200};
    }
  `,
};

export default { buttonSizes, buttonColors };

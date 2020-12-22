import { colors } from "./color";

const buttonSizes = {
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
  `,
};

export default { buttonSizes, buttonColors };

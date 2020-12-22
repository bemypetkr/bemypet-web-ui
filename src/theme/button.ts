import { calcHeight, calcRem } from "./utils";

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
  `,
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
  `,
};

export default { buttonSizes, buttonColors };

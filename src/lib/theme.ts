export interface Color {
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  primary100: string;
  primary200: string;
  secondary100: string;
  secondary200: string;
  green: string;
  red: string;
  opacityBlack10: string;
  opacityBlack50: string;
}

export const colors: Color = {
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
  opacityBlack50: "rgba(9, 9, 9, 0.5)",
};

export interface TypographyVariant {
  heading1: string;
  heading2: string;
  heading3: string;
  body1: string;
  body2: string;
  caption: string;
  article1: string;
  article2: string;
}

const calcRem = (size: number) => `${size / 16}rem`;
const calcHeight = (size: number, height: number) => `${height / size}`;
const fontSizes: TypographyVariant = {
  heading1: calcRem(36),
  heading2: calcRem(26),
  heading3: calcRem(20),
  body1: calcRem(16),
  body2: calcRem(13),
  caption: calcRem(12),
  article1: calcRem(16),
  article2: calcRem(14),
};

const lineHeights: TypographyVariant = {
  heading1: calcHeight(36, 48),
  heading2: calcHeight(26, 38),
  heading3: calcHeight(20, 32),
  body1: calcHeight(16, 24),
  body2: calcHeight(13, 20),
  caption: calcHeight(12, 18),
  article1: calcHeight(16, 32),
  article2: calcHeight(14, 24),
};

const deviceSizes = {
  mobile: "360px",
  tablet: "768px",
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  fontSizes,
  lineHeights,
  colors,
  deviceSizes,
  device,
};

export default theme;

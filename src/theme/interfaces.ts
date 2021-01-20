export interface ColorTheme {
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

export type ColorVariantTheme = "primary" | "secondary" | "default";

export interface TypographyVariantTheme {
  heading1: string;
  heading2: string;
  heading3: string;
  body1: string;
  body2: string;
  caption: string;
  article1: string;
  article2: string;
}

export interface DeviceTheme {
  mobile: string;
  tablet: string;
}

export interface ButtonSizeTheme {
  small: string;
  medium: string;
  large: string;
}

export interface ButtonColorTheme {
  default: string;
  primary: string;
  secondary: string;
}

export interface ThemeInterface {
  buttons: {
    buttonSizes: ButtonSizeTheme;
    buttonColors: ButtonColorTheme;
  };
  colors: ColorTheme;
  typography: TypographyVariantTheme;
  devices: DeviceTheme;
}

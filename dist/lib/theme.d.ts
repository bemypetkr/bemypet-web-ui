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
export declare const colors: Color;
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
declare const theme: {
    fontSizes: TypographyVariant;
    lineHeights: TypographyVariant;
    colors: Color;
    deviceSizes: {
        mobile: string;
        tablet: string;
    };
    device: {
        mobile: string;
        tablet: string;
    };
};
export default theme;

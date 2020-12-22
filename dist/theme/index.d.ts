declare const theme: {
    devices: {
        mobile: string;
        tablet: string;
    };
    fontSizes: import("./interfaces").TypographyVariant;
    lineHeights: import("./interfaces").TypographyVariant;
    typography: import("./interfaces").TypographyVariant;
    colors: import("./interfaces").Color;
    buttonSizes: {
        small: string;
        medium: string;
        large: string;
    };
    buttonColors: {
        default: string;
        primary: string;
    };
};
export default theme;

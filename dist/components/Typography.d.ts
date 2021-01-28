import React from "react";
export declare type TypographyColor = "grey100" | "grey200" | "grey300" | "grey400" | "grey500" | "grey600" | "primary100" | "primary200" | "secondary100" | "secondary200" | "green" | "red";
export declare type TypographyVariant = "heading1" | "heading2" | "heading3" | "body1" | "body2" | "caption" | "article1" | "article2";
export declare type TypographyTextAlign = "left" | "center" | "right";
declare type TypographyBaseProps = React.HTMLProps<HTMLParagraphElement>;
export declare type TypographyProps = Omit<TypographyBaseProps, "color" | "variant" | "children"> & {
    /**
     * "grey100" | "grey200" | "grey300" | "grey400" | "grey500" | "grey600" | "primary100" | "primary200" | "secondary100" | "secondary200" | "green" | "red"
     *
     * @type {TypographyColor}
     */
    color?: TypographyColor;
    /**
     * "heading1" | "heading2" | "heading3" | "body1" | "body2" | "caption" | "article1" | "article2"
     *
     * @type { TypographyVariant}
     */
    variant?: TypographyVariant;
    /**
     * Text align
     * "left" | "center" | "right"
     * Default is left
     *
     * @type {TypographyTextAlign}
     */
    textAlign?: TypographyTextAlign;
};
export declare const Typography: import("styled-components").StyledComponent<({ color, variant, textAlign, className, children, ...rest }: React.PropsWithChildren<TypographyProps>) => JSX.Element, any, {}, never>;
export {};

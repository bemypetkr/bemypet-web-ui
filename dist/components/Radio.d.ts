import React from "react";
import { IconProps } from "./Icons/interface";
export declare const RadioSvg: ({ width, height, color, }: IconProps) => React.FunctionComponentElement<IconProps>;
export declare type RadioColor = "primary" | "secondary" | "default";
export declare type RadioProps = Omit<React.HTMLProps<HTMLInputElement>, "error" | "label" | "helperText"> & {
    /**
     * Width in pixel.
     * Default is 100%
     *
     * @type {number}
     * @memberof RadioProps
     */
    width?: number | string;
    /**
     * Has error then input colored red.
     * Default is false
     *
     * @type {boolean}
     */
    error?: boolean;
    /**
     * Label node
     * Default is null
     *
     * @type {React.ReactNode}
     */
    label?: React.ReactNode | string;
    /**
     * Helper text is displayed input below
     *
     * @type {React.ReactNode}
     */
    helperText?: React.ReactNode | string;
    /**
     * Radio color
     * "primary" | "secondary" | "default"
     *
     * @type {RadioColor}
     */
    color?: RadioColor;
};
export declare const Radio: import("styled-components").StyledComponent<({ type, label, helperText, color, ...rest }: RadioProps) => JSX.Element, any, {}, never>;

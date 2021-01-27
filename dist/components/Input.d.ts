import React from "react";
export declare type InputProps = Omit<React.HTMLProps<HTMLInputElement>, "error" | "label" | "helperText" | "trailing" | "innerRef"> & {
    /**
     * Width in pixel.
     * Default is 100%
     *
     * @type {number}
     * @memberof InputProps
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
     * Trailing node (kinda icon)
     * Default is null
     *
     * @type {React.ReactNode}
     */
    trailing?: React.ReactNode;
    innerRef?: any;
};
export declare const Input: import("styled-components").StyledComponent<({ type, error, label, helperText, trailing, innerRef, ...rest }: InputProps) => JSX.Element, any, {}, never>;

import React from "react";
export declare type CheckboxProps = Omit<React.HTMLProps<HTMLInputElement>, "error" | "label" | "helperText"> & {
    /**
     * Width in pixel.
     * Default is 100%
     *
     * @type {number}
     * @memberof CheckboxProps
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
};
export declare const Checkbox: import("styled-components").StyledComponent<({ type, error, label, helperText, ...rest }: CheckboxProps) => JSX.Element, any, {}, never>;

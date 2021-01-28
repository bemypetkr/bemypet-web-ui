import React from "react";
declare type InputInnerRef = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
declare type InputBaseProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type CheckboxColor = "primary" | "secondary" | "default";
export declare type CheckboxProps = Omit<InputBaseProps, "error" | "label" | "helperText" | "innerRef"> & {
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
    /**
     * Checkbox color
     * "primary" | "secondary" | "default"
     *
     * @type {CheckboxColor}
     */
    color?: CheckboxColor;
    /**
     * Inner Ref for dynamic
     *
     * @type {InputInnerRef}
     */
    innerRef?: InputInnerRef;
};
export declare const Checkbox: import("styled-components").StyledComponent<({ type, label, helperText, color, innerRef, ...rest }: CheckboxProps) => JSX.Element, any, {}, never>;
export {};

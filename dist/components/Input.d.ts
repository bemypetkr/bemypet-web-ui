import React from "react";
declare type InputInnerRef = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
declare type InputBaseProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type InputProps = Omit<InputBaseProps, "error" | "label" | "helperText" | "trailing" | "innerRef"> & {
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
    /**
     * Inner Ref for dynamic
     *
     * @type {InputInnerRef}
     */
    innerRef?: InputInnerRef;
};
export declare const Input: import("styled-components").StyledComponent<({ type, error, label, helperText, trailing, innerRef, ...rest }: InputProps) => JSX.Element, any, {}, never>;
export {};

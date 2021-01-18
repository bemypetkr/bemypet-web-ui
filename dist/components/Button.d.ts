import React from "react";
export declare type ButtonColor = "primary" | "default";
export declare type ButtonSize = "small" | "medium" | "large";
export declare type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "color" | "size" | "positive" | "negative"> & {
    /**
     * Width in pixel.
     * Default is 100%
     *
     * @type {number}
     * @memberof ButtonProps
     */
    width?: number | string;
    /**
     * "primary" | "default"
     *
     * @type {ButtonColor}
     */
    color?: ButtonColor;
    /**
     * "small" | "medium" | "large"
     *
     * @type {ButtonSize}
     */
    size?: ButtonSize;
    positive?: boolean;
    negative?: boolean;
};
export declare const Button: import("styled-components").StyledComponent<({ color, size, type, positive, negative, ...rest }: ButtonProps) => JSX.Element, any, {}, never>;
export declare type IconButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "icon"> & {
    icon: React.ReactNode;
};
export declare const IconButton: import("styled-components").StyledComponent<({ icon, type, ...rest }: IconButtonProps) => JSX.Element, any, {}, never>;

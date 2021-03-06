import React from "react";
declare type ButtonBaseProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export declare const buttonBaseStyles = "\n  outline: none;\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  white-space: nowrap;\n\n  :hover {\n    cursor: pointer;\n  }\n\n  :disabled {\n    cursor: not-allowed;\n  }\n";
export declare type ButtonColor = "primary" | "secondary" | "default";
export declare type ButtonSize = "small" | "medium" | "large";
export declare type ButtonProps = Omit<ButtonBaseProps, "color" | "size" | "positive" | "negative" | "loading"> & {
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
    loading?: boolean;
};
export declare const Button: import("styled-components").StyledComponent<({ color, size, type, positive, negative, loading, disabled, children, ...rest }: ButtonProps) => JSX.Element, any, {}, never>;
export declare type IconButtonProps = Omit<ButtonBaseProps, "icon"> & {
    type?: "button" | "submit" | "reset";
    icon: React.ReactNode;
};
export declare const IconButton: import("styled-components").StyledComponent<({ icon, type, ...rest }: IconButtonProps) => JSX.Element, any, {}, never>;
export {};

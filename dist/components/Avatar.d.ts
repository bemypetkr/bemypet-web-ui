import React from "react";
import { TypographyPropss } from "./Typography";
export declare type AvatarAxis = "vertical" | "horizontal";
export declare type AvatarProps = {
    /**
     * Image source url
     *
     * @type {string}
     */
    src?: string;
    /**
     * Avatar width and height
     * Default is 96px
     *
     * @type {number}
     */
    size?: number;
    label?: React.ReactNode | string;
    /**
     * Default is vertical
     *
     * @type {AvatarAxis}
     */
    axis?: AvatarAxis;
    typographyProps?: TypographyPropss;
};
export declare const Avatar: import("styled-components").StyledComponent<({ size, label, axis, src, typographyProps, ...rest }: AvatarProps) => JSX.Element, any, {}, never>;

import React from "react";
import { Color, TypographyVariant } from "lib/theme";
interface TypographyProps {
    children?: React.ReactNode;
    variant?: keyof TypographyVariant;
    color?: keyof Color;
}
export declare const Typography: ({ children, variant, color }: TypographyProps) => JSX.Element;
export {};

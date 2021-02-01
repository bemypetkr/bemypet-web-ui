import React from "react";
export interface ThemeProviderProps {
    children?: React.ReactNode;
    theme?: object;
}
export declare const ThemeProvider: ({ children, theme }: ThemeProviderProps) => JSX.Element;
export * from "./interfaces";

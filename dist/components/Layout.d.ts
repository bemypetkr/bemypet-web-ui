import React from "react";
import { HelmetProps } from "react-helmet-async";
import { Footer } from "./Layouts/Footer";
interface LayoutProps {
    helmetProps?: HelmetProps;
    children?: React.ReactNode;
    loading?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Layout: ({ helmetProps, children, loading }: LayoutProps) => JSX.Element;
export declare const PageBody: import("styled-components").StyledComponent<"div", any, {}, never>;
interface GridProps {
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-evenly" | "space-around" | "stretch";
    alignItems?: "flex-start" | "flex-end" | "center";
    marginTop?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
}
export declare const Column: import("styled-components").StyledComponent<"div", any, GridProps, never>;
export declare const Row: import("styled-components").StyledComponent<"div", any, GridProps, never>;
export { Header } from "./Layouts/Header";
export { Footer };

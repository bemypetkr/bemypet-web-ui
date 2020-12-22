import React from "react";
import { HelmetProps } from "react-helmet-async";
interface LayoutProps {
    helmetProps?: HelmetProps;
    children?: React.ReactNode;
    loading?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Layout: ({ helmetProps, children, loading, footer, }: LayoutProps) => JSX.Element;
export declare const Header: (props: HelmetProps) => JSX.Element;
export declare const Column: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Row: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};

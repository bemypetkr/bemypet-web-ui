import React from "react";
interface LinkInterface {
    to: string;
    label?: string;
    icon?: React.ReactNode;
    target?: string;
}
interface FooterProps {
    version?: string;
    buttons?: LinkInterface[];
    outlinks?: string;
}
export declare const Footer: import("styled-components").StyledComponent<({ version, outlinks, ...rest }: FooterProps) => JSX.Element, any, {}, never>;
export {};

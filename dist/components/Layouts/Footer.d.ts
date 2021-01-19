import React from "react";
interface FooterButtonProps {
    label?: string;
    icon?: React.ReactNode;
    onClick: () => void;
}
export interface FooterProps {
    version?: string;
    buttons?: FooterButtonProps[];
    outlinks?: string;
}
export declare const Footer: import("styled-components").StyledComponent<({ version, outlinks, buttons, ...rest }: FooterProps) => JSX.Element, any, {}, never>;
export {};

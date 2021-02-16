import React from "react";
interface FooterButtonProps {
    label?: string;
    icon?: React.ReactNode;
    onClick: () => void;
}
declare type FooterBaseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export interface FooterProps extends FooterBaseProps {
    version?: string;
    buttons?: FooterButtonProps[];
    outlinks?: string;
    visible?: boolean;
}
export declare const Footer: import("styled-components").StyledComponent<({ version, outlinks, buttons, ...rest }: FooterProps) => JSX.Element, any, {}, never>;
export {};

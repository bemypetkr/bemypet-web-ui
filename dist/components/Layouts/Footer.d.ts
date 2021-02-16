import React from "react";
interface FooterButtonProps {
    label?: string;
    icon?: React.ReactNode;
    onClick: () => void;
}
declare type FooterBaseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare type FooterProps = Omit<FooterBaseProps, "version" | "buttons" | "outlinks" | "visible"> & {
    version?: string;
    buttons?: FooterButtonProps[];
    outlinks?: string;
    visible?: boolean;
};
export declare const Footer: import("styled-components").StyledComponent<({ version, outlinks, buttons, visible, ...rest }: FooterProps) => JSX.Element, any, {}, never>;
export {};

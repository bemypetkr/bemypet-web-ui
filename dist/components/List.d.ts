import React from "react";
export interface ListProps {
    children?: React.ReactNode;
}
export declare const List: import("styled-components").StyledComponent<({ children, ...rest }: ListProps) => JSX.Element, any, {}, never>;
export declare type ListItemProps = Omit<React.HTMLProps<HTMLLIElement>, "primary" | "secondary" | "trailing" | "button"> & {
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
    trailing?: React.ReactNode;
    avatar?: React.ReactNode;
    /**
     * Make list item behavior as a button
     * Default is false
     *
     * @type {boolean}
     * @memberof ListItemProps
     */
    button?: boolean;
};
export declare const ListItem: import("styled-components").StyledComponent<({ primary, secondary, trailing, avatar, button, ...rest }: ListItemProps) => JSX.Element, any, {}, never>;

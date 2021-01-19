import React from "react";
interface ListProps {
    children?: React.ReactNode;
}
export declare const List: import("styled-components").StyledComponent<({ children, ...rest }: ListProps) => JSX.Element, any, {}, never>;
interface ListItemProps {
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
    trailing?: React.ReactNode;
    /**
     * Make list item behavior as a button
     * Default is false
     *
     * @type {boolean}
     * @memberof ListItemProps
     */
    button?: boolean;
}
export declare const ListItem: import("styled-components").StyledComponent<({ primary, secondary, ...rest }: ListItemProps) => JSX.Element, any, {}, never>;
export {};

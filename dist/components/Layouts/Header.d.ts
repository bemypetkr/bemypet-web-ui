interface MenuItemProps {
    label: string;
    to: string;
    target?: string;
}
interface HeaderProps {
    menus: MenuItemProps[];
    locationPath?: string;
}
export declare const Header: import("styled-components").StyledComponent<({ menus, locationPath }: HeaderProps) => JSX.Element, any, {}, never>;
export {};

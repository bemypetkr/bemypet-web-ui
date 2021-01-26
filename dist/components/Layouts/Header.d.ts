interface MenuItemProps {
    label: string;
    to: string;
    target?: string;
}
interface HeaderProps {
    menus: MenuItemProps[];
    locationPath?: string;
    isLoggedIn?: boolean;
}
export declare const Header: import("styled-components").StyledComponent<({ menus, locationPath, isLoggedIn }: HeaderProps) => JSX.Element, any, {}, never>;
export {};

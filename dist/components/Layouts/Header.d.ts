interface HeaderMenuItemProps {
    label: string;
    to: string;
    target?: string;
}
interface HeaderProps {
    menus: HeaderMenuItemProps[];
}
export declare const Header: import("styled-components").StyledComponent<({ menus }: HeaderProps) => JSX.Element, any, {}, never>;
export {};

interface MenuItemProps {
    label: string;
    to: string;
    selected?: boolean;
}
interface MenuProps {
    menus: MenuItemProps[];
}
export declare const Menu: ({ menus }: MenuProps) => JSX.Element;
export {};

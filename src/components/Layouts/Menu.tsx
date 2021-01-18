import React from "react";
import styled from "styled-components";

interface MenuItemProps {
  label: string;
  to: string;
  selected?: boolean;
}

interface MenuProps {
  menus: MenuItemProps[];
}

export const Menu = ({ menus = [] }: MenuProps) => (
  <MenuWrapper>
    {menus.map(({ label, to, selected }) => (
      <li key={label}>
        <MenuItem href={to} selected={selected}>
          {label}
          {selected ? <SelectedCircle /> : null}
        </MenuItem>
      </li>
    ))}
  </MenuWrapper>
);

const MenuWrapper = styled.ul`
  display: flex;

  li {
    list-style: none;
    min-width: 60px;
    margin-left: 30px;
    text-align: center;
  }
`;

const MenuItem = styled.a<{ selected?: boolean }>`
  z-index: 1;
  position: relative;
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey500};

  :hover {
    color: ${({ theme }) => theme.colors.grey600};
  }

  ${({ theme, selected }) =>
    !!selected &&
    `
    color: ${theme.colors.grey600};
    font-weight: bold;
  `}
`;

const SelectedCircle = styled.span`
  z-index: -1;
  position: absolute;
  top: -3px;
  right: -5px;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.primary100};
  border-radius: 50%;
`;

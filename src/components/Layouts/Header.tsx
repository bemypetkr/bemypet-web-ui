import React from "react";
import styled from "styled-components";
import Logo from "components/Icons/Logo";
import { Menu } from "./Menu";

interface MenuItemProps {
  label: string;
  to: string;
  target?: string;
}

export interface HeaderProps {
  menus: MenuItemProps[];
  locationPath?: string;
}

const HeaderNav = styled.div`
  padding: 0 30px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.grey100};
  box-sizing: border-box;
  overflow: hidden;

  ul {
    display: flex;
  }
`;

const HeaderNavItem = styled.li<{ selected?: boolean }>`
  width: 80px;
  height: 100%;
  list-style: none;
  text-align: center;
  box-sizing: border-box;

  a {
    font-size: 13px;
    height: 100%;
    padding: 12px 0;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey100};

    :hover {
      color: ${({ theme }) => theme.colors.grey500};
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary200};
    }
  }

  ${({ theme, selected }) =>
    selected
      ? `
      a {
      font-weight: bold;
      color: ${theme.colors.grey600};
      background-color: ${theme.colors.grey100};
    }  
  `
      : ""}
`;

const HeaderMenu = styled.div`
  padding: 0 42px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const leftMenus: MenuItemProps[] = [
  {
    label: "라이프",
    to: "https://mypetlife.co.kr/",
  },
  {
    label: "크리에이터즈",
    to: "https://creators.mypetlife.co.kr/",
  },
  {
    label: "툴즈",
    to: "https://tools.mypetlife.co.kr/",
  },
];

const accountBaseUrl = "https://accounts.mypetlife.co.kr";

const rightMenus: MenuItemProps[] = [
  {
    label: "로그인",
    to: `${accountBaseUrl}/login`,
  },
  {
    label: "회원가입",
    to: `${accountBaseUrl}/registration`,
  },
];

export const Header = styled(({ menus, locationPath }: HeaderProps) => (
  <div>
    <HeaderNav>
      <ul>
        {leftMenus.map(({ label, to }: MenuItemProps) => (
          <HeaderNavItem
            key={`header-nav-${label}`}
            selected={locationPath?.startsWith(to)}
          >
            <a href={to}>{label}</a>
          </HeaderNavItem>
        ))}
      </ul>
      <ul>
        {rightMenus.map(({ label, to }: MenuItemProps) => (
          <HeaderNavItem
            key={`header-nav-${label}`}
            selected={locationPath?.startsWith(to)}
          >
            <a href={to}>{label}</a>
          </HeaderNavItem>
        ))}
      </ul>
    </HeaderNav>
    <HeaderMenu>
      <Logo />
      <Menu menus={menus} />
    </HeaderMenu>
  </div>
))`
  width: 100%;
  height: 140px;
`;

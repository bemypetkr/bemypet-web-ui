import React from "react";
import styled from "styled-components";
import Logo from "components/Icons/Logo";
import { Menu } from "./Menu";
import Urls from "lib/urls";

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
    to: Urls.bemypetlife,
  },
  {
    label: "크리에이터즈",
    to: Urls.creators,
  },
  {
    label: "툴즈",
    to: Urls.tools,
  },
];

const rightMenus: MenuItemProps[] = [
  {
    label: "로그인",
    to: `${Urls.accounts}/login`,
  },
  {
    label: "회원가입",
    to: `${Urls.accounts}/registration`,
  },
];

const rightLoggedInMenus: MenuItemProps[] = [
  {
    label: "마이페이지",
    to: `${Urls.accounts}/mypage`,
  },
];

export const Header = styled(
  ({ menus, locationPath, isLoggedIn }: HeaderProps) => (
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
          {isLoggedIn
            ? rightLoggedInMenus.map(({ label, to }: MenuItemProps) => (
                <HeaderNavItem
                  key={`header-nav-${label}`}
                  selected={locationPath?.startsWith(to)}
                >
                  <a href={to}>{label}</a>
                </HeaderNavItem>
              ))
            : rightMenus.map(({ label, to }: MenuItemProps) => (
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
  ),
)`
  width: 100%;
  height: 140px;
`;

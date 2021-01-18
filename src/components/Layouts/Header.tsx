import React from "react";
import styled from "styled-components";
import Logo from "components/Icons/Logo";
import { Menu } from "./Menu";

interface HeaderMenuItemProps {
  label: string;
  to: string;
  target?: string;
}

interface HeaderProps {
  menus: HeaderMenuItemProps[];
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

  li {
    width: 80px;
    height: 100%;
    list-style: none;
    text-align: center;
    box-sizing: border-box;
  }

  li a {
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

  li.selected a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey600};
    background-color: ${({ theme }) => theme.colors.grey100};
  }
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

export const Header = styled(({ menus }: HeaderProps) => (
  <div>
    <HeaderNav>
      <ul>
        <li className="selected">
          <a href="https://mypetlife.co.kr/">라이프</a>
        </li>
        <li>
          <a href="https://creators.mypetlife.co.kr/">크리에이터즈</a>
        </li>
        <li>
          <a href="https://tools.mypetlife.co.kr/">툴즈</a>
        </li>
      </ul>
      <ul>
        <li>
          <a>로그인</a>
        </li>
        <li>
          <a>회원가입</a>
        </li>
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

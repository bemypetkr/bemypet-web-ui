import React from "react";
import styled from "styled-components";
import { Column, Row } from "./Layout";

import { Typography } from "./Typography";

export interface ListProps {
  children?: React.ReactNode;
}

export const List = styled(({ children, ...rest }: ListProps) => {
  return <ul {...rest}>{children}</ul>;
})`
  width: 100%;
`;

export type ListItemProps = Omit<
  React.HTMLProps<HTMLLIElement>,
  "primary" | "secondary" | "trailing" | "button"
> & {
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

export const ListItem = styled(
  ({
    primary,
    secondary,
    trailing,
    avatar,
    button,
    ...rest
  }: ListItemProps) => {
    return (
      <li {...rest}>
        <Row justifyContent="flex-start" alignItems="center">
          {avatar ? avatar : null}
          <Column
            width={"auto"}
            marginLeft={16}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="body1">{primary}</Typography>
            <Typography variant="caption" color="grey500">
              {secondary}
            </Typography>
            {trailing ? trailing : null}
          </Column>
        </Row>
      </li>
    );
  },
)`
  position: relative;
  list-style: none;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
  box-sizing: border-box;

  :last-child {
    border-bottom: none;
  }

  ${({ theme, button = false }) =>
    button
      ? `
    :hover {
      background-color: ${theme.colors.grey200};
      cursor: pointer;
    }
  `
      : ""}

  ${({ trailing }) =>
    trailing
      ? `
      svg {
        position: absolute;
        right: 0;
        top: 16px;
      }
    `
      : ""}
`;

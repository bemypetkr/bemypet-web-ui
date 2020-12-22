import Color from "color";
import React from "react";
import styled from "styled-components";

export type ButtonColor = "primary" | "default";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  "color" | "size"
> & {
  /**
   * Width in pixel.
   * Default is 100%
   *
   * @type {number}
   * @memberof ButtonProps
   */
  width?: number | string;
  /**
   * "primary" | "default"
   *
   * @type {ButtonColor}
   */
  color?: ButtonColor;
  /**
   * "small" | "medium" | "large"
   *
   * @type {ButtonSize}
   */
  size?: ButtonSize;
};

export const Button = styled(
  ({ color, size, type = "button", ...rest }: ButtonProps) => (
    <button {...rest} />
  ),
)`
  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 50px;

  ${({ theme, color = "default" }) => `
    color: ${color == "primary" ? theme.colors.grey600 : theme.colors.grey500};
    background-color: ${
      color == "primary" ? theme.colors.primary100 : theme.colors.grey200
    };

    :hover {
      cursor: pointer;
      background-color: ${Color(
        color == "primary" ? theme.colors.primary100 : theme.colors.grey200,
      )
        .darken(0.2)
        .toString()};
  
    }
  `}

  ${({ theme, size = "medium" }) => `
    ${theme.buttonSizes[size]};
  `}
`;

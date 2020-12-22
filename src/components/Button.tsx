import React from "react";
import styled from "styled-components";

export type ButtonColor = "primary" | "default";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  "color" | "size" | "positive" | "negative"
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
  positive?: boolean;
  negative?: boolean;
};

export const Button = styled(
  ({
    color,
    size,
    type = "button",
    positive,
    negative,
    ...rest
  }: ButtonProps) => <button {...rest} />,
)`
  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 50px;

  font-size: 13px;
  font-weight: bold;
  line-height: 20px;

  ${({ theme, color = "default" }) => `
    ${theme.buttonColors[color]}

    :hover {
      cursor: pointer;
    }

    :disabled {
      color: ${theme.colors.grey400};
      background-color: ${theme.colors.grey200};
      cursor: not-allowed;
    }
  `}

  // positive will be green colored text
  ${({ theme, positive }) => (positive ? `color: ${theme.colors.green}` : "")};

  // negative will be red colored text
  ${({ theme, negative }) => (negative ? `color: ${theme.colors.red}` : "")};

  ${({ theme, size = "medium" }) => `
    ${theme.buttonSizes[size]};
  `}
`;

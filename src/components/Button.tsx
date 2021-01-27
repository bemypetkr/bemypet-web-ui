import React from "react";
import styled from "styled-components";

type ButtonBaseProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const buttonBaseStyles = `
  outline: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export type ButtonColor = "primary" | "secondary" | "default";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = Omit<
  ButtonBaseProps,
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
  }: ButtonProps) => <button type={type} {...rest} />,
)`
  ${buttonBaseStyles}

  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
  border-radius: 50px;

  font-size: 13px;
  font-weight: bold;
  line-height: 20px;

  ${({ theme, color = "default" }) => `
    ${theme.buttonColors[color]}

    :disabled {
      color: ${theme.colors.grey400};
      background-color: ${theme.colors.grey200};
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

export type IconButtonProps = Omit<ButtonBaseProps, "icon"> & {
  icon: React.ReactNode;
};

export const IconButton = styled(
  ({ icon, type = "button", ...rest }: IconButtonProps) => (
    <button type={type} {...rest}>
      {icon}
    </button>
  ),
)`
  ${buttonBaseStyles}
`;

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
  "color" | "size" | "positive" | "negative" | "loading"
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
  loading?: boolean;
};

export const Button = styled(
  ({
    color,
    size,
    type = "button",
    positive,
    negative,
    loading,
    disabled,
    children,
    ...rest
  }: ButtonProps) => (
    <button type={type} {...rest} disabled={loading || disabled}>
      <div className="bui-button-wrapper">{children}</div>
      <ButtonLoadingIndicator className="bui-button-indicator" />
    </button>
  ),
)`
  ${buttonBaseStyles}

  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
  border-radius: 50px;
  position: relative;
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

  ${({ theme, size = "medium" }) => `
    ${theme.buttonSizes[size]};
  `}



  .bui-button-wrapper {
    transition: padding-right 300ms;
  }

  ${({ loading = true }) =>
    loading &&
    `
    .bui-button-wrapper {
      padding-right: 1.4em;
    }

    .bui-button-indicator {
      width: 1.4em;
      height: 1.4em;
      margin-top: -0.7em;
    
      animation: loadingSpinner 1s infinite linear;
      opacity: 1;
    }
  `}
`;

const ButtonLoadingIndicator = styled.div`
  position: absolute;
  top: 50%;
  right: 1em;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  border-radius: 50%;
  border: 0.17em solid ${({ theme }) => theme.colors.grey400};
  border-left-color: transparent;
  content: " ";
  opacity: 0;
  box-sizing: border-box;
  transition: width 0.3s, height 0.3s, margin 0.3s, opacity 0.1s;
  transition-timing-function: ease-in;

  @keyframes loadingSpinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export type IconButtonProps = Omit<ButtonBaseProps, "icon"> & {
  type?: "button" | "submit" | "reset";
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

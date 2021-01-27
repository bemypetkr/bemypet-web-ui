import React from "react";
import styled from "styled-components";
import { ThemeInterface } from "theme/interfaces";
import { colors } from "theme/color";

import { IconProps } from "./Icons/interface";

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type RadioColor = "primary" | "secondary" | "default";

export type RadioProps = Omit<
  InputBaseProps,
  "error" | "label" | "helperText" | "innerRef"
> & {
  /**
   * Width in pixel.
   * Default is 100%
   *
   * @type {number}
   * @memberof RadioProps
   */
  width?: number | string;
  /**
   * Has error then input colored red.
   * Default is false
   *
   * @type {boolean}
   */
  error?: boolean;
  /**
   * Label node
   * Default is null
   *
   * @type {React.ReactNode}
   */
  label?: React.ReactNode | string;
  /**
   * Helper text is displayed input below
   *
   * @type {React.ReactNode}
   */
  helperText?: React.ReactNode | string;
  /**
   * Radio color
   * "primary" | "secondary" | "default"
   *
   * @type {RadioColor}
   */
  color?: RadioColor;
  innerRef?: React.RefObject<HTMLInputElement>;
};

/**
 * Returns the color string for CSS fill property
 *
 * @param {ThemeInterface} theme
 * @param {RadioColor} [color="default"]
 * @param {boolean} [checked=false]
 * @returns {string}
 */
function renderCheckColor(
  theme: ThemeInterface,
  color: RadioColor = "default",
  checked: boolean = false,
): string {
  switch (color) {
    case "primary":
      if (checked) {
        return theme.colors.grey600;
      }
      return theme.colors.primary100;
    case "secondary":
      if (checked) {
        return theme.colors.grey100;
      }
      return theme.colors.secondary100;
    case "default":
    default:
      return theme.colors.grey600;
  }
}

/**
 * Returns the color string for CSS background-color property
 *
 * @param {ThemeInterface} theme
 * @param {RadioColor} [color="default"]
 * @param {boolean} [checked=false]
 * @returns {string}
 */
function renderBgColor(
  theme: ThemeInterface,
  color: RadioColor = "default",
  checked: boolean = false,
): string {
  switch (color) {
    case "secondary":
      if (checked) {
        return theme.colors.secondary100;
      }
    // falls through
    case "primary":
    case "default":
    default:
      if (checked) {
        return theme.colors.primary100;
      }
      return theme.colors.grey100;
  }
}

export const Radio = styled(
  ({
    type = "radio",
    error,
    label,
    helperText,
    color,
    innerRef,
    ...rest
  }: RadioProps) => (
    <RadioWrapper className={"bui-Radio"}>
      <RadioLabel color={color}>
        <input ref={innerRef} type={type} {...rest} />
        <div>
          <RadioSvg width={18} height={18} color={color} />
        </div>
        {label ? (
          typeof label === "string" ? (
            <span>{label}</span>
          ) : (
            label
          )
        ) : null}
      </RadioLabel>
      {helperText ? (
        typeof helperText === "string" ? (
          <RadioHelperText>{helperText}</RadioHelperText>
        ) : (
          helperText
        )
      ) : null}
    </RadioWrapper>
  ),
)`
  white-space: nowrap;
  outline: none;

  :disabled {
    color: ${({ theme }) => theme.colors.grey500};
    background-color: ${({ theme }) => theme.colors.grey200};
  }

  ${({ theme, error }) =>
    error
      ? `
      color: ${theme.colors.red};
      border-color:  ${theme.colors.red};

      :focus {
        border-color:  ${theme.colors.red};
      }
      `
      : ""};
`;

const RadioWrapper = styled.div<{ width?: string | number }>`
  position: relative;
  display: flex;
  flex-direction: row;

  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
`;

const RadioLabel = styled.label<{
  color?: RadioColor;
}>`
  color: ${({ theme }) => theme.colors.grey600};
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.54;

  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    :checked + div {
      background-color: ${({ theme, color }) =>
        renderBgColor(theme, color, true)};
      border-color: ${({ theme, color }) => renderBgColor(theme, color, true)};

      path {
        stroke-color: ${({ theme, color }) =>
          renderCheckColor(theme, color, true)};
        stroke: none;
      }
    }
  }

  div {
    position: relative;
    margin-right: 8px;
    width: 18px;
    height: 18px;
    border: 1px solid ${({ theme }) => theme.colors.grey300};
    border-radius: 18px;
    overflow: hidden;
  }

  :hover {
    div {
      border-color: ${({ theme, color }) => renderCheckColor(theme, color)};
    }

    svg {
      path {
        stroke-dashoffset: 0;
      }
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;

    path {
      fill: none;
      stroke: ${({ theme, color }) => renderCheckColor(theme, color)};
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 71px;
      stroke-dashoffset: 71px;
      transition: all 0.6s ease;
    }
  }
`;

const RadioHelperText = styled.p`
  margin: 4px 16px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const RadioSvg = ({
  width = 24,
  height = 24,
  color = colors.grey500,
}: IconProps): React.FunctionComponentElement<IconProps> => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    style={{ width, height }}
    viewBox="0 0 30 30"
  >
    <circle
      className="radioOutline"
      cx="15"
      cy="15"
      r="18"
      fill="none"
      stroke={color}
      strokeWidth="5"
    />
    <circle className="radioDot" cx="15" cy="15" r="8" fill="#fff" />
  </svg>
);

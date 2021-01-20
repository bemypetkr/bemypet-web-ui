import React from "react";
import styled from "styled-components";
import { Check } from "./Icons";

export type CheckboxColor = "primary" | "secondary" | "default";

export type CheckboxProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  "error" | "label" | "helperText"
> & {
  /**
   * Width in pixel.
   * Default is 100%
   *
   * @type {number}
   * @memberof CheckboxProps
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
   * Checkbox color
   * "primary" | "secondary" | "default"
   *
   * @type {CheckboxColor}
   */
  color?: CheckboxColor;
};

const CheckboxWrapper = styled.div<{ width?: string | number }>`
  position: relative;
  display: flex;
  flex-direction: row;

  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
`;

const CheckboxLabel = styled.label<{
  color?: CheckboxColor;
  checked?: boolean;
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
      path {
        fill: ${({ theme }) => theme.colors.grey600};
      }
    }
  }

  div {
    position: relative;
    margin-right: 8px;
    width: 18px;
    height: 18px;
    border: 1px solid ${({ theme }) => theme.colors.grey300};
    border-radius: 2px;
  }

  :hover {
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
      stroke: red;
      stroke-width: 1px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 71px;
      stroke-dashoffset: 71px;
      transition: all 0.6s ease;
    }
  }
`;

const CheckboxHelperText = styled.p`
  margin: 4px 16px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const Checkbox = styled(
  ({
    type = "checkbox", // error = false,
    label,
    helperText,
    ...rest
  }: CheckboxProps) => (
    <CheckboxWrapper className={"bui-checkbox"}>
      <CheckboxLabel>
        <input type="checkbox" {...rest} />
        <div>
          <Check width={18} height={18} />
        </div>
        {label ? (
          typeof label === "string" ? (
            <span>{label}</span>
          ) : (
            label
          )
        ) : null}
      </CheckboxLabel>
      {helperText ? (
        typeof helperText === "string" ? (
          <CheckboxHelperText>{helperText}</CheckboxHelperText>
        ) : (
          helperText
        )
      ) : null}
    </CheckboxWrapper>
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

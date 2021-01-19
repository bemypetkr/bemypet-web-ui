import React from "react";
import styled from "styled-components";

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
};

const CheckboxWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 16px;
  }
`;

const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.colors.grey600};
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.54;
`;

const CheckboxHelperText = styled.p`
  margin: 4px 16px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const Checkbox = styled(
  ({
    type = "checkbox",
    error = false,
    label,
    helperText,
    ...rest
  }: CheckboxProps) => (
    <CheckboxWrapper className={"bui-input bui-checkbox"}>
      {label ? (
        typeof label === "string" ? (
          <CheckboxLabel>{label}</CheckboxLabel>
        ) : (
          label
        )
      ) : null}
      <input type="checkbox" {...rest} />
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
  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};
  white-space: nowrap;
  outline: none;
  padding: 14px 16px;
  border-radius: 6px;
  border: solid 1px ${({ theme }) => theme.colors.grey300};
  background-color: ${({ theme }) => theme.colors.grey100};
  font-size: 13px;
  line-height: 20px;
  box-sizing: border-box;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }

  :read-only {
    color: ${({ theme }) => theme.colors.grey600};
  }

  :focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.primary100};
    padding: 13px 15px;
  }

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

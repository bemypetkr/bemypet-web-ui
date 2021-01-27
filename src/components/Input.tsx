import React from "react";
import styled from "styled-components";

export type InputProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  "error" | "label" | "helperText" | "trailing" | "innerRef"
> & {
  /**
   * Width in pixel.
   * Default is 100%
   *
   * @type {number}
   * @memberof InputProps
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
   * Trailing node (kinda icon)
   * Default is null
   *
   * @type {React.ReactNode}
   */
  trailing?: React.ReactNode;
  innerRef?: React.RefObject<HTMLInputElement>;
};

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 16px;
  }
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.grey600};
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.54;
`;

const InputHelperText = styled.p`
  margin: 4px 16px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const Input = styled(
  ({
    type = "text",
    error,
    label,
    helperText,
    trailing,
    innerRef,
    ...rest
  }: InputProps) => (
    <InputWrapper className={"bui-input"}>
      {label ? (
        typeof label === "string" ? (
          <InputLabel>{label}</InputLabel>
        ) : (
          label
        )
      ) : null}
      <input type={type} ref={innerRef} {...rest} />
      {trailing ? trailing : null}
      {helperText ? (
        typeof helperText === "string" ? (
          <InputHelperText>{helperText}</InputHelperText>
        ) : (
          helperText
        )
      ) : null}
    </InputWrapper>
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

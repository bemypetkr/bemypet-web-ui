import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "./Button";
import { Hide, Show } from "./Icons";

type InputInnerRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = Omit<
  InputBaseProps,
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
  /**
   * Inner Ref for dynamic
   *
   * @type {InputInnerRef}
   */
  innerRef?: InputInnerRef;
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  .bui-input-inner {
    position: relative;
  }

  svg {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    bottom: 12px;
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
  }: InputProps) => {
    const [visible, setVisible] = useState(false);
    let inputType = type;
    let showOrHideButton;
    if (type === "password" && !trailing) {
      const handleOnToggleVisible = () => setVisible(!visible);
      showOrHideButton = (
        <IconButton
          icon={visible ? <Show /> : <Hide />}
          onClick={handleOnToggleVisible}
          tabIndex={-1}
        />
      );
      inputType = visible ? "text" : "password";
    }

    return (
      <InputWrapper className={"bui-input"}>
        {label ? (
          typeof label === "string" ? (
            <InputLabel>{label}</InputLabel>
          ) : (
            label
          )
        ) : null}
        <div className="bui-input-inner">
          <input type={inputType} ref={innerRef} {...rest} />
          {trailing ? trailing : showOrHideButton ? showOrHideButton : null}
        </div>
        {helperText ? (
          typeof helperText === "string" ? (
            <InputHelperText>{helperText}</InputHelperText>
          ) : (
            helperText
          )
        ) : null}
      </InputWrapper>
    );
  },
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

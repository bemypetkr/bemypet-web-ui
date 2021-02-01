import React from "react";
import styled from "styled-components";

export type TypographyColor =
  | "grey100"
  | "grey200"
  | "grey300"
  | "grey400"
  | "grey500"
  | "grey600"
  | "primary100"
  | "primary200"
  | "secondary100"
  | "secondary200"
  | "green"
  | "red";

export type TypographyVariant =
  | "heading1"
  | "heading2"
  | "heading3"
  | "body1"
  | "body2"
  | "caption"
  | "article1"
  | "article2";

export type TypographyTextAlign = "left" | "center" | "right";

type TypographyBaseProps = React.HTMLProps<HTMLParagraphElement> &
  React.HTMLProps<HTMLDivElement>;

export type TypographyProps = Omit<
  TypographyBaseProps,
  "color" | "variant" | "textAlign" | "children"
> & {
  /**
   * "grey100" | "grey200" | "grey300" | "grey400" | "grey500" | "grey600" | "primary100" | "primary200" | "secondary100" | "secondary200" | "green" | "red"
   *
   * @type {TypographyColor}
   */
  color?: TypographyColor;
  /**
   * "heading1" | "heading2" | "heading3" | "body1" | "body2" | "caption" | "article1" | "article2"
   *
   * @type { TypographyVariant}
   */
  variant?: TypographyVariant;
  /**
   * Text align
   * "left" | "center" | "right"
   * Default is left
   *
   * @type {TypographyTextAlign}
   */
  textAlign?: TypographyTextAlign;
  children?: React.ReactNode | React.ReactNode[];
};

export const Typography = styled(
  ({
    color,
    variant,
    textAlign,
    className,
    children,
    ...rest
  }: React.PropsWithChildren<TypographyProps>) =>
    typeof children !== "string" ? (
      <div className={`bui-typography ${className}`} {...rest}>
        {children}
      </div>
    ) : (
      <p className={`bui-typography ${className}`} {...rest}>
        {children}
      </p>
    ),
)`
  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};

  ${({ theme, variant = "body2" }) => theme.typography[variant]}

  color: ${({ theme, color = "grey600" }) => theme.colors[color]};

  text-align: ${({ textAlign = "inherit" }) => textAlign};
`;

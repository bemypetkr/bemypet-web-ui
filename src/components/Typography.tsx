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

export type TypographyProps = Omit<
  React.HTMLProps<HTMLParagraphElement>,
  "color" | "variant"
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
};

export const Typography = styled(
  ({ color, variant, textAlign, ...rest }: TypographyProps) => <p {...rest} />,
)`
  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "100%"};

  ${({ theme, variant = "body2" }) => theme.typography[variant]}

  color: ${({ theme, color = "grey600" }) => theme.colors[color]};

  text-align: ${({ textAlign = "inherit" }) => textAlign};
`;

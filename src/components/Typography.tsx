import React from "react";
import styled from "styled-components";

import { Color, TypographyVariant } from "lib/theme";

interface TypographyProps {
  children?: React.ReactNode;
  variant?: keyof TypographyVariant;
  color?: keyof Color;
}

export const Typography = ({ children, variant, color }: TypographyProps) => {
  return (
    <TypographyWrapper variant={variant} color={color}>
      {children}
    </TypographyWrapper>
  );
};

const TypographyWrapper = styled.div<TypographyProps>`
  font-family: "Apple SD Gothic Neo", san-serif;
  font-size: ${({ theme, variant }) => theme.fontSizes[variant ?? "body2"]};
  line-height: ${({ theme, variant }) => theme.lineHeights[variant ?? "body2"]};

  color: ${({ theme, color }) => theme.colors[color ?? "grey600"]};
`;

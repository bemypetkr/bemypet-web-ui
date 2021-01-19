import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Camera = ({
  width = 24,
  height = 24,
  color = colors.grey500,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 24 24"
  >
    <g fill={color} fillRule="nonzero">
      <path
        d="M11 0c1.105 0 2 .895 2 2h2c1.657 0 3 1.343 3 3v7c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V5c0-1.657 1.343-3 3-3h2c0-1.105.895-2 2-2h4zm0 1.5H7c-.245 0-.45.177-.492.41L6.5 2v.5c0 .552-.448 1-1 1H3c-.78 0-1.42.595-1.493 1.356L1.5 5v7c0 .78.595 1.42 1.356 1.493L3 13.5h12c.78 0 1.42-.595 1.493-1.356L16.5 12V5c0-.78-.595-1.42-1.356-1.493L15 3.5h-2.5c-.552 0-1-.448-1-1V2c0-.245-.177-.45-.41-.492L11 1.5z"
        transform="translate(3 4)"
      />
      <path
        d="M9 5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 1.5c-.828 0-1.5.672-1.5 1.5S8.172 9.5 9 9.5s1.5-.672 1.5-1.5S9.828 6.5 9 6.5z"
        transform="translate(3 4)"
      />
    </g>
  </svg>
);

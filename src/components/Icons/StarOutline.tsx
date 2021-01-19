import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const StarOutline = ({
  width = 24,
  height = 24,
  color = colors.grey500,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M650.64 1048.846c.556-1.128 2.164-1.128 2.72 0l1.965 3.987 4.381.654c1.236.184 1.73 1.7.842 2.577l-3.17 3.13.737 4.405c.208 1.237-1.091 2.176-2.2 1.592l-3.915-2.06-3.915 2.06c-1.109.584-2.408-.355-2.2-1.592l.737-4.404-3.17-3.13c-.889-.878-.394-2.394.842-2.578l4.38-.654 1.966-3.987zm1.36.67l-2.317 4.699-5.166.77 3.73 3.685-.867 5.18 4.62-2.433 4.62 2.432-.867-5.18 3.73-3.683-5.166-.771-2.317-4.7z"
      transform="translate(-640 -1045)"
    />
  </svg>
);

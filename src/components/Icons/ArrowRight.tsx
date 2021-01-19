import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const ArrowRight = ({
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
      d="M9.22 16.22c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0l5-5c.293-.293.293-.767 0-1.06l-5-5c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l4.47 4.47-4.47 4.47z"
      transform="translate(-260 -1617) translate(260 1617)"
    />
  </svg>
);

import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const StarFilled = ({
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
      d="M19.71,8.49l-4.38-.66-2-4a1.52,1.52,0,0,0-2.72,0l-2,4-4.38.66a1.51,1.51,0,0,0-.84,2.57l3.17,3.13L5.89,18.6a1.52,1.52,0,0,0,2.2,1.59L12,18.13l3.92,2.06a1.52,1.52,0,0,0,2.2-1.59l-.74-4.41,3.17-3.13A1.51,1.51,0,0,0,19.71,8.49ZM12,4.51Z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

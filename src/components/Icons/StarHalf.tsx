import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const StarHalf = ({
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
      d="M19.71,8.49l-4.38-.66-2-4a1.51,1.51,0,0,0-2.72,0l-2,4-4.38.66a1.47,1.47,0,0,0-1.21,1,1.5,1.5,0,0,0,.37,1.55L6.62,14.2l-.74,4.41a1.52,1.52,0,0,0,2.2,1.59L12,18.13l3.91,2.06A1.52,1.52,0,0,0,18,19.45a1.5,1.5,0,0,0,.09-.85l-.73-4.41h0l3.17-3.13a1.41,1.41,0,0,0,.41-.74A1.51,1.51,0,0,0,19.71,8.49Zm-4,5.18.87,5.18L12,16.42h0V4.52h0l2.32,4.7,5.16.77Z"
    />
  </svg>
);

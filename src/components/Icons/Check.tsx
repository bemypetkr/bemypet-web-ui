import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Check = ({
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
      d="M865.502 1140.578c-.312-.356-.853-.392-1.21-.08-.356.312-.392.853-.08 1.21l3 3.428c.333.38.921.392 1.268.024l7.286-7.714c.325-.344.31-.887-.035-1.212-.344-.325-.886-.31-1.211.035l-6.639 7.028-2.379-2.719z"
      transform="translate(-858 -1129)"
    />
  </svg>
);

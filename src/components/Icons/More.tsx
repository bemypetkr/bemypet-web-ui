import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const More = ({
  width = 24,
  height = 24,
  color = colors.grey500,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 24 24"
  >
    <g fill={color}>
      <path
        d="M12.5 11c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-12 0c.828 0 1.5.672 1.5 1.5S7.328 14 6.5 14 5 13.328 5 12.5 5.672 11 6.5 11z"
        transform="translate(-220 -1617) translate(220 1617)"
      />
    </g>
  </svg>
);

import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Blockquote = ({
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
        d="M11 18v-3.686c0-1.105-.895-2-2-2H6.76c0-1.36.293-2.497.88-3.412s1.573-1.608 2.96-2.078L9 4c-2.133.732-3.667 1.922-4.6 3.569C3.467 9.216 3 11.268 3 13.725V18c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2zm10 0v-3.686c0-1.105-.895-2-2-2h-2.24c0-1.36.293-2.497.88-3.412s1.573-1.608 2.96-2.078L19 4c-2.133.732-3.667 1.922-4.6 3.569-.933 1.647-1.4 3.699-1.4 6.156V18c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2z"
        transform="translate(-340 -1617) translate(340 1617)"
      />
    </g>
  </svg>
);

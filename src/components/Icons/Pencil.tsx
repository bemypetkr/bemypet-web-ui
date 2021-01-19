import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Pencil = ({
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
        d="M14.738 4.634c.845-.845 2.216-.845 3.06 0L19.367 6.2c.845.845.845 2.216 0 3.061L9.263 19.366c-.406.406-.957.634-1.531.634h-3.01C4.323 20 4 19.677 4 19.278v-3.01c0-.574.228-1.125.634-1.531L14.738 4.634zm2.04 1.02c-.282-.281-.738-.281-1.02 0L14.402 7.01l2.588 2.588 1.356-1.356c.281-.282.281-.738 0-1.02l-1.568-1.568zm-.809 4.964l-2.587-2.587-7.727 7.726c-.136.136-.212.32-.212.51v2.29h2.289c.192 0 .375-.076.51-.212l7.727-7.727z"
        transform="translate(-140 -1617) translate(140 1617)"
      />
    </g>
  </svg>
);

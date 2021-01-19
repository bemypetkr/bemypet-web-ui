import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Image = ({
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
        d="M5.455 3h13.09C19.901 3 21 4.099 21 5.455v13.09C21 19.901 19.901 21 18.545 21H5.455C4.099 21 3 19.901 3 18.545V5.455C3 4.099 4.099 3 5.455 3zm4.745 9.9l-3.6 4.5h10.8l-2.7-3.6-1.827 2.439L10.2 12.9zm6.3-4.05c0-.747-.603-1.35-1.35-1.35-.747 0-1.35.603-1.35 1.35 0 .747.603 1.35 1.35 1.35.747 0 1.35-.603 1.35-1.35z"
        transform="translate(-300 -1617) translate(300 1617)"
      />
    </g>
  </svg>
);

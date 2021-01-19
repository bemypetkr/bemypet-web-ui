import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Comment = ({
  width = 24,
  height = 24,
  color = colors.grey500,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g stroke={color} strokeWidth="1.5" transform="translate(2 2)">
        <path d="M10.057 0C6.547-.014 3.286 1.807 1.46 4.8c-1.826 2.994-1.948 6.722-.323 9.829l.2.39c.164.307.198.667.095 1-.286.76-.525 1.535-.715 2.324 0 .4.114.628.544.619.76-.168 1.509-.384 2.241-.648.316-.087.651-.066.954.057.277.134.84.477.859.477 3.676 1.932 8.165 1.4 11.284-1.34 3.119-2.74 4.22-7.118 2.768-11.004C17.915 2.618 14.21.031 10.057 0h0z" />
        <circle cx="5.287" cy="10" r="1" fill={color} />
        <circle cx="10.057" cy="10" r="1" fill={color} />
        <circle cx="14.826" cy="10" r="1" fill={color} />
      </g>
    </g>
  </svg>
);

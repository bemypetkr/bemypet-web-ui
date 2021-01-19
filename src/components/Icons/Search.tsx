import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Search = ({
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
        d="M13.946 3C17.842 3 21 6.158 21 10.054c0 3.896-3.158 7.054-7.054 7.054-1.685 0-3.232-.59-4.445-1.577l-5.255 5.255c-.285.285-.747.285-1.032 0-.285-.285-.285-.747 0-1.032L8.469 14.5c-.986-1.213-1.577-2.76-1.577-4.445C6.892 6.158 10.05 3 13.946 3zm0 1.46c-3.09 0-5.595 2.504-5.595 5.594 0 3.09 2.505 5.595 5.595 5.595s5.595-2.505 5.595-5.595-2.505-5.595-5.595-5.595z"
        transform="translate(-180 -1617) translate(180 1617) matrix(-1 0 0 1 24 0)"
      />{" "}
    </g>
  </svg>
);

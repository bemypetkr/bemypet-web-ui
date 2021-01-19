import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Calendar = ({
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
        d="M17.657 3c.39 0 .713.29.765.667l.007.104V5.07C19.87 5.199 21 6.41 21 7.886V18.17C21 19.734 19.734 21 18.171 21H5.83C4.266 21 3 19.734 3 18.171V7.886C3 6.41 4.13 5.199 5.571 5.069V3.77c0-.426.346-.771.772-.771.39 0 .713.29.764.667l.007.104v1.286h4.114V3.771c0-.39.29-.713.667-.764L12 3c.39 0 .713.29.764.667l.007.104v1.286h4.114V3.771c0-.39.29-.713.667-.764L17.657 3zm1.8 8.228H4.542v6.943c0 .71.576 1.286 1.287 1.286H18.17c.71 0 1.286-.575 1.286-1.286v-6.943zM18.171 6.6H5.83c-.71 0-1.286.576-1.286 1.286l-.001 1.799h14.915v-1.8c0-.71-.575-1.285-1.286-1.285z"
        transform="translate(-100 -1617) translate(100 1617)"
      />{" "}
    </g>
  </svg>
);

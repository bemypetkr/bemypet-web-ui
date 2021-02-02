import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Show = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      fill={color}
      d="M12,8.5c-4,0-6.4,2.4-7.4,3.6c-0.1,0.2-0.1,0.4,0,0.5c1,1.2,3.4,3.6,7.4,3.6s6.4-2.4,7.4-3.6 c0.1-0.2,0.1-0.4,0-0.5C18.4,10.9,16,8.5,12,8.5z M3.4,11.2C4.5,9.8,7.3,7,12,7c4.7,0,7.5,2.8,8.6,4.2c0.6,0.7,0.6,1.7,0,2.4 c-1.1,1.4-3.9,4.2-8.6,4.2c-4.7,0-7.5-2.8-8.6-4.2C2.9,12.9,2.9,11.9,3.4,11.2z M12,10.9c-0.9,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5 s1.5-0.7,1.5-1.5C13.5,11.5,12.9,10.9,12,10.9z M8.9,12.4c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1 C10.3,15.5,8.9,14.1,8.9,12.4z"
    />
  </svg>
);

import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const HeartFilled = ({
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
        d="M12.002 4.44c2.452-2.091 5.986-1.883 8.207.485 2.247 2.398 2.434 6.263.252 8.798-1.35 1.568-2.952 3.34-4.417 4.727-.732.692-1.448 1.305-2.096 1.753-.604.417-1.3.797-1.948.797-.649 0-1.344-.38-1.948-.797-.648-.448-1.364-1.06-2.096-1.753-1.465-1.386-3.068-3.159-4.417-4.727-2.182-2.535-1.995-6.4.252-8.798 2.22-2.368 5.755-2.576 8.207-.485l.002.002.002-.002z"
        transform="translate(-700 -1617) translate(700 1617)"
      />
    </g>
  </svg>
);

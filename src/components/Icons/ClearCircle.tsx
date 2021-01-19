import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const ClearCircle = ({
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
        d="M11.75 2c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2 17.135 2 11.75 6.365 2 11.75 2zm3.446 6.147c-.26-.194-.619-.196-.882-.007l-.094.08-2.47 2.469-2.47-2.47c-.293-.292-.767-.292-1.06 0-.267.267-.29.684-.073.977l.073.084 2.469 2.47-2.47 2.47-.072.084c-.194.26-.196.619-.007.882l.08.094.084.073c.26.194.619.196.882.007l.094-.08 2.47-2.469 2.47 2.47c.293.292.767.292 1.06 0 .267-.267.29-.684.073-.977l-.073-.084-2.469-2.47 2.47-2.47.072-.084c.194-.26.196-.619.007-.882l-.08-.094-.084-.073z"
        transform="translate(-380 -1617) translate(380 1617)"
      />
    </g>
  </svg>
);

import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Menu = ({
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
        d="M5.043 16h13.914c.576 0 1.043.448 1.043 1 0 .506-.393.925-.902.99l-.141.01H5.043C4.467 18 4 17.552 4 17c0-.506.393-.925.902-.99l.141-.01zm0-5h13.914c.576 0 1.043.448 1.043 1 0 .506-.393.925-.902.99l-.141.01H5.043C4.467 13 4 12.552 4 12c0-.506.393-.925.902-.99l.141-.01zm13.914-5C19.533 6 20 6.448 20 7c0 .506-.393.925-.902.99l-.141.01H5.043C4.467 8 4 7.552 4 7c0-.506.393-.925.902-.99L5.043 6h13.914z"
        transform="translate(-540 -1617) translate(540 1617)"
      />
    </g>
  </svg>
);

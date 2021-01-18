import React from "react";

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export const FacebookIcon = ({ width = 40, height = 40 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 40 40"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#3B5998"
        d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
        transform="translate(-324 -1738) translate(324 1738)"
      />
      <path
        fill="#FFF"
        d="M21.418 31.093V20.212h3.004l.398-3.75h-3.402l.005-1.877c0-.978.093-1.502 1.498-1.502h1.877v-3.75h-3.004c-3.608 0-4.878 1.82-4.878 4.878v2.252h-2.25v3.75h2.25v10.88h4.502z"
        transform="translate(-324 -1738) translate(324 1738)"
      />
    </g>
  </svg>
);

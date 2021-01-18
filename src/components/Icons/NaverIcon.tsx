import React from "react";

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export const NaverIcon = ({ width = 40, height = 40 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 40 40"
  >
    <g fill="none" fillRule="evenodd">
      <g fill="#2DB400">
        <path
          d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
          transform="translate(-548 -1738) translate(548 1738)"
        />
      </g>
      <path
        fill="#FEFEFE"
        d="M22.311 13.636L22.311 20.16 17.706 13.636 12.727 13.636 12.727 26.566 17.69 26.566 17.69 20.043 22.295 26.566 27.273 26.566 27.273 13.636z"
        transform="translate(-548 -1738) translate(548 1738)"
      />
    </g>
  </svg>
);

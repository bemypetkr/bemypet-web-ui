import React from "react";

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export const AppStoreIcon = ({ width = 40, height = 40 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FFF"
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
        transform="translate(-990 -2658) translate(0 2650) translate(990 8)"
      />
      <path
        fill="#0B0B0A"
        d="M13.954 7.08c.458-.59.805-1.427.68-2.28-.75.052-1.625.531-2.135 1.156-.466.565-.849 1.407-.7 2.224.82.026 1.664-.465 2.155-1.1zM18 15.108c-.328.73-.485 1.057-.907 1.704-.59.903-1.42 2.027-2.449 2.035-.914.01-1.15-.599-2.39-.591-1.24.006-1.5.603-2.415.594-1.029-.01-1.815-1.024-2.404-1.927-1.647-2.522-1.82-5.484-.805-7.06.723-1.118 1.862-1.772 2.933-1.772 1.09 0 1.775.602 2.678.602.875 0 1.408-.603 2.668-.603.954 0 1.965.522 2.685 1.424-2.359 1.3-1.977 4.688.406 5.594z"
        transform="translate(-990 -2658) translate(0 2650) translate(990 8)"
      />
    </g>
  </svg>
);
import React from "react";
import { IconProps } from "./interface";

export const PlayStoreIcon = ({ width = 40, height = 40 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 40 40"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="20" cy="20" r="20" fill="#F6F7F8" />
      <path
        fill="#FFC100"
        fillRule="nonzero"
        d="M14.444 11.916v16.168c0 .849.93 1.37 1.653.926l13.262-8.14c.693-.426.69-1.434-.006-1.855l-13.261-8.028c-.724-.438-1.648.083-1.648.929z"
      />
      <path
        fill="#D8E86D"
        fillRule="nonzero"
        d="M15.265 29.138L26.33 17.185 16.09 10.987c-.723-.438-1.647.083-1.647.929v16.168c0 .534.368.938.82 1.054z"
      />
      <path
        fill="#F52B2B"
        fillRule="nonzero"
        d="M16.097 29.01l9.104-5.589 1.129-.692-11.07-11.865c-.451.117-.816.52-.816 1.052v16.168c0 .849.93 1.37 1.653.926z"
      />
      <path
        fill="#00B7AD"
        fillRule="nonzero"
        d="M15.265 29.138l8.489-9.17-8.495-9.104c-.45.117-.816.52-.816 1.052v16.168c0 .534.369.938.822 1.054z"
      />
    </g>
  </svg>
);

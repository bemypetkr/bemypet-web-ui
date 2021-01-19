import React from "react";
import { IconProps } from "./interface";

export const AppleIcon = ({ width = 40, height = 40 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 40 40"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#090909"
        d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
        transform="translate(-436 -1738) translate(436 1738)"
      />
      <path
        fill="#FFF"
        d="M27.797 23.895c-.052.144-.103.298-.161.45-.483 1.272-1.217 2.401-2.107 3.437-.172.201-.372.384-.579.553-.409.336-.879.539-1.423.558-.408.012-.8-.06-1.178-.21-.274-.108-.544-.23-.821-.328-.901-.318-1.797-.276-2.684.065-.32.123-.635.258-.96.365-.378.123-.77.173-1.168.1-.348-.063-.653-.221-.935-.424-.35-.253-.645-.56-.92-.886-1.305-1.546-2.18-3.294-2.603-5.253-.182-.842-.27-1.691-.216-2.552.063-1.032.31-2.014.876-2.9.712-1.113 1.716-1.842 3.037-2.143.795-.182 1.568-.108 2.326.176.398.149.798.296 1.199.441.368.135.735.135 1.105-.002.408-.152.817-.303 1.228-.451.42-.149.848-.271 1.294-.305.668-.053 1.319.031 1.953.238.898.292 1.629.809 2.18 1.562.016.02.032.043.043.06-1.392.943-2.185 2.19-2.07 3.877.117 1.688 1.052 2.83 2.584 3.572zm-7.808-9.518c.41.01.806-.067 1.186-.214 1.734-.669 2.64-2.452 2.613-3.816-.002-.11-.01-.22-.015-.347-.178.026-.34.038-.496.076-1.266.302-2.24.989-2.881 2.1-.375.652-.583 1.344-.52 2.1.005.08.035.1.113.1z"
        transform="translate(-436 -1738) translate(436 1738)"
      />
    </g>
  </svg>
);

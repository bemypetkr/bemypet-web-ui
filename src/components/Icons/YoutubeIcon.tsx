import React from "react";
import { IconProps } from "./interface";

export const YoutubeIcon = ({ width = 40, height = 40 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    viewBox="0 0 40 40"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#CE1312"
        d="M0 20C0 8.954 8.82 0 19.7 0c10.88 0 19.701 8.954 19.701 20s-8.82 20-19.7 20C8.82 40 0 31.046 0 20z"
        transform="translate(-212 -1738) translate(212 1738)"
      />
      <path
        fill="#FFF"
        d="M29.954 15.974s-.205-1.502-.834-2.163c-.798-.87-1.692-.873-2.102-.924-2.937-.22-7.341-.22-7.341-.22h-.01s-4.404 0-7.34.22c-.41.05-1.305.055-2.103.924-.63.661-.834 2.163-.834 2.163s-.21 1.765-.21 3.529v1.654c0 1.764.21 3.528.21 3.528s.205 1.502.834 2.164c.798.868 1.847.841 2.314.932 1.678.167 7.134.219 7.134.219s4.41-.007 7.346-.228c.41-.05 1.304-.055 2.102-.923.629-.662.834-2.164.834-2.164s.21-1.764.21-3.528v-1.654c0-1.764-.21-3.529-.21-3.529z"
        transform="translate(-212 -1738) translate(212 1738)"
      />
      <path
        fill="#CE1312"
        d="M17.506 23.161L17.505 17.036 23.174 20.109z"
        transform="translate(-212 -1738) translate(212 1738)"
      />
    </g>
  </svg>
);

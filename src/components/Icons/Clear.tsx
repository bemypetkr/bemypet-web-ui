import React from "react";
import { colors } from "theme/color";
import { IconProps } from "./interface";

export const Clear = ({
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
      fill={color}
      d="M5.29 5.29c.389-.387 1.018-.387 1.406 0L12 10.596l5.304-5.304c.358-.358.922-.386 1.312-.083l.093.083c.388.388.388 1.017 0 1.405L13.405 12l5.304 5.304c.358.358.386.922.083 1.312l-.083.093c-.388.388-1.017.388-1.405 0L12 13.405l-5.304 5.304c-.358.358-.922.386-1.312.083l-.093-.083c-.388-.388-.388-1.017 0-1.405L10.595 12 5.291 6.696c-.358-.358-.386-.922-.083-1.312z"
      transform="translate(-580 -1617) translate(580 1617)"
    />
  </svg>
);

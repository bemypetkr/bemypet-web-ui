import React from "react";
import styled from "styled-components";

import Urls from "lib/urls";
import { Typography } from "./Typography";

export type AvatarAxis = "vertical" | "horizontal";

export type AvatarProps = {
  /**
   * Image source url
   *
   * @type {string}
   */
  src?: string;
  /**
   * Avatar width and height
   * Default is 96px
   *
   * @type {number}
   */
  size?: number;
  label?: React.ReactNode | string;
  /**
   * Default is vertical
   *
   * @type {AvatarAxis}
   */
  axis?: AvatarAxis;
  // todo
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typographyProps?: any;
};

export const Avatar = styled(
  ({
    size = 96,
    label,
    axis: _axis = "vertical",
    src,
    typographyProps,
    ...rest
  }: AvatarProps) => (
    <div {...rest}>
      {src ? <img width={size} height={size} src={src} /> : null}
      {label ? (
        typeof label == "string" ? (
          // eslint-disable-next-line react/no-children-prop
          <Typography {...typographyProps}>{label}</Typography>
        ) : (
          label
        )
      ) : null}
    </div>
  ),
)`
  width: ${({ size = 96 }) => size}px;
  height: ${({ size = 96 }) => size}px;
  background-repeat: no-repeat;
  background-position: top left;
  background-image: url(${Urls.placeholderImgSrc});
  background-size: ${({ size = 96 }) => size}px ${({ size = 96 }) => size}px;
  overflow: hidden;
  border-radius: 100%;

  display: flex;
  align-items: center;

  // default align is vertical
  flex-direction: column;
  min-height: ${({ size = 96 }) => size}px;
  height: auto;

  .bui-typography {
    padding-top: ${({ size = 96 }) => size + 14}px;
    white-space: nowrap;
    text-align: center;
  }

  // when it displayed horizontally
  ${({ axis, size = 96 }) =>
    axis === "horizontal"
      ? `
      flex-direction: row;
      min-width: ${({ size = 96 }) => size}px;
      width: auto;

      .bui-typography  {
        padding-top: 0;
        padding-left: ${size + 14}px;
        text-align: left;
      }
  `
      : ""}

  img {
    width: ${({ size = 96 }) => size}px;
    height: ${({ size = 96 }) => size}px;
    object-fit: cover;
  }
`;

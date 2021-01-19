import Urls from "lib/urls";
import React from "react";
import styled from "styled-components";

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
};

export const Avatar = styled(
  ({ size = 96, src = Urls.placeholderImgSrc, ...rest }: AvatarProps) => (
    <img width={size} height={size} src={src} {...rest} />
  ),
)`
  width: ${({ size = 96 }) => size}px;
  height: ${({ size = 96 }) => size}px;
  background-image: url(${Urls.placeholderImgSrc});
`;

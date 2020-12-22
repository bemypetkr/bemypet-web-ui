export const getPixel = (value: string | number) =>
  typeof value === "string" ? value : `${value}px`;

export const calcRem = (size: number) => `${size / 16}rem`;

export const calcHeight = (size: number, height: number) => `${height / size}`;

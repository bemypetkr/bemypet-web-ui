import { calcHeight, calcRem } from "lib/helpers";

import { TypographyVariantTheme } from "./interfaces";

const fontSizes: TypographyVariantTheme = {
  heading1: calcRem(36),
  heading2: calcRem(26),
  heading3: calcRem(20),
  body1: calcRem(16),
  body2: calcRem(13),
  caption: calcRem(12),
  article1: calcRem(16),
  article2: calcRem(14),
};

const lineHeights: TypographyVariantTheme = {
  heading1: calcHeight(36, 48),
  heading2: calcHeight(26, 38),
  heading3: calcHeight(20, 32),
  body1: calcHeight(16, 24),
  body2: calcHeight(13, 20),
  caption: calcHeight(12, 18),
  article1: calcHeight(16, 32),
  article2: calcHeight(14, 24),
};

const typography: TypographyVariantTheme = {
  heading1: `
    font-size: ${fontSizes.heading1};
    line-height: ${lineHeights.heading1};
    font-weight: normal;
  `,
  heading2: `
    font-size: ${fontSizes.heading2};
    line-height: ${lineHeights.heading2};
    font-weight: normal;
  `,
  heading3: `
    font-size: ${fontSizes.heading3};
    line-height: ${lineHeights.heading3};
    font-weight: normal;
  `,
  body1: `
    font-size: ${fontSizes.body1};
    line-height: ${lineHeights.body1};
    font-weight: normal;
  `,
  body2: `
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    font-weight: normal;
  `,
  caption: `
    font-size: ${fontSizes.caption};
    line-height: ${lineHeights.caption};
    font-weight: normal;
  `,
  article1: `
    font-size: ${fontSizes.article1};
    line-height: ${lineHeights.article1};
    font-weight: normal;
  `,
  article2: `
    font-size: ${fontSizes.article2};
    line-height: ${lineHeights.article2};
    font-weight: normal;
  `,
};

export default { fontSizes, lineHeights, typography };

import styled from "styled-components";

export type MessageBoxColor =
  | "primary"
  | "secondary"
  | "red"
  | "green"
  | "default";

/**
 * Returns the color string for CSS border-color property
 *
 * @param {*} theme
 * @param {MessageBoxColor} [color="default"]
 * @returns {string}
 */
function renderBorderColor(
  theme: any,
  color: MessageBoxColor = "default",
): string {
  switch (color) {
    case "primary":
      return theme.colors.primary100;
    case "secondary":
      return theme.colors.secondary100;
    case "red":
      return theme.colors.red;
    case "green":
      return theme.colors.green;
    case "default":
    default:
      return theme.colors.grey600;
  }
}

/**
 * Returns the color string for CSS color property
 *
 * @param {*} theme
 * @param {MessageBoxColor} [color="default"]
 * @returns {string}
 */
function renderColor(theme: any, color: MessageBoxColor = "default"): string {
  switch (color) {
    case "primary":
      return theme.colors.primary100;
    case "secondary":
      return theme.colors.secondary100;
    case "red":
      return theme.colors.red;
    case "green":
      return theme.colors.green;
    case "default":
    default:
      return theme.colors.grey600;
  }
}

export const MessageBox = styled.div<{ color?: MessageBoxColor }>`
  border: 1px solid ${({ theme, color }) => renderBorderColor(theme, color)};
  border-left: 4px solid
    ${({ theme, color }) => renderBorderColor(theme, color)};
  border-radius: 6px;
  color: ${({ theme, color }) => renderColor(theme, color)};
  padding: 12px;
  margin-left: 0;
  margin-bottom: 16px;
`;

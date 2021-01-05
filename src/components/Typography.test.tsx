import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "theme";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("is truthy", () => {
    expect(Typography).toBeTruthy();
  });

  const component = renderer.create(
    <ThemeProvider>
      <Typography />
    </ThemeProvider>
  );

  it("matches snapshot", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

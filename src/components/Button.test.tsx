import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "theme";
import { Button } from "./Button";

describe("Button", () => {
  it("is truthy", () => {
    expect(Button).toBeTruthy();
  });

  let component = renderer.create(
    <ThemeProvider>
      <Button />
    </ThemeProvider>,
  );

  it("matches snapshot", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches snapshot", () => {
    component.root.props;
  });
});

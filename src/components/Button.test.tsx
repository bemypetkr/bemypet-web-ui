import { ThemeProvider } from "index";
import React from "react";
import renderer from "react-test-renderer";

import { Button } from "./Button";

describe("Button", () => {
  let component: any = null;

  it("renders correctly", () => {
    component = renderer.create(
      <ThemeProvider>
        <Button />
      </ThemeProvider>,
    );
    expect(component).toBeTruthy();
  });
});

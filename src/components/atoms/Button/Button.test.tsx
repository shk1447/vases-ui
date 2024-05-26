import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import { lightTheme, ThemeProvider } from "@vases-ui/theme";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="primary" color="vases_neutral">
          Render Test
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Render Test")).toBeInTheDocument();
  });

  it("button onClick when clicked", () => {
    const onClick = jest.fn();

    render(
      <ThemeProvider theme={lightTheme}>
        <Button onClick={onClick} variant="primary" color="vases_neutral">
          OnClick Test
        </Button>
      </ThemeProvider>
    );
    const button = screen.getByText("OnClick Test");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});

import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../src/theme/index";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ThemeBlock = styled.div(
  ({ left, fill, isDark }) =>
    css`
      position: relative;
      top: 0;
      left: ${left || fill ? 0 : "50vw"};
      border-right: ${left ? "1px solid #202020" : "none"};
      right: ${left ? "50vw" : 0};
      width: ${fill ? "100vw" : "50vw"};
      height: 100vh;
      bottom: 0;
      overflow: auto;
      background: ${isDark ? "#000000" : "#ffffff"};
    `
);

const withTheme = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "dark" ? darkTheme : lightTheme;

  switch (theme) {
    case "side-by-side": {
      return (
        <div style={{ display: "flex", height: "100%" }}>
          <ThemeProvider theme={lightTheme}>
            <div
              style={{
                width: "50%",
                backgroundColor: "#f3f6f9",
                borderRight: "1px solid #202020",
                height: "100%",
              }}
            >
              <StoryFn />
            </div>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <div
              style={{
                width: "50%",
                backgroundColor: "black",
                height: "100%",
              }}
            >
              <StoryFn />
            </div>
          </ThemeProvider>
        </div>
      );
    }
    case "dark": {
      return (
        <ThemeProvider theme={storyTheme}>
          <div style={{ backgroundColor: "black", height: "100%" }}>
            <StoryFn />
          </div>
        </ThemeProvider>
      );
    }
    default: {
      return (
        <ThemeProvider theme={storyTheme}>
          <div style={{ backgroundColor: "#f3f6f9", height: "100%" }}>
            <StoryFn />
          </div>
        </ThemeProvider>
      );
    }
  }
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "theme for vases ui components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

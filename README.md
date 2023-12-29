# Introduction

개인 프로젝트에서 사용하는 Design System 입니다.

# Getting Started

다음과 같은 방법을 이용해서 설치 할 수 있습니다.

```shell
yarn add vases-ui
```

```tsx
import React, { createElement } from "react";
import { Units, Theme } from "vases-ui";

function App() {
  const theme = Theme.createMyTheme('light',{})

  return (
    <Theme.ThemeProvider theme={theme}>
      <Units.Button variant="contained" color="primary">Button</Units.Button>
    </Theme.ThemeProvider>
  );
}

export default App;

```

# Storybook Site
- https://shk1447.github.io/vases-ui
module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/stories/docs/introduction.stories.mdx',
    '../src/stories/docs/getstarted.stories.mdx',
    '../src/stories/docs/changelog.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // 'storybook-anima',
  ],
  features: {
    postcss: false,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  previewHead: head => `
    ${head}
    <style>
      html, body {
        height: 100%;
      }
      
      #root {
        height: 100%;
      }
    </style>
  `,
};

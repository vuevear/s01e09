module.exports = {
  stories: ['../../src/**/*.stories.(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
    },
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
  ]
}

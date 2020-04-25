export const babelDefault = config => {
  return {
    ...config,
    presets: [
      require.resolve('@themeprint/babel-preset-themeprint'),
      ...config.presets,
    ],
  }
}

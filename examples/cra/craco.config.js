module.exports = {
  babel: {
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          throwIfNamespace: true,
          runtime: 'automatic',
          importSource: 'theme-ui',
        },
      ],
    ],
  },
}

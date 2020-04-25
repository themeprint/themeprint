const { declare } = require('@babel/helper-plugin-utils')
const themeprintPlugin = require('@themeprint/babel-plugin-themeprint')

const preset = declare(api => {
  api.assertVersion(7)

  return {
    plugins: [themeprintPlugin],
  }
})

module.exports = preset

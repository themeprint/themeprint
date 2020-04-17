import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from './plugin'

describe('themeprint babel plugin', () => {
  pluginTester({
    plugin,
    fixtures: path.join(__dirname, '../__fixtures__'),
  })
})

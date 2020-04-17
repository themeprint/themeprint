const { isJsxImport, createImportDeclaration, removeJsx } = require('./imports')

const plugin = ({ types: t }) => {
  return {
    name: 'themeprint',
    visitor: {
      ImportDeclaration(path) {
        if (isJsxImport(path.node)) {
          path.insertAfter(createImportDeclaration(t))
          removeJsx(path)
        }
      },
    },
  }
}

module.exports = plugin

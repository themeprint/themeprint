module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  rootDir: './src',
  moduleNameMapper: {
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
}

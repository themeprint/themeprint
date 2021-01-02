module.exports = {
  // preset: 'ts-jest/presets/js-with-ts',
  preset: 'ts-jest/presets/js-with-babel',
  // testEnvironment: 'node',
  rootDir: './src',
  moduleNameMapper: {
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
}

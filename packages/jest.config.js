module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  rootDir: './src',
  //   setupFilesAfterEnv: ['jest-extended', '<rootDir>/test/setup-tests.ts'],
  moduleNameMapper: {
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
}

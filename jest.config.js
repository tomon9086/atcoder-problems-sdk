module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  preset: 'ts-jest/presets/js-with-babel',
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1'
  }
}

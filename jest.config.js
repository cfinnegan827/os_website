/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = require('next/jest')()({
  moduleDirectories: ['<rootDir>', 'node_modules'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/e2e/']
});

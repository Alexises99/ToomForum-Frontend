import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/"
  ]
};
export default config;

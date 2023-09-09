import type { Config } from "jest";

const config: Config = {
  maxWorkers: "5",
  verbose: true,
  runner: "groups",
  setupFiles: [],
  preset: "ts-jest/presets/default-esm", // or other ESM presets
  setupFilesAfterEnv: [ "jest-matcher-specific-error", "<rootDir>/tests/setup.ts" ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        babel: true,
        tsconfig: "<rootDir>/../tsconfig.json",
        isolatedModules: true,
        useESM: true,
        sourceType: "module",
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "node",
  clearMocks: true,
  moduleFileExtensions: [ "js", "jsx", "ts", "tsx" ],
  roots: [ "./" ],
  coverageReporters: [ "text", "lcov" ],
  coverageDirectory: "<rootDir>/../coverage",
  collectCoverageFrom: [ "<rootDir>/**/*.{ts, js}", "!<rootDir>/defaults/**", "!<rootDir>/Commands/DefaultProject/**", "!<rootDir>/Tests/**" ],
  snapshotFormat: {
    escapeString: false,
    highlight: true,
  },
};

export default config;

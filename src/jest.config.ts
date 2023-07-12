import type { Config } from "jest";

const config: Config = {
  maxWorkers: "5",
  verbose: true,
  runner: "groups",
  setupFiles: [],
  setupFilesAfterEnv: [ "jest-matcher-specific-error", "<rootDir>/tests/setup.ts" ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        babel: true,
        tsconfig: "tsconfig.json",
        isolatedModules: true,
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "node",
  clearMocks: true,
  moduleFileExtensions: [ "js", "jsx", "ts", "tsx" ],
  roots: [ "./" ],
  coverageReporters: [ "text", "lcov" ],
  coverageDirectory: "./coverage",
  collectCoverageFrom: [ "<rootDir>/**/*.{ts, js}", "!<rootDir>/defaults/**", "!<rootDir>/Commands/DefaultProject/**" ],
  snapshotFormat: {
    escapeString: false,
    highlight: true,
  },
};

export default config;

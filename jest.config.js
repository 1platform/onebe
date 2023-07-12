module.exports = {
  maxWorkers: "5",
  verbose: true,
  runner: "groups",
  setupFiles: [],
  setupFilesAfterEnv: [
    "jest-matcher-specific-error",
    "<rootDir>/src/tests/setup.ts"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": [ "ts-jest", {
      babel: true,
      tsconfig: "tsconfig.json",
      isolatedModules: true,
    } ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "node",
  clearMocks: true,
  moduleFileExtensions: [ "js", "jsx", "ts", "tsx" ],
  roots: [
    "./src",
  ],
  coverageReporters: [ "text", "lcov" ],
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts, js}",
    "!<rootDir>/src/types/**",
    "!<rootDir>/src/tests/**",
    "!<rootDir>/src/enums/**",
  ],
  snapshotFormat: {
    escapeString: false,
    highlight: true,
  },
}

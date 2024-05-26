module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/react/dont-cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "~/(.*)": "<rootDir>/src/$1",
    "^@vases-ui/(.*)$": "<rootDir>/src/$1",
  },
};

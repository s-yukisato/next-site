module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/__tests__"],
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.d.ts",
      "!**/node_modules/**",
    ],
    moduleNameMapper: {
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      // Handle CSS imports (without CSS modules)
      "^.+\\.(css|sass|scss)$": "<rootDir>/__tests__/__mocks__/styleMock.js",
  
      // Handle image imports
      "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
        "<rootDir>/__tests__/__mocks__/fileMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.ts"],
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: [
      "<rootDir>/.next/",
      "<rootDir>/node_modules/",
      "<rootDir>/__tests__/setupTests.ts",
      "<rootDir>/__tests__/tsconfig.jest.json",
      "<rootDir>/__tests__/__mocks__/",
    ],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
      "/node_modules/",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"],
  };
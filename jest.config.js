export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Ensure Babel handles JSX
  },

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverage: true, // Enables coverage collection
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "!src/main.jsx", // Exclude entry point
    "!src/index.jsx",
    "!src/**/*.test.{js,jsx,ts,tsx}", // Exclude test files
    "!src/**/types.ts", // Exclude TypeScript type files
  ],
};

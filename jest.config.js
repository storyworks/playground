module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coveragePathIgnorePatterns: [
    "/.*.demo.[jt]sx?$",
    "/.*.test.[jt]sx?$",
    "/node_modules",
  ],
  preset: "ts-jest",
  testEnvironment: "jsdom",
};

module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};

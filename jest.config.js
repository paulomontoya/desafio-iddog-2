module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.scss$": "<rootDir>/jest.fileTransformer.js"
  }
};
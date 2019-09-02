// https://jestjs.io/docs/en/configuration.html

module.exports = {
    verbose: true,
    clearMocks: false,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    reporters: ["default"],
    // globals: {
    //     'ts-jest': {
    //         tsConfig: 'tsconfig.text.json',
    //     }
    // },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|map3|m4a|aac|oga)$":"<rootDir>/test/__mocks__/file-mock.js",
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    transform: {
        "^.+unit\\.(js|jsx)$": "babel-jest",
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]

};
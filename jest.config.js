module.exports = {
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        ".*\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    // testMatch: [ "/__tests__/**/*.js?(x)", "/?(*.)+(spec|test).js?(x)" ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$"
};

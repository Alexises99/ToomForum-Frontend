"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        "<rootDir>/build/",
        "<rootDir>/node_modules/"
    ]
};
exports.default = config;

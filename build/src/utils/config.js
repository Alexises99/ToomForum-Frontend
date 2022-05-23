"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
let POSTGREESQL = process.env.DATABASE_URL;
if (process.env.NODE_ENV === 'test') {
    POSTGREESQL = process.env.DATABASE_URL_TEST;
}
else if (process.env.NODE_ENV === 'development') {
    POSTGREESQL = process.env.DATABASE_URL_TEST_DEV;
}
const SECRET = process.env.SECRET;
console.log(POSTGREESQL);
exports.default = {
    PORT,
    POSTGREESQL,
    SECRET
};

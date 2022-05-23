"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBadRequestException = exports.UserNotFoundException = void 0;
const HttpException_1 = __importDefault(require("./HttpException"));
class UserNotFoundException extends HttpException_1.default {
    constructor(username) {
        super(404, `User with id ${username} not found`);
    }
}
exports.UserNotFoundException = UserNotFoundException;
class UserBadRequestException extends HttpException_1.default {
    constructor(msg) {
        super(400, msg);
    }
}
exports.UserBadRequestException = UserBadRequestException;

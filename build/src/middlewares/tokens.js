"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const NotAuthorized_1 = __importDefault(require("../exceptions/NotAuthorized"));
const config_1 = __importDefault(require("../utils/config"));
const tokenExtractor = (req, _res, next) => {
    const authorization = req.get('Authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.token = authorization.substring(7);
    }
    next();
};
const getUserFromToken = (req, _res, next) => {
    const token = req.token;
    if (token) {
        try {
            jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
            const decodedToken = jsonwebtoken_1.default.decode(token);
            if (decodedToken) {
                req.user = decodedToken;
            }
        }
        catch (err) {
            if (err instanceof jsonwebtoken_1.JsonWebTokenError || err instanceof jsonwebtoken_1.TokenExpiredError) {
                const error = new NotAuthorized_1.default(err.message);
                next(error);
                return;
            }
        }
    }
    else {
        const error = new NotAuthorized_1.default('Missing token');
        next(error);
        return;
    }
    next();
};
exports.default = {
    tokenExtractor,
    getUserFromToken
};

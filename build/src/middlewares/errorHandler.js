"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
const errorHandler = (err, _req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Someting went wrong';
    (0, logger_1.error)(message);
    res
        .status(status)
        .json({
        status,
        message
    });
    next(err);
};
exports.default = errorHandler;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../services/users"));
const utils_1 = require("../utils/users/utils");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', ((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.default.getUsers();
    return res.json(users);
})));
usersRouter.post('/', ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserEntry = (0, utils_1.toNewUser)(req.body);
        const user = yield users_1.default.addUser(newUserEntry);
        res.json(user);
    }
    catch (err) {
        res.status(400).json({ err });
    }
})));
usersRouter.get('/:id', ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.default.getSingleUser(+req.params.id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).end();
    }
})));
usersRouter.delete('/:id', ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield users_1.default.deleteUser(+req.params.id);
        res.status(204).end();
    }
    catch (err) {
        res.status(404).end();
    }
})));
usersRouter.put(':id', ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.default.updateUser(+req.params.id, (0, utils_1.toNewUser)(req.body));
        if (user) {
            res.json(user);
        }
    }
    catch (err) {
        res.status(404).end();
    }
})));

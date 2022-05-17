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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User.findAll();
    return users;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = user_1.User.findByPk(id);
    return user !== null
        ? user
        : null;
});
const addUser = (newUserEntry) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.create(newUserEntry);
    return user;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getSingleUser(id);
    if (user) {
        yield user.destroy();
    }
});
const updateUser = (id, newUserEntry) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getSingleUser(id);
    if (user) {
        user.password = newUserEntry.password;
        yield user.save();
        return user;
    }
    return null;
});
exports.default = {
    getUsers,
    getSingleUser,
    addUser,
    deleteUser,
    updateUser
};

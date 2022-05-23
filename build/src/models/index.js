"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const island_1 = require("./island");
const user_1 = require("./user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
user_1.User.hasOne(island_1.Island);
island_1.Island.belongsTo(user_1.User);
void user_1.User.sync();
void island_1.Island.sync();
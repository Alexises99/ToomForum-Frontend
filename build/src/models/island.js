"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Island = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../utils/db");
class Island extends sequelize_1.Model {
}
exports.Island = Island;
Island.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fruit: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    dreamCode: {
        type: sequelize_1.DataTypes.TEXT,
        unique: true
    },
    name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: db_1.sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'island',
});

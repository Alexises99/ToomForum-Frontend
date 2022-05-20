import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize"
import {sequelize} from '../utils/db'


interface UserEntry {
  username: string
  password: string
}

type NonSensitiveInfo = Omit<UserEntry, 'password'>


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
  declare username: string
  declare password: string
}

User.init({
  username: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'user',
})

export  {
  User,
  NonSensitiveInfo,
  UserEntry
}
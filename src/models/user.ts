import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize"
import {sequelize} from '../utils/db'


interface UserEntry {
  id: number
  username: string
  password: string
}

type NewUserEntry = Omit<UserEntry, 'id'>


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
  declare id: CreationOptional<number>
  declare username: string
  declare password: string
}

User.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
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
  tableName: 'Users'
})

export  {
  User,
  NewUserEntry,
  UserEntry
}
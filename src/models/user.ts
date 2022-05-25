import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize"
import {sequelize} from '../utils/db'


interface UserEntry {
  username: string
  password: string,
}

interface UserEntryWithImage extends UserEntry{
  image_id: number | null
}

type NonSensitiveInfo = Omit<UserEntry, 'password'>


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
  declare username: string
  declare password: string
  declare imageId: number | null
}

User.init({
  username: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'images',
      key: 'id'
    }
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
  UserEntry,
  UserEntryWithImage
}
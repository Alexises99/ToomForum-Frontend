import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize"
import {sequelize} from '../utils/db'


interface IslandEntry {
  id: number
  username: string
  password: string
}

type NewIslandEntry = Omit<IslandEntry, 'id'>


class Island extends Model<InferAttributes<Island>, InferCreationAttributes<Island>>{
  declare id: CreationOptional<number>
  declare fruit: string
  declare dreamCode: string
  declare name: string
}

Island.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fruit: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dreamCode: {
    type: DataTypes.TEXT,
    unique: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'island',
})

export  {
  Island,
  NewIslandEntry,
  IslandEntry
}
import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize"
import {sequelize} from '../utils/db'


interface ImageType {
  id: string
  type: string,
  name: string,
  data: Buffer
}

class Image extends Model<InferAttributes<Image>, InferCreationAttributes<Image>>{
  declare id: CreationOptional<number>
  declare type: string
  declare data: Buffer
  declare name: string
}

Image.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING
  },
  data: {
    type: DataTypes.BLOB('long')
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'image',
})

export  {
  Image,
  ImageType
}
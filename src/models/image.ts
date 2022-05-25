import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize"
import {sequelize} from '../utils/db'


interface ImageType {
  id: number
  name: string,
  data: Buffer
}

class Image extends Model<InferAttributes<Image>, InferCreationAttributes<Image>>{
  declare id: CreationOptional<number>
  declare data: Buffer
  declare name: string
}

Image.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.BLOB
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
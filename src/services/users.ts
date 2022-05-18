import { UniqueConstraintError, ValidationError } from "sequelize"
import { UserBadRequestException, UserNotFoundException } from "../exceptions/Users"
import { NewUserEntry } from "../models/user"
import { User } from "../models"
import * as bcrypt from 'bcrypt'

const getUsers = async (): Promise<Array<User>> => {
  const users = await User.findAll()
  return users
}

const getSingleUser = async (id: number): Promise<User> => {
  const user = await User.findByPk(id)
  if (user){
    return user
  } else {
    throw new UserNotFoundException(id)
  }
}

const addUser = async (newUserEntry: NewUserEntry): Promise<User | void>  => {
  try {
    const saltRounds = 10
    newUserEntry.password = await bcrypt.hash(newUserEntry.password, saltRounds)
    const user = await User.create(newUserEntry)
    return user
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      const msg = err.errors.map(err => err.message).join(',')
      throw new UserBadRequestException(msg)
    } else if(err instanceof ValidationError) {
      const msg = err.errors.map(err => err.message).join(',')
      throw new UserBadRequestException(msg)
    }
  }
}

const deleteUser = async (id: number): Promise<void> => {
  const user = await getSingleUser(id)
  if (user) {
    await user.destroy()
  }
}

const updateUser =  async (id: number, newUserEntry: NewUserEntry): Promise<User | null> => {
  const user = await getSingleUser(id)
  if (user) {
    user.password = newUserEntry.password
    await user.save()
    return user
  }
  return null
}

export default {
  getUsers,
  getSingleUser,
  addUser,
  deleteUser,
  updateUser
}
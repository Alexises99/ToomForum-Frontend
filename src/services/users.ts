import { NewUserEntry, User } from "../models/user"

const getUsers = async (): Promise<Array<User>> => {
  const users = await User.findAll()
  return users
}

const getSingleUser = async (id: number): Promise<User | null> => {
  const user = User.findByPk(id)
  return user !== null
    ? user
    : null
}

const addUser = async (newUserEntry: NewUserEntry): Promise<User> => {
  const user = await User.create(newUserEntry)
  return user
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
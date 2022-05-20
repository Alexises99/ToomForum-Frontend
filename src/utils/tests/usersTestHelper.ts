import { User } from "../../models";
import { UserEntry } from "../../models/user";
import * as bcrypt from 'bcrypt'

const initialUsers: Array<UserEntry> = [
  {
    username: 'elubuntin',
    password: 'pinguino'
  },
  {
    username: 'lowrins',
    password: 'tortuga'
  },
  {
    username: 'ranaldo',
    password: 'culero'
  },
]

const usersInDb = async (): Promise<Array<User>> => {
  const users = await User.findAll()
  return users
}

const createUsers = (): Promise<Array<User>> => {
  const createdUsers = initialUsers.map(async user => {
    const password = await bcrypt.hash(user.password, 10)
    return await User.create({username: user.username, password})
  })
  return Promise.all(createdUsers)
}

const deleteUsers = async (): Promise<void> => {
  await User.destroy({
    where: {},
    truncate: false
  })
}

export default {
  initialUsers,
  usersInDb,
  createUsers,
  deleteUsers
}
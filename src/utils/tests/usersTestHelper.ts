import { User } from "../../models";
import { NewUserEntry } from "../../models/user";

const initialUsers: Array<NewUserEntry> = [
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
  const createdUsers = initialUsers.map(async user => await User.create(user))
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
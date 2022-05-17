import { RequestHandler, Router } from "express"
import usersService from '../services/users'
import { toNewUser } from "../utils/users/utils"

const usersRouter = Router()

usersRouter.get('/', (async (_req, res) => {
  const users = await usersService.getUsers()
  return res.json(users)
}) as RequestHandler)

usersRouter.post('/', (async (req, res) => {
  try {
    const newUserEntry = toNewUser(req.body)
    const user = await usersService.addUser(newUserEntry)
    res.json(user)
  } catch (err) {
    res.status(400).json({err})
  }
}) as RequestHandler)

usersRouter.get('/:id', (async (req, res) => {
  const user = await usersService.getSingleUser(+req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
}) as RequestHandler)

//Borrar entrada en islands
usersRouter.delete('/:id', (async (req, res) => {
  try {
    await usersService.deleteUser(+req.params.id)
    res.status(204).end()
  } catch (err) {
    res.status(404).end()
  }
}) as RequestHandler)

usersRouter.put('/:id', (async (req, res) => {
  try{
    const user = await usersService.updateUser(+req.params.id, toNewUser(req.body))
    if (user) {
      res.json(user)
    }
  } catch (err) {
    console.log(err)
    res.status(404).end()
  }
  
}) as RequestHandler)

export default usersRouter

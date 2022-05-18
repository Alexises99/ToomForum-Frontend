import { RequestHandler, Router } from "express"
import { User } from "../models/user"
import usersService from '../services/users'
import { toNewUser } from "../utils/users/parsers"

const usersRouter = Router()

usersRouter.get('/', (async (_req, res) => {
  const users = await usersService.getUsers()
  return res.json(users)
}) as RequestHandler)

usersRouter.post('/', (async (req, res, next) => {
  try {
    const newUserEntry = toNewUser(req.body)
    const user = await usersService.addUser(newUserEntry as User)
    res.json(user)
  } catch (err) {
    next(err)
  }
}) as RequestHandler)

usersRouter.get('/:id', (async (req, res, next) => {
  try {
    const user = await usersService.getSingleUser(+req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
}) as RequestHandler)

//Borrar entrada en islands
usersRouter.delete('/:id', (async (req, res) => {
  try {
    await usersService.deleteUser(+req.params.id)
    res.status(204).end()
  } catch (err) {
    console.log(err)
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
  }
  
}) as RequestHandler)

export default usersRouter

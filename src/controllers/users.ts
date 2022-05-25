import { RequestHandler, Router} from "express"
import usersService from '../services/users'
import { toNewUser } from "../utils/users/parsers"
import tokens from "../middlewares/tokens"
import NotAuthorizedException from "../exceptions/NotAuthorized"
//import { User } from "../models"

const usersRouter = Router()

usersRouter.get('/', (async (_req, res) => {
  const users = await usersService.getUsers()
  const returnedUsers = usersService.getNonSensitiveUserInformation(users)
  res.json(returnedUsers)
}) as RequestHandler)

usersRouter.post('/', (async (req, res, next) => {
  try {
    const newUserEntry = toNewUser(req.body)
    const user = await usersService.addUser(newUserEntry)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}) as RequestHandler)

usersRouter.get('/:username', tokens.getUserFromToken, (async (req, res, next) => {
  try {
    if(req.user?.username === req.params.username) {
      const user = await usersService.getSingleUser(req.params.username)
      //res.json(usersService.getNonSensitiveUserInformation(user))
      res.json(user)
    } else {
      next(new NotAuthorizedException('not authorized, you are not this user'))
    }
  } catch (err) {
    next(err)
  }
}) as RequestHandler)

//Borrar entrada en islands
usersRouter.delete('/:username', tokens.getUserFromToken, (async (req, res, next) => {
  try {
    if (req.user?.username === req.params.username) {
      await usersService.deleteUser(req.params.username)
      res.status(204).end()
    } else {
      next(new NotAuthorizedException('not authorized, you are not this user'))
    }
  } catch (err) {
    console.log(err)
  }
}) as RequestHandler)

usersRouter.put('/:username', (async (req, res) => {
  try{
    const user = await usersService.updateUser(req.params.username, toNewUser(req.body))
    if (user) {
      res.json(usersService.getNonSensitiveUserInformation(user))
    }
  } catch (err) {
    console.log(err)
  }
  
}) as RequestHandler)

export default usersRouter

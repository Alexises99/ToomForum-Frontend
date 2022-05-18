import { RequestHandler, Router } from "express"
import { User } from "../models"
import { toNewUser } from "../utils/users/parsers"
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../utils/config'
import { NewUserEntry } from "../models/user"

const loginRouter = Router()

loginRouter.post('/', (async (req,res) => {
  const body = toNewUser(req.body)

  const user = await User.findOne({
    where: {
      username: body.username
    }
  })

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.password)
  
  if (!(passwordCorrect && user)) {
    return res.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken: NewUserEntry = {
    username: user.username,
    password: user.password
  }

  const username = userForToken.username

  const token = jwt.sign(userForToken, config.SECRET as jwt.Secret)
  return res
    .status(200)
    .json({token, username})
}) as RequestHandler)

export default loginRouter
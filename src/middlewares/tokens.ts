import { NextFunction, Response, Request, RequestHandler } from "express"
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'
import NotAuthorizedException from "../exceptions/NotAuthorized"
import { UserEntry } from "../models/user"
import config from '../utils/config'

const tokenExtractor: RequestHandler = (req: Request, _res: Response, next: NextFunction) => {
  const authorization = req.get('Authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7)
  }
  next()
}

const getUserFromToken: RequestHandler = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.token
  if (token) {
    try {
      jwt.verify(token, config.SECRET as string)
      const decodedToken = jwt.decode(token) as UserEntry
      if (decodedToken) {
        req.user = decodedToken
      }
    } catch (err) {
      if (err instanceof JsonWebTokenError || err instanceof TokenExpiredError) {
        const error = new NotAuthorizedException(err.message)
        next(error)
        return
      }
    }
  } else {
    const error = new NotAuthorizedException('Missing token')
    next(error)
    return
  }
  next()
}

export default {
  tokenExtractor,
  getUserFromToken
}
import HttpException from "./HttpException";

class UserNotFoundException extends HttpException {
  constructor(username: string) {
    super(404, `User with id ${username} not found`)
  }
}

class UserBadRequestException extends HttpException {
  constructor(msg: string) {
    super(400, msg)
  }
}

export {
  UserNotFoundException,
  UserBadRequestException
}
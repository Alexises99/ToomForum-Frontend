import HttpException from "./HttpException";

class UserNotFoundException extends HttpException {
  constructor(id: number) {
    super(404, `User with id ${id} not found`)
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
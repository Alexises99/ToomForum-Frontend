import HttpException from "./HttpException";

class NotAuthorizedException extends HttpException {
  constructor(msg: string) {
    super(401, msg)
  }
}

export default NotAuthorizedException

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { UserBadRequestException} from "../../exceptions/Users";
import { UserEntryWithImage } from "../../models/user";
import * as check from '../checkers'

const toNewUser = (object: any): UserEntryWithImage=> {
  const toNewUser: UserEntryWithImage = {
    username: parseUsername(object.username),
    password: parsePassword(object.password),
    image_id: parseImageId(object.imageId)
  }
  return toNewUser
}

const parseUsername = (username: any): string => {
  if (!username || !check.isString(username)) {
    throw new UserBadRequestException(`Incorrect or missing username ${username}`)
  }
  return username
}

const parsePassword = (password: any): string => {
  if (!password || !check.isString(password)) {
    throw new UserBadRequestException(`Incorrect or missing password ${password}`)
  }
  return password
}

const parseImageId = (imageId: any): number | null => {
  if (!imageId || !check.isNumber(imageId)) {
    return null
  }
  return imageId
}

export {
  toNewUser,
}
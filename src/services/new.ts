import axios, { AxiosRequestConfig } from "axios"
import { NewAttributes } from "../interfaces/new/new.interface"

const baseUrl = "/api/news"

export interface ResponseNew {
  UserId: number
  createdAt: string
  endHour: string
  id: number
  price: number
  startHour: string
  User: User
}

interface User {
  ImageId: number
  id: number
  username: string
  Island: Island
}

interface Island {
  ImageId: number | null
  dreamCode: string
  fruit: string
  id: number
  name: string
}

const getAllNews = async (): Promise<Array<ResponseNew>> => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addNew = async (newObj: NewAttributes, token: string) => {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }
  console.log(token)
  const response = await axios.post(baseUrl, newObj, config)
  return response.data
}

export default {
  getAllNews,
  addNew,
}

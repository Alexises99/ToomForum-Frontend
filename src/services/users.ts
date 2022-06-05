import axios, { AxiosRequestConfig } from "axios"
import { UserEntry } from "../interfaces/users/users"

const baseUrl = "/api/users"

let token = ""

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const config: AxiosRequestConfig = {
  headers: {
    Authorization: token,
  },
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOne = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`, config)
  return response.data
}

const create = async (user: UserEntry) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

const update = async (user: UserEntry) => {
  const response = await axios.put(`${baseUrl}/${user.id}`, user, config)
  return response.data
}

export default {
  getAll,
  getOne,
  create,
  update,
  setToken,
}

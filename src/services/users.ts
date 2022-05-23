import axios, { AxiosRequestConfig } from "axios"
import { UserEntry } from "../types/users/users"

const baseUrl = '/api/users'

let token = ''

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const config: AxiosRequestConfig = {
  headers: {
    Authorization: token
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOne = async (username: string) => {
  const response = await axios.get(`${baseUrl}/${username}`, config)
  return response.data
}

const create = async (user: UserEntry) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

const update = async (user: UserEntry) => {
  const response = await axios.put(`${baseUrl}/${user.username}`, user, config)
  return response.data
}

export default {
  getAll,
  getOne,
  create,
  update,
  setToken
}
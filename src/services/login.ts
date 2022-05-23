import axios from "axios"
import { UserEntry } from "../types/users/users"

const baseUrl = '/api/login'

const login = async (user: UserEntry) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

export default {
  login
}
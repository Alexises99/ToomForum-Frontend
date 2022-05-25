import axios from "axios"

const baseUrl = '/api/images'

const getOne = async (imgId: number) => {
  const response = await axios.get(`${baseUrl}/${imgId}`)
  return response.data
}

export default {
  getOne
}
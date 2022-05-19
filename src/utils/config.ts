import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001

let POSTGREESQL = process.env.DATABASE_URL

if (process.env.NODE_ENV === 'test') {
  POSTGREESQL = process.env.DATABASE_URL_TEST
}
const SECRET = process.env.SECRET

export default {
  PORT, 
  POSTGREESQL,
  SECRET
}
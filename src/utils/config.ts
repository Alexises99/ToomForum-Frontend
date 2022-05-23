import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001

let POSTGREESQL = process.env.DATABASE_URL

if (process.env.NODE_ENV === 'test') {
  POSTGREESQL = process.env.DATABASE_URL_TEST
} else if (process.env.NODE_ENV === 'development') {
  POSTGREESQL = process.env.DATABASE_URL_TEST_DEV
}
const SECRET = process.env.SECRET

export default {
  PORT, 
  POSTGREESQL,
  SECRET
}
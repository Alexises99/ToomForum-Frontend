import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001

const POSTGREESQL = process.env.DATABASE_URL

export default {PORT, POSTGREESQL}
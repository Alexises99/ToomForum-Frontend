import express from 'express'
import cors from 'cors'
import usersRouter from './controllers/users'

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/users', usersRouter)


export { app }

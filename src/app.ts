import express from 'express'
import cors from 'cors'
import usersRouter from './controllers/users'
import loginRouter from './controllers/login'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(errorHandler)


export { app }

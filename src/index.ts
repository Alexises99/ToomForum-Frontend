import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.get('/api/ping', (_req, res) => {
  res.end("pong")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const messages = ['hello', 'hi', 'its working']

app.get('/messages', (req, res) => {
  res.send(messages)
})

export default app

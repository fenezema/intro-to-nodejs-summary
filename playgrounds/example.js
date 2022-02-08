// inspired from https://intro-to-nodejs-v2-site.vercel.app/lesson/10-servers
import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'

const { urlencoded, json } = bp

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(morgan('dev'))

app.get('/hello', (req, res) => {
  res.json({ data: "fabulous data" })
})

app.post('/parrot', (req, res) => {
  const newTodo = { complete: false, id: Date.now(), text: req.body.text }
  res.json({ data: newTodo })
})

app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})

import "dotenv/config"
import express from 'express'
import f2pApiProxy from './controllers/f2pApiProxy.js'

const app = express()
const port = process.env.PORT || 4000

app.use(express.static("dist"))
app.use(express.json())

app.get('/api', (_req, res) => {
  res.send("v0.1.1")
})

app.use('/api', f2pApiProxy)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
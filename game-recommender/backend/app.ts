import express from 'express'

const app = express()
const port = 4000


app.get('/api', (_req, res) => {
  res.send("ok")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
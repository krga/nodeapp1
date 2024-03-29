
const express = require('express')
const app = express()
const port = 3000

const env = process.env.NODE_ENV;

app.get('/', (req, res) => {
  res.send('Hello '+env+': Version 03!')
})

app.get('/test', (req, res) => {
  res.send('Hello '+env+': Version 03!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

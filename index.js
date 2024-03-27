require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/atul', (req, res) => {
    res.send("Hello i am atul")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
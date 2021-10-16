const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('this app run properly')
})

app.get('/call/:name', (req, res) => {
  res.json({message: `hello ${req.params.name}!`})
})

module.exports = app
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('this app run properly')
})

app.get('/call/:name', (req, res) => {
  res.json({ message: `hello ${req.params.name}!` })
})

app.get('/cool', (req, res) => {
  res.send('Heyo!!')
})

module.exports = app
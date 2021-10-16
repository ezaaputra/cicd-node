const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('this app run properly')
})

app.get('/call/:name', (req, res) => {
  res.json({ message: `hello ${req.params.name}!` })
})

app.get('/cool', (req, res) => {
  res.send('Coolllll')
})

app.get('/hacktoberfest', (req, res) => {
  res.json({message: 'hacktoberfest!!!'})
})

module.exports = app
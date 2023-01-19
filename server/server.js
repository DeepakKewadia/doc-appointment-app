const express = require('express')
const colors = require('colors')

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
})

const app = express()

app.get('/', (req, res) => {
  res.send({ success: true })
})

app.listen(8080, () => {
  console.log(`Server is running`.debug)
})

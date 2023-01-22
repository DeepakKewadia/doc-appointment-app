const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')

dotenv.config()

//db connection
connectDB()

colors.setTheme({
  info: 'bgGreen',
  data: 'bgGrey',
  warn: 'bgYellow',
  debug: 'bgBlue',
  error: 'bgRed',
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// routes
app.use('/api/v1/user', require('./routes/userRoutes'))
// listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} at http://localhost:${PORT}`
      .info
  )
})

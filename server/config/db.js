const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
  mongoose.set('strictQuery', false)
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log(`DB Connection Successful`.info)
  } catch (error) {
    console.log(`Mongodb Server Issue : ${error}`.error)
  }
}

module.exports = connectDB

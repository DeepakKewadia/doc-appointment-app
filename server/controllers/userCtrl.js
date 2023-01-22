const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const registerCtrl = async (req, res) => {
  try {
    const existingUSer = await userModel.findOne({ email: req.body.email })
    if (existingUSer)
      return res
        .status(200)
        .send({ success: false, message: 'User already exists.' })

    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    req.body.password = hashedPassword
    const newUser = new userModel(req.body)
    await newUser.save()
    res.status(201).send({ success: true, message: 'Register Successful.' })
  } catch (error) {
    console.log(`Register Error : ${error.message}`.error)
    res
      .status(500)
      .send({ success: false, message: `Register Error : ${error.message}` })
  }
}

const loginCtrl = () => {}

module.exports = { loginCtrl, registerCtrl }

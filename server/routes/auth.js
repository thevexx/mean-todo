const router = require('express').Router();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
mongoose.connect('mongodb://localhost:27017/todoDb')
const userSchema = require('../models/user')
const userModel = mongoose.model('User', userSchema)


router.post('/login', async (req, res) => {
  const result = await userModel.findOne({ email: req.body.email }).exec()
  if (!result){ res.send({ message: 'user not found' })}
  if (! await bcrypt.compareSync(req.body.password, result.password)) res.send({ message: 'bad password' })
  res.send({ message: 'ok', token: jwt.sign({ data: result }, 'my_secret') })
})

router.post('/register', async (req, res) => {
  req.body.password = await bcrypt.hashSync(req.body.password)
  const result = await userModel.create(req.body)
  res.send(result)
})

module.exports = router

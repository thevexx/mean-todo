const router = require('express').Router();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todoDb')
const userSchema = require('../models/user')
const userModel = mongoose.model('User', userSchema);

router.get('/:userId', async (req, res) => {
  const result = await userModel.findOne({ _id: req.params.userId }).exec()
  res.send(result.todos);
})

router.post('/:userId', async (req, res) => {
  const result = await userModel.updateOne({ _id: req.params.userId }, { $addToSet: { todos: req.body } }).exec()
  res.send(result);
})

router.put('/:userId/:todoIndex', async (req, res) => {
  const result = await userModel.updateOne({ _id: req.params.userId }, { $set: { ['todos.'+ req.params.todoIndex]: req.body } }).exec()
  res.send(result)
})

module.exports = router

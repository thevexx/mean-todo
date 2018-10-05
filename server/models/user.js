const mongoose = require('mongoose')

const user = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  lastname: String,
  todos: [{
    content: String, date: { type: Date, default: Date.now() },
    done: { type: Boolean, default: false }
  }]

})


module.exports = user

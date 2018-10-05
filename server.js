const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const auth = require('./server/routes/auth')
app.use('/auth', auth)

const todo = require('./server/routes/todo')
app.use('/todo', todo)

app.listen(3000)

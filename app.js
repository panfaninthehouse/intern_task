const express = require("express")
const app = express()

// loading configs 
const config = require("./configs/index")

// loading routing level middleware
const taskRouter = require('./controllers/task.controller')

// loading third pary middleware(logger)
const morgan = require('morgan')
morgan('dev')

// using routing level middleware
app.use('/task', taskRouter)

app.listen(config.PORT, "localhost", function(err, done) {
  if(err) {
    console.log("err listening >>>", err);
  }else {
    console.log("listening at port >>>", config.PORT)
  }
})
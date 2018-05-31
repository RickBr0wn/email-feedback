const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

const app = express()
const daysCookieIsAlive = 30*24*60*60*1000 // 30 days in milliseconds

mongoose.connect(keys.mongoURI)

app.use(
  cookieSession({
    maxAge: daysCookieIsAlive,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())

app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
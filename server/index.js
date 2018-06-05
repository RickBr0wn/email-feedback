const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
require('./models/User')
require('./services/passport')

const app = express()
const daysCookieIsAlive = 30*24*60*60*1000 // 30 days in milliseconds

mongoose.connect(keys.mongoURI)

app.use(bodyParser.json())

// Middleware
app.use(
  cookieSession({
    maxAge: daysCookieIsAlive,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())

app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

if(process.env.NODE_ENV === 'production'){
  // Express serves production assets (eg: main.js or main.css)
  app.use(express.static('client/build'))

  // Express serves index.html if it dos NOT recognise the route
  const path = require('path')
  app.get('*', (res, req) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)